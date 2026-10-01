-- MIGRATION DÉJÀ APPLIQUÉE sur le projet « creche-connect ».
-- Ce fichier sert d'historique / de sauvegarde dans GitHub.
-- Ne pas la rejouer sur le même projet (elle échouerait : objets déjà existants).

-- 1. Annuaire : colonnes de rattachement sur organizations (= crèche)
alter table public.organizations
  add column if not exists siret text,
  add column if not exists address text,
  add column if not exists postal_code text,
  add column if not exists city text,
  add column if not exists is_verified boolean not null default false;

alter table public.organizations
  add constraint organizations_siret_format check (siret is null or siret ~ '^[0-9]{14}$');

create unique index if not exists organizations_siret_key
  on public.organizations (siret) where siret is not null;

-- 2. Groupes du personnel (groupe = children.section)
create table public.staff_sections (
  staff_id uuid not null references public.profiles(id) on delete cascade,
  section text not null check (section in ('bebes','moyens','grands')),
  primary key (staff_id, section)
);
alter table public.staff_sections enable row level security;
revoke all on public.staff_sections from anon;

alter table public.invitations
  add column if not exists section text check (section in ('bebes','moyens','grands'));

-- 3. Fonctions utilitaires (security definer => pas de récursion RLS)
create or replace function public.my_sections()
returns text[] language sql stable security definer set search_path = public as $$
  select coalesce(array_agg(section), '{}'::text[])
  from public.staff_sections where staff_id = auth.uid()
$$;

create or replace function public.shares_section_with(p_staff uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1
    from public.staff_sections a
    join public.staff_sections b on b.section = a.section
    where a.staff_id = auth.uid() and b.staff_id = p_staff
  )
$$;

create or replace function public.staff_in_my_org(p_staff uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.profiles
    where id = p_staff and role = 'staff' and organization_id = public.current_org_id()
  )
$$;

create or replace function public.is_creche_claimed(p_siret text)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.organizations where siret = p_siret)
$$;

revoke execute on function public.my_sections(), public.shares_section_with(uuid), public.staff_in_my_org(uuid) from public, anon;
grant execute on function public.my_sections(), public.shares_section_with(uuid), public.staff_in_my_org(uuid) to authenticated;
grant execute on function public.is_creche_claimed(text) to anon, authenticated;

-- 4. Politiques staff_sections
create policy "staff_sections: voir les siennes ou (direction) celles de l'équipe"
  on public.staff_sections for select
  using (staff_id = auth.uid()
         or (public."current_role"() = 'director' and public.staff_in_my_org(staff_id)));

create policy "staff_sections: la direction affecte un groupe"
  on public.staff_sections for insert
  with check (public."current_role"() = 'director' and public.staff_in_my_org(staff_id));

create policy "staff_sections: la direction retire un groupe"
  on public.staff_sections for delete
  using (public."current_role"() = 'director' and public.staff_in_my_org(staff_id));

-- 5. Refonte des politiques children / team_calendar
do $$
declare r record;
begin
  for r in select policyname, tablename from pg_policies
           where schemaname = 'public' and tablename in ('children','team_calendar')
  loop
    execute format('drop policy %I on public.%I', r.policyname, r.tablename);
  end loop;
end $$;

create policy "children: lecture selon le rôle" on public.children for select
  using (
    (organization_id = public.current_org_id() and (
        public."current_role"() = 'director'
        or (public."current_role"() = 'staff' and section = any (public.my_sections()))
    ))
    or (public."current_role"() = 'parent' and parent_id = auth.uid())
  );

create policy "children: inscription (direction, ou personnel dans ses groupes)" on public.children for insert
  with check (
    organization_id = public.current_org_id() and (
        public."current_role"() = 'director'
        or (public."current_role"() = 'staff' and section = any (public.my_sections()))
    )
  );

create policy "children: modification (direction, ou personnel dans ses groupes)" on public.children for update
  using (
    organization_id = public.current_org_id() and (
        public."current_role"() = 'director'
        or (public."current_role"() = 'staff' and section = any (public.my_sections()))
    )
  )
  with check (
    organization_id = public.current_org_id() and (
        public."current_role"() = 'director'
        or (public."current_role"() = 'staff' and section = any (public.my_sections()))
    )
  );

create policy "children: suppression (direction, ou personnel dans ses groupes)" on public.children for delete
  using (
    organization_id = public.current_org_id() and (
        public."current_role"() = 'director'
        or (public."current_role"() = 'staff' and section = any (public.my_sections()))
    )
  );

create policy "team_calendar: lecture selon le rôle" on public.team_calendar for select
  using (
    organization_id = public.current_org_id() and (
        public."current_role"() = 'director'
        or (public."current_role"() = 'staff'
            and (staff_id = auth.uid() or public.shares_section_with(staff_id)))
    )
  );

create policy "team_calendar: la direction crée un créneau" on public.team_calendar for insert
  with check (public."current_role"() = 'director' and organization_id = public.current_org_id()
              and public.staff_in_my_org(staff_id));

create policy "team_calendar: la direction modifie un créneau" on public.team_calendar for update
  using (public."current_role"() = 'director' and organization_id = public.current_org_id())
  with check (public."current_role"() = 'director' and organization_id = public.current_org_id()
              and public.staff_in_my_org(staff_id));

create policy "team_calendar: la direction supprime un créneau" on public.team_calendar for delete
  using (public."current_role"() = 'director' and organization_id = public.current_org_id());

-- 6. Inscription : annuaire + secours manuel + affectation de groupe
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $function$
declare
  v_signup_type text;
  v_org_id uuid;
  v_full_name text;
  v_token text;
  v_siret text;
  v_invitation public.invitations%rowtype;
begin
  v_signup_type := new.raw_user_meta_data ->> 'signup_type';
  v_full_name := left(coalesce(new.raw_user_meta_data ->> 'full_name', ''), 200);

  if v_signup_type = 'director' then
    v_siret := nullif(trim(new.raw_user_meta_data ->> 'org_siret'), '');

    if v_siret is not null then
      if v_siret !~ '^[0-9]{14}$' then
        raise exception 'SIRET invalide.';
      end if;
      if exists (select 1 from public.organizations where siret = v_siret) then
        raise exception 'Cette crèche est déjà inscrite. Demandez une invitation à sa direction.';
      end if;
    end if;

    insert into public.organizations (name, siret, address, postal_code, city, is_verified)
    values (
      left(coalesce(nullif(trim(new.raw_user_meta_data ->> 'org_name'), ''), 'Nouvelle crèche'), 200),
      v_siret,
      left(new.raw_user_meta_data ->> 'org_address', 300),
      left(new.raw_user_meta_data ->> 'org_postal_code', 10),
      left(new.raw_user_meta_data ->> 'org_city', 100),
      false
    )
    returning id into v_org_id;

    insert into public.profiles (id, organization_id, role, full_name, email)
    values (new.id, v_org_id, 'director', v_full_name, new.email);

  elsif v_signup_type = 'invited' then
    v_token := new.raw_user_meta_data ->> 'invitation_token';

    select * into v_invitation
    from public.invitations
    where token = v_token and used_at is null and expires_at > now();

    if not found then
      raise exception 'Invitation invalide, expirée ou déjà utilisée.';
    end if;

    insert into public.profiles (id, organization_id, role, full_name, email)
    values (new.id, v_invitation.organization_id, v_invitation.role, v_full_name, new.email);

    if v_invitation.role = 'parent' then
      update public.children set parent_id = new.id where id = v_invitation.child_id;
    elsif v_invitation.role = 'staff' and v_invitation.section is not null then
      insert into public.staff_sections (staff_id, section) values (new.id, v_invitation.section);
    end if;

    update public.invitations set used_at = now() where id = v_invitation.id;

  else
    raise exception 'signup_type manquant ou invalide (attendu: director | invited).';
  end if;

  return new;
end;
$function$;

// Actions réservées à la Direction (la RLS refuse tout appel venant d'un autre rôle).
import { supabase } from './supabase';

// Inviter un membre du personnel directement dans un groupe ('bebes' | 'moyens' | 'grands')
export const inviteStaff = (organizationId, email, section) =>
  supabase.from('invitations').insert({ organization_id: organizationId, email, role: 'staff', section });

// Affecter / retirer un groupe à un membre du personnel existant
export const addStaffSection = (staffId, section) =>
  supabase.from('staff_sections').insert({ staff_id: staffId, section });

export const removeStaffSection = (staffId, section) =>
  supabase.from('staff_sections').delete().eq('staff_id', staffId).eq('section', section);

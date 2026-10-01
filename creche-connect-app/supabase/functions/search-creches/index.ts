// Autocomplétion des crèches de France (NAF 88.91A - Accueil de jeunes enfants)
// Source : API Recherche d'entreprises (base SIRENE, Etalab) - ouverte, sans clé.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS });
  if (req.method !== "POST") return json({ error: "Méthode non autorisée" }, 405);

  let q = "";
  try {
    const body = await req.json();
    q = String(body?.q ?? "").trim().slice(0, 100);
  } catch {
    return json({ error: "Requête invalide" }, 400);
  }
  if (q.length < 3) return json({ results: [] });

  const params = new URLSearchParams({
    q,
    activite_principale: "88.91A",
    etat_administratif: "A",
    per_page: "10",
    page: "1",
  });

  try {
    const res = await fetch(`https://recherche-entreprises.api.gouv.fr/search?${params}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) return json({ error: "Annuaire indisponible", results: [] }, 502);

    const data = await res.json();
    const results = (data.results ?? [])
      .map((r: any) => {
        const s = r.siege ?? {};
        return {
          siret: s.siret ?? null,
          name: r.nom_complet ?? null,
          address: s.adresse ?? null,
          postal_code: s.code_postal ?? null,
          city: s.libelle_commune ?? null,
          department: s.departement ?? null,
        };
      })
      .filter((r: any) => r.siret && r.name);

    return json({ results });
  } catch {
    return json({ error: "Annuaire indisponible", results: [] }, 502);
  }
});

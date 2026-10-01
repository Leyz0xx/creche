# CrècheConnect

React + Vite + Supabase. Connexion réelle, rôles Parent / Personnel / Directeur lus depuis la base,
inscription de la direction avec recherche de crèche (annuaire SIRENE, NAF 88.91A) et saisie manuelle de secours.

## Lancer en local
```bash
npm install
npm run dev
```
Crée d'abord ton fichier `.env` : copie `.env.example` en `.env`. Il n'est pas publié sur GitHub (voir `.gitignore`).

## Mettre en ligne (Vercel)
1. vercel.com > Add New > Project > importe ce dépôt GitHub.
2. Settings > Environment Variables : ajoute `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` (valeurs dans `.env.example`).
3. Deploy.
4. Supabase > Authentication > URL Configuration : mets l'URL Vercel dans « Site URL ».

## Structure
- `src/legacy/Dashboard.jsx` : ton interface existante (données encore fictives, étape 2).
- `src/components/AuthScreen.jsx`, `CrecheSearch.jsx` : connexion / inscription / recherche de crèche.
- `supabase/` : migration SQL et Edge Function déjà appliquées (historique).

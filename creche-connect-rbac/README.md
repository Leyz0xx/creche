# creche-connect — RBAC + annuaire des crèches

Contenu prêt à ajouter à ton projet (React + Supabase).

## Contenu
| Fichier | Rôle |
|---|---|
| `supabase/migrations/…sql` | Migration **déjà appliquée** sur ta base (historique, ne pas rejouer) |
| `supabase/functions/search-creches/index.ts` | Edge Function **déjà déployée** (recherche des crèches via l'API SIRENE) |
| `src/components/CrecheSearch.jsx` | Champ d'autocomplétion + cas « ma crèche n'apparaît pas » |
| `src/components/RoleRoute.jsx` | Garde de routes par rôle |
| `src/hooks/useAuth.jsx`, `src/lib/supabase.js` | À ignorer si tu as déjà l'équivalent |
| `src/pages/SignupDirector.example.jsx` | Exemple d'inscription à recopier dans ta page |
| `src/lib/teamActions.js` | Inviter du personnel / affecter les groupes |

## Intégration
1. Copie les dossiers `src/…` dans le `src` de ton projet (ne remplace pas tes fichiers existants sans comparer).
2. Installe les dépendances si besoin : `npm install @supabase/supabase-js react-router-dom`
3. Copie `.env.example` en `.env` et colle ta clé *anon public* (Supabase > Project Settings > API).
4. Enveloppe ton app dans `<AuthProvider>` et tes routes sensibles dans `<RoleRoute allow={['director']}>`.

## Mettre le projet sur GitHub
1. Crée un dépôt vide sur github.com (bouton « New repository », sans README).
2. Dans le dossier de ton projet :
```bash
git init
git add .
git commit -m "Ajout RBAC et annuaire des crèches"
git branch -M main
git remote add origin https://github.com/TON-COMPTE/TON-DEPOT.git
git push -u origin main
```
Le fichier `.env` est ignoré par `.gitignore` : ne le publie jamais.

## Règles d'accès
- **Parent** : uniquement son enfant et sa crèche.
- **Personnel** : enfants de ses groupes ; planning en lecture seule (le sien + collègues de ses groupes).
- **Directeur** : toute la crèche, planning, équipe, invitations.
- Parents et personnel rejoignent par **invitation** ; la direction choisit sa crèche dans l'annuaire à l'inscription.

// Client Supabase. Ignore ce fichier si tu en as déjà un dans ton projet.
// (Vite : variables VITE_*. Si tu es sur Next.js, utilise NEXT_PUBLIC_* à la place.)
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

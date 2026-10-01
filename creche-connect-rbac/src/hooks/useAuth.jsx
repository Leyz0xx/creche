// Fournit la session ET le profil (role + organization_id) à toute l'app.
// Ignore ce fichier si tu as déjà un hook équivalent : il doit juste exposer
// { session, profile, loading } avec profile.role ∈ 'director' | 'staff' | 'parent'.
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (!data.session) setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      if (!s) { setProfile(null); setLoading(false); }
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) return;
    setLoading(true);
    supabase
      .from('profiles')
      .select('id, role, organization_id, full_name')
      .eq('id', session.user.id)
      .single()
      .then(({ data }) => { setProfile(data); setLoading(false); });
  }, [session?.user?.id]);

  return (
    <AuthContext.Provider value={{ session, profile, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

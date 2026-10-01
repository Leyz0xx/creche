import { useAuth } from './hooks/useAuth';
import AuthScreen from './components/AuthScreen';
import Dashboard from './legacy/Dashboard';

export default function App() {
  const { session, profile, loading, signOut } = useAuth();

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center text-slate-500">Chargement…</div>;
  }
  if (!session) return <AuthScreen />;
  if (!profile) {
    return (
      <div className="p-8 text-center text-slate-600">
        Profil introuvable.{' '}
        <button onClick={signOut} className="underline">Se déconnecter</button>
      </div>
    );
  }

  const [firstName = '', ...rest] = (profile.full_name || profile.email || '').split(' ');
  const org = profile.organizations || {};
  const authUser = {
    // Le rôle vient de la base (profiles.role) : director et staff partagent l'espace Direction / Équipe.
    role: profile.role === 'parent' ? 'parent' : 'staff',
    currentUser: { firstName, lastName: rest.join(' ') },
    creche: { id: profile.organization_id, name: org.name || 'Ma crèche', city: org.city || '', address: org.address || '' },
  };
  return <Dashboard key={profile.id} authUser={authUser} onSignOut={signOut} />;
}

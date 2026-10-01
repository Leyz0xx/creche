// Garde de routes. Ergonomie uniquement : la vraie sécurité est dans la RLS Supabase.
// Usage : <Route path="/equipe" element={<RoleRoute allow={['director']}><Team/></RoleRoute>} />
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function RoleRoute({ allow, children }) {
  const { session, profile, loading } = useAuth();
  if (loading) return null;
  if (!session) return <Navigate to="/login" replace />;
  if (!profile || !allow.includes(profile.role)) return <Navigate to="/" replace />;
  return children;
}

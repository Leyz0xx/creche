// EXEMPLE d'inscription Direction. Reprends les parties utiles dans TA page d'inscription.
import { useState } from 'react';
import { supabase } from '../lib/supabase';
import CrecheSearch from '../components/CrecheSearch';

export default function SignupDirector() {
  const [creche, setCreche] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!creche) return setError('Choisissez votre crèche.');

    if (creche.siret) {
      const { data: claimed } = await supabase.rpc('is_creche_claimed', { p_siret: creche.siret });
      if (claimed) return setError("Cette crèche est déjà inscrite. Demandez une invitation à sa direction.");
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          signup_type: 'director',
          full_name: fullName,
          org_name: creche.name,
          org_siret: creche.siret ?? '',          // vide => crèche saisie manuellement
          org_address: creche.address ?? '',
          org_postal_code: creche.postal_code ?? '',
          org_city: creche.city ?? '',
        },
      },
    });
    if (error) setError(error.message);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Votre nom" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />

      {creche
        ? <p>Crèche : <strong>{creche.name}</strong> <button type="button" onClick={() => setCreche(null)}>Changer</button></p>
        : <CrecheSearch onSelect={setCreche} />}

      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Créer mon compte</button>
    </form>
  );
}

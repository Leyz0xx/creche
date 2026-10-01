import { useState } from 'react';
import { supabase } from '../lib/supabase';
import CrecheSearch from './CrecheSearch';

const input = 'w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm';
const btn = 'w-full rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-medium text-white disabled:opacity-50';

export default function AuthScreen() {
  const inviteFromUrl = new URLSearchParams(window.location.search).get('invite') || '';
  const [mode, setMode] = useState(inviteFromUrl ? 'invited' : 'login'); // login | director | invited
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(inviteFromUrl);
  const [creche, setCreche] = useState(null);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setError(''); setInfo(''); setBusy(true);
    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw new Error('E-mail ou mot de passe incorrect.');
        return;
      }
      if (!fullName.trim()) throw new Error('Merci de renseigner votre nom.');
      if (password.length < 8) throw new Error('Mot de passe : 8 caractères minimum.');

      let data;
      if (mode === 'director') {
        if (!creche) throw new Error('Merci de sélectionner votre crèche.');
        if (creche.siret) {
          const { data: claimed } = await supabase.rpc('is_creche_claimed', { p_siret: creche.siret });
          if (claimed) throw new Error('Cette crèche est déjà inscrite. Demandez une invitation à sa direction.');
        }
        data = {
          signup_type: 'director', full_name: fullName,
          org_name: creche.name, org_siret: creche.siret ?? '',
          org_address: creche.address ?? '', org_postal_code: creche.postal_code ?? '', org_city: creche.city ?? '',
        };
      } else {
        if (!token.trim()) throw new Error("Merci de saisir votre code d'invitation.");
        data = { signup_type: 'invited', full_name: fullName, invitation_token: token.trim() };
      }

      const { data: res, error } = await supabase.auth.signUp({ email, password, options: { data } });
      if (error) {
        throw new Error(error.message.includes('Database error')
          ? 'Inscription impossible : invitation invalide/expirée ou crèche déjà inscrite.'
          : error.message);
      }
      if (!res.session) setInfo('Compte créé. Vérifiez votre boîte mail pour confirmer votre adresse, puis connectez-vous.');
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  const title = { login: 'Connexion', director: 'Inscription Direction', invited: 'Inscription sur invitation' }[mode];

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4 py-10">
      <div className="w-full max-w-lg">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-slate-900">CrècheConnect</h1>
          <p className="mt-1 text-sm text-slate-500">{title}</p>
        </div>

        <form onSubmit={submit} className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          {mode !== 'login' && (
            <input className={input} placeholder="Prénom et nom" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          )}
          <input className={input} type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className={input} type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />

          {mode === 'director' && (
            <div>
              <p className="mb-2 text-sm font-medium text-slate-900">Votre crèche</p>
              {creche ? (
                <div className="flex items-center justify-between rounded-lg border border-blue-200 bg-blue-50 px-3 py-2">
                  <span className="text-sm font-medium text-blue-800">{creche.name}</span>
                  <button type="button" onClick={() => setCreche(null)} className="text-xs underline">Changer</button>
                </div>
              ) : <CrecheSearch onSelect={setCreche} />}
            </div>
          )}

          {mode === 'invited' && (
            <input className={input} placeholder="Code d'invitation" value={token} onChange={(e) => setToken(e.target.value)} />
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}
          {info && <p className="text-sm text-green-700">{info}</p>}

          <button type="submit" disabled={busy} className={btn}>
            {busy ? '…' : mode === 'login' ? 'Se connecter' : 'Créer mon compte'}
          </button>
        </form>

        <div className="mt-4 flex flex-col items-center gap-1 text-sm text-slate-600">
          {mode !== 'login' && <button onClick={() => setMode('login')} className="underline">J'ai déjà un compte</button>}
          {mode !== 'invited' && <button onClick={() => setMode('invited')} className="underline">J'ai un code d'invitation (parent / équipe)</button>}
          {mode !== 'director' && <button onClick={() => setMode('director')} className="underline">Je suis directeur·rice : inscrire ma crèche</button>}
        </div>
      </div>
    </div>
  );
}

// Recherche / autocomplétion des crèches de France + cas de secours manuel.
// onSelect reçoit { siret, name, address, postal_code, city } (siret = null si saisie manuelle).
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function CrecheSearch({ onSelect }) {
  const [q, setQ] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [manual, setManual] = useState(false);
  const [form, setForm] = useState({ name: '', address: '', postal_code: '', city: '' });

  useEffect(() => {
    if (q.trim().length < 3) { setResults([]); return; }
    const t = setTimeout(async () => {
      setLoading(true);
      const { data } = await supabase.functions.invoke('search-creches', { body: { q } });
      setResults(data?.results ?? []);
      setLoading(false);
    }, 350); // anti-rebond
    return () => clearTimeout(t);
  }, [q]);

  if (manual) {
    const labels = { name: 'Nom de la crèche', address: 'Adresse', postal_code: 'Code postal', city: 'Commune' };
    return (
      <div>
        {Object.keys(labels).map((k) => (
          <input key={k} placeholder={labels[k]} value={form[k]}
                 onChange={(e) => setForm({ ...form, [k]: e.target.value })} />
        ))}
        <button type="button" disabled={!form.name.trim()}
                onClick={() => onSelect({ ...form, siret: null })}>
          Valider ma crèche
        </button>
        <button type="button" onClick={() => setManual(false)}>Retour à la recherche</button>
      </div>
    );
  }

  return (
    <div>
      <input value={q} onChange={(e) => setQ(e.target.value)}
             placeholder="Nom de la crèche ou ville (3 lettres minimum)" />
      {loading && <p>Recherche…</p>}
      <ul>
        {results.map((r) => (
          <li key={r.siret} style={{ cursor: 'pointer' }} onClick={() => onSelect(r)}>
            {r.name}, {r.postal_code} {r.city}
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => setManual(true)}>Ma crèche n'apparaît pas</button>
    </div>
  );
}

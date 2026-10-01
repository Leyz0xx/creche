import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const input = 'w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm';

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
    }, 350);
    return () => clearTimeout(t);
  }, [q]);

  if (manual) {
    const labels = { name: 'Nom de la crèche', address: 'Adresse', postal_code: 'Code postal', city: 'Commune' };
    return (
      <div className="space-y-2">
        {Object.keys(labels).map((k) => (
          <input key={k} className={input} placeholder={labels[k]} value={form[k]}
                 onChange={(e) => setForm({ ...form, [k]: e.target.value })} />
        ))}
        <button type="button" disabled={!form.name.trim()}
                onClick={() => onSelect({ ...form, siret: null })}
                className="w-full rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-medium text-white disabled:opacity-50">
          Valider ma crèche
        </button>
        <button type="button" onClick={() => setManual(false)} className="w-full text-sm text-slate-500 underline">
          Retour à la recherche
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <input className={input} value={q} onChange={(e) => setQ(e.target.value)}
             placeholder="Nom de la crèche ou ville (3 lettres minimum)" />
      {loading && <p className="text-xs text-slate-500">Recherche…</p>}
      <ul className="space-y-1">
        {results.map((r) => (
          <li key={r.siret}>
            <button type="button" onClick={() => onSelect(r)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-left hover:bg-slate-50">
              <p className="text-sm font-medium text-slate-900">{r.name}</p>
              <p className="text-xs text-slate-500">{r.postal_code} {r.city}</p>
            </button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => setManual(true)} className="text-sm text-blue-700 underline">
        Ma crèche n'apparaît pas
      </button>
    </div>
  );
}

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

export default function Leaderboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/leaderboard');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!cancelled) setPlayers(data.items || []);
      } catch (e) {
        if (!cancelled) setError('Failed to load leaderboard');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
              Leaderboard
            </h1>
            <p className="mt-3 text-gray-300">Top players climbing the ranks</p>
          </header>

          <section className="bg-gray-900/60 rounded-2xl border border-gray-800/50 overflow-hidden">
            <div className="grid grid-cols-12 px-4 py-3 text-xs uppercase tracking-wider text-gray-400 bg-black/40">
              <div className="col-span-2">Rank</div>
              <div className="col-span-6">Player</div>
              <div className="col-span-4 text-right">Score</div>
            </div>
            <div className="divide-y divide-gray-800/60">
              {loading && (
                <div className="px-4 py-6 text-center text-gray-400">Loading leaderboard…</div>
              )}
              {error && !loading && (
                <div className="px-4 py-6 text-center text-red-400">{error}</div>
              )}
              {!loading && !error && players.length === 0 && (
                <div className="px-4 py-6 text-center text-gray-400">No players to show.</div>
              )}
              {!loading && !error && players.map((p) => (
                <div key={p.rank} className="grid grid-cols-12 items-center px-4 py-4 hover:bg-gray-800/40 transition-colors">
                  <div className="col-span-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 border border-gray-700 font-bold">
                      #{p.rank}
                    </span>
                  </div>
                  <div className="col-span-6 flex items-center gap-3">
                    {/* Placeholder avatar circle */}
                    <div className="w-10 h-10 rounded-full border border-gray-700 bg-gradient-to-br from-gray-700 to-gray-800" />
                    <span className="font-semibold">{p.name}</span>
                  </div>
                  <div className="col-span-4 text-right font-bold">{p.score.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

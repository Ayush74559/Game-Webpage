import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Tournaments() {
  const tournaments = [
    { id: 1, name: 'Autumn Clash', date: 'Sep 21, 2025', prize: '$5,000', entrants: 128, img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80' },
    { id: 2, name: 'Neon Arena', date: 'Oct 05, 2025', prize: '$3,000', entrants: 64, img: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80' },
    { id: 3, name: 'Speed Cup', date: 'Nov 12, 2025', prize: '$7,500', entrants: 256, img: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80' },
    { id: 4, name: 'Cyber Siege Invitational', date: 'Dec 01, 2025', prize: '$10,000', entrants: 200, img: 'https://images.unsplash.com/photo-1605902711622-cfb43c44367e?auto=format&fit=crop&w=1200&q=80' },
    { id: 5, name: 'Arena Royale Cup', date: 'Jan 15, 2026', prize: '$12,000', entrants: 512, img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071428] via-[#071327] to-black text-white">
      <Navbar />

      {/* Hero */}
      <header className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Tournaments</h1>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">Find upcoming and live tournaments — register, join, and track standings. Filter by game, format, and prize pool.</p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="relative w-full sm:w-1/3">
              <input type="search" placeholder="Search tournaments" className="w-full rounded-full bg-gray-900/60 border border-white/6 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div className="flex gap-2">
              <select className="rounded-full bg-gray-900/60 border border-white/6 px-4 py-3 text-sm">
                <option>All games</option>
                <option>Action RPG</option>
                <option>FPS</option>
                <option>Racing</option>
              </select>
              <select className="rounded-full bg-gray-900/60 border border-white/6 px-4 py-3 text-sm">
                <option>All formats</option>
                <option>Solo</option>
                <option>Duo</option>
                <option>Squad</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* List */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tournaments.map((t) => (
                <article key={t.id} className="group bg-gradient-to-br from-gray-900/60 to-gray-800/20 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-2">
                  <div className="relative h-44 w-full overflow-hidden">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute left-4 top-4 bg-indigo-600/80 text-xs text-white px-2 py-1 rounded-full">{t.date}</div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{t.name}</h3>
                        <p className="text-sm text-gray-400 mt-1">Prize: <span className="text-white font-bold">{t.prize}</span></p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-indigo-300">Entrants</div>
                        <div className="text-xl font-bold">{t.entrants}</div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <Link to="#" className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-sm shadow-md">Register</Link>
                      <Link to="#" className="text-sm text-indigo-300 hover:underline">Details</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination (UI only) */}
            <div className="mt-8 flex items-center justify-center">
              <nav className="inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <a href="#" className="px-3 py-2 rounded-l-md bg-gray-800/60 border border-white/6 text-sm">Prev</a>
                <a href="#" className="px-3 py-2 bg-gray-800/60 border-t border-b border-white/6 text-sm">1</a>
                <a href="#" className="px-3 py-2 bg-gray-800/60 border-t border-b border-white/6 text-sm">2</a>
                <a href="#" className="px-3 py-2 rounded-r-md bg-gray-800/60 border border-white/6 text-sm">Next</a>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="bg-gray-900/60 rounded-2xl p-4 shadow-lg">
              <h4 className="text-sm text-indigo-300 font-semibold">Featured</h4>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-md" />
                  <div>
                    <div className="font-semibold">Autumn Clash</div>
                    <div className="text-xs text-gray-400">Sep 21 · Prize $5k</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-md" />
                  <div>
                    <div className="font-semibold">Speed Cup</div>
                    <div className="text-xs text-gray-400">Nov 12 · Prize $7.5k</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gray-900/60 rounded-2xl p-4 shadow-lg">
              <h4 className="text-sm text-indigo-300 font-semibold">Rules & Info</h4>
              <p className="text-sm text-gray-400 mt-2">Check the tournament format, schedule, and rules before registering. Ensure you meet the eligibility criteria.</p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

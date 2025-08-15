import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Community() {
  const posts = [
    { id: 1, user: 'CyberNinja', avatar: 'https://i.pravatar.cc/100?img=15', time: '2h', text: 'Just hit top 100! Anyone up for a scrim?' },
    { id: 2, user: 'QuantumGamer', avatar: 'https://i.pravatar.cc/100?img=12', time: '5h', text: 'Tips for improving aim on mobile? Share your setups!' },
    { id: 3, user: 'NeonStrike', avatar: 'https://i.pravatar.cc/100?img=20', time: '1d', text: 'GGs last night! That final round was wild.' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <header className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Community
            </h1>
            <p className="mt-3 text-gray-300">Discuss, share tips, and find teammates</p>
          </header>

          <section className="space-y-4">
            {posts.map((p) => (
              <article key={p.id} className="bg-gray-900/60 border border-gray-800/50 rounded-2xl p-4">
                <div className="flex gap-3">
                  <img src={p.avatar} alt={p.user} className="w-12 h-12 rounded-full border border-gray-700" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">{p.user}</div>
                      <div className="text-xs text-gray-400">{p.time}</div>
                    </div>
                    <p className="mt-1 text-gray-200">{p.text}</p>

                    <div className="mt-3 flex items-center gap-3 text-sm text-gray-400">
                      <button className="hover:text-white">Like</button>
                      <button className="hover:text-white">Comment</button>
                      <button className="hover:text-white">Share</button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

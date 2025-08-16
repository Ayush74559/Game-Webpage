import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ProfileLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            {title}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1 space-y-3">
              <a href="/profile" className="block px-4 py-3 rounded-xl bg-gray-900/60 border border-gray-800/60 hover:bg-gray-800/60">Overview</a>
              <a href="/profile/edit" className="block px-4 py-3 rounded-xl bg-gray-900/60 border border-gray-800/60 hover:bg-gray-800/60">Edit Profile</a>
              <a href="/profile/security" className="block px-4 py-3 rounded-xl bg-gray-900/60 border border-gray-800/60 hover:bg-gray-800/60">Security</a>
            </aside>
            <section className="lg:col-span-3">
              {children}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

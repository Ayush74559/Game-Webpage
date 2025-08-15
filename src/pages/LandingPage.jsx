import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LandingPage() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
  <div className="min-h-screen bg-black text-white overflow-hidden relative pt-24">
  {/* Simplified background handled per-section */}

      <Navbar className="relative z-40" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Simple game-themed gradient with dotted pattern */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-10"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Hero content */}
          <div className="relative mb-10 flex flex-col items-center gap-6">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Code Battle Arena
            </h1>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-300">
              Fast matchmaking, adaptive ranks, strong anti-cheat, and smart highlights — built for speed and fairness.
            </p>

            {/* Feature badges removed for simpler look */}
          </div>

          {/* Enhanced subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Elevate your play with fast matchmaking, realtime coaching insights, and personalized tournaments.
            <span className="block mt-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">
              Smarter games. Faster wins. Zero cheats.
            </span>
          </p>

          {/* CTA buttons with enhanced design */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link 
              to="/signup" 
              className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Start Playing</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Glow overlays removed */}
            </Link>
            
            <Link 
              to="/tournaments" 
              className="group px-12 py-4 border-2 border-purple-500/50 rounded-full text-purple-300 font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 hover:border-purple-400 relative overflow-hidden"
            >
              <span className="flex items-center gap-2 relative z-10">
                Explore Tournaments
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Enhanced Stats section */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { label: 'Active Players', value: '2.5M+', color: 'from-purple-400 to-pink-400', icon: '👥' },
              { label: 'Tournaments', value: '1,200+', color: 'from-blue-400 to-cyan-400', icon: '🏆' },
              { label: 'Prize Pool', value: '$50M+', color: 'from-green-400 to-blue-400', icon: '💰' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group cursor-pointer relative">
                <div className="relative">
                  <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-2xl mb-2 opacity-80">{stat.icon}</div>
                  <div className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors font-semibold">
                    {stat.label}
                  </div>
                  
                  {/* Hover effect */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${stat.color} rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300`} />
                </div>
              </div>
            ))}
          </div>

          {/* Live status indicator */}
          <div className="mt-12 flex items-center justify-center gap-2 text-green-400 font-semibold">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm">2,847 players online now</span>
          </div>
        </div>

  {/* Scroll indicator removed */}
      </section>

  {/* Featured Games Section - Redesigned */}
  <section id="featured-games" className="relative py-24 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              FEATURED GAMES
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the most competitive and thrilling games in our ecosystem
            </p>
          </div>

          {/* Games grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Cyber Nexus',
                category: 'FPS',
                players: '1.2M',
                image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
                prize: '$15,000',
                gradient: 'from-red-500/80 to-orange-500/80'
              },
              {
                title: 'Quantum Realms',
                category: 'MOBA',
                players: '850K',
                image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80',
                prize: '$25,000',
                gradient: 'from-blue-500/80 to-purple-500/80'
              },
              {
                title: 'Speed Matrix',
                category: 'Racing',
                players: '600K',
                image: 'https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&w=800&q=80',
                prize: '$10,000',
                gradient: 'from-green-500/80 to-cyan-500/80'
              }
            ].map((game, index) => (
              <div
                key={game.title}
                className="group relative bg-gray-900/50 rounded-3xl overflow-hidden border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                {/* Game image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${game.gradient} to-transparent opacity-60`} />
                  
                  {/* Floating category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-sm font-semibold text-white">
                    {game.category}
                  </div>
                  
                  {/* Prize pool */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400/80 to-orange-400/80 backdrop-blur-sm rounded-full text-sm font-bold text-black">
                    {game.prize}
                  </div>
                </div>

                {/* Game info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {game.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">{game.players} players</span>
                    </div>
                    <div className="text-sm text-green-400 font-semibold">● LIVE</div>
                  </div>

                  {/* Action button */}
                  <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-[0.98] transition-all duration-200">
                    Play Now
                  </button>
                </div>

                {/* Hover glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Feature Showcase Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900/20 to-black/30">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              GAME FEATURES
            </h2>
            <p className="text-xl text-gray-400">Why millions choose Code Battle Arena</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Real-Time Matchmaking',
                description: 'Advanced AI algorithm matches you with players of similar skill level instantly.',
                icon: '⚡',
                color: 'from-yellow-400 to-orange-500',
                features: ['Sub-second matching', 'Skill-based ranking', 'Global player pool']
              },
              {
                title: 'Cross-Platform Play',
                description: 'Play with friends across PC, mobile, and console platforms seamlessly.',
                icon: '🎮',
                color: 'from-blue-400 to-cyan-500',
                features: ['Universal compatibility', 'Shared progression', 'Friend sync']
              },
              {
                title: 'Competitive Integrity',
                description: 'Advanced anti-cheat system ensures fair play for all competitors.',
                icon: '🛡️',
                color: 'from-green-400 to-emerald-500',
                features: ['AI-powered detection', 'Real-time monitoring', '24/7 support']
              },
              {
                title: 'Immersive Graphics',
                description: 'Cutting-edge visual technology delivers stunning gaming experiences.',
                icon: '✨',
                color: 'from-purple-400 to-pink-500',
                features: ['4K support', 'Ray tracing', 'HDR enabled']
              },
              {
                title: 'Global Tournaments',
                description: 'Compete in worldwide tournaments with massive prize pools.',
                icon: '🏆',
                color: 'from-amber-400 to-yellow-500',
                features: ['Weekly events', 'Season rewards', 'Pro circuits']
              },
              {
                title: 'Social Gaming',
                description: 'Connect with friends, join clans, and build lasting gaming relationships.',
                icon: '👥',
                color: 'from-rose-400 to-pink-500',
                features: ['Voice chat', 'Team formation', 'Community events']
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Feature icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <div className={`absolute -inset-2 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`} />
                </div>

                {/* Feature content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature list */}
                <div className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color}`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Hover background glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`} />
              </div>
            ))}
          </div>

          {/* Bottom CTA for features */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">Experience all features with a free account</p>
            <Link 
              to="/signup"
              className="group relative inline-flex items-center gap-2 rounded-full p-[2px] bg-[linear-gradient(90deg,theme(colors.purple.500),theme(colors.pink.500),theme(colors.blue.500))] bg-[length:200%_100%] bg-[position:0%_0%] transition-[background-position,transform] duration-700 hover:bg-[position:100%_0] hover:scale-105"
            >
              <span className="rounded-full px-8 py-4 bg-transparent text-white font-bold">Start Free Trial</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Tournaments Section - Enhanced */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900/20 to-black/40">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                TOURNAMENTS
              </h2>
              <p className="text-xl text-gray-400">Where champions are forged</p>
            </div>
            <Link 
              to="/tournaments" 
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 hover:bg-purple-600/30 transition-all duration-300"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Featured Tournament */}
            <div className="lg:col-span-2 relative group">
              <div className="relative bg-gradient-to-r from-gray-900/80 to-gray-800/60 rounded-3xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10" />
                
                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-sm font-bold text-white">
                          LIVE
                        </div>
                        <div className="text-gray-400">Championship Finals</div>
                      </div>
                      
                      <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                        WORLD CYBER CUP
                      </h3>
                      
                      <p className="text-xl text-gray-300 mb-6 max-w-2xl">
                        The ultimate showdown featuring top 16 teams competing for the largest prize pool in esports history.
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-6 mb-6">
                        <div className="text-center">
                          <div className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            $100K
                          </div>
                          <div className="text-sm text-gray-400">Prize Pool</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-black text-white">512</div>
                          <div className="text-sm text-gray-400">Teams</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-black text-white">2.1M</div>
                          <div className="text-sm text-gray-400">Viewers</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 hover:scale-105">
                        Watch Live
                      </button>
                      <button className="px-8 py-4 border border-gray-600 rounded-xl text-gray-300 hover:bg-gray-800/50 transition-all duration-200">
                        Join Queue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Tournaments */}
            {[
              { name: 'Neon Circuit', date: 'Oct 15, 2025', prize: '$25K', teams: 64, status: 'Open' },
              { name: 'Speed Circuit', date: 'Nov 02, 2025', prize: '$15K', teams: 32, status: 'Filling Fast' }
            ].map((tournament, index) => (
              <div key={tournament.name} className="group relative">
                <div className="bg-gray-900/60 rounded-2xl border border-gray-800/50 hover:border-purple-500/50 p-6 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {tournament.name}
                      </h4>
                      <p className="text-gray-400">{tournament.date}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      tournament.status === 'Open' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-orange-500/20 text-orange-400'
                    }`}>
                      {tournament.status}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-center">
                      <div className="text-xl font-bold text-yellow-400">{tournament.prize}</div>
                      <div className="text-sm text-gray-400">Prize</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">{tournament.teams}</div>
                      <div className="text-sm text-gray-400">Teams</div>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-xl text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Section - Redesigned */}
      <section className="relative py-24 bg-gradient-to-b from-black/40 to-gray-900/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
                LEADERBOARD
              </h2>
              <p className="text-xl text-gray-400">Elite players dominating the leaderboard</p>
            </div>
            <Link 
              to="/leaderboard" 
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-full text-yellow-300 hover:bg-yellow-600/30 transition-all duration-300"
            >
              Full Rankings
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Top 3 Players - Podium Style */}
            {[
              { 
                rank: 1, 
                name: 'CyberNinja', 
                score: 15420, 
                avatar: 'https://i.pravatar.cc/120?img=15',
                badge: '👑',
                winrate: 94,
                gradient: 'from-yellow-400 to-orange-500',
                bgGradient: 'from-yellow-500/20 to-orange-500/20',
                borderColor: 'border-yellow-500/50'
              },
              { 
                rank: 2, 
                name: 'QuantumGamer', 
                score: 14850, 
                avatar: 'https://i.pravatar.cc/120?img=12',
                badge: '🥈',
                winrate: 91,
                gradient: 'from-gray-300 to-gray-500',
                bgGradient: 'from-gray-400/20 to-gray-600/20',
                borderColor: 'border-gray-400/50'
              },
              { 
                rank: 3, 
                name: 'NeonStrike', 
                score: 13960, 
                avatar: 'https://i.pravatar.cc/120?img=20',
                badge: '🥉',
                winrate: 89,
                gradient: 'from-amber-600 to-yellow-700',
                bgGradient: 'from-amber-500/20 to-yellow-600/20',
                borderColor: 'border-amber-500/50'
              }
            ].map((player, index) => (
              <div 
                key={player.rank}
                className={`group relative ${index === 0 ? 'lg:order-2 lg:scale-110 lg:-translate-y-4' : index === 1 ? 'lg:order-1' : 'lg:order-3'}`}
              >
                <div className={`relative bg-gray-900/80 backdrop-blur-sm rounded-3xl border ${player.borderColor} p-8 transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden`}>
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${player.bgGradient} opacity-50`} />
                  
                  {/* Rank badge */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-black/80 rounded-full flex items-center justify-center text-2xl font-black text-white border-4 border-gray-800">
                    #{player.rank}
                  </div>
                  
                  <div className="relative text-center">
                    {/* Avatar with glow */}
                    <div className="relative mx-auto mb-6">
                      <div className={`absolute -inset-2 bg-gradient-to-r ${player.gradient} rounded-full blur opacity-60 group-hover:opacity-80 transition-opacity`} />
                      <img 
                        src={player.avatar} 
                        alt={player.name}
                        className="relative w-24 h-24 rounded-full border-4 border-white/20 mx-auto"
                      />
                      <div className="absolute -bottom-2 -right-2 text-3xl">{player.badge}</div>
                    </div>
                    
                    {/* Player name */}
                    <h3 className={`text-2xl font-black bg-gradient-to-r ${player.gradient} bg-clip-text text-transparent mb-2`}>
                      {player.name}
                    </h3>
                    
                    {/* Score */}
                    <div className="text-4xl font-black text-white mb-4">
                      {player.score.toLocaleString()}
                    </div>
                    
                    {/* Win rate */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-1">Win Rate</div>
                      <div className="bg-gray-800 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-3 bg-gradient-to-r ${player.gradient} transition-all duration-1000`}
                          style={{ width: `${player.winrate}%` }}
                        />
                      </div>
                      <div className="text-sm font-bold text-white mt-1">{player.winrate}%</div>
                    </div>
                    
                    {/* View profile button */}
                    <button className={`px-6 py-2 bg-gradient-to-r ${player.gradient} rounded-full text-black font-semibold text-sm hover:scale-105 transition-transform duration-200`}>
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional players list */}
          <div className="mt-16 bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden">
            <div className="p-6 border-b border-gray-800/50">
              <h3 className="text-xl font-bold text-white">More Champions</h3>
            </div>
            
            <div className="divide-y divide-gray-800/50">
              {[4, 5, 6, 7, 8].map((rank) => (
                <div key={rank} className="p-4 hover:bg-gray-800/30 transition-colors duration-200 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm font-bold text-white">
                      #{rank}
                    </div>
                    <img 
                      src={`https://i.pravatar.cc/40?img=${rank + 10}`}
                      alt={`Player ${rank}`}
                      className="w-10 h-10 rounded-full border-2 border-gray-600"
                    />
                    <div>
                      <div className="font-semibold text-white">Player{rank}</div>
                      <div className="text-sm text-gray-400">{(15000 - rank * 200).toLocaleString()} pts</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="text-sm text-green-400 font-semibold">
                      {Math.floor(95 - rank * 1.5)}% WR
                    </div>
                    <button className="px-4 py-2 border border-gray-600 rounded-lg text-gray-300 text-sm hover:bg-gray-700 transition-colors">
                      Challenge
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900/60 to-black">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          {/* Main CTA content */}
          <div className="mb-12">
            <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-8">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                READY TO
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                DOMINATE?
              </span>
            </h2>
            
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Join millions of players in the ultimate gaming experience. 
              <span className="block mt-2 text-lg text-gray-400">
                Create your account and start your journey to legendary status.
              </span>
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
            <Link 
              to="/signup" 
              className="group relative px-16 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full text-white font-black text-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 overflow-hidden min-w-[280px]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Create Account
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Glow overlay removed */}
            </Link>
            
            <Link 
              to="/login" 
              className="group px-16 py-6 border-2 border-purple-500/50 rounded-full text-purple-300 font-bold text-xl hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 hover:border-purple-400 min-w-[280px]"
            >
              <span className="flex items-center gap-3">
                Sign In
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Platform features highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: '⚡', label: 'Instant Matchmaking', color: 'text-yellow-400' },
              { icon: '🏆', label: 'Daily Tournaments', color: 'text-purple-400' },
              { icon: '🎮', label: 'Cross-Platform', color: 'text-blue-400' },
              { icon: '💎', label: 'Exclusive Rewards', color: 'text-pink-400' }
            ].map((feature, index) => (
              <div 
                key={feature.label}
                className="group text-center hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`text-4xl mb-3 group-hover:scale-125 transition-transform duration-300 ${feature.color}`}>
                  {feature.icon}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors font-semibold">
                  {feature.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Enhanced Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed right-8 bottom-8 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50 ${
          showTop ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        } group`}
        aria-label="Back to top"
      >
        <svg className="w-8 h-8 mx-auto group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
  {/* Glow overlay removed */}
      </button>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const calcProgress = () => {
      const top = window.scrollY || 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? Math.min(100, Math.round((top / h) * 100)) : 0;
      setProgress(pct);
      setScrolled(top > 50);
    };
    calcProgress();
    const onScroll = () => calcProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Trigger entrance animation
    const t = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(t);
  }, []);

  const navItems = [
    { name: 'Games', path: '/games', icon: '🎮' },
    { name: 'Tournaments', path: '/tournaments', icon: '🏆' },
    { name: 'Leaderboard', path: '/leaderboard', icon: '👑' },
    { name: 'Community', path: '/community', icon: '👥' }
  ];

  // Active when the path matches exactly or is a nested route (e.g., /tournaments/123)
  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + '/');

  // Close mobile menu on route change
  useEffect(() => {
    if (isOpen) setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = prev || '';
    }
    return () => {
      document.body.style.overflow = prev || '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed left-0 top-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 z-[60]"
        style={{ width: `${progress}%`, transition: 'width 150ms ease-out' }}
        aria-hidden="true"
      />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'mx-4 mt-4' : ''
        } ${className}`}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative group flex items-center justify-between transition-all duration-500 ${
              scrolled
                ? 'px-5 py-2 backdrop-blur-2xl bg-black/40 supports-[backdrop-filter]:bg-black/30 border border-white/10 rounded-2xl shadow-lg'
                : 'px-8 py-4 bg-transparent'
            } ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
          >
            {scrolled && (
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02]">
                <div className={`${scrolled ? 'w-10 h-10' : 'w-14 h-14'} rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center transition-all` }>
                  <svg className={`${scrolled ? 'h-6 w-6' : 'h-8 w-8'} text-white`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z" />
                  </svg>
                </div>
                <div className="flex flex-col leading-none">
                  {/* Full name on large screens */}
                  <span className={`hidden lg:inline font-semibold tracking-normal ${scrolled ? 'text-lg' : 'text-2xl'} transition-all`}>Code Battle Arena</span>
                  {/* Abbreviated brand on small/medium screens */}
                  <span className={`lg:hidden font-semibold tracking-normal ${scrolled ? 'text-lg' : 'text-2xl'} transition-all`}>CBA</span>
                </div>
              </Link>
            </div>

    <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                  className={`group relative overflow-hidden rounded-xl font-semibold transform transition-all ${
                    scrolled ? 'px-4 py-1.5 text-sm' : 'px-6 py-2.5 text-lg'
                  } hover:-translate-y-0.5 ${
                    isActive(item.path)
                      ? 'text-white bg-white/10 border border-white/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  } ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
                  style={{ transitionDelay: mounted ? `${index * 40}ms` : undefined }}
                >
                  <span className={`mr-2 ${scrolled ? 'text-sm' : 'text-base'}`}>{item.icon}</span>
                  {item.name}
                  <span
                    className={`pointer-events-none absolute left-3 right-3 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-purple-400/80 via-pink-400/80 to-blue-400/80 bg-[length:200%_100%] transition-[transform] duration-300 ${
                      isActive(item.path) ? 'scale-x-100 animate-[gradient-x_1.2s_linear_infinite]' : 'group-hover:scale-x-100 group-hover:animate-[gradient-x_1.2s_linear_infinite]'
                    }`}
                  />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className={`hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold hover:opacity-95 ${scrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'}`}
              >
                Sign In
              </Link>
              <button
                onClick={() => setIsOpen((v) => !v)}
                className={`lg:hidden inline-flex items-center justify-center rounded-lg bg-white/5 text-gray-200 hover:bg-white/10 ${scrolled ? 'p-2' : 'p-2.5'}`}
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
                aria-controls="mobile-nav"
              >
                <svg className={`${scrolled ? 'w-5 h-5' : 'w-6 h-6'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden mt-3 transition-all duration-300 ${
            isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
          }`}
        >
          <div id="mobile-nav" className="mx-4 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl p-4">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                  className={`group relative overflow-hidden flex items-center gap-3 px-4 py-3 rounded-xl transform transition-all ${
                    isActive(item.path)
                      ? 'text-white bg-white/10 border border-white/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  } ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
                  style={{ transitionDelay: isOpen ? `${index * 40}ms` : undefined }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-semibold">{item.name}</span>
                  <span
                    className={`pointer-events-none absolute left-4 right-4 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-purple-400/80 via-pink-400/80 to-blue-400/80 bg-[length:200%_100%] transition-[transform] duration-300 ${
                      isActive(item.path) ? 'scale-x-100 animate-[gradient-x_1.2s_linear_infinite]' : 'group-hover:scale-x-100 group-hover:animate-[gradient-x_1.2s_linear_infinite]'
                    }`}
                  />
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

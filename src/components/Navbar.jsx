import { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Navbar ─────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-white shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Brand */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex items-center gap-2 group min-w-0"
            >
              <Scale
                size={22}
                className="flex-shrink-0 transition-transform group-hover:rotate-12"
                style={{ color: '#D4AF37' }}
              />
              {/* Full name on md+, initials on mobile */}
              <span
                className="hidden sm:block font-heading font-bold text-base sm:text-lg md:text-xl transition-colors truncate"
                style={{ color: scrolled || menuOpen ? '#1B2A4A' : '#ffffff' }}
              >
                Ahmad Endres Hussen
              </span>
              <span
                className="sm:hidden font-heading font-bold text-base transition-colors"
                style={{ color: scrolled || menuOpen ? '#1B2A4A' : '#ffffff' }}
              >
                AEH
              </span>
            </a>

            {/* Desktop links — hidden below md */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className={`relative font-body font-medium text-sm tracking-wide transition-colors pb-1 ${
                        scrolled
                          ? isActive ? 'text-[#1B2A4A]' : 'text-gray-600 hover:text-[#1B2A4A]'
                          : isActive ? 'text-white' : 'text-white/80 hover:text-white'
                      } ${isActive ? 'nav-active' : ''}`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* ── Hamburger button — always visible on mobile ── */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="md:hidden flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              style={{
                backgroundColor: scrolled || menuOpen ? '#1B2A4A' : '#D4AF37',
                color: '#ffffff',
              }}
            >
              {menuOpen
                ? <X size={22} strokeWidth={2.5} />
                : <Menu size={22} strokeWidth={2.5} />
              }
            </button>

          </div>
        </div>
      </nav>

      {/* ── Mobile off-canvas overlay + sidebar ─────────────── */}
      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 z-[9998] md:hidden transition-opacity duration-300"
        style={{
          backgroundColor: 'rgba(0,0,0,0.55)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
        aria-hidden="true"
      />

      {/* Sidebar panel */}
      <div
        className="fixed top-0 right-0 bottom-0 z-[9999] md:hidden w-72 max-w-[85vw] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out"
        style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(100%)' }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Sidebar header */}
        <div
          className="flex items-center justify-between px-6 py-4 flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, #1B2A4A, #2a3f6b)',
            borderBottom: '2px solid #D4AF37',
          }}
        >
          <div className="flex items-center gap-2">
            <Scale size={18} style={{ color: '#D4AF37' }} />
            <span className="font-heading font-bold text-white text-base">
              Menu
            </span>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff' }}
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl font-body font-medium text-base transition-all duration-200"
                    style={
                      isActive
                        ? { backgroundColor: '#1B2A4A', color: '#ffffff' }
                        : { color: '#374151' }
                    }
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = '#F3F4F6';
                        e.currentTarget.style.color = '#1B2A4A';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.color = '#374151';
                      }
                    }}
                  >
                    {/* Gold dot indicator */}
                    <span
                      className="flex-shrink-0 w-2 h-2 rounded-full transition-all"
                      style={{
                        backgroundColor: isActive ? '#D4AF37' : 'transparent',
                        border: isActive ? 'none' : '1.5px solid #D4AF37',
                      }}
                    />
                    {link.label}
                    {isActive && (
                      <span className="ml-auto text-xs font-normal opacity-60">
                        Active
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sidebar footer */}
        <div
          className="flex-shrink-0 px-6 py-4"
          style={{ borderTop: '1px solid #E5E7EB' }}
        >
          <div
            className="h-px w-full mb-3"
            style={{ background: 'linear-gradient(to right, #D4AF37, transparent)' }}
          />
          <p className="font-body text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} Ahmad Endres Hussen
          </p>
          <p className="font-body text-xs text-center mt-1" style={{ color: '#D4AF37' }}>
            Maritime Law Expert
          </p>
        </div>
      </div>
    </>
  );
}

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Scale } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Education', href: '#education' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const btnRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(ids[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const handler = (e) => { if (e.matches) closeMenu(); };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') closeMenu(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add('menu-open');
    } else {
      document.documentElement.classList.remove('menu-open');
    }
    return () => document.documentElement.classList.remove('menu-open');
  }, [menuOpen]);

  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 320);
  };

  const handleNavClick = (href) => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 320);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      setClosing(false);
      setMenuOpen(true);
    }
  };

  const navBg = (scrolled || menuOpen) ? '#1B2A4A' : 'transparent';
  const shadow = scrolled ? '0 2px 12px rgba(0,0,0,0.18)' : 'none';

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0"
        style={{
          zIndex: 9999,
          backgroundColor: navBg,
          boxShadow: shadow,
          transition: 'background-color 0.3s, box-shadow 0.3s',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex items-center gap-2 min-w-0"
              style={{ textDecoration: 'none', flexShrink: 1 }}
            >
              <Scale size={22} className="flex-shrink-0" style={{ color: '#D4AF37' }} />
              <span
                className="font-heading font-bold truncate"
                style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', color: '#ffffff' }}
              >
                Ahmad Endres Hussen
              </span>
            </a>

            <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
              {NAV_LINKS.map(({ label, href }) => {
                const active = activeSection === href.slice(1);
                return (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                      className="font-body font-medium text-sm tracking-wide"
                      style={{
                        textDecoration: 'none',
                        color: active ? '#D4AF37' : 'rgba(255,255,255,0.80)',
                        borderBottom: active ? '2px solid #D4AF37' : '2px solid transparent',
                        paddingBottom: '2px',
                        transition: 'color 0.2s, border-color 0.2s',
                      }}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <button
              ref={btnRef}
              type="button"
              onClick={toggleMenu}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex lg:hidden flex-shrink-0 items-center justify-center rounded-lg"
              style={{
                width: '44px',
                height: '44px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: menuOpen ? 'rgba(255,255,255,0.15)' : '#D4AF37',
                color: '#ffffff',
                transition: 'background-color 0.2s',
              }}
            >
              {menuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          aria-modal="true"
          role="dialog"
          aria-label="Navigation"
          className="lg:hidden fixed inset-0 flex flex-col"
          style={{
            zIndex: 9998,
            backgroundColor: '#1B2A4A',
            transform: closing ? 'translateY(-100%)' : 'translateY(0)',
            transition: 'transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
            paddingTop: '64px',
          }}
        >
          <div style={{ height: '2px', backgroundColor: '#D4AF37', flexShrink: 0 }} />

          <div className="flex flex-col flex-1 items-center justify-center gap-2 px-6">
            {NAV_LINKS.map(({ label, href }, index) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  className="w-full max-w-sm flex items-center justify-between px-6 py-4 rounded-2xl font-body font-semibold text-xl"
                  style={{
                    textDecoration: 'none',
                    color: active ? '#1B2A4A' : 'rgba(255,255,255,0.90)',
                    backgroundColor: active ? '#D4AF37' : 'rgba(255,255,255,0.05)',
                    border: active ? 'none' : '1px solid rgba(255,255,255,0.08)',
                    transition: 'background-color 0.2s, color 0.2s, transform 0.15s',
                    animationDelay: `${index * 50}ms`,
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = 'rgba(212,175,55,0.12)';
                      e.currentTarget.style.color = '#D4AF37';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.color = 'rgba(255,255,255,0.90)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                >
                  <span>{label}</span>
                  {active && (
                    <span
                      className="rounded-full"
                      style={{ width: '8px', height: '8px', backgroundColor: '#1B2A4A', flexShrink: 0 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div
            className="flex items-center justify-center gap-2 py-5"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)', flexShrink: 0 }}
          >
            <Scale size={14} style={{ color: '#D4AF37' }} />
            <span className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Maritime Law Expert
            </span>
          </div>
        </div>
      )}
    </>
  );
}

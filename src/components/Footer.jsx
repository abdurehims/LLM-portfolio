import { ArrowUp, Scale } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative py-8 md:py-10"
      style={{ backgroundColor: '#1B2A4A' }}
    >
      {/* Gold accent line top */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <Scale size={18} style={{ color: '#D4AF37' }} />
            <span className="font-heading font-semibold text-white text-sm md:text-base">
              Ahmad Endres Hussen
            </span>
          </div>

          {/* Copyright */}
          <p className="font-body text-white/40 text-xs md:text-sm text-center">
            © {new Date().getFullYear()} Ahmad Endres Hussen. All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300
              hover:scale-110 hover:shadow-xl"
            style={{ backgroundColor: '#D4AF37' }}
            aria-label="Back to top"
          >
            <ArrowUp size={18} style={{ color: '#1B2A4A' }} />
          </button>
        </div>

        <div
          className="mt-6 pt-6 text-center"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="font-body text-white/25 text-xs">
            Maritime Law Expert · Lecturer · Legal Researcher · Debark University, Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
}

import { ArrowDown, CalendarCheck } from 'lucide-react';
import courtImg from '../assets/court.png';
import profileImg from '../assets/profile.png';

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(27,42,74,0.92) 0%, rgba(27,42,74,0.75) 60%, rgba(0,0,0,0.85) 100%),
          url('${courtImg}') center/cover no-repeat`,
      }}
    >
      {/* Decorative gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(to right, #D4AF37, transparent, #D4AF37)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left content */}
          <div className="flex-1 text-center md:text-left animate-fadeInUp">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-body font-semibold tracking-widest uppercase mb-6"
              style={{ backgroundColor: 'rgba(212,175,55,0.15)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.3)' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: '#D4AF37' }}
              />
              Available for Consultation
            </div>

            <h1 className="font-heading font-bold text-white leading-tight mb-4">
              <span className="block text-3xl sm:text-4xl md:text-5xl xl:text-6xl">Maritime Law &</span>
              <span
                className="block text-3xl sm:text-4xl md:text-5xl xl:text-6xl mt-1"
                style={{ color: '#D4AF37' }}
              >
                Policy Expert
              </span>
            </h1>

            <p className="font-body text-white/70 text-base sm:text-lg md:text-xl mb-2 tracking-wide">
              Ahmad Endres Hussen
            </p>

            <p className="font-body text-white/60 text-sm sm:text-base mb-8 leading-relaxed">
              Lecturer&nbsp;|&nbsp;Legal Researcher&nbsp;|&nbsp;Consultant&nbsp;|&nbsp;Content Creator
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={scrollToContact}
                className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-body font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#D4AF37', color: '#1B2A4A' }}
              >
                <CalendarCheck size={18} />
                Book a Consultation
              </button>

              <button
                onClick={scrollToAbout}
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-body font-semibold text-sm tracking-wide text-white transition-all duration-300 hover:scale-105"
                style={{ border: '1px solid rgba(255,255,255,0.3)', backgroundColor: 'rgba(255,255,255,0.05)' }}
              >
                Learn More
                <ArrowDown size={16} />
              </button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-12 pt-8"
              style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
            >
              {[
                { value: '5+', label: 'Years Experience' },
                { value: 'LL.M', label: 'Ankara University' },
                { value: 'PhD', label: 'Candidate' },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="font-heading font-bold text-2xl sm:text-3xl" style={{ color: '#D4AF37' }}>
                    {stat.value}
                  </div>
                  <div className="font-body text-white/50 text-xs mt-1 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Portrait */}
          <div className="flex-shrink-0 flex justify-center" data-aos="fade-left" data-aos-delay="300">
            <div className="relative">
              {/* Gold border circle */}
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-1.5"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #1B2A4A, #D4AF37)' }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-primary/50">
                  <img
                    src={profileImg}
                    alt="Ahmad Endres Hussen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-2 -right-2 px-3 py-2 rounded-lg shadow-xl text-center"
                style={{ backgroundColor: '#D4AF37', color: '#1B2A4A' }}
              >
                <p className="font-heading font-bold text-xs leading-tight">Maritime</p>
                <p className="font-heading font-bold text-xs leading-tight">Law Expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
      >
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}

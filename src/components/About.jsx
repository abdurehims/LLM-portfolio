import { MapPin, GraduationCap, Briefcase, User, BookOpen } from 'lucide-react';

const quickFacts = [
  { icon: MapPin, label: 'From', value: 'Wollo, Kemissie \u2013 Ethiopia' },
  { icon: User, label: 'Age', value: '30 Years' },
  { icon: GraduationCap, label: 'LL.B', value: 'Wollo University, Ethiopia' },
  { icon: GraduationCap, label: 'LL.M', value: 'Ankara University, T\u00fcrkiye' },
  { icon: BookOpen, label: 'PhD', value: 'Candidate \u2013 Ankara University' },
  { icon: Briefcase, label: 'Role', value: 'Lecturer, Debark University' },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="font-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#D4AF37' }}>
            Who I Am
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl xl:text-5xl" style={{ color: '#1B2A4A' }}>
            About Ahmad
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left – Bio */}
          <div data-aos="fade-right">
            <div
              className="inline-block px-3 py-1 rounded-md text-xs font-body font-semibold tracking-wide uppercase mb-6"
              style={{ backgroundColor: 'rgba(27,42,74,0.08)', color: '#1B2A4A' }}
            >
              Professional Summary
            </div>

            <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed mb-5">
              Maritime law expert, lecturer, and PhD candidate at Ankara University — focused on the legal
              frameworks that shape how landlocked states like Ethiopia access the global seas.
            </p>
            <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              From an LL.B at Wollo University to an LL.M in Maritime Law at Ankara University, Ahmad&apos;s
              path has always pointed toward the intersection of international law, trade policy, and
              African maritime strategy. Today he lectures at Debark University and consults across
              the public and private sectors.
            </p>

            <div
              className="flex items-center gap-4 p-5 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(27,42,74,0.05), rgba(212,175,55,0.08))',
                border: '1px solid rgba(212,175,55,0.2)',
              }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#D4AF37' }}
              >
                <BookOpen size={18} style={{ color: '#1B2A4A' }} />
              </div>
              <blockquote className="font-heading italic text-base md:text-lg" style={{ color: '#1B2A4A' }}>
                &ldquo;Bridging the gap between maritime law, policy, and Africa&apos;s aspirations on the global seas.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Right – Quick Facts card */}
          <div data-aos="fade-left" data-aos-delay="150">
            <div
              className="rounded-2xl shadow-lg overflow-hidden"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              {/* Card header */}
              <div
                className="px-6 py-5"
                style={{ background: 'linear-gradient(135deg, #1B2A4A, #2a3f6b)' }}
              >
                <h3 className="font-heading font-bold text-xl text-white">Quick Facts</h3>
                <p className="font-body text-white/60 text-sm mt-1">At a glance</p>
              </div>

              {/* Facts list */}
              <div className="divide-y divide-gray-100">
                {quickFacts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(212,175,55,0.12)' }}
                    >
                      <Icon size={16} style={{ color: '#D4AF37' }} />
                    </div>
                    <div>
                      <p className="font-body text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
                      <p className="font-body text-sm font-semibold mt-0.5" style={{ color: '#1B2A4A' }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card footer */}
              <div
                className="px-6 py-4 flex items-center gap-2"
                style={{ backgroundColor: 'rgba(212,175,55,0.07)' }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: '#2E8B57' }}
                />
                <p className="font-body text-sm font-medium" style={{ color: '#2E8B57' }}>
                  Open to consultations &amp; collaborations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

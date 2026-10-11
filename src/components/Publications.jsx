import { BookMarked, Clock } from 'lucide-react';

const publications = [
  {
    title: 'Landlocked States and Maritime Access: A Legal Analysis',
    type: 'Journal Article',
    description: "Examines international legal frameworks governing landlocked states' rights of access to the sea, with focus on UNCLOS.",
    year: '2024',
  },
  {
    title: "Ethiopia's Maritime Policy: Challenges and Prospects",
    type: 'Policy Paper',
    description: "Analyzes Ethiopia's historical and contemporary maritime engagement — including the impact of lost port access and paths forward.",
    year: '2024',
  },
  {
    title: 'Port State Control and Flag State Jurisdiction in East Africa',
    type: 'Research Paper',
    description: 'Comparative study of port state control and flag state jurisdiction across East African nations, with regional harmonization proposals.',
    year: '2025',
  },
  {
    title: 'Maritime Shipping Contracts under International Law',
    type: 'Book Chapter',
    description: 'Covers the structure, validity, and enforceability of maritime shipping contracts under UNCITRAL and related frameworks.',
    year: '2025',
  },
];

export default function Publications() {
  return (
    <section
      id="publications"
      className="py-20 md:py-28"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="font-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#D4AF37' }}>
            Research &amp; Writing
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl xl:text-5xl" style={{ color: '#1B2A4A' }}>
            Publications
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
          <p className="mt-6 font-body text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Ongoing research at the frontier of maritime law, policy, and international trade.
          </p>
        </div>

        {/* Publication cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {publications.map((pub, index) => (
            <div
              key={pub.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white rounded-2xl p-6 md:p-7 relative overflow-hidden transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl"
              style={{
                boxShadow: '0 2px 16px rgba(27,42,74,0.07)',
                border: '1px solid rgba(27,42,74,0.08)',
              }}
            >
              {/* Coming soon badge */}
              <div
                className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-semibold"
                style={{
                  backgroundColor: 'rgba(212,175,55,0.12)',
                  color: '#D4AF37',
                  border: '1px solid rgba(212,175,55,0.25)',
                }}
              >
                <Clock size={11} />
                Coming Soon
              </div>

              <div className="flex items-start gap-4 mb-4 pr-28">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: 'rgba(27,42,74,0.07)' }}
                >
                  <BookMarked size={18} style={{ color: '#1B2A4A' }} />
                </div>
                <div>
                  <span
                    className="inline-block font-body text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded mb-2"
                    style={{ backgroundColor: 'rgba(212,175,55,0.12)', color: '#D4AF37' }}
                  >
                    {pub.type}
                  </span>
                  <span className="font-body text-xs text-gray-400 ml-2">{pub.year}</span>
                </div>
              </div>

              <h3
                className="font-heading font-bold text-base md:text-lg mb-3 leading-snug transition-colors"
                style={{ color: '#1B2A4A' }}
              >
                {pub.title}
              </h3>

              <p className="font-body text-sm text-gray-500 leading-relaxed">
                {pub.description}
              </p>

              {/* Hover gold bottom line */}
              <div
                className="absolute bottom-0 left-0 w-full h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ backgroundColor: '#D4AF37' }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

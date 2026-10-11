import { GraduationCap, BookOpen, Briefcase } from 'lucide-react';

const timelineItems = [
  {
    icon: GraduationCap,
    year: '2015 – 2020',
    degree: 'Bachelor of Laws (LL.B)',
    institution: 'Wollo University',
    location: 'Dessie, Ethiopia',
    description: 'Graduated with distinction. Thesis on access rights of landlocked states under international law.',
    badge: 'Completed',
    badgeColor: '#2E8B57',
  },
  {
    icon: GraduationCap,
    year: '2021 – 2023',
    degree: 'Master of Laws (LL.M) – Maritime Law',
    institution: 'Ankara University',
    location: 'Ankara, Türkiye',
    description: 'Specialized in maritime conventions, admiralty law, shipping contracts, and landlocked-state access rights.',
    badge: 'Completed',
    badgeColor: '#2E8B57',
  },
  {
    icon: BookOpen,
    year: '2024 – Present',
    degree: 'Doctor of Laws (PhD Candidate)',
    institution: 'Ankara University',
    location: 'Ankara, Türkiye',
    description: 'Research focuses on legal mechanisms for landlocked-state access to international maritime routes.',
    badge: 'Ongoing',
    badgeColor: '#D4AF37',
  },
  {
    icon: Briefcase,
    year: '2023 – Present',
    degree: 'Lecturer of Law',
    institution: 'Debark University, School of Law',
    location: 'Debark, Ethiopia',
    description: 'Teaching Maritime Law, International Trade Law, and Legal Research Methodology.',
    badge: 'Present',
    badgeColor: '#1B2A4A',
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 md:py-28"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="font-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#D4AF37' }}>
            My Journey
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl xl:text-5xl" style={{ color: '#1B2A4A' }}>
            Education &amp; Career
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(to bottom, #D4AF37, #1B2A4A 85%, transparent)' }}
          />

          <div className="space-y-8">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.degree}
                  className="relative flex gap-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Icon dot */}
                  <div className="flex-shrink-0 z-10">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                      style={{ backgroundColor: '#D4AF37', border: '3px solid #F5F5F5' }}
                    >
                      <Icon size={17} style={{ color: '#1B2A4A' }} />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 mb-2"
                    style={{ borderLeft: `3px solid ${item.badgeColor}` }}
                  >
                    {/* Top row */}
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                      <span
                        className="font-body text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: `${item.badgeColor}18`,
                          color: item.badgeColor,
                        }}
                      >
                        {item.badge}
                      </span>
                      <span className="font-body text-xs text-gray-400 font-medium">{item.year}</span>
                    </div>

                    <h3 className="font-heading font-bold text-base md:text-lg leading-snug mb-1" style={{ color: '#1B2A4A' }}>
                      {item.degree}
                    </h3>

                    <p className="font-body text-sm font-semibold mb-0.5" style={{ color: '#D4AF37' }}>
                      {item.institution}
                    </p>

                    <p className="font-body text-xs text-gray-400 mb-3">{item.location}</p>

                    <p className="font-body text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

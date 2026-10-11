import {
  Anchor,
  FileText,
  Search,
  GraduationCap,
  Tv2,
  Briefcase,
} from 'lucide-react';

const services = [
  {
    icon: Anchor,
    title: 'Maritime Transportation Law',
    description: 'International maritime conventions, flag state jurisdiction, port state control, and landlocked-state access rights.',
  },
  {
    icon: FileText,
    title: 'Legal & Policy Advisory',
    description: 'Strategic guidance on maritime policy, international trade agreements, and regulatory compliance.',
  },
  {
    icon: Search,
    title: 'Legal Research',
    description: 'Academic and applied research on maritime law, international law, and Ethiopian legal frameworks.',
  },
  {
    icon: GraduationCap,
    title: 'Lecturing & Training',
    description: 'University courses and professional workshops in maritime law, trade law, and legal methodology.',
  },
  {
    icon: Tv2,
    title: 'Content Creation',
    description: 'YouTube, articles, and social media making maritime law accessible to Ethiopian and African audiences.',
  },
  {
    icon: Briefcase,
    title: 'Legal Consultancy',
    description: 'Practical legal guidance, contract review, and dispute resolution for maritime and trade law matters.',
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="py-20 md:py-28"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="font-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#D4AF37' }}>
            What I Do
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl xl:text-5xl" style={{ color: '#1B2A4A' }}>
            Areas of Expertise
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
          <p className="mt-6 font-body text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Deep academic knowledge meets real-world legal practice — across maritime law, policy, research, and education.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative bg-white rounded-2xl p-6 md:p-8 transition-all duration-300
                  hover:-translate-y-2 hover:shadow-2xl cursor-default"
                style={{
                  borderTop: '3px solid #D4AF37',
                  boxShadow: '0 2px 16px rgba(27,42,74,0.07)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300
                    group-hover:scale-110"
                  style={{ backgroundColor: 'rgba(27,42,74,0.07)' }}
                >
                  <Icon size={22} style={{ color: '#1B2A4A' }} />
                </div>

                <h3
                  className="font-heading font-bold text-lg md:text-xl mb-3 transition-colors group-hover:text-primary"
                  style={{ color: '#1B2A4A' }}
                >
                  {service.title}
                </h3>

                <p className="font-body text-gray-500 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transition-all duration-300
                    opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: '#D4AF37' }}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

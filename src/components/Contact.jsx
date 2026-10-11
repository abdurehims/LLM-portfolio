import { useState } from 'react';
import axios from 'axios';
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react';

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: '#',
    color: '#0A66C2',
  },
  {
    icon: Twitter,
    label: 'Twitter / X',
    href: '#',
    color: '#000000',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    href: '#',
    color: '#FF0000',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:ahmad.endres@debark.edu.et',
    color: '#D4AF37',
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ahmad.endres@debark.edu.et',
    href: 'mailto:ahmad.endres@debark.edu.et',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+251 91 234 5678',
    href: 'tel:+251912345678',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Debark University, School of Law, Debark, Ethiopia',
    href: null,
  },
];

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      await axios.post(`${BACKEND_URL}/api/contact`, form, {
        headers: { 'Content-Type': 'application/json' },
      });
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err.response?.data?.message || 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="font-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#D4AF37' }}>
            Get in Touch
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl xl:text-5xl" style={{ color: '#1B2A4A' }}>
            Contact Ahmad
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
          <p className="mt-6 font-body text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Legal question, consultation, or collaboration? Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">

          {/* Left – Contact Form */}
          <div data-aos="fade-right">
            <div
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm"
              style={{ border: '1px solid rgba(27,42,74,0.08)' }}
            >
              <h3 className="font-heading font-bold text-xl mb-6" style={{ color: '#1B2A4A' }}>
                Send a Message
              </h3>

              {/* Success state */}
              {status === 'success' && (
                <div
                  className="flex items-center gap-3 p-4 rounded-xl mb-6"
                  style={{ backgroundColor: 'rgba(46,139,87,0.1)', border: '1px solid rgba(46,139,87,0.25)' }}
                >
                  <CheckCircle size={20} style={{ color: '#2E8B57' }} />
                  <p className="font-body text-sm font-medium" style={{ color: '#2E8B57' }}>
                    Message sent successfully! Ahmad will get back to you shortly.
                  </p>
                </div>
              )}

              {/* Error state */}
              {status === 'error' && (
                <div
                  className="flex items-center gap-3 p-4 rounded-xl mb-6"
                  style={{ backgroundColor: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.2)' }}
                >
                  <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
                  <p className="font-body text-sm text-red-700">{errorMsg}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl font-body text-sm text-gray-700 outline-none transition-all duration-200
                        focus:ring-2 bg-gray-50 border border-gray-200 focus:border-transparent"
                      style={{ '--tw-ring-color': '#D4AF37' }}
                      onFocus={(e) => { e.target.style.borderColor = '#D4AF37'; e.target.style.boxShadow = '0 0 0 3px rgba(212,175,55,0.15)'; }}
                      onBlur={(e) => { e.target.style.borderColor = ''; e.target.style.boxShadow = ''; }}
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl font-body text-sm text-gray-700 outline-none transition-all duration-200 bg-gray-50 border border-gray-200"
                      onFocus={(e) => { e.target.style.borderColor = '#D4AF37'; e.target.style.boxShadow = '0 0 0 3px rgba(212,175,55,0.15)'; }}
                      onBlur={(e) => { e.target.style.borderColor = ''; e.target.style.boxShadow = ''; }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. Maritime Law Consultation"
                    className="w-full px-4 py-3 rounded-xl font-body text-sm text-gray-700 outline-none transition-all duration-200 bg-gray-50 border border-gray-200"
                    onFocus={(e) => { e.target.style.borderColor = '#D4AF37'; e.target.style.boxShadow = '0 0 0 3px rgba(212,175,55,0.15)'; }}
                    onBlur={(e) => { e.target.style.borderColor = ''; e.target.style.boxShadow = ''; }}
                  />
                </div>

                <div>
                  <label className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your enquiry or request..."
                    className="w-full px-4 py-3 rounded-xl font-body text-sm text-gray-700 outline-none transition-all duration-200 bg-gray-50 border border-gray-200 resize-none"
                    onFocus={(e) => { e.target.style.borderColor = '#D4AF37'; e.target.style.boxShadow = '0 0 0 3px rgba(212,175,55,0.15)'; }}
                    onBlur={(e) => { e.target.style.borderColor = ''; e.target.style.boxShadow = ''; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-body font-semibold text-sm
                    tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-60 disabled:scale-100"
                  style={{ backgroundColor: '#1B2A4A', color: '#FFFFFF' }}
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right – Social + Contact info */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="150">

            {/* Social links */}
            <div
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm"
              style={{ border: '1px solid rgba(27,42,74,0.08)' }}
            >
              <h3 className="font-heading font-bold text-lg mb-5" style={{ color: '#1B2A4A' }}>
                Connect Online
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href !== '#' && !social.href.startsWith('mailto') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-4 rounded-xl transition-all duration-300
                        hover:shadow-md hover:-translate-y-0.5"
                      style={{
                        border: '1px solid rgba(27,42,74,0.1)',
                        backgroundColor: '#FAFAFA',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#D4AF37';
                        e.currentTarget.style.backgroundColor = 'rgba(212,175,55,0.06)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(27,42,74,0.1)';
                        e.currentTarget.style.backgroundColor = '#FAFAFA';
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0"
                        style={{ backgroundColor: `${social.color}15` }}
                      >
                        <Icon
                          size={20}
                          className="transition-colors duration-300"
                          style={{ color: social.color }}
                        />
                      </div>
                      <span
                        className="font-body text-sm font-medium text-gray-600 group-hover:text-primary transition-colors"
                        style={{ '--primary': '#1B2A4A' }}
                      >
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact info card */}
            <div
              className="rounded-2xl overflow-hidden shadow-sm"
              style={{ border: '1px solid rgba(27,42,74,0.08)' }}
            >
              <div
                className="px-6 py-5"
                style={{ background: 'linear-gradient(135deg, #1B2A4A, #2a3f6b)' }}
              >
                <h3 className="font-heading font-bold text-xl text-white">Contact Details</h3>
                <p className="font-body text-white/60 text-sm mt-1">Reach out directly</p>
              </div>

              <div className="bg-white divide-y divide-gray-100">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: 'rgba(212,175,55,0.12)' }}
                    >
                      <Icon size={16} style={{ color: '#D4AF37' }} />
                    </div>
                    <div>
                      <p className="font-body text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="font-body text-sm font-semibold mt-0.5 hover:underline"
                          style={{ color: '#1B2A4A' }}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-body text-sm font-semibold mt-0.5" style={{ color: '#1B2A4A' }}>
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Building2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormStatus('success');
    setFormData({ name: '', email: '', company: '', message: '' });

    // Reset after 4 seconds
    setTimeout(() => setFormStatus('idle'), 4000);
  };

  const inputClasses =
    'w-full px-4 py-3.5 bg-white border border-[#2D5A4C]/12 rounded-xl text-[#2D5A4C] placeholder:text-[#2D5A4C]/35 focus:outline-none focus:border-[#2D5A4C]/40 focus:ring-2 focus:ring-[#2D5A4C]/10 transition-all text-sm';

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-3 py-1 bg-[#2D5A4C]/10 text-[#2D5A4C] text-sm font-medium rounded-full mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D5A4C] tracking-tight">
            {t('contact.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-[#2D5A4C]/8 shadow-sm">
              <h3 className="text-lg font-semibold text-[#2D5A4C] mb-6">
                Business Impact vzw
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2D5A4C]/8 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#2D5A4C]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#2D5A4C]">Leuven, Belgium</p>
                    <p className="text-xs text-[#2D5A4C]/50 mt-0.5">BE 0000.000.000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2D5A4C]/8 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[#2D5A4C]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#2D5A4C]">
                      info@businessimpact.be
                    </p>
                    <p className="text-xs text-[#2D5A4C]/50 mt-0.5">
                      businessimpact.be
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2D5A4C]/8 flex items-center justify-center flex-shrink-0">
                    <Building2 size={18} className="text-[#2D5A4C]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#2D5A4C]">
                      vzw — Vereniging Zonder Winstoogmerk
                    </p>
                    <p className="text-xs text-[#2D5A4C]/50 mt-0.5">
                      Copyright 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-[#2D5A4C]/8 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-[#2D5A4C]/70 mb-1.5 ml-1">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder={t('contact.name')}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2D5A4C]/70 mb-1.5 ml-1">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="email@voorbeeld.be"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-medium text-[#2D5A4C]/70 mb-1.5 ml-1">
                  {t('contact.company')}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder={t('contact.company')}
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-medium text-[#2D5A4C]/70 mb-1.5 ml-1">
                  {t('contact.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder={t('contact.message')}
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending' || formStatus === 'success'}
                className={`w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                  formStatus === 'success'
                    ? 'bg-green-600 text-white'
                    : formStatus === 'sending'
                    ? 'bg-[#2D5A4C]/70 text-white cursor-wait'
                    : 'bg-[#2D5A4C] text-white hover:bg-[#3D7A68] shadow-md shadow-[#2D5A4C]/15'
                }`}
              >
                {formStatus === 'success' ? (
                  <>
                    <CheckIcon />
                    {t('contact.success')}
                  </>
                ) : formStatus === 'sending' ? (
                  <>
                    <Spinner />
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    {t('contact.send')}
                  </>
                )}
              </button>

              {formStatus === 'error' && (
                <p className="mt-3 text-sm text-red-600 text-center">
                  {t('contact.error')}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8L6.5 11.5L13 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Spinner() {
  return (
    <motion.div
      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
    />
  );
}

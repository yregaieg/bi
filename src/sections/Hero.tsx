import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D5A4C]/5 via-[#F5F0EB] to-[#C4956A]/10" />

      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#2D5A4C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#C4956A]/8 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 bg-[#2D5A4C]/10 text-[#2D5A4C] text-sm font-medium rounded-full">
            vzw Leuven, Belgium
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold text-[#2D5A4C] tracking-tight leading-[1.1] mb-6"
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-lg sm:text-xl lg:text-2xl text-[#2D5A4C]/70 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('#membership')}
            className="group px-8 py-4 bg-[#2D5A4C] text-white rounded-xl font-semibold text-base hover:bg-[#3D7A68] transition-all duration-300 shadow-lg shadow-[#2D5A4C]/20 hover:shadow-xl hover:shadow-[#2D5A4C]/30 flex items-center gap-2"
          >
            {t('hero.cta1')}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('#mission')}
            className="px-8 py-4 bg-white/70 backdrop-blur text-[#2D5A4C] rounded-xl font-semibold text-base border border-[#2D5A4C]/15 hover:bg-white hover:border-[#2D5A4C]/25 transition-all duration-300"
          >
            {t('hero.cta2')}
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#mission')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#2D5A4C]/40 hover:text-[#2D5A4C]/70 transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>
    </section>
  );
}

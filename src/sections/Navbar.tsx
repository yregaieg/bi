import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage, type Language } from '@/context/LanguageContext';

const navLinks = [
  { key: 'nav.hero', href: '#hero', id: 'hero' },
  { key: 'nav.mission', href: '#mission', id: 'mission' },
  { key: 'nav.services', href: '#services', id: 'services' },
  { key: 'nav.membership', href: '#membership', id: 'membership' },
  { key: 'nav.contact', href: '#contact', id: 'contact' },
];

const languages: { code: Language; label: string }[] = [
  { code: 'nl', label: 'NL' },
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
];

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 40);

    const sections = navLinks.map((l) => l.id);
    let current = sections[0];

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          current = id;
        }
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#2D5A4C] flex items-center justify-center group-hover:bg-[#3D7A68] transition-colors">
              <span className="text-white text-sm font-bold">BI</span>
            </div>
            <span className="text-[#2D5A4C] font-semibold text-lg tracking-tight">
              Business Impact
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'text-[#2D5A4C]'
                    : 'text-[#2D5A4C]/60 hover:text-[#2D5A4C] hover:bg-[#2D5A4C]/5'
                }`}
              >
                {t(link.key)}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#C4956A] rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Language Switcher + Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Desktop Language Switcher */}
            <div className="hidden lg:flex items-center bg-[#2D5A4C]/5 rounded-lg p-1 gap-0.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                    language === lang.code
                      ? 'bg-[#2D5A4C] text-white shadow-sm'
                      : 'text-[#2D5A4C]/60 hover:text-[#2D5A4C] hover:bg-[#2D5A4C]/10'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-[#2D5A4C] hover:bg-[#2D5A4C]/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-[#2D5A4C]/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#2D5A4C]/10 text-[#2D5A4C]'
                      : 'text-[#2D5A4C]/70 hover:bg-[#2D5A4C]/5 hover:text-[#2D5A4C]'
                  }`}
                >
                  {t(link.key)}
                </button>
              ))}
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 pt-3 border-t border-[#2D5A4C]/10 mt-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex-1 px-3 py-2.5 text-xs font-semibold rounded-lg transition-all ${
                      language === lang.code
                        ? 'bg-[#2D5A4C] text-white'
                        : 'bg-[#2D5A4C]/5 text-[#2D5A4C]/60 hover:bg-[#2D5A4C]/10'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#2D5A4C] text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                <span className="text-white text-sm font-bold">BI</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                Business Impact
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-4 uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { key: 'nav.hero', href: '#hero' },
                { key: 'nav.mission', href: '#mission' },
                { key: 'nav.services', href: '#services' },
                { key: 'nav.membership', href: '#membership' },
                { key: 'nav.contact', href: '#contact' },
              ].map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/50 hover:text-white/90 transition-colors"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-4 uppercase tracking-wider text-xs">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>Business Impact vzw</li>
              <li>Leuven, Belgium</li>
              <li>BE 0000.000.000</li>
              <li>
                <a
                  href="mailto:info@businessimpact.be"
                  className="hover:text-white/90 transition-colors"
                >
                  info@businessimpact.be
                </a>
              </li>
              <li>
                <a
                  href="https://businessimpact.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/90 transition-colors"
                >
                  businessimpact.be
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>
              &copy; 2026 Business Impact vzw. {t('footer.rights')}
            </p>
            <p>
              BE 0000.000.000 &middot; Leuven, Belgium
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

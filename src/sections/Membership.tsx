import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const tiers = [
  {
    nameKey: 'membership.start',
    descKey: 'membership.startDesc',
    icon: Zap,
    features: [
      { nl: 'Netwerktoegang', fr: 'Acces reseau', en: 'Network access' },
      { nl: 'Maandelijkse nieuwsbrief', fr: 'Bulletin mensuel', en: 'Monthly newsletter' },
      { nl: 'Community app toegang', fr: "Acces app communaute", en: 'Community app access' },
      { nl: 'Korting op events', fr: 'Remise sur evenements', en: 'Event discounts' },
    ],
    color: 'border-[#2D5A4C]/15 bg-white',
    iconBg: 'bg-[#2D5A4C]/8',
    iconColor: 'text-[#2D5A4C]',
  },
  {
    nameKey: 'membership.growth',
    descKey: 'membership.growthDesc',
    icon: Sparkles,
    features: [
      { nl: 'Alles van Start', fr: "Tout de Demarrage", en: 'Everything from Start' },
      { nl: 'Co-working toegang', fr: 'Acces co-working', en: 'Co-working access' },
      { nl: '1x/maand coaching', fr: '1x/mois coaching', en: '1x/month coaching' },
      { nl: 'Workshop toegang', fr: 'Acces ateliers', en: 'Workshop access' },
      { nl: 'Priority support', fr: 'Support prioritaire', en: 'Priority support' },
    ],
    color: 'border-[#C4956A]/30 bg-white ring-1 ring-[#C4956A]/20',
    iconBg: 'bg-[#C4956A]/10',
    iconColor: 'text-[#C4956A]',
    popular: true,
  },
  {
    nameKey: 'membership.pro',
    descKey: 'membership.proDesc',
    icon: Crown,
    features: [
      { nl: 'Alles van Groei', fr: 'Tout de Croissance', en: 'Everything from Growth' },
      { nl: 'Eigen kantoorruimte', fr: 'Bureau prive', en: 'Private office space' },
      { nl: 'Onbeperkt coaching', fr: 'Coaching illimite', en: 'Unlimited coaching' },
      { nl: 'Vergaderruimte boeken', fr: 'Reservation salle reunion', en: 'Meeting room booking' },
      { nl: 'VIP event toegang', fr: 'Acces evenements VIP', en: 'VIP event access' },
      { nl: 'Persoonlijke adviseur', fr: 'Conseiller personnel', en: 'Personal advisor' },
    ],
    color: 'border-[#2D5A4C]/30 bg-[#2D5A4C] text-white',
    iconBg: 'bg-white/15',
    iconColor: 'text-[#C4956A]',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function Membership() {
  const { t, language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="membership" className="py-24 lg:py-32 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-3 py-1 bg-[#C4956A]/10 text-[#C4956A] text-sm font-medium rounded-full mb-4">
            Membership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D5A4C] tracking-tight">
            {t('membership.title')}
          </h2>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            const isPro = tier.nameKey === 'membership.pro';

            return (
              <motion.div
                key={tier.nameKey}
                custom={i}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={cardVariants}
                className={`relative rounded-2xl border p-6 lg:p-8 transition-all duration-300 hover:shadow-lg ${tier.color}`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#C4956A] text-white text-xs font-semibold rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${tier.iconBg} flex items-center justify-center mb-5`}
                >
                  <Icon size={26} className={tier.iconColor} />
                </div>

                {/* Name & Description */}
                <h3
                  className={`text-2xl font-bold mb-1 ${
                    isPro ? 'text-white' : 'text-[#2D5A4C]'
                  }`}
                >
                  {t(tier.nameKey)}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    isPro ? 'text-white/70' : 'text-[#2D5A4C]/60'
                  }`}
                >
                  {t(tier.descKey)}
                </p>

                {/* Contact for pricing */}
                <div
                  className={`py-3 px-4 rounded-lg mb-6 text-center ${
                    isPro ? 'bg-white/10' : 'bg-[#F5F0EB]'
                  }`}
                >
                  <span
                    className={`text-sm font-medium ${
                      isPro ? 'text-white/80' : 'text-[#2D5A4C]/70'
                    }`}
                  >
                    {t('membership.contact')}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className={`mt-0.5 flex-shrink-0 ${
                          isPro ? 'text-[#C4956A]' : 'text-[#2D5A4C]'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          isPro ? 'text-white/80' : 'text-[#2D5A4C]/70'
                        }`}
                      >
                        {feature[language]}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    isPro
                      ? 'bg-white text-[#2D5A4C] hover:bg-[#F5F0EB] shadow-md'
                      : 'bg-[#2D5A4C] text-white hover:bg-[#3D7A68] shadow-md shadow-[#2D5A4C]/15'
                  }`}
                >
                  {t('contact.title')}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

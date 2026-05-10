import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Monitor,
  CalendarDays,
  UserCheck,
  Landmark,
  GraduationCap,
  UsersRound,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const services = [
  {
    key: 'services.workspace',
    descKey: 'services.workspaceDesc',
    icon: Monitor,
  },
  {
    key: 'services.events',
    descKey: 'services.eventsDesc',
    icon: CalendarDays,
  },
  {
    key: 'services.coaching',
    descKey: 'services.coachingDesc',
    icon: UserCheck,
  },
  {
    key: 'services.ethical',
    descKey: 'services.ethicalDesc',
    icon: Landmark,
    featured: true,
  },
  {
    key: 'services.training',
    descKey: 'services.trainingDesc',
    icon: GraduationCap,
  },
  {
    key: 'services.community',
    descKey: 'services.communityDesc',
    icon: UsersRound,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function Services() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#F5F0EB]">
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
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D5A4C] tracking-tight">
            {t('services.title')}
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isFeatured = service.featured;

            return (
              <motion.div
                key={service.key}
                custom={i}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={cardVariants}
                className={`group relative rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#2D5A4C] text-white shadow-xl shadow-[#2D5A4C]/20 hover:shadow-2xl hover:shadow-[#2D5A4C]/30'
                    : 'bg-white border border-[#2D5A4C]/8 hover:border-[#2D5A4C]/20 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Featured badge */}
                {isFeatured && (
                  <span className="absolute -top-3 left-6 px-3 py-1 bg-[#C4956A] text-white text-xs font-semibold rounded-full">
                    New
                  </span>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                    isFeatured
                      ? 'bg-white/15 group-hover:bg-white/25'
                      : 'bg-[#2D5A4C]/8 group-hover:bg-[#2D5A4C]'
                  }`}
                >
                  <Icon
                    size={22}
                    className={`transition-colors duration-300 ${
                      isFeatured
                        ? 'text-[#C4956A]'
                        : 'text-[#2D5A4C] group-hover:text-white'
                    }`}
                  />
                </div>

                {/* Content */}
                <h3
                  className={`text-lg font-semibold mb-2 transition-colors ${
                    isFeatured ? 'text-white' : 'text-[#2D5A4C] group-hover:text-[#3D7A68]'
                  }`}
                >
                  {t(service.key)}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isFeatured ? 'text-white/70' : 'text-[#2D5A4C]/60'
                  }`}
                >
                  {t(service.descKey)}
                </p>

                {/* Hover accent for non-featured */}
                {!isFeatured && (
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#C4956A]/5 rounded-bl-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

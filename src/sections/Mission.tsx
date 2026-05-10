import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Network,
  BookOpen,
  Users,
  Building2,
  Leaf,
  HeartHandshake,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const values = [
  {
    key: 'mission.networking',
    descKey: 'mission.networkingDesc',
    icon: Network,
  },
  {
    key: 'mission.knowledge',
    descKey: 'mission.knowledgeDesc',
    icon: BookOpen,
  },
  {
    key: 'mission.coaching',
    descKey: 'mission.coachingDesc',
    icon: Users,
  },
  {
    key: 'mission.facilities',
    descKey: 'mission.facilitiesDesc',
    icon: Building2,
  },
  {
    key: 'mission.ethical',
    descKey: 'mission.ethicalDesc',
    icon: Leaf,
  },
  {
    key: 'mission.community',
    descKey: 'mission.communityDesc',
    icon: HeartHandshake,
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

export default function Mission() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="mission" className="py-24 lg:py-32 bg-white/50">
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
            Mission
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D5A4C] tracking-tight mb-6">
            {t('mission.title')}
          </h2>
          <p className="text-base sm:text-lg text-[#2D5A4C]/65 leading-relaxed">
            {t('mission.description')}
          </p>
        </motion.div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.key}
                custom={i}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-[#2D5A4C]/8 hover:border-[#2D5A4C]/20 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#2D5A4C]/8 group-hover:bg-[#2D5A4C] flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-[#2D5A4C] group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[#2D5A4C] mb-2 group-hover:text-[#3D7A68] transition-colors">
                  {t(value.key)}
                </h3>
                <p className="text-sm text-[#2D5A4C]/60 leading-relaxed">
                  {t(value.descKey)}
                </p>

                {/* Hover accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#C4956A]/5 rounded-bl-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

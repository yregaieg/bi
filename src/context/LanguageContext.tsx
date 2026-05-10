import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type Language = 'nl' | 'fr' | 'en';

interface Translations {
  [key: string]: {
    nl: string;
    fr: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.hero': { nl: 'Home', fr: 'Accueil', en: 'Home' },
  'nav.mission': { nl: 'Missie', fr: 'Mission', en: 'Mission' },
  'nav.services': { nl: 'Diensten', fr: 'Services', en: 'Services' },
  'nav.membership': { nl: 'Lidmaatschap', fr: 'Adhesion', en: 'Membership' },
  'nav.contact': { nl: 'Contact', fr: 'Contact', en: 'Contact' },

  // Hero
  'hero.title': { nl: 'Business Impact', fr: 'Business Impact', en: 'Business Impact' },
  'hero.subtitle': {
    nl: 'Waar ondernemerschap ontmoet, groeit en impact maakt',
    fr: "La ou l'entrepreneuriat se rencontre, croit et fait impact",
    en: 'Where Entrepreneurship Meets, Grows, and Makes Impact',
  },
  'hero.cta1': { nl: 'Word Lid', fr: 'Devenez Membre', en: 'Join Now' },
  'hero.cta2': { nl: 'Ontdek Meer', fr: 'En Savoir Plus', en: 'Learn More' },

  // Mission
  'mission.title': { nl: 'Onze Missie', fr: 'Notre Mission', en: 'Our Mission' },
  'mission.description': {
    nl: 'Business Impact ondersteunt ondernemers door middel van netwerking, kennisdeling, coaching en faciliteiten. Wij geloven dat succesvol ondernemen hand in hand gaat met ethisch ondernemen en maatschappelijke impact. Onze community brengt ondernemers samen die streven naar groei, duurzaamheid en betekenisvolle verbindingen.',
    fr: "Business Impact soutient les entrepreneurs grace au reseautage, au partage de connaissances, au coaching et aux installations. Nous croyons qu'une entreprise reussie va de pair avec des pratiques ethiques et un impact social. Notre communaute rassemble des entrepreneurs qui visent la croissance, la durabilite et des connexions significatives.",
    en: 'Business Impact supports entrepreneurs through networking, knowledge sharing, coaching, and facilities. We believe successful business goes hand in hand with ethical practices and social impact. Our community brings together entrepreneurs who strive for growth, sustainability, and meaningful connections.',
  },
  'mission.networking': { nl: 'Netwerking', fr: 'Reseautage', en: 'Networking' },
  'mission.networkingDesc': {
    nl: 'Verbind met gelijkgestemde ondernemers en bouw waardevolle relaties.',
    fr: 'Connectez-vous avec des entrepreneurs partageant les memes idees et construisez des relations precieuses.',
    en: 'Connect with like-minded entrepreneurs and build valuable relationships.',
  },
  'mission.knowledge': { nl: 'Kennisdeling', fr: 'Partage de Connaissances', en: 'Knowledge Sharing' },
  'mission.knowledgeDesc': {
    nl: 'Deel expertise en leer van ervaren professionals uit diverse sectoren.',
    fr: "Partagez votre expertise et apprenez des professionnels experimentes de divers secteurs.",
    en: 'Share expertise and learn from experienced professionals across diverse sectors.',
  },
  'mission.coaching': { nl: 'Coaching', fr: 'Coaching', en: 'Coaching' },
  'mission.coachingDesc': {
    nl: 'Persoonlijke begeleiding om je ondernemerschap naar een hoger niveau te tillen.',
    fr: "Accompagnement personnalise pour elever votre entrepreneuriat a un niveau superieur.",
    en: 'Personal guidance to take your entrepreneurship to the next level.',
  },
  'mission.facilities': { nl: 'Faciliteiten', fr: 'Facilites', en: 'Facilities' },
  'mission.facilitiesDesc': {
    nl: 'Moderne werkruimtes en vergaderruimtes voor jouw professionele behoeften.',
    fr: "Espaces de travail modernes et salles de reunion pour vos besoins professionnels.",
    en: 'Modern workspaces and meeting rooms for your professional needs.',
  },
  'mission.ethical': { nl: 'Ethisch Ondernemen', fr: 'Entreprise Ethique', en: 'Ethical Business' },
  'mission.ethicalDesc': {
    nl: 'Duurzame bedrijfspraktijken die mens, milieu en maatschappij respecteren.',
    fr: "Des pratiques commerciales durables qui respectent les personnes, l'environnement et la societe.",
    en: 'Sustainable business practices that respect people, planet, and society.',
  },
  'mission.community': { nl: 'Community', fr: 'Communaute', en: 'Community' },
  'mission.communityDesc': {
    nl: 'Een warme, inclusieve gemeenschap van ondernemers die elkaar helpen groeien.',
    fr: "Une communaute chaleureuse et inclusive d'entrepreneurs qui s'aident mutuellement a grandir.",
    en: 'A warm, inclusive community of entrepreneurs helping each other grow.',
  },

  // Services
  'services.title': { nl: 'Wat Wij Bieden', fr: 'Ce Que Nous Offrons', en: 'What We Offer' },
  'services.workspace': { nl: 'Werkruimte & Vergaderruimtes', fr: 'Espace de Co-working & Salles de Reunion', en: 'Workspace & Meeting Rooms' },
  'services.workspaceDesc': {
    nl: 'Flexibele werkruimtes en professionele vergaderruimtes voor jouw team en klanten.',
    fr: "Espaces de travail flexibles et salles de reunion professionnelles pour votre equipe et vos clients.",
    en: 'Flexible workspaces and professional meeting rooms for your team and clients.',
  },
  'services.events': { nl: 'Netwerkevents & Workshops', fr: 'Evenements Networking & Ateliers', en: 'Networking Events & Workshops' },
  'services.eventsDesc': {
    nl: 'Regelmatige events om te netwerken, te leren en samen te groeien.',
    fr: "Des evenements reguliers pour reseauter, apprendre et grandir ensemble.",
    en: 'Regular events to network, learn, and grow together.',
  },
  'services.coaching': { nl: 'Coaching & Begeleiding', fr: 'Coaching & Accompagnement', en: 'Coaching & Mentoring' },
  'services.coachingDesc': {
    nl: 'Individuele en groepscoaching om je zakelijke doelen te bereiken.',
    fr: "Coaching individuel et en groupe pour atteindre vos objectifs commerciaux.",
    en: 'Individual and group coaching to achieve your business goals.',
  },
  'services.ethical': { nl: 'Ethisch Financieel Advies', fr: 'Conseil Financier Ethique', en: 'Ethical Financial Advisory' },
  'services.ethicalDesc': {
    nl: 'Onafhankelijk advies over ethisch beleggen, vermogensbeheer en zakatberekening. Wij helpen je om financiele keuzes te maken die aansluiten bij joun waarden en principes.',
    fr: "Conseil independant sur l'investissement ethique, la gestion de patrimoine et le calcul de la zakat. Nous vous aidons a faire des choix financiers alignes avec vos valeurs et principes.",
    en: 'Independent advice on ethical investing, wealth management, and zakat calculation. We help you make financial choices that align with your values and principles.',
  },
  'services.training': { nl: 'Opleidingen & Seminaries', fr: 'Formations & Seminaires', en: 'Training & Seminars' },
  'services.trainingDesc': {
    nl: 'Professionele opleidingen en seminaries om je vaardigheden te ontwikkelen.',
    fr: "Des formations professionnelles et des seminaires pour developper vos competences.",
    en: 'Professional training and seminars to develop your skills.',
  },
  'services.community': { nl: 'Community & Samenwerking', fr: 'Communaute & Collaboration', en: 'Community & Collaboration' },
  'services.communityDesc': {
    nl: 'Samenwerken met andere ondernemers en profiteren van een ondersteunend netwerk.',
    fr: "Collaborez avec d'autres entrepreneurs et beneficiez d'un reseau de soutien.",
    en: 'Collaborate with other entrepreneurs and benefit from a supportive network.',
  },

  // Membership
  'membership.title': { nl: 'Lidmaatschapsformules', fr: "Formules d'Adhesion", en: 'Membership Plans' },
  'membership.contact': {
    nl: 'Contacteer ons voor prijzen',
    fr: 'Contactez-nous pour les tarifs',
    en: 'Contact us for pricing',
  },
  'membership.start': { nl: 'Start', fr: 'Demarrage', en: 'Start' },
  'membership.startDesc': {
    nl: 'Basis netwerktoegang',
    fr: 'Acces reseau de base',
    en: 'Basic network access',
  },
  'membership.growth': { nl: 'Groei', fr: 'Croissance', en: 'Growth' },
  'membership.growthDesc': {
    nl: 'Co-working + coaching',
    fr: 'Co-working + coaching',
    en: 'Co-working + coaching',
  },
  'membership.pro': { nl: 'Pro', fr: 'Pro', en: 'Pro' },
  'membership.proDesc': {
    nl: 'Volledig pakket',
    fr: 'Forfait complet',
    en: 'Full package',
  },

  // Contact
  'contact.title': { nl: 'Neem Contact Op', fr: 'Contactez-Nous', en: 'Get In Touch' },
  'contact.name': { nl: 'Naam', fr: 'Nom', en: 'Name' },
  'contact.email': { nl: 'E-mail', fr: 'E-mail', en: 'Email' },
  'contact.company': { nl: 'Onderneming', fr: 'Entreprise', en: 'Company' },
  'contact.message': { nl: 'Bericht', fr: 'Message', en: 'Message' },
  'contact.send': { nl: 'Verstuur', fr: 'Envoyer', en: 'Send' },
  'contact.sending': { nl: 'Verzenden...', fr: 'Envoi en cours...', en: 'Sending...' },
  'contact.success': {
    nl: 'Bedankt! Je bericht is verzonden.',
    fr: 'Merci! Votre message a ete envoye.',
    en: 'Thank you! Your message has been sent.',
  },
  'contact.error': {
    nl: 'Er is iets misgegaan. Probeer het opnieuw.',
    fr: "Une erreur s'est produite. Veuillez reessayer.",
    en: 'Something went wrong. Please try again.',
  },

  // Footer
  'footer.tagline': {
    nl: 'Waar ondernemerschap impact maakt',
    fr: "La ou l'entrepreneuriat fait de l'impact",
    en: 'Where entrepreneurship makes impact',
  },
  'footer.rights': { nl: 'Alle rechten voorbehouden.', fr: 'Tous droits reserves.', en: 'All rights reserved.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('nl');

  const t = useCallback(
    (key: string): string => {
      if (translations[key] && translations[key][language]) {
        return translations[key][language];
      }
      return key;
    },
    [language]
  );

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

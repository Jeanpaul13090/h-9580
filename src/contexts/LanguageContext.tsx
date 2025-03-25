
import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'de';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations = {
  fr: {
    services: 'Services',
    testimonials: 'Témoignages',
    pricing: 'Tarification',
    getStarted: 'Démarrer',
    hero_title: 'Votre chaîne Twitch en continu, sans effort avec des revenus passifs',
    hero_subtitle: 'Transformez votre contenu existant en une chaîne de diffusion 24h/24 qui génère des revenus et augmente votre audience, sans aucun effort supplémentaire.',
    startNow: 'Commencer maintenant',
    seeDemos: 'Voir les démos',
    streaming24_7: 'Diffusion 24h/24 et 7j/7',
    twitchIntegration: 'Intégration native Twitch',
    guaranteedIncome: 'Revenus passifs garantis',
    live24_7: 'LIVE 24/7',
  },
  en: {
    services: 'Services',
    testimonials: 'Testimonials',
    pricing: 'Pricing',
    getStarted: 'Get Started',
    hero_title: 'Your Twitch channel running continuously, effortlessly with passive income',
    hero_subtitle: 'Transform your existing content into a 24/7 broadcasting channel that generates revenue and grows your audience, without any additional effort.',
    startNow: 'Start Now',
    seeDemos: 'See Demos',
    streaming24_7: '24/7 Streaming',
    twitchIntegration: 'Native Twitch Integration',
    guaranteedIncome: 'Guaranteed Passive Income',
    live24_7: 'LIVE 24/7',
  },
  de: {
    services: 'Dienstleistungen',
    testimonials: 'Erfahrungen',
    pricing: 'Preisgestaltung',
    getStarted: 'Loslegen',
    hero_title: 'Ihr Twitch-Kanal läuft kontinuierlich, mühelos mit passivem Einkommen',
    hero_subtitle: 'Verwandeln Sie Ihre vorhandenen Inhalte in einen 24/7-Sendekanal, der Einnahmen generiert und Ihr Publikum vergrößert, ohne zusätzlichen Aufwand.',
    startNow: 'Jetzt Starten',
    seeDemos: 'Demos Ansehen',
    streaming24_7: '24/7 Streaming',
    twitchIntegration: 'Native Twitch-Integration',
    guaranteedIncome: 'Garantiertes passives Einkommen',
    live24_7: 'LIVE 24/7',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

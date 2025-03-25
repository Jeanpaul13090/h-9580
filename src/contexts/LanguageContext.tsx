
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
    streaming_service_24_7: 'Service de streaming Twitch 24/7',
    your_content: 'Votre contenu',
    twentyFourSeven: '24h/24 et 7j/7',
    maximize_presence: 'Maximisez votre présence sur Twitch avec une chaîne de rediffusion automatisée. Générez des revenus passifs sans effort supplémentaire.',
    // Features section
    features_title: 'Tout ce dont vous avez besoin pour développer votre présence sur Twitch',
    features_subtitle: 'Je m\'occupe de tout pour que vous puissiez vous concentrer uniquement sur la création de votre contenu principal.',
    feature1_title: 'Gestion complète de votre chaîne secondaire',
    feature1_desc: 'Mise en place et gestion complète de votre chaîne secondaire sans aucun effort de votre part.',
    feature2_title: 'Automatisation des rediffusions',
    feature2_desc: 'Hébergement, déploiement des serveurs et automatisation des rediffusions de vos contenus.',
    feature3_title: 'Rotation stratégique des VODs',
    feature3_desc: 'Mise à jour et rotation stratégique de vos VODs pour maintenir votre audience engagée.',
    feature4_title: 'Suivi des performances',
    feature4_desc: 'Rapports détaillés et optimisation continue pour maximiser vos revenus passifs.',
    // Testimonials section
    testimonials_title: 'Ce que disent les streamers',
    testimonials_subtitle: 'Rejoignez des streamers qui ont déjà transformé leur stratégie sur Twitch.',
    testimonial1: 'Depuis que j\'ai lancé ma chaîne secondaire avec ce service, mes revenus ont augmenté de 30% sans aucun effort supplémentaire.',
    testimonial2: 'La mise en place a été incroyablement simple, et maintenant j\'ai une audience qui me regarde 24h/24, même quand je dors.',
    testimonial3: 'Le suivi des performances est transparent et les revenus passifs ont transformé mon activité de streaming.',
    role_streamer_asmr: 'Streamer ASMR',
    role_streameuse_jc: 'Streameuse Just Chatting',
    role_streamer_fps: 'Streamer FPS',
    // Blog section
    blog_title: 'Actualités du blog',
    blog_post1_title: 'Comment optimiser votre chaîne pour les rediffusions',
    blog_post2_title: 'Maximiser vos revenus passifs sur Twitch',
    blog_post3_title: 'Les meilleurs moments pour lancer vos streams automatisés',
    min_read: 'min de lecture',
    // Stats section
    uptime: 'Uptime',
    countries: 'Pays',
    processed: 'Traités',
    support: 'Support',
    // Footer section
    footer_service: 'Service',
    footer_company: 'Entreprise',
    footer_resources: 'Ressources',
    footer_legal: 'Légal',
    footer_faq: 'FAQ',
    footer_about: 'À propos',
    footer_contact: 'Contact',
    footer_partnerships: 'Partenariats',
    footer_blog: 'Blog',
    footer_guides: 'Guides',
    footer_support: 'Support',
    footer_privacy: 'Confidentialité',
    footer_terms: 'Conditions',
    footer_cookies: 'Cookies',
    footer_copyright: '© 2024 StreamAuto. Tous droits réservés.',
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
    streaming_service_24_7: 'Twitch streaming service 24/7',
    your_content: 'Your content',
    twentyFourSeven: '24/7 and 7 days a week',
    maximize_presence: 'Maximize your presence on Twitch with an automated rebroadcasting channel. Generate passive income without additional effort.',
    // Features section
    features_title: 'Everything you need to grow your presence on Twitch',
    features_subtitle: 'I take care of everything so you can focus solely on creating your main content.',
    feature1_title: 'Complete management of your secondary channel',
    feature1_desc: 'Setup and complete management of your secondary channel with no effort on your part.',
    feature2_title: 'Automated rebroadcasting',
    feature2_desc: 'Hosting, server deployment and automation of rebroadcasts of your content.',
    feature3_title: 'Strategic VOD rotation',
    feature3_desc: 'Strategic updating and rotation of your VODs to keep your audience engaged.',
    feature4_title: 'Performance tracking',
    feature4_desc: 'Detailed reports and continuous optimization to maximize your passive income.',
    // Testimonials section
    testimonials_title: 'What streamers are saying',
    testimonials_subtitle: 'Join streamers who have already transformed their Twitch strategy.',
    testimonial1: 'Since I launched my secondary channel with this service, my revenue has increased by 30% with no additional effort.',
    testimonial2: 'The setup was incredibly simple, and now I have an audience watching me 24/7, even when I sleep.',
    testimonial3: 'Performance tracking is transparent and passive income has transformed my streaming business.',
    role_streamer_asmr: 'ASMR Streamer',
    role_streameuse_jc: 'Just Chatting Streamer',
    role_streamer_fps: 'FPS Streamer',
    // Blog section
    blog_title: 'Latest from the blog',
    blog_post1_title: 'How to optimize your channel for reruns',
    blog_post2_title: 'Maximize your passive income on Twitch',
    blog_post3_title: 'The best times to launch your automated streams',
    min_read: 'min read',
    // Stats section
    uptime: 'Uptime',
    countries: 'Countries',
    processed: 'Processed',
    support: 'Support',
    // Footer section
    footer_service: 'Service',
    footer_company: 'Company',
    footer_resources: 'Resources',
    footer_legal: 'Legal',
    footer_faq: 'FAQ',
    footer_about: 'About',
    footer_contact: 'Contact',
    footer_partnerships: 'Partnerships',
    footer_blog: 'Blog',
    footer_guides: 'Guides',
    footer_support: 'Support',
    footer_privacy: 'Privacy',
    footer_terms: 'Terms',
    footer_cookies: 'Cookies',
    footer_copyright: '© 2024 StreamAuto. All rights reserved.',
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
    streaming_service_24_7: 'Twitch-Streaming-Dienst rund um die Uhr',
    your_content: 'Ihre Inhalte',
    twentyFourSeven: '24/7 und 7 Tage die Woche',
    maximize_presence: 'Maximieren Sie Ihre Präsenz auf Twitch mit einem automatisierten Wiederausstrahlungskanal. Generieren Sie passives Einkommen ohne zusätzlichen Aufwand.',
    // Features section
    features_title: 'Alles was Sie brauchen, um Ihre Präsenz auf Twitch zu erweitern',
    features_subtitle: 'Ich kümmere mich um alles, damit Sie sich ausschließlich auf die Erstellung Ihrer Hauptinhalte konzentrieren können.',
    feature1_title: 'Komplette Verwaltung Ihres Zweitkanals',
    feature1_desc: 'Einrichtung und komplette Verwaltung Ihres Zweitkanals ohne Aufwand für Sie.',
    feature2_title: 'Automatisierte Wiederholungen',
    feature2_desc: 'Hosting, Server-Bereitstellung und Automatisierung von Wiederholungen Ihrer Inhalte.',
    feature3_title: 'Strategische VOD-Rotation',
    feature3_desc: 'Strategische Aktualisierung und Rotation Ihrer VODs, um Ihr Publikum zu binden.',
    feature4_title: 'Leistungsverfolgung',
    feature4_desc: 'Detaillierte Berichte und kontinuierliche Optimierung zur Maximierung Ihres passiven Einkommens.',
    // Testimonials section
    testimonials_title: 'Was Streamer sagen',
    testimonials_subtitle: 'Schließen Sie sich Streamern an, die ihre Twitch-Strategie bereits transformiert haben.',
    testimonial1: 'Seit ich meinen Zweitkanal mit diesem Service gestartet habe, sind meine Einnahmen ohne zusätzlichen Aufwand um 30% gestiegen.',
    testimonial2: 'Die Einrichtung war unglaublich einfach, und jetzt habe ich ein Publikum, das mir rund um die Uhr zuschaut, sogar wenn ich schlafe.',
    testimonial3: 'Die Leistungsverfolgung ist transparent und das passive Einkommen hat mein Streaming-Geschäft transformiert.',
    role_streamer_asmr: 'ASMR Streamer',
    role_streameuse_jc: 'Just Chatting Streamerin',
    role_streamer_fps: 'FPS Streamer',
    // Blog section
    blog_title: 'Neuigkeiten aus dem Blog',
    blog_post1_title: 'So optimieren Sie Ihren Kanal für Wiederholungen',
    blog_post2_title: 'Maximieren Sie Ihr passives Einkommen auf Twitch',
    blog_post3_title: 'Die besten Zeiten für den Start Ihrer automatisierten Streams',
    min_read: 'Min. Lesezeit',
    // Stats section
    uptime: 'Betriebszeit',
    countries: 'Länder',
    processed: 'Verarbeitet',
    support: 'Support',
    // Footer section
    footer_service: 'Dienstleistung',
    footer_company: 'Unternehmen',
    footer_resources: 'Ressourcen',
    footer_legal: 'Rechtliches',
    footer_faq: 'FAQ',
    footer_about: 'Über uns',
    footer_contact: 'Kontakt',
    footer_partnerships: 'Partnerschaften',
    footer_blog: 'Blog',
    footer_guides: 'Anleitungen',
    footer_support: 'Support',
    footer_privacy: 'Datenschutz',
    footer_terms: 'Bedingungen',
    footer_cookies: 'Cookies',
    footer_copyright: '© 2024 StreamAuto. Alle Rechte vorbehalten.',
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

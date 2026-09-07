import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    nav_home: 'Accueil',
    nav_donate: 'Faire un Don',
    nav_spiritual: 'Vie spirituelle',
    nav_projects: 'Nos projets',
    nav_transparency: 'Transparence',
    nav_sponsors: 'Mécène',
    hero_title: 'Bâtissons ensemble l\'Église Sacré-Cœur d\'Akandjé',
    hero_subtitle: 'Votre don, une pierre précieuse pour notre église',
    hero_quote: 'Que chacun donne comme il l\'a résolu en son cœur...',
    hero_reference: '2 Corinthiens 9:7',
    donate_now: 'Faire un Don',
    learn_more: 'En Savoir Plus',
    project_goal: 'Objectif du Projet',
    raised_so_far: 'Collecté à ce jour',
    major_benefactors: 'Bienfaiteurs Majeurs',
    view_all: 'Voir Tous',
    giving_circles: 'Cercles de Dons',
    free_donation: 'Don Libre des Biens Heureux',
    sponsor_element: 'Parrainage d\'un Élément Patrimonial',
    builders_circle: 'Cercle des "Bâtisseurs du Sacré-Cœur"',
    founders_circle: 'Le Cercle des "Fondateurs"',
    monthly_donors: 'Programme de dons mensuels',
    exceptional_donors: 'Dons exceptionnels supérieurs à 10 000 000 FCFA',
    choose_amount: 'Choisissez votre montant',
    custom_amount: 'Montant personnalisé',
    personal_info: 'Informations Personnelles',
    first_name: 'Prénom',
    last_name: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    company: 'Entreprise (optionnel)',
    profession: 'Profession (optionnel)',
    country: 'Pays',
    donation_type: 'Type de Don',
    one_time: 'Ponctuel',
    monthly: 'Mensuel',
    quarterly: 'Trimestriel',
    annual: 'Annuel',
    payment_method: 'Méthode de Paiement',
    mobile_money: 'Mobile Money',
    bank_card: 'Carte Bancaire',
    bank_transfer: 'Virement Bancaire',
    dedication: 'Message de Dédicace (optionnel)',
    anonymous: 'Don anonyme',
    submit_donation: 'Confirmer le Don',
    corporate_sponsorship: 'Mécénat d\'Entreprise',
    corporate_subtitle: 'Rejoignez notre cercle de partenaires prestigieux',
    corporate_benefits: 'Avantages du Mécénat',
    tax_deduction: 'Déduction fiscale',
    visibility: 'Visibilité de votre marque',
    csr: 'Engagement RSE',
    download_brochure: 'Télécharger le Dossier de Partenariat',
    contact_us: 'Nous Contacter',
    transparency_title: 'Transparence & État d\'Avancement',
    financial_reports: 'Rapports Financiers',
    construction_progress: 'Avancement des Travaux',
    project_updates: 'Actualités du Projet',
    budget_breakdown: 'Répartition du Budget',
    total_budget: 'Budget Total',
    spent: 'Dépensé',
    remaining: 'Restant',
    available_elements: 'Éléments Disponibles au Parrainage',
    sponsored: 'Parrainé',
    available: 'Disponible',
    sponsor_this: 'Parrainer',
    fcfa: 'FCFA',
    footer_about: 'À Propos',
    footer_contact: 'Contact',
    footer_legal: 'Mentions Légales',
    footer_privacy: 'Confidentialité',
    recognition_founder: 'Fondateur',
    recognition_platinum: 'Platine',
    recognition_gold: 'Or',
    recognition_silver: 'Argent',
    recognition_bronze: 'Bronze',
  },
  en: {
    nav_home: 'Home',
    nav_donate: 'Donate',
    nav_spiritual: 'Spiritual Life',
    nav_projects: 'Our Projects',
    nav_transparency: 'Transparency',
    nav_sponsors: 'Patronage',
    hero_title: 'Let\'s Build the Sacred Heart Church of Akandjé Together',
    hero_subtitle: 'Your donation, a precious stone for our church',
    hero_quote: 'Each one must give as he has decided in his heart...',
    hero_reference: '2 Corinthians 9:7',
    donate_now: 'Donate Now',
    learn_more: 'Learn More',
    project_goal: 'Project Goal',
    raised_so_far: 'Raised So Far',
    major_benefactors: 'Major Benefactors',
    view_all: 'View All',
    giving_circles: 'Giving Circles',
    free_donation: 'Free Gift Donation',
    sponsor_element: 'Sponsor a Heritage Element',
    builders_circle: 'The "Sacred Heart Builders" Circle',
    founders_circle: 'The "Founders" Circle',
    monthly_donors: 'Monthly giving program',
    exceptional_donors: 'Exceptional gifts above 10,000,000 FCFA',
    choose_amount: 'Choose Your Amount',
    custom_amount: 'Custom Amount',
    personal_info: 'Personal Information',
    first_name: 'First Name',
    last_name: 'Last Name',
    email: 'Email',
    phone: 'Phone',
    company: 'Company (optional)',
    profession: 'Profession (optional)',
    country: 'Country',
    donation_type: 'Donation Type',
    one_time: 'One-time',
    monthly: 'Monthly',
    quarterly: 'Quarterly',
    annual: 'Annual',
    payment_method: 'Payment Method',
    mobile_money: 'Mobile Money',
    bank_card: 'Bank Card',
    bank_transfer: 'Bank Transfer',
    dedication: 'Dedication Message (optional)',
    anonymous: 'Anonymous donation',
    submit_donation: 'Confirm Donation',
    corporate_sponsorship: 'Corporate Sponsorship',
    corporate_subtitle: 'Join our circle of prestigious partners',
    corporate_benefits: 'Sponsorship Benefits',
    tax_deduction: 'Tax deduction',
    visibility: 'Brand visibility',
    csr: 'CSR commitment',
    download_brochure: 'Download Partnership Brochure',
    contact_us: 'Contact Us',
    transparency_title: 'Transparency & Progress',
    financial_reports: 'Financial Reports',
    construction_progress: 'Construction Progress',
    project_updates: 'Project Updates',
    budget_breakdown: 'Budget Breakdown',
    total_budget: 'Total Budget',
    spent: 'Spent',
    remaining: 'Remaining',
    available_elements: 'Available Elements for Sponsorship',
    sponsored: 'Sponsored',
    available: 'Available',
    sponsor_this: 'Sponsor',
    fcfa: 'FCFA',
    footer_about: 'About',
    footer_contact: 'Contact',
    footer_legal: 'Legal Notice',
    footer_privacy: 'Privacy',
    recognition_founder: 'Founder',
    recognition_platinum: 'Platinum',
    recognition_gold: 'Gold',
    recognition_silver: 'Silver',
    recognition_bronze: 'Bronze',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

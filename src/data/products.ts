import { Product, PremiumPlan } from '@/types';

export const products: Record<string, Product> = {
  cours: { name: 'Cours complet', price: 50, icon: '📚' },
  resume_cours: { name: 'Résumé de cours', price: 200, icon: '📄', availableFrom: 'CM1' },
  exercices: { name: 'Exercices et corrigés', price: 150, icon: '✏️' },
  expose_simple: { name: 'Exposé simple', price: 350, icon: '📊', availableFrom: 'college' },
  expose_complet: { name: 'Exposé complet', price: 700, icon: '📑', availableFrom: 'college' }
};

export const specialProducts: Product[] = [
  { name: 'Astuces de calcul', price: 100, icon: '🧮' },
  { name: 'Culture générale (5 infos)', price: 250, icon: '💡' },
  { name: 'Méthodologie mémoire basique', price: 350, icon: '🧠' },
  { name: 'Méthodologie mémoire avancée', price: 500, icon: '🧠' },
  { name: 'Livre (commande personnalisée)', price: 300, icon: '📚' },
  { name: 'Cours adapté et personnalisé', price: 250, icon: '🎯' }
];

export const premiumPlans: PremiumPlan[] = [
  {
    name: 'Premium Hebdo',
    price: 700,
    duration: 'semaine',
    services: 5,
    features: [
      '5 services au choix par semaine',
      'Sauvegarde des fiches',
      'Accès vidéos interactives',
      'Historique des commandes'
    ]
  },
  {
    name: 'Premium Plus',
    price: 1000,
    duration: 'semaine',
    services: 8,
    features: [
      '8 services au choix par semaine',
      'Sauvegarde des fiches',
      'Accès vidéos interactives',
      'Historique des commandes',
      'Support prioritaire'
    ]
  },
  {
    name: 'Premium Elite',
    price: 3000,
    duration: 'semaine',
    services: 15,
    features: [
      '15 services au choix par semaine',
      'Sauvegarde des fiches',
      'Accès vidéos interactives',
      'Historique des commandes',
      'Support prioritaire',
      'Chat privé avec le gérant',
      'Conseils personnalisés'
    ]
  }
];

export interface BookCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const bookCategories: BookCategory[] = [
  {
    id: 'roman',
    name: 'Romans et Fiction',
    icon: '📖',
    description: 'Romans classiques et contemporains, fiction littéraire'
  },
  {
    id: 'science',
    name: 'Sciences et Technologie',
    icon: '🔬',
    description: 'Livres scientifiques, informatique, mathématiques'
  },
  {
    id: 'developpement',
    name: 'Développement Personnel',
    icon: '🌟',
    description: 'Motivation, productivité, psychologie positive'
  },
  {
    id: 'business',
    name: 'Business et Économie',
    icon: '💼',
    description: 'Entrepreneuriat, finance, gestion d\'entreprise'
  },
  {
    id: 'histoire',
    name: 'Histoire et Biographie',
    icon: '📜',
    description: 'Histoire mondiale, biographies de personnalités'
  },
  {
    id: 'philosophie',
    name: 'Philosophie et Spiritualité',
    icon: '🧘',
    description: 'Philosophie, religion, méditation, sagesse'
  },
  {
    id: 'jeunesse',
    name: 'Jeunesse et Éducation',
    icon: '🎒',
    description: 'Livres pour enfants, manuels scolaires'
  },
  {
    id: 'sante',
    name: 'Santé et Bien-être',
    icon: '🏥',
    description: 'Médecine, nutrition, forme physique'
  },
  {
    id: 'art',
    name: 'Art et Culture',
    icon: '🎨',
    description: 'Beaux-arts, musique, photographie, cinéma'
  },
  {
    id: 'cuisine',
    name: 'Cuisine et Gastronomie',
    icon: '🍳',
    description: 'Recettes, cuisine internationale, pâtisserie'
  },
  {
    id: 'voyage',
    name: 'Voyage et Aventure',
    icon: '✈️',
    description: 'Guides de voyage, récits d\'aventure'
  },
  {
    id: 'droit',
    name: 'Droit et Politique',
    icon: '⚖️',
    description: 'Livres juridiques, sciences politiques'
  }
];

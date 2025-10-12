export const subjects: Record<string, string[] | Record<string, string[]>> = {
  primaire: ['Mathématiques', 'Français', 'Histoire-Géographie', 'Sciences', 'Education Civique'],
  college: ['Mathématiques', 'Français', 'Anglais', 'SVT', 'Physique-Chimie', 'Histoire-Géo', 'EPS'],
  lycee: {
    'Série A': ['Français', 'Philosophie', 'Histoire-Géo', 'Mathématiques', 'Anglais', 'Espagnol'],
    'Série C': ['Mathématiques', 'Physique-Chimie', 'SVT', 'Français', 'Philosophie', 'Anglais'],
    'Série D': ['Mathématiques', 'Physique-Chimie', 'SVT', 'Français', 'Philosophie', 'Anglais'],
    'Série F1': ['Mathématiques', 'Physique', 'Technologie', 'Dessin Technique', 'Français'],
    'Série F2': ['Mathématiques', 'Physique', 'Électronique', 'Technologie', 'Français'],
    'Série F3': ['Mathématiques', 'Électricité', 'Électronique', 'Technologie', 'Français'],
    'Série G': ['Économie', 'Comptabilité', 'Mathématiques', 'Droit', 'Français']
  },
  universite: ['Droit', 'Médecine', 'Ingénierie Informatique', 'Économie et Gestion', 'Pharmacie', 'Génie Civil', 'Lettres Modernes']
};

export const coursesBySubject: Record<string, string[]> = {
  'Mathématiques-Primaire': [
    'Les nombres de 0 à 10',
    'Addition et soustraction',
    'Les tables de multiplication',
    'La division',
    'Les formes géométriques',
    'Mesures : longueur, poids, capacité'
  ],
  'Français-Primaire': [
    'L\'alphabet et les sons',
    'Lecture et compréhension',
    'Écriture et copie',
    'Le vocabulaire',
    'La grammaire de base',
    'Conjugaison'
  ],
  'Mathématiques-Collège': [
    'Nombres relatifs',
    'Fractions et opérations',
    'Calcul littéral',
    'Équations du premier degré',
    'Proportionnalité',
    'Théorème de Pythagore'
  ],
  'Mathématiques': [
    'Ensembles et applications',
    'Nombres complexes',
    'Fonctions numériques',
    'Suites numériques',
    'Dérivées et primitives',
    'Calcul intégral'
  ],
  'Physique-Chimie': [
    'Mécanique',
    'Électricité',
    'Optique',
    'Thermodynamique',
    'Chimie organique',
    'Réactions chimiques'
  ],
  'SVT': [
    'Génétique',
    'Évolution',
    'Écologie',
    'Physiologie humaine',
    'Biologie cellulaire',
    'Immunologie'
  ],
  'Droit': [
    'Droit constitutionnel',
    'Droit civil',
    'Droit pénal',
    'Histoire du droit',
    'Procédure civile'
  ],
  'Médecine': [
    'Anatomie générale',
    'Physiologie humaine',
    'Biochimie médicale',
    'Histologie',
    'Microbiologie'
  ]
};

import { Level } from '@/types';

export const levels: Record<string, Level> = {
  primaire: {
    id: 'primaire',
    name: 'Primaire',
    classes: ['CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2']
  },
  
  college: {
    id: 'college',
    name: 'Collège',
    classes: ['6ème', '5ème', '4ème', '3ème']
  },
  
  lycee: {
    id: 'lycee',
    name: 'Lycée',
    types: {
      'Lycée Général': {
        series: {
          'Série A': ['2nde A', '1ère A', 'Terminale A'],
          'Série C': ['2nde C', '1ère C', 'Terminale C'],
          'Série D': ['2nde D', '1ère D', 'Terminale D']
        }
      },
      'Lycée Technique': {
        series: {
          'Série F1': ['2nde F1', '1ère F1', 'Terminale F1'],
          'Série F2': ['2nde F2', '1ère F2', 'Terminale F2'],
          'Série F3': ['2nde F3', '1ère F3', 'Terminale F3'],
          'Série G': ['2nde G', '1ère G', 'Terminale G']
        }
      }
    }
  },
  
  universite: {
    id: 'universite',
    name: 'Université',
    // Filières standard (Licence 1 à Master 2)
    programs: {
      'Droit': {
        'Licence 1': ['Licence 1'],
        'Licence 2': ['Licence 2'],
        'Licence 3': {
          branches: ['Droit Privé', 'Droit Public']
        },
        'Master 1': {
          branches: ['Privé', 'Public']
        },
        'Master 2': {
          branches: ['Privé', 'Public']
        }
      },
      'Ingénierie Informatique': {
        'Licence 1': ['Licence 1'],
        'Licence 2': ['Licence 2'],
        'Licence 3': ['Licence 3'],
        'Master 1': ['Master 1'],
        'Master 2': ['Master 2']
      },
      'Économie et Gestion': {
        'Licence 1': ['Licence 1'],
        'Licence 2': ['Licence 2'],
        'Licence 3': ['Licence 3'],
        'Master 1': ['Master 1'],
        'Master 2': ['Master 2']
      },
      'Génie Civil': {
        'Licence 1': ['Licence 1'],
        'Licence 2': ['Licence 2'],
        'Licence 3': ['Licence 3'],
        'Master 1': ['Master 1'],
        'Master 2': ['Master 2']
      },
      'Lettres Modernes': {
        'Licence 1': ['Licence 1'],
        'Licence 2': ['Licence 2'],
        'Licence 3': ['Licence 3'],
        'Master 1': ['Master 1'],
        'Master 2': ['Master 2']
      }
    },
      'Médecine': ['1ère Année', '2ème Année', '3ème Année', '4ème Année', '5ème Année', '6ème Année', '7ème Année'],
      'Pharmacie': ['1ère Année', '2ème Année', '3ème Année', '4ème Année', '5ème Année']
    }
  }
};
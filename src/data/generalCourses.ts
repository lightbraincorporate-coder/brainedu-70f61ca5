
export interface GeneralCourseDefinition {
  level: string;
  class: string;
  subject: string;
  trimester: string;
  count: number; 
  driveLinks?: string[]; 
}


export const generalCoursesData: GeneralCourseDefinition[] = [

  {
    level: 'primaire',
    class: 'CP1',
    subject: 'Mathématiques',
    trimester: 'Trimestre 1',
    count: 8,
    driveLinks: [
      'https://drive.google.com/file/d/exemple1',
      'https://drive.google.com/file/d/exemple2',
      
    ]
  },
  {
    level: 'primaire',
    class: 'CP1',
    subject: 'Français',
    trimester: 'Trimestre 1',
    count: 6
  },

  {
    level: 'college',
    class: '6ème',
    subject: 'Mathématiques',
    trimester: 'Trimestre 1',
    count: 10
  },
  {
    level: 'college',
    class: '6ème',
    subject: 'Français',
    trimester: 'Trimestre 1',
    count: 8
  },


  {
    level: 'lycee',
    class: '2nde A',
    subject: 'Mathématiques',
    trimester: 'Trimestre 1',
    count: 12
  },
  {
    level: 'lycee',
    class: 'Terminale C',
    subject: 'Physique-Chimie',
    trimester: 'Trimestre 2',
    count: 15
  },


];


export const generateGeneralCourseId = (
  level: string,
  className: string,
  subject: string,
  trimester: string,
  courseNumber: number
): string => {
  const subjectAbbr: Record<string, string> = {
    'Mathématiques': 'M',
    'Français': 'F',
    'Sciences': 'S',
    'Education Civique': 'EC',
    'Histoire-Géographie': 'HG',
    'Anglais': 'A',
    'SVT': 'SVT',
    'Physique-Chimie': 'PC',
    'Histoire-Géo': 'HG',
    'EPS': 'EPS',
    'Philosophie': 'P',
    'Espagnol': 'E',
    'Physique': 'PH',
    'Technologie': 'T',
    'Dessin Technique': 'DT',
    'Électronique': 'EL',
    'Électricité': 'ELEC',
    'Économie': 'ECO',
    'Comptabilité': 'COMPT',
    'Droit': 'DR'
  };

  const abbr = subjectAbbr[subject] || subject.substring(0, 2).toUpperCase();
  const trimesterNum = trimester.replace('Trimestre ', 'T');

  return `GEN-${abbr}${className}${trimesterNum}C${courseNumber}`;
};

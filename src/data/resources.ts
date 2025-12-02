import { subjects, coursesBySubject } from '@/data/subjects';

export interface Course {
  id: string;
  title: string;
  type: 'general' | 'specific';
  level: string;
  class: string;
  subject: string;
  trimester: string;
  driveLink?: string;
  description?: string;
}

export interface Exercise {
  id: string;
  title: string;
  linkedCourseId: string;
  hasCorrection: boolean;
  level: string;
  class: string;
  subject: string;
  trimester: string;
  driveLink?: string;
}

export interface Summary {
  id: string;
  title: string;
  linkedCourseId: string;
  level: string;
  class: string;
  subject: string;
  trimester: string;
  driveLink?: string;
}

export interface Expose {
  id: string;
  title: string;
  linkedCourseId: string;
  level: string;
  class: string;
  subject: string;
  trimester: string;
  driveLink?: string;
}

const generateShortId = (subject: string, className: string, trimester: string, courseIndex: number): string => {
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
  const courseNum = `C${courseIndex + 1}`;
  
  return `${abbr}${className}${trimesterNum}${courseNum}`;
};

export const specificCourses: Course[] = [];

Object.entries(coursesBySubject).forEach(([key, trimesters]) => {
  const parts = key.split('-');
  const subject = parts[0];
  const className = parts.slice(1).join('-');

  let level = 'primaire';
  if (['6ème', '5ème', '4ème', '3ème'].some(c => className.includes(c.replace('ème', '')))) {
    level = 'college';
  } else if (className.includes('nde') || className.includes('ère') || className.includes('Terminale')) {
    level = 'lycee';
  }

  Object.entries(trimesters).forEach(([trimester, courseList]) => {
    courseList.forEach((courseTitle, index) => {
      const courseId = generateShortId(subject, className, trimester, index);
      
      const course: Course = {
        id: courseId,
        title: courseTitle,
        type: 'specific',
        level,
        class: className,
        subject,
        trimester,
        driveLink: '',
        description: `Cours ${index + 1} du ${trimester.toLowerCase()} de ${className} en ${subject}`
      };

      specificCourses.push(course);
    });
  });
});

export const generalCourses: Course[] = [];
export const exercises: Exercise[] = [];
export const summaries: Summary[] = [];
export const exposes: Expose[] = [];

export const initializeCourses = () => {
  console.log(`${specificCourses.length} cours spécifiques chargés`);
};

export const getCoursesByLevel = (level: string, courseType: 'general' | 'specific') => {
  const courses = courseType === 'general' ? generalCourses : specificCourses;
  return courses.filter(c => c.level === level);
};

export const getCoursesByClass = (level: string, className: string, courseType: 'general' | 'specific') => {
  const courses = courseType === 'general' ? generalCourses : specificCourses;
  return courses.filter(c => c.level === level && c.class === className);
};

export const getCoursesBySubject = (level: string, className: string, subject: string, courseType: 'general' | 'specific') => {
  const courses = courseType === 'general' ? generalCourses : specificCourses;
  return courses.filter(c => c.level === level && c.class === className && c.subject === subject);
};

export const getCoursesByTrimester = (level: string, className: string, subject: string, trimester: string, courseType: 'general' | 'specific') => {
  const courses = courseType === 'general' ? generalCourses : specificCourses;
  return courses.filter(c => 
    c.level === level && 
    c.class === className && 
    c.subject === subject && 
    c.trimester === trimester
  );
};

export const getCourseById = (courseId: string) => {
  return [...specificCourses, ...generalCourses].find(c => c.id === courseId);
};

export const getExercisesByCourse = (courseId: string) => {
  return exercises.filter(e => e.linkedCourseId === courseId);
};

export const getSummariesByCourse = (courseId: string) => {
  return summaries.filter(s => s.linkedCourseId === courseId);
};

export const getExposesByCourse = (courseId: string) => {
  return exposes.filter(e => e.linkedCourseId === courseId);
};

export const updateCourseDriveLink = (courseId: string, driveLink: string) => {
  const course = getCourseById(courseId);
  if (course) {
    course.driveLink = driveLink;
  }
};

export const addExercise = (exercise: Omit<Exercise, 'id'>) => {
  const newExercise: Exercise = {
    ...exercise,
    id: `exercise_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
  };
  exercises.push(newExercise);
  return newExercise;
};

export const addSummary = (summary: Omit<Summary, 'id'>) => {
  const newSummary: Summary = {
    ...summary,
    id: `summary_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
  };
  summaries.push(newSummary);
  return newSummary;
};

export const addExpose = (expose: Omit<Expose, 'id'>) => {
  const newExpose: Expose = {
    ...expose,
    id: `expose_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
  };
  exposes.push(newExpose);
  return newExpose;
};

initializeCourses();

updateCourseDriveLink('ECCP1T1', 'https://drive.google.com/file/d/1JI6aE54sYmxeafDS8S_TqcjFwIv5koL7/view?usp=drivesdk');

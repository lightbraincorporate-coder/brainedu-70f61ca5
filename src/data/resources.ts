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

export const specificCourses: Course[] = [
  {
    id: 'course_cp1_fr_t1_1',
    title: 'Cours 1',
    type: 'specific',
    level: 'primaire',
    class: 'CP1',
    subject: 'Français',
    trimester: 'Trimestre 1',
    driveLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE',
  },
  {
    id: 'course_cp1_fr_t1_2',
    title: 'Cours 2',
    type: 'specific',
    level: 'primaire',
    class: 'CP1',
    subject: 'Français',
    trimester: 'Trimestre 1',
    driveLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE',
  },
  {
    id: 'course_5e_hg_t1_1',
    title: 'Cours 1',
    type: 'specific',
    level: 'college',
    class: '5e',
    subject: 'Histoire Géographie',
    trimester: 'Trimestre 1',
    driveLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE',
  },
];

export const generalCourses: Course[] = [
  {
    id: 'gen_course_cp1_fr_t1_1',
    title: 'Cours 1',
    type: 'general',
    level: 'primaire',
    class: 'CP1',
    subject: 'Français',
    trimester: 'Trimestre 1',
    driveLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE',
  },
  {
    id: 'gen_course_cp1_fr_t1_2',
    title: 'Cours 2',
    type: 'general',
    level: 'primaire',
    class: 'CP1',
    subject: 'Français',
    trimester: 'Trimestre 1',
    driveLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE',
  },
];

export const exercises: Exercise[] = [
  {
    id: 'ex_cp1_fr_t1_1',
    title: 'Exercice 1',
    linkedCourseId: 'course_cp1_fr_t1_1',
    hasCorrection: true,
    level: 'primaire',
    class: 'CP1',
    subject: 'Français',
    trimester: 'Trimestre 1',
    driveLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE',
  },
];

export const summaries: Summary[] = [
  {
    id: 'sum_cp1_fr_t1_1',
    title: 'Résumé Cours 1',
    linkedCourseId: 'course_cp1_fr_t1_1',
    level: 'primaire',
    class: 'CP1',
    subject: 'Français',
    trimester: 'Trimestre 1',
    driveLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE',
  },
];

export const exposes: Expose[] = [
  {
    id: 'exp_cp1_fr_t1_1',
    title: 'Exposé Cours 1',
    linkedCourseId: 'course_cp1_fr_t1_1',
    level: 'primaire',
    class: 'CP1',
    subject: 'Français',
    trimester: 'Trimestre 1',
    driveLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE',
  },
];

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

export const specificCourses: Course[] = [];
export const generalCourses: Course[] = [];
export const exercises: Exercise[] = [];
export const summaries: Summary[] = [];
export const exposes: Expose[] = [];

export const initializeCourses = () => {
  specificCourses.length = 0;
  generalCourses.length = 0;

  Object.entries(coursesBySubject).forEach(([key, trimesters]) => {
    const parts = key.split('-');
    const subject = parts[0];
    const className = parts[1];

    let level = 'primaire';
    if (['6e', '5e', '4e', '3e'].some(c => key.includes(c))) {
      level = 'college';
    } else if (key.includes('nde')  key.includes('ère')  key.includes('Terminale')) {
      level = 'lycee';
    } else if (key.includes('Licence') || key.includes('Master')) {
      level = 'universite';
    }

    Object.entries(trimesters).forEach(([trimester, courseList]) => {
      courseList.forEach((courseTitle, index) => {
        const courseId = course_${level}_${className}_${subject}_${trimester}_${index}.replace(/\s+/g, '_');
        
        const course: Course = {
          id: courseId,
          title: courseTitle,
          type: 'specific',
          level,
          class: className,
          subject,
          trimester,
          driveLink: undefined, // À remplir avec les liens Drive
        };

        specificCourses.push(course);
      });
    });
  });
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

export interface Course {
  id: string;
  title: string;
  type: 'general' | 'specific';
  level: string;
  class: string;
  subject: string;
  trimester: string;
  driveLink?: string; // Lien Google Drive du fichier du cours
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
};
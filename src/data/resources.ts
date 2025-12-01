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

export interface Course 
  id: ECCP1T1;
  title: 'Vivre ensemble';
  type:'specific';
  level: 'Primaire';
  class: 'Cp1';
  subject: 'Education civique';
  trimester: 'trimestre 1';
  driveLink?: https://drive.google.com/file/d/1JI6aE54sYmxeafDS8S_TqcjFwIv5koL7/view?usp=drivesdk;
  description?: 'cours du premier trimestre du cp1, d'\'éducation civique' ;

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
    } else if (key.includes('nde') || key.includes('ère') || key.includes('Terminale')) {
      level = 'lycee';
    } else if (key.includes('Licence') || key.includes('Master')) {
      level = 'universite';
    }

    Object.entries(trimesters).forEach(([trimester, courseList]) => {
      courseList.forEach((courseTitle, index) => {
        const courseId = `course_${level}_${className}_${subject}_${trimester}_${index}`.replace(/\s+/g, '_');
        
        const course: Course = {
          id: courseId,
          title: courseTitle,
          type: 'specific',
          level,
          class: className,
          subject,
          trimester,
          driveLink: undefined,
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
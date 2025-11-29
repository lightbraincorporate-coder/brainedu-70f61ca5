import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Download, BookOpen, FileText, Brain, Presentation } from 'lucide-react';
import { levels } from '@/data/levels';
import { subjects } from '@/data/subjects';
import {
  specificCourses,
  generalCourses,
  getCoursesByTrimester,
  getCourseById,
  getExercisesByCourse,
  getSummariesByCourse,
  getExposesByCourse
} from '@/data/resources';

interface CourseCatalogPageProps {
  onNavigate: (page: string, resourceType?: string, courseId?: string) => void;
}

const CourseCatalogPage = ({ onNavigate }: CourseCatalogPageProps) => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSerie, setSelectedSerie] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTrimester, setSelectedTrimester] = useState<string | null>(null);
  const [selectedCourseType, setSelectedCourseType] = useState<'general' | 'specific' | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  // Remonte en haut à chaque changement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedLevel, selectedType, selectedSerie, selectedClass, selectedSubject, selectedTrimester, selectedCourseType, selectedCourse]);

  const resetNavigation = () => {
    setSelectedLevel(null);
    setSelectedType(null);
    setSelectedSerie(null);
    setSelectedClass(null);
    setSelectedSubject(null);
    setSelectedTrimester(null);
    setSelectedCourseType(null);
    setSelectedCourse(null);
  };

  const handleBack = () => {
    if (selectedCourse) setSelectedCourse(null);
    else if (selectedCourseType) setSelectedCourseType(null);
    else if (selectedTrimester) setSelectedTrimester(null);
    else if (selectedSubject) setSelectedSubject(null);
    else if (selectedClass) setSelectedClass(null);
    else if (selectedSerie) setSelectedSerie(null);
    else if (selectedType) setSelectedType(null);
    else if (selectedLevel) setSelectedLevel(null);
  };

  const getSubjectsForLevel = () => {
    if (!selectedLevel || !selectedClass) return [];
    
    if (selectedLevel === 'primaire') {
      const primaireSubjects = subjects.primaire as Record<string, string[]>;
      return primaireSubjects[selectedClass] || [];
    }
    
    if (selectedLevel === 'lycee' && selectedSerie) {
      const lyceeSubjects = subjects.lycee as Record<string, string[]>;
      return lyceeSubjects[selectedSerie] || [];
    }
    
    const levelSubjects = subjects[selectedLevel];
    return Array.isArray(levelSubjects) ? levelSubjects : [];
  };

  const getTrimestersForSubject = () => {
    if (!selectedSubject) return [];
    return ['Trimestre 1', 'Trimestre 2', 'Trimestre 3'];
  };

  const getCoursesForTrimester = () => {
    if (!selectedSubject || !selectedTrimester || !selectedCourseType) return [];
    
    return getCoursesByTrimester(
      selectedLevel || '',
      selectedClass || '',
      selectedSubject,
      selectedTrimester,
      selectedCourseType
    );
  };

  const currentCourse = selectedCourse ? getCourseById(selectedCourse) : null;
  const relatedExercises = currentCourse ? getExercisesByCourse(currentCourse.id) : [];
  const relatedSummaries = currentCourse ? getSummariesByCourse(currentCourse.id) : [];
  const relatedExposes = currentCourse ? getExposesByCourse(currentCourse.id) : [];

  const handleDownload = (driveLink?: string) => {
    if (driveLink) {
      window.open(driveLink, '_blank');
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground flex-wrap select-none">
          <span 
            className="cursor-pointer hover:text-foreground hover:underline transition-colors"
            onClick={resetNavigation}
          >
            Catalogue
          </span>
          {selectedLevel && (
            <>
              <span>/</span>
              <span 
                className="cursor-pointer hover:text-foreground hover:underline transition-colors"
                onClick={() => {
                  setSelectedType(null);
                  setSelectedSerie(null);
                  setSelectedClass(null);
                  setSelectedSubject(null);
                  setSelectedTrimester(null);
                  setSelectedCourseType(null);
                  setSelectedCourse(null);
                }}
              >
                {levels[selectedLevel].name}
              </span>
            </>
          )}
          {selectedType && (
            <>
              <span>/</span>
              <span 
                className="cursor-pointer hover:text-foreground hover:underline transition-colors"
                onClick={() => {
                  setSelectedSerie(null);
                  setSelectedClass(null);
                  setSelectedSubject(null);
                  setSelectedTrimester(null);
                  setSelectedCourseType(null);
                  setSelectedCourse(null);
                }}
              >
                {selectedType}
              </span>
            </>
          )}
          {selectedSerie && (
            <>
              <span>/</span>
              <span 
                className="cursor-pointer hover:text-foreground hover:underline transition-colors"
                onClick={() => {
                  setSelectedClass(null);
                  setSelectedSubject(null);
                  setSelectedTrimester(null);
                  setSelectedCourseType(null);
                  setSelectedCourse(null);
                }}
              >
                {selectedSerie}
              </span>
            </>
          )}
          {selectedClass && (
            <>
              <span>/</span>
              <span 
                className="cursor-pointer hover:text-foreground hover:underline transition-colors"
                onClick={() => {
                  setSelectedSubject(null);
                  setSelectedTrimester(null);
                  setSelectedCourseType(null);
                  setSelectedCourse(null);
                }}
              >
                {selectedClass}
              </span>
            </>
          )}
          {selectedSubject && (
            <>
              <span>/</span>
              <span 
                className="cursor-pointer hover:text-foreground hover:underline transition-colors"
                onClick={() => {
                  setSelectedTrimester(null);
                  setSelectedCourseType(null);
                  setSelectedCourse(null);
                }}
              >
                {selectedSubject}
              </span>
            </>
          )}
          {selectedTrimester && (
            <>
              <span>/</span>
              <span 
                className="cursor-pointer hover:text-foreground hover:underline transition-colors"
                onClick={() => {
                  setSelectedCourseType(null);
                  setSelectedCourse(null);
                }}
              >
                {selectedTrimester}
              </span>
            </>
          )}
          {selectedCourseType && (
            <>
              <span>/</span>
              <span 
                className="cursor-pointer hover:text-foreground hover:underline transition-colors"
                onClick={() => setSelectedCourse(null)}
              >
                {selectedCourseType === 'specific' ? 'Cours Spécifiques' : 'Cours Généraux'}
              </span>
            </>
          )}
          {selectedCourse && (
            <>
              <span>/</span>
              <span className="text-foreground font-medium">{currentCourse?.title}</span>
            </>
          )}
        </div>

        {/* Back Button */}
        {selectedLevel && (
          <Button variant="outline" onClick={handleBack} className="mb-6 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Button>
        )}

        {/* Level Selection */}
        {!selectedLevel && (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold mb-6">Choisissez votre niveau</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(levels).map((level, index) => (
                <Card 
                  key={level.id}
                  className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in border-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedLevel(level.id)}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{level.name}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Type Selection (Lycée only) */}
        {selectedLevel === 'lycee' && !selectedType && (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold mb-6">Choisissez le type de lycée</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.keys(levels.lycee.types!).map((type, index) => (
                <Card 
                  key={type}
                  className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedType(type)}
                >
                  <CardHeader>
                    <CardTitle>{type}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Serie Selection (Lycée only) */}
        {selectedLevel === 'lycee' && selectedType && !selectedSerie && (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold mb-6">Choisissez votre série</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.keys(levels.lycee.types![selectedType].series).map((serie, index) => (
                <Card 
                  key={serie}
                  className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedSerie(serie)}
                >
                  <CardHeader>
                    <CardTitle>{serie}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Class Selection */}
        {selectedLevel && !selectedClass && (
          selectedLevel !== 'lycee' || (selectedLevel === 'lycee' && selectedSerie)
        ) && (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold mb-6">Choisissez votre classe</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {(selectedLevel === 'lycee' && selectedType && selectedSerie
                ? levels.lycee.types![selectedType].series[selectedSerie]
                : levels[selectedLevel].classes || []
              ).map((cls, index) => (
                <Card
                  key={cls}
                  className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in text-center"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedClass(cls)}
                >
                  <CardContent className="pt-8 pb-6">
                    <p className="text-lg font-semibold">{cls}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Subject Selection */}
        {selectedClass && !selectedSubject && (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold mb-6">Choisissez votre matière</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {getSubjectsForLevel().map((subject, index) => (
                <Card 
                  key={subject}
                  className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedSubject(subject)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{subject}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Trimester Selection */}
        {selectedSubject && !selectedTrimester && (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold mb-6">Choisissez un trimestre</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {getTrimestersForSubject().map((trimester, index) => (
                <Card 
                  key={trimester}
                  className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedTrimester(trimester)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{trimester}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Course Type Selection */}
        {selectedTrimester && !selectedCourseType && (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold mb-6">Choisissez le type de cours</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card 
                className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in"
                onClick={() => setSelectedCourseType('specific')}
              >
                <CardHeader>
                  <CardTitle>Cours Spécifiques</CardTitle>
                  <CardDescription>
                    Les cours essentiels et importants (1-2 cours)
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card 
                className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: '100ms' }}
                onClick={() => setSelectedCourseType('general')}
              >
                <CardHeader>
                  <CardTitle>Cours Généraux</CardTitle>
                  <CardDescription>
                    Tous les cours disponibles (nombreux, moins précis)
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}

        {/* Course Selection */}
        {selectedCourseType && !selectedCourse && (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold mb-6">
              {selectedCourseType === 'specific' ? 'Cours Spécifiques' : 'Cours Généraux'}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCoursesForTrimester().map((course, index) => (
                <Card 
                  key={course.id}
                  className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedCourse(course.id)}
                >
                  <CardHeader>
                    <CardTitle className="text-base">{course.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Course Detail View */}
        {selectedCourse && currentCourse && (
          <div className="animate-fade-in space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{currentCourse.title}</h1>
              <p className="text-muted-foreground">
                {selectedClass} - {selectedSubject} - {selectedTrimester}
              </p>
              
              {/* Download Button */}
              {currentCourse.driveLink && (
                <Button 
                  size="lg"
                  onClick={() => handleDownload(currentCourse.driveLink)}
                  className="gap-2"
                >
                  <Download className="w-5 h-5" />
                  Télécharger le cours
                </Button>
              )}
            </div>

            {/* Related Content Cards */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contenu associé</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Exercises Card */}
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
                  onClick={() => onNavigate('catalog', 'exercises', currentCourse.id)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle>Exercices & Corrections</CardTitle>
                    </div>
                    <CardDescription>
                      {relatedExercises.length} exercice{relatedExercises.length > 1 ? 's' : ''} disponible{relatedExercises.length > 1 ? 's' : ''}
                    </CardDescription>
                  </CardHeader>
                </Card>

                {/* Summaries Card */}
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
                  onClick={() => onNavigate('catalog', 'summaries', currentCourse.id)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle>Résumés de Cours</CardTitle>
                    </div>
                    <CardDescription>
                      {relatedSummaries.length} résumé{relatedSummaries.length > 1 ? 's' : ''} disponible{relatedSummaries.length > 1 ? 's' : ''}
                    </CardDescription>
                  </CardHeader>
                </Card>

                {/* Exposes Card */}
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
                  onClick={() => onNavigate('catalog', 'exposes', currentCourse.id)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                        <Presentation className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle>Exposés</CardTitle>
                    </div>
                    <CardDescription>
                      {relatedExposes.length} exposé{relatedExposes.length > 1 ? 's' : ''} disponible{relatedExposes.length > 1 ? 's' : ''}
                    </CardDescription>
                  </CardHeader>
                </Card>

                {/* Back to Courses Card */}
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
                  onClick={() => setSelectedCourse(null)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle>Autres Cours</CardTitle>
                    </div>
                    <CardDescription>
                      Retourner à la liste des cours
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCatalogPage;
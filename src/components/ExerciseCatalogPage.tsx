import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Download } from 'lucide-react';
import { levels } from '@/data/levels';
import { subjects } from '@/data/subjects';
import {
  exercises,
  getCourseById
} from '@/data/resources';

interface ExerciseCatalogPageProps {
  onNavigate: (page: string, resourceType?: string, courseId?: string) => void;
  linkedCourseId?: string; // Filtre optionnel pour un cours spécifique
}

const ExerciseCatalogPage = ({ onNavigate, linkedCourseId }: ExerciseCatalogPageProps) => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSerie, setSelectedSerie] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTrimester, setSelectedTrimester] = useState<string | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedLevel, selectedType, selectedSerie, selectedClass, selectedSubject, selectedTrimester, selectedExercise]);

  const resetNavigation = () => {
    setSelectedLevel(null);
    setSelectedType(null);
    setSelectedSerie(null);
    setSelectedClass(null);
    setSelectedSubject(null);
    setSelectedTrimester(null);
    setSelectedExercise(null);
  };

  const handleBack = () => {
    if (selectedExercise) setSelectedExercise(null);
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

  const getExercisesForTrimester = () => {
    if (!selectedSubject || !selectedTrimester) return [];
    
    let filtered = exercises.filter(e =>
      e.level === selectedLevel &&
      e.class === selectedClass &&
      e.subject === selectedSubject &&
      e.trimester === selectedTrimester
    );

    // Si on a un courseId lié, on filtre par celui-ci
    if (linkedCourseId) {
      filtered = filtered.filter(e => e.linkedCourseId === linkedCourseId);
    }

    return filtered;
  };

  const currentExercise = selectedExercise ? exercises.find(e => e.id === selectedExercise) : null;
  const linkedCourse = currentExercise ? getCourseById(currentExercise.linkedCourseId) : null;

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
            Exercices
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
                  setSelectedExercise(null);
                }}
              >
                {levels[selectedLevel].name}
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
                  setSelectedExercise(null);
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
                  setSelectedExercise(null);
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
                onClick={() => setSelectedExercise(null)}
              >
                {selectedTrimester}
              </span>
            </>
          )}
          {selectedExercise && (
            <>
              <span>/</span>
              <span className="text-foreground font-medium">{currentExercise?.title}</span>
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

        {/* Exercise Selection */}
        {selectedTrimester && !selectedExercise && (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold mb-6">Choisissez un exercice</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getExercisesForTrimester().map((exercise, index) => (
                <Card 
                  key={exercise.id}
                  className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedExercise(exercise.id)}
                >
                  <CardHeader>
                    <CardTitle className="text-base">{exercise.title}</CardTitle>
                    <CardDescription>
                      {exercise.hasCorrection ? 'Avec correction' : 'Sans correction'}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Exercise Detail View */}
        {selectedExercise && currentExercise && (
          <div className="animate-fade-in space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{currentExercise.title}</h1>
              <p className="text-muted-foreground">
                {selectedClass} - {selectedSubject} - {selectedTrimester}
              </p>
              {linkedCourse && (
                <p className="text-sm text-muted-foreground">
                  Lié au cours : <span className="font-semibold">{linkedCourse.title}</span>
                </p>
              )}
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm">
                  {currentExercise.hasCorrection ? '✓ Correction disponible' : 'Énoncé uniquement'}
                </span>
              </div>

              {/* Download Button */}
              {currentExercise.driveLink && (
                <Button 
                  size="lg"
                  onClick={() => handleDownload(currentExercise.driveLink)}
                  className="gap-2"
                >
                  <Download className="w-5 h-5" />
                  Télécharger l'exercice
                </Button>
              )}
            </div>

            {/* Back to Exercises Card */}
            <Card 
              className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
              onClick={() => setSelectedExercise(null)}
            >
              <CardHeader>
                <CardTitle>← Retour à la liste des exercices</CardTitle>
              </CardHeader>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseCatalogPage;
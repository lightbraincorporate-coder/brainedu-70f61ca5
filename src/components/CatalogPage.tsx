import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ShoppingCart, BookOpen } from 'lucide-react';
import { levels } from '@/data/levels';
import { subjects, coursesBySubject } from '@/data/subjects';
import { products } from '@/data/products';
import { CartItem } from '@/types';
import { toast } from 'sonner';

interface CatalogPageProps {
  onAddToCart: (item: CartItem) => void;
}

const CatalogPage = ({ onAddToCart }: CatalogPageProps) => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSerie, setSelectedSerie] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const resetNavigation = () => {
    setSelectedLevel(null);
    setSelectedType(null);
    setSelectedSerie(null);
    setSelectedClass(null);
    setSelectedSubject(null);
    setSelectedCourse(null);
  };

  const handleBack = () => {
    if (selectedCourse) setSelectedCourse(null);
    else if (selectedSubject) setSelectedSubject(null);
    else if (selectedClass) setSelectedClass(null);
    else if (selectedSerie) setSelectedSerie(null);
    else if (selectedType) setSelectedType(null);
    else if (selectedLevel) setSelectedLevel(null);
  };

  const handleAddToCart = (productKey: string, productName: string, price: number) => {
    const item: CartItem = {
      id: `${Date.now()}-${Math.random()}`,
      name: productName,
      price,
      course: selectedCourse ? {
        name: selectedCourse,
        level: selectedLevel || '',
        class: selectedClass || '',
        subject: selectedSubject || ''
      } : undefined
    };
    onAddToCart(item);
    toast.success(`${productName} ajouté au panier !`);
  };

  const getSubjectsForLevel = () => {
    if (!selectedLevel) return [];
    
    if (selectedLevel === 'lycee' && selectedSerie) {
      const lyceeSubjects = subjects.lycee as Record<string, string[]>;
      return lyceeSubjects[selectedSerie] || [];
    }
    
    const levelSubjects = subjects[selectedLevel];
    return Array.isArray(levelSubjects) ? levelSubjects : [];
  };

  const getCoursesForSubject = () => {
    if (!selectedSubject) return [];
    
    const key = selectedLevel === 'primaire' || selectedLevel === 'college'
      ? `${selectedSubject}-${selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)}`
      : selectedLevel === 'universite'
      ? `${selectedSubject}-Universite`
      : selectedSubject;
    
    return coursesBySubject[key] || [];
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <span className="cursor-pointer hover:text-foreground" onClick={resetNavigation}>Catalogue</span>
          {selectedLevel && <><span>/</span><span>{levels[selectedLevel].name}</span></>}
          {selectedType && <><span>/</span><span>{selectedType}</span></>}
          {selectedSerie && <><span>/</span><span>{selectedSerie}</span></>}
          {selectedClass && <><span>/</span><span>{selectedClass}</span></>}
          {selectedSubject && <><span>/</span><span>{selectedSubject}</span></>}
          {selectedCourse && <><span>/</span><span className="text-foreground font-medium">{selectedCourse}</span></>}
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
          <div>
            <h1 className="text-3xl font-bold mb-6 animate-fade-in">Choisissez votre niveau</h1>
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
                    <CardDescription>
                      {level.classes ? `${level.classes.length} classes disponibles` : 'Toutes séries'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BookOpen className="w-12 h-12 text-primary" />
                  </CardContent>
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

        {/* Course Selection */}
        {selectedSubject && !selectedCourse && (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold mb-6">Choisissez un cours</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCoursesForSubject().map((course, index) => (
                <Card 
                  key={course}
                  className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedCourse(course)}
                >
                  <CardHeader>
                    <CardTitle className="text-base">{course}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Products Selection */}
        {selectedCourse && (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">{selectedCourse}</h1>
            <p className="text-muted-foreground mb-8">{selectedClass} - {selectedSubject}</p>
            
            <h2 className="text-2xl font-semibold mb-6">Choisissez votre produit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(products).map(([key, product], index) => (
                <Card 
                  key={key}
                  className="animate-scale-in hover:shadow-lg transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {product.name}
                      <Badge variant="secondary">{product.price} F</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <Button 
                      className="w-full gap-2"
                      onClick={() => handleAddToCart(key, product.name, product.price)}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Ajouter au panier
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Sparkles, Crown, GraduationCap, FileText, Presentation, Brain } from 'lucide-react';
import BrainCorpInfo from './BrainCorpInfo';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const features = [
    {
      icon: BookOpen,
      title: 'Cours Complets',
      description: 'Accédez à des cours détaillés pour tous les niveaux scolaires',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileText,
      title: 'Résumés',
      description: 'Révisions efficaces avec nos résumés synthétiques',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Presentation,
      title: 'Exposés',
      description: 'Exposés rédigés pour vos présentations scolaires',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Brain,
      title: 'Flashcards',
      description: 'Mémorisez rapidement avec nos flashcards personnalisées',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const levels = [
    { name: 'Primaire', icon: '📚', description: 'Du CP au CM2' },
    { name: 'Collège', icon: '🎓', description: '6ème à 3ème' },
    { name: 'Lycée', icon: '📖', description: 'Toutes séries' },
    { name: 'Université', icon: '🎯', description: 'Licence & Master' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Osez détenir le savoir
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Votre plateforme éducative complète pour réussir à tous les niveaux
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => onNavigate('catalog')}
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                Explorer le catalogue
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => onNavigate('premium')}
                className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 border-white/30 text-primary-foreground"
              >
                <Crown className="mr-2 w-5 h-5" />
                Voir Premium
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des ressources éducatives de qualité pour accompagner votre réussite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pour tous les niveaux
            </h2>
            <p className="text-lg text-muted-foreground">
              Du primaire à l'université, nous avons ce qu'il vous faut
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group border-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => onNavigate('catalog')}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {level.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{level.name}</h3>
                  <p className="text-muted-foreground">{level.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BrainCorp Info Section */}
      <BrainCorpInfo />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <Sparkles className="w-16 h-16 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Prêt à commencer votre aventure éducative ?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Rejoignez des milliers d'étudiants qui réussissent grâce à BrainEdu
          </p>
          <Button 
            size="lg"
            variant="secondary"
            onClick={() => onNavigate('catalog')}
            className="text-lg px-8 py-6"
          >
            <GraduationCap className="mr-2 w-5 h-5" />
            Commencer maintenant
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

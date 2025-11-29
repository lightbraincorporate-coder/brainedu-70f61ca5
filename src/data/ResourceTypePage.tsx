import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, FileText, Presentation, Brain } from 'lucide-react';

interface ResourceTypePageProps {
  onNavigate: (page: string, resourceType?: string) => void;
}

const ResourceTypePage = ({ onNavigate }: ResourceTypePageProps) => {
  const resourceTypes = [
    {
      id: 'courses',
      icon: BookOpen,
      title: 'Cours',
      description: 'Accédez à tous nos cours généraux et spécifiques',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'exercises',
      icon: FileText,
      title: 'Exercices & Corrections',
      description: 'Pratiquez avec nos exercices et consultez les corrections',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'summaries',
      icon: Brain,
      title: 'Résumés de Cours',
      description: 'Révisions rapides avec nos résumés synthétiques',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'exposes',
      icon: Presentation,
      title: 'Exposés',
      description: 'Exposés rédigés pour vos présentations scolaires',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choisissez votre ressource
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sélectionnez le type de contenu pédagogique que vous recherchez
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resourceTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <Card
                key={type.id}
                className="cursor-pointer hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in border-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => onNavigate('catalog', type.id)}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Cliquez pour explorer →
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResourceTypePage;
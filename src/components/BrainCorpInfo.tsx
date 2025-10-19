import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, GraduationCap, Shield, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BrainCorpInfo() {
  const platforms = [
    {
      name: 'BrainEdu',
      icon: BookOpen,
      description: 'Votre plateforme éducative complète pour réussir à tous les niveaux. Cours, résumés, exercices et bien plus encore.',
      color: 'from-blue-500 to-blue-600',
      url: 'https://brainedu.lovable.app',
      current: true
    },
    {
      name: 'BrainTeaching',
      icon: GraduationCap,
      description: 'Plateforme dédiée à la formation continue des enseignants et au suivi pédagogique. Développez vos compétences d\'enseignement.',
      color: 'from-green-500 to-green-600',
      url: 'https://brainteaching.lovable.app',
      current: false
    },
    {
      name: 'BrainSecure',
      icon: Shield,
      description: 'Aidez vos enfants à progresser grâce à un suivi personnalisé, des tests adaptés et une analyse approfondie de leur parcours scolaire.',
      color: 'from-purple-500 to-purple-600',
      url: 'https://brainsecure.lovable.app',
      current: false
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* BrainCorp Introduction */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-4">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            BrainCorp
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            BrainCorp est l'entreprise innovante qui révolutionne l'éducation en Afrique. 
            Notre mission : rendre l'éducation accessible, efficace et personnalisée pour tous les acteurs de l'écosystème éducatif.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Card 
                key={index}
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2 ${
                  platform.current ? 'ring-2 ring-primary' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    {platform.name}
                    {platform.current && (
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                        Vous êtes ici
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {platform.description}
                  </CardDescription>
                </CardHeader>
                {!platform.current && (
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      onClick={() => window.open(platform.url, '_blank')}
                    >
                      Découvrir
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>

        {/* Vision Statement */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-primary text-primary-foreground border-0">
            <CardContent className="pt-6 pb-6">
              <p className="text-lg md:text-xl font-medium">
                "Notre vision : créer un écosystème éducatif complet où étudiants, enseignants et parents 
                collaborent pour garantir la réussite de chaque apprenant."
              </p>
              <p className="mt-4 text-primary-foreground/80">
                — L'équipe BrainCorp
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

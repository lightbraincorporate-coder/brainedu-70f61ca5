import { X, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AboutModalProps {
  onClose: () => void;
}

const AboutModal = ({ onClose }: AboutModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 pt-20 overflow-y-auto">
      <Card className="max-w-3xl w-full my-8 animate-scale-in">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
          <CardTitle className="text-2xl">À propos de BrainEdu</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Notre Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              BrainEdu est une plateforme éducative dédiée à l'excellence académique. Notre mission est de
              fournir des ressources pédagogiques de qualité aux étudiants de tous niveaux, du primaire à
              l'université, en République du Congo et dans toute l'Afrique francophone.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Nos Valeurs</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Excellence académique et rigueur pédagogique</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Accessibilité et prix abordables</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Support personnalisé pour chaque étudiant</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Innovation dans les méthodes d'apprentissage</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contactez-nous</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:LightBrain03@gmail.com" className="hover:text-primary transition-colors">
                  LightBrain03@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <p>Congo: <a href="https://wa.me/242065012967" className="hover:text-primary">+242 06 501 29 67</a></p>
                  <p>Côte d'Ivoire: <a href="https://wa.me/2250798484801" className="hover:text-primary">+225 07 98 48 48 01</a></p>
                  <p>Gabon: <a href="https://wa.me/24107649823" className="hover:text-primary">+241 07 64 98 23</a></p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Brazzaville, République du Congo</span>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
            <p className="text-sm text-center">
              <span className="font-semibold text-primary">Osez détenir le savoir</span> - 
              Rejoignez des milliers d'étudiants qui ont choisi l'excellence avec BrainEdu
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutModal;

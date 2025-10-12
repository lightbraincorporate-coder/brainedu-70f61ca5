import { X, ShoppingCart, CreditCard, Download, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface GuideModalProps {
  onClose: () => void;
}

const GuideModal = ({ onClose }: GuideModalProps) => {
  const steps = [
    {
      icon: ShoppingCart,
      title: 'Parcourir le catalogue',
      description: 'Explorez nos cours, résumés et autres ressources par niveau et matière. Ajoutez les produits souhaités à votre panier.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: CreditCard,
      title: 'Passer commande',
      description: 'Effectuez votre paiement via Mobile Money (Moov, Wave, Airtel Money). Conservez bien votre ID de transaction.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Download,
      title: 'Valider et télécharger',
      description: 'Entrez votre ID de transaction pour validation. Une fois validé, téléchargez immédiatement vos contenus en PDF, EPUB ou TXT.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: HelpCircle,
      title: 'Besoin d\'aide ?',
      description: 'Contactez-nous via WhatsApp ou email pour toute question. Support disponible 7j/7.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 pt-20 overflow-y-auto">
      <Card className="max-w-4xl w-full my-8 animate-scale-in">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
          <CardTitle className="text-2xl">Guide d'utilisation</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Conseils pratiques</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Conservez toujours votre ID de transaction</li>
              <li>• Les abonnements Premium offrent jusqu'à 40% d'économie</li>
              <li>• Les flashcards physiques sont disponibles uniquement à Brazzaville</li>
              <li>• Formats disponibles : PDF (recommandé), EPUB et TXT</li>
              <li>• Délai de livraison : quelques minutes après validation</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GuideModal;

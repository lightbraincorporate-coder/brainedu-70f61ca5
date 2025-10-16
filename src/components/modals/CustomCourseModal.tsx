import { X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface CustomCourseModalProps {
  onClose: () => void;
}

const CustomCourseModal = ({ onClose }: CustomCourseModalProps) => {
  const whatsappNumbers = [
    { name: 'Support 1', number: '+242 065 012 967' },
    { name: 'Support 2', number: '+242 056 094 492' }
  ];

  const handleWhatsAppContact = (number: string) => {
    const message = encodeURIComponent(
      "Bonjour, je souhaite obtenir un cours adapté et personnalisé selon mon programme scolaire. Je suis prêt à payer 250 F CFA pour ce service."
    );
    window.open(`https://wa.me/${number.replace(/\s/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-2xl w-full animate-scale-in">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
          <div>
            <CardTitle className="text-2xl">🎯 Cours Adapté et Personnalisé</CardTitle>
            <CardDescription className="mt-1">
              Service sur mesure - <span className="text-primary font-bold">250 F CFA</span>
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">📚 Ce service comprend :</h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>✅ <strong>Adaptation du cours BrainEdu</strong> selon votre programme local</li>
              <li>✅ <strong>Harmonisation</strong> avec vos cours actuels</li>
              <li>✅ <strong>Personnalisation</strong> selon votre pays et ministère de l'enseignement</li>
              <li>✅ <strong>Révision complète</strong> pour correspondre à votre réalité scolaire</li>
              <li>✅ <strong>Support dédié</strong> pour vos questions</li>
            </ul>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">📱 Comment ça marche ?</h3>
            <ol className="text-sm space-y-2 text-amber-700 dark:text-amber-300 list-decimal list-inside">
              <li>Contactez-nous sur WhatsApp via les numéros ci-dessous</li>
              <li>Décrivez votre cours et votre programme scolaire</li>
              <li>Effectuez le paiement de 250 F CFA</li>
              <li>Recevez votre cours adapté sous 24-48h</li>
            </ol>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contactez-nous sur WhatsApp :</h3>
            <div className="space-y-3">
              {whatsappNumbers.map((contact) => (
                <Button
                  key={contact.number}
                  variant="outline"
                  size="lg"
                  className="w-full justify-start gap-3"
                  onClick={() => handleWhatsAppContact(contact.number)}
                >
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <div className="flex-1 text-left">
                    <div className="font-semibold">{contact.name}</div>
                    <div className="text-sm text-muted-foreground">{contact.number}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Astuce :</strong> Préparez les informations suivantes avant de nous contacter : 
              votre niveau, classe, pays, matière concernée, et une brève description de votre programme.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomCourseModal;

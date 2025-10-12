import { useState } from 'react';
import { X, BookMarked } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';

interface FlashcardModalProps {
  onClose: () => void;
}

const FlashcardModal = ({ onClose }: FlashcardModalProps) => {
  const [formData, setFormData] = useState({
    matiere: '',
    classe: '',
    trimestre: '',
    cours: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.matiere || !formData.classe || !formData.trimestre || !formData.cours) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    const message = `Bonjour, je souhaite commander des flashcards personnalisées:%0A%0AMatière: ${formData.matiere}%0AClasse: ${formData.classe}%0ATrimestre: ${formData.trimestre}%0ACours: ${formData.cours}`;
    window.open(`https://wa.me/242065012967?text=${message}`, '_blank');
    
    toast.success('Redirection vers WhatsApp...');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 pt-20 overflow-y-auto">
      <Card className="max-w-2xl w-full my-8 animate-scale-in">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
          <div>
            <CardTitle className="text-2xl flex items-center gap-2">
              <BookMarked className="w-6 h-6 text-primary" />
              Commander des Flashcards
            </CardTitle>
            <CardDescription className="mt-2">
              Prix : 600 F CFA • Livraison physique à Brazzaville uniquement
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="matiere">Matière *</Label>
              <Input
                id="matiere"
                placeholder="Ex: Mathématiques"
                value={formData.matiere}
                onChange={(e) => setFormData({ ...formData, matiere: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="classe">Classe *</Label>
              <Input
                id="classe"
                placeholder="Ex: 3ème"
                value={formData.classe}
                onChange={(e) => setFormData({ ...formData, classe: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="trimestre">Trimestre *</Label>
              <Input
                id="trimestre"
                placeholder="Ex: 1er trimestre"
                value={formData.trimestre}
                onChange={(e) => setFormData({ ...formData, trimestre: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cours">Cours spécifique *</Label>
              <Input
                id="cours"
                placeholder="Ex: Théorème de Pythagore"
                value={formData.cours}
                onChange={(e) => setFormData({ ...formData, cours: e.target.value })}
                required
              />
            </div>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <p className="text-sm font-semibold text-destructive mb-1">Important</p>
              <p className="text-sm text-muted-foreground">
                Les flashcards physiques sont disponibles uniquement à Brazzaville, République du Congo.
                Après validation de votre commande, nous fixerons ensemble un point de rendez-vous.
              </p>
            </div>

            <Button type="submit" size="lg" className="w-full gap-2">
              <BookMarked className="w-5 h-5" />
              Envoyer la commande via WhatsApp
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FlashcardModal;

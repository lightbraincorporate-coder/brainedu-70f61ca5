import { X, Crown, Save, Download, History, Star, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PremiumAccountModalProps {
  onClose: () => void;
  onUpgrade: () => void;
}

const PremiumAccountModal = ({ onClose, onUpgrade }: PremiumAccountModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full border border-border overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-primary to-secondary p-8 text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 text-primary-foreground hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </Button>

          <div className="relative flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Crown className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-1">Compte Premium</h2>
              <p className="text-primary-foreground/90">Débloquez tous les avantages exclusifs</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Save className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Sauvegarde Illimitée</h3>
                <p className="text-sm text-muted-foreground">
                  Sauvegardez tous vos fichiers dans votre espace personnel
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Download className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">2 Téléchargements</h3>
                <p className="text-sm text-muted-foreground">
                  Retéléchargez chaque fichier jusqu'à 2 fois
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <History className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Historique Complet</h3>
                <p className="text-sm text-muted-foreground">
                  Accédez à l'historique de toutes vos commandes
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Support Prioritaire</h3>
                <p className="text-sm text-muted-foreground">
                  Réponses en moins de 2 heures
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Accès Anticipé</h3>
                <p className="text-sm text-muted-foreground">
                  Nouveaux contenus avant tout le monde
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Sécurité Renforcée</h3>
                <p className="text-sm text-muted-foreground">
                  Vos données protégées et cryptées
                </p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">À partir de</p>
                <p className="text-3xl font-bold text-foreground">700 F CFA<span className="text-lg font-normal text-muted-foreground">/semaine</span></p>
              </div>
              <Button onClick={onUpgrade} size="lg" className="gap-2">
                <Crown className="w-5 h-5" />
                Devenir Premium
              </Button>
            </div>
          </div>

          {/* Info */}
          <p className="text-center text-sm text-muted-foreground">
            Rejoignez plus de <span className="font-bold text-foreground">500+ étudiants</span> qui ont choisi Premium
          </p>
        </div>
      </div>
    </div>
  );
};

export default PremiumAccountModal;

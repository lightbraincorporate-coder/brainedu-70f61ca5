import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Sparkles, Star } from 'lucide-react';
import { premiumPlans } from '@/data/products';
import { CartItem } from '@/types';
import { toast } from 'sonner';

interface PremiumPageProps {
  onAddToCart: (item: CartItem) => void;
}

const PremiumPage = ({ onAddToCart }: PremiumPageProps) => {
  const handleSubscribe = (plan: typeof premiumPlans[0]) => {
    const item: CartItem = {
      id: `${Date.now()}-${Math.random()}`,
      name: `Abonnement ${plan.name}`,
      price: plan.price
    };
    onAddToCart(item);
    toast.success(`${plan.name} ajouté au panier !`);
  };

  const getPlanIcon = (index: number) => {
    if (index === 2) return <Crown className="w-8 h-8" />;
    if (index === 1) return <Star className="w-8 h-8" />;
    return <Sparkles className="w-8 h-8" />;
  };

  const getPlanColor = (index: number) => {
    if (index === 2) return 'from-yellow-500 to-orange-500';
    if (index === 1) return 'from-purple-500 to-pink-500';
    return 'from-blue-500 to-cyan-500';
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block p-3 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-4">
            <Crown className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Abonnements Premium</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Accédez à des services illimités et boostez votre apprentissage
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {premiumPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative hover:shadow-2xl transition-all hover:-translate-y-2 animate-scale-in ${
                index === 2 ? 'border-4 border-primary scale-105' : 'border-2'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {index === 2 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1">
                    Populaire
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${getPlanColor(index)} flex items-center justify-center text-white`}>
                  {getPlanIcon(index)}
                </div>
                <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                <CardDescription className="text-center">
                  <div className="text-3xl font-bold text-foreground my-2">
                    {plan.price} <span className="text-lg font-normal">F CFA</span>
                  </div>
                  <div className="text-sm">par {plan.duration}</div>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="text-center py-3 bg-primary/10 rounded-lg">
                    <span className="text-2xl font-bold text-primary">{plan.services}</span>
                    <span className="text-sm text-muted-foreground ml-2">services / {plan.duration}</span>
                  </div>
                  
                  <div className="space-y-2 pt-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full"
                  size="lg"
                  variant={index === 2 ? 'default' : 'outline'}
                  onClick={() => handleSubscribe(plan)}
                >
                  S'abonner maintenant
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl">Avantages Premium</CardTitle>
            <CardDescription>Pourquoi choisir un abonnement Premium ?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Économies importantes</h4>
                    <p className="text-sm text-muted-foreground">
                      Jusqu'à 40% d'économie par rapport aux achats individuels
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Accès prioritaire</h4>
                    <p className="text-sm text-muted-foreground">
                      Recevez vos contenus en priorité avec un support dédié
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Historique sauvegardé</h4>
                    <p className="text-sm text-muted-foreground">
                      Accédez à tous vos téléchargements à tout moment
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Vidéos interactives</h4>
                    <p className="text-sm text-muted-foreground">
                      Accès exclusif à notre bibliothèque de vidéos éducatives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PremiumPage;

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trash2, ShoppingBag, CreditCard } from 'lucide-react';
import { CartItem } from '@/types';

interface CartPageProps {
  cart: CartItem[];
  onRemoveFromCart: (id: string) => void;
  onCheckout: () => void;
}

const CartPage = ({ cart, onRemoveFromCart, onCheckout }: CartPageProps) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center animate-fade-in">
          <CardContent className="pt-12 pb-8">
            <ShoppingBag className="w-20 h-20 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-2">Votre panier est vide</h2>
            <p className="text-muted-foreground mb-6">
              Parcourez notre catalogue pour découvrir nos produits
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 animate-fade-in">Mon Panier</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <Card 
                key={item.id}
                className="animate-scale-in hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                      {item.course && (
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>📚 {item.course.subject}</p>
                          <p>🎓 {item.course.class}</p>
                          <p>📖 {item.course.name}</p>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        {item.price} F
                      </Badge>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onRemoveFromCart(item.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 animate-fade-in">
              <CardHeader>
                <CardTitle>Résumé de la commande</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Nombre d'articles</span>
                  <span className="font-semibold">{cart.length}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-2xl font-bold text-primary">{total} F CFA</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  size="lg" 
                  className="w-full gap-2"
                  onClick={onCheckout}
                >
                  <CreditCard className="w-5 h-5" />
                  Procéder au paiement
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

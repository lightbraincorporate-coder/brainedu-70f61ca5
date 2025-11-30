import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Trash2, ArrowLeft, CreditCard } from 'lucide-react';
import { getCartItems, removeFromCart, clearCart } from '@/lib/localStorageDB';
import { toast } from 'sonner';

interface CartPageProps {
  onNavigate: (page: string) => void;
}

const CartPage = ({ onNavigate }: CartPageProps) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCart();

    // Écouter les changements du panier
    const handleStorageChange = () => {
      loadCart();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const loadCart = () => {
    const items = getCartItems();
    setCartItems(items);
  };

  const handleRemoveItem = (itemId: string) => {
    removeFromCart(itemId);
    loadCart();
    toast.success('Article retiré du panier');
  };

  const handleClearCart = () => {
    if (window.confirm('Êtes-vous sûr de vouloir vider le panier ?')) {
      clearCart();
      loadCart();
      toast.success('Panier vidé');
    }
  };

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Votre panier est vide');
      return;
    }
    onNavigate('checkout');
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen py-8 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <Button 
            variant="outline" 
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continuer mes achats
          </Button>
          {cartItems.length > 0 && (
            <Button 
              variant="destructive" 
              onClick={handleClearCart}
              size="sm"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Vider le panier
            </Button>
          )}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="w-6 h-6" />
              Mon Panier ({cartItems.length})
            </CardTitle>
            <CardDescription>
              Vérifiez vos articles avant de procéder au paiement
            </CardDescription>
          </CardHeader>

          <CardContent>
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Votre panier est vide</h3>
                <p className="text-muted-foreground mb-6">
                  Ajoutez des articles à votre panier pour commencer
                </p>
                <Button onClick={() => onNavigate('resourceType')}>
                  Explorer le catalogue
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="border-2">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
                          {item.course && (
                            <div className="text-sm text-muted-foreground space-y-1">
                              <p>📚 {item.course.name}</p>
                              <p>🎓 {item.course.level} - {item.course.class}</p>
                              <p>📖 {item.course.subject}</p>
                              {item.course.trimester && (
                                <p>📅 {item.course.trimester}</p>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="text-right space-y-2">
                          <div className="text-2xl font-bold text-primary">
                            {item.price} FCFA
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>

          {cartItems.length > 0 && (
            <CardFooter className="flex-col gap-4 border-t pt-6">
              {/* Total */}
              <div className="w-full space-y-2">
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Sous-total</span>
                  <span className="font-semibold">{totalAmount} FCFA</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Frais de traitement</span>
                  <span className="font-semibold">0 FCFA</span>
                </div>
                <div className="flex justify-between text-2xl font-bold border-t pt-2">
                  <span>Total</span>
                  <span className="text-primary">{totalAmount} FCFA</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                onClick={handleProceedToCheckout}
                size="lg"
                className="w-full text-lg py-6"
                disabled={loading}
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Procéder au paiement
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                🔒 Paiement sécurisé via Mobile Money
              </p>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
};

export default CartPage;
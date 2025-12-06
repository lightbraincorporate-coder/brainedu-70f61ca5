import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingCart, Trash2, ArrowLeft, AlertCircle, Check } from 'lucide-react';
import { getCart, removeFromCart, getCartTotal, clearCart, getCartCourseIds } from '@/data/cart';
import { africanCountries, getPaymentMethods } from '@/data/countries';
import { findAdminByCountryAndPayment } from '@/data/admin';
import { submitPayment, validatePaymentMessage } from '@/data/payments';

interface CartPageProps {
  onBack: () => void;
}

const CartPage = ({ onBack }: CartPageProps) => {
  const [cart, setCart] = useState(getCart());
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
  const [paymentMessage, setPaymentMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [adminPhone, setAdminPhone] = useState<string>('');

  const total = getCartTotal();
  const paymentMethods = selectedCountry ? getPaymentMethods(selectedCountry) : [];

  useEffect(() => {
    setCart(getCart());
  }, []);

  useEffect(() => {
    if (selectedCountry && selectedPaymentMethod) {
      const admin = findAdminByCountryAndPayment(selectedCountry, selectedPaymentMethod);
      if (admin) {
        setAdminPhone(admin.phone);
        setError(null);
      } else {
        setAdminPhone('');
        setError(`Aucun administrateur disponible pour ${selectedCountry} - ${selectedPaymentMethod}`);
      }
    } else {
      setAdminPhone('');
    }
  }, [selectedCountry, selectedPaymentMethod]);

  const handleRemoveItem = (courseId: string) => {
    removeFromCart(courseId);
    setCart(getCart());
  };

  const handleSubmitPayment = async () => {
    setError(null);
    setSuccess(null);

    if (cart.length === 0) {
      setError('Votre panier est vide');
      return;
    }

    if (!selectedCountry) {
      setError('Veuillez sélectionner votre pays');
      return;
    }

    if (!selectedPaymentMethod) {
      setError('Veuillez sélectionner un mode de paiement');
      return;
    }

    if (!adminPhone) {
      setError('Aucun administrateur disponible pour cette combinaison');
      return;
    }

    if (!paymentMessage.trim()) {
      setError('Veuillez entrer le message de confirmation de paiement');
      return;
    }

    const validation = validatePaymentMessage(paymentMessage);
    if (!validation.valid) {
      setError(validation.error || 'Message de paiement invalide');
      return;
    }

    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const admin = findAdminByCountryAndPayment(selectedCountry, selectedPaymentMethod);
    if (!admin) {
      setError('Erreur: Administrateur introuvable');
      setIsSubmitting(false);
      return;
    }

    const result = submitPayment(
      getCartCourseIds(),
      total,
      selectedCountry,
      selectedPaymentMethod,
      admin.id,
      admin.phone,
      paymentMessage
    );

    setIsSubmitting(false);

    if (result.success) {
      setSuccess('Paiement soumis avec succès ! En attente de validation par l\'administrateur.');
      setPaymentMessage('');
      clearCart();
      setCart([]);
      
      setTimeout(() => {
        onBack();
      }, 3000);
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <Button variant="outline" onClick={onBack} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Button>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <ShoppingCart className="w-8 h-8" />
            Mon Panier
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Liste des articles */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Articles ({cart.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Votre panier est vide</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.course.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.course.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.course.class} - {item.course.subject}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.course.trimester}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-bold text-lg">{item.course.price} FCFA</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveItem(item.course.id)}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>

          {/* Paiement */}
          <div className="space-y-4">
            {/* Total */}
            <Card>
              <CardHeader>
                <CardTitle>Total</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">
                  {total} FCFA
                </div>
              </CardContent>
            </Card>

            {/* Sélection pays et paiement */}
            {cart.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Informations de paiement</CardTitle>
                  <CardDescription>
                    Sélectionnez votre pays et mode de paiement
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Pays */}
                  <div className="space-y-2">
                    <Label>Pays</Label>
                    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre pays" />
                      </SelectTrigger>
                      <SelectContent>
                        {africanCountries.map((country) => (
                          <SelectItem key={country.code} value={country.name}>
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Mode de paiement */}
                  {selectedCountry && (
                    <div className="space-y-2">
                      <Label>Mode de paiement</Label>
                      <Select
                        value={selectedPaymentMethod}
                        onValueChange={setSelectedPaymentMethod}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le mode" />
                        </SelectTrigger>
                        <SelectContent>
                          {paymentMethods.map((method) => (
                            <SelectItem key={method} value={method}>
                              {method}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Numéro admin */}
                  {adminPhone && (
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm font-medium mb-2">
                        Envoyez {total} FCFA au numéro :
                      </p>
                      <p className="text-2xl font-bold text-blue-700 mb-2">
                        {adminPhone}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        via {selectedPaymentMethod}
                      </p>
                    </div>
                  )}

                  {/* Message de paiement */}
                  {adminPhone && (
                    <div className="space-y-2">
                      <Label>Message de confirmation</Label>
                      <Textarea
                        placeholder="Collez le message de confirmation reçu après paiement&#10;&#10;Exemple:&#10;Vous avez envoye 50 FCFA a ADMIN 242065012967 le 2025-12-04 13:17:34. Solde: 3088 FCFA. ID: 6971763746."
                        value={paymentMessage}
                        onChange={(e) => setPaymentMessage(e.target.value)}
                        rows={6}
                        className="text-sm"
                      />
                      <p className="text-xs text-muted-foreground">
                        Le message doit contenir l'ID de transaction (10 chiffres)
                      </p>
                    </div>
                  )}

                  {/* Messages */}
                  {error && (
                    <div className="flex items-start gap-2 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{error}</p>
                    </div>
                  )}

                  {success && (
                    <div className="flex items-start gap-2 p-3 bg-green-50 text-green-700 rounded-lg border border-green-200">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{success}</p>
                    </div>
                  )}

                  {/* Bouton soumettre */}
                  <Button
                    onClick={handleSubmitPayment}
                    disabled={isSubmitting || !adminPhone || !paymentMessage}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Envoi en cours...
                      </>
                    ) : (
                      'Soumettre le paiement'
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { africanCountries } from '@/data/paymentCountries';
import { getAdminByCountryAndPayment, addPaymentProof, getCartItems, clearCart } from '@/lib/localStorageDB';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CheckoutPageProps {
  onNavigate: (page: string) => void;
}

const CheckoutPage = ({ onNavigate }: CheckoutPageProps) => {
  const [step, setStep] = useState<'country' | 'payment' | 'proof' | 'success'>('country');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
  const [assignedAdmin, setAssignedAdmin] = useState<any>(null);
  const [transactionId, setTransactionId] = useState('');
  const [paymentMessage, setPaymentMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const cartItems = getCartItems();
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCountrySelect = (countryCode: string) => {
    setSelectedCountry(countryCode);
    setStep('payment');
  };

  const handlePaymentMethodSelect = (methodId: string) => {
    setSelectedPaymentMethod(methodId);
    
    // Trouver l'admin correspondant
    const country = africanCountries.find(c => c.code === selectedCountry);
    if (!country) return;
    
    const admin = getAdminByCountryAndPayment(country.name, methodId);
    
    if (!admin) {
      toast.error('Aucun administrateur disponible', {
        description: `Aucun administrateur n'est disponible pour ${country.name} avec ce mode de paiement. Veuillez choisir un autre mode.`
      });
      return;
    }
    
    setAssignedAdmin(admin);
    setStep('proof');
  };

  const handleSubmitProof = async () => {
    if (!transactionId.trim() || !paymentMessage.trim()) {
      toast.error('Informations incomplètes', {
        description: 'Veuillez remplir tous les champs'
      });
      return;
    }

    setSubmitting(true);

    try {
      const country = africanCountries.find(c => c.code === selectedCountry);
      
      const proof = addPaymentProof({
        userId: 'user_' + Date.now(), // TODO: Remplacer par vrai userId
        userName: 'Utilisateur', // TODO: Remplacer par vrai nom
        cartItems,
        totalAmount,
        country: country?.name || '',
        paymentMethod: selectedPaymentMethod,
        assignedAdminId: assignedAdmin.id,
        assignedAdminPhone: assignedAdmin.phone,
        transactionId,
        paymentMessage,
      });

      // Vider le panier
      clearCart();

      toast.success('Preuve envoyée !', {
        description: 'Votre preuve de paiement a été soumise avec succès'
      });

      setStep('success');
    } catch (error) {
      toast.error('Erreur', {
        description: 'Une erreur est survenue lors de l\'envoi'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const currentCountry = africanCountries.find(c => c.code === selectedCountry);
  const currentPaymentMethod = currentCountry?.paymentMethods.find(p => p.id === selectedPaymentMethod);

  return (
    <div className="min-h-screen py-8 px-4 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        {step !== 'success' && (
          <Button 
            variant="outline" 
            onClick={() => {
              if (step === 'country') {
                onNavigate('cart');
              } else if (step === 'payment') {
                setStep('country');
              } else if (step === 'proof') {
                setStep('payment');
              }
            }}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
        )}

        {/* Step 1: Country Selection */}
        {step === 'country' && (
          <Card>
            <CardHeader>
              <CardTitle>Choisissez votre pays</CardTitle>
              <CardDescription>
                Sélectionnez le pays depuis lequel vous effectuez le paiement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Select onValueChange={handleCountrySelect}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un pays" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {africanCountries.map(country => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground mb-2">
                    Récapitulatif de votre commande
                  </div>
                  <div className="space-y-2">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.name}</span>
                        <span className="font-semibold">{item.price} FCFA</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-bold pt-2 border-t">
                      <span>Total</span>
                      <span>{totalAmount} FCFA</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Payment Method Selection */}
        {step === 'payment' && currentCountry && (
          <Card>
            <CardHeader>
              <CardTitle>Mode de paiement</CardTitle>
              <CardDescription>
                Choisissez votre mode de paiement pour {currentCountry.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {currentCountry.paymentMethods.map(method => (
                  <Button
                    key={method.id}
                    variant="outline"
                    className="h-auto py-4 justify-start"
                    onClick={() => handlePaymentMethodSelect(method.id)}
                  >
                    <div className="text-left">
                      <div className="font-semibold">{method.name}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Payment Proof */}
        {step === 'proof' && assignedAdmin && (
          <Card>
            <CardHeader>
              <CardTitle>Effectuez le paiement</CardTitle>
              <CardDescription>
                Envoyez {totalAmount} FCFA au numéro ci-dessous
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Admin Phone Number */}
              <div className="p-6 bg-primary/5 rounded-lg border-2 border-primary/20 text-center">
                <div className="text-sm text-muted-foreground mb-2">
                  Numéro de paiement ({currentPaymentMethod?.name})
                </div>
                <div className="text-3xl font-bold font-mono text-primary">
                  {assignedAdmin.phone}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  Montant : {totalAmount} FCFA
                </div>
              </div>

              {/* Proof Form */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="transactionId">
                    ID de transaction
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input
                    id="transactionId"
                    placeholder="Ex: 6971763746"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    L'ID de transaction se trouve dans votre message de confirmation
                  </p>
                </div>

                <div>
                  <Label htmlFor="paymentMessage">
                    Message de paiement
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Textarea
                    id="paymentMessage"
                    placeholder="Ex: Vous avez envoye 10 FCFA a DISTELLA NZEMBAYI 242065012967 le 2025-11-30 13:17:34. Solde: 3088 FCFA. ID: 6971763746."
                    value={paymentMessage}
                    onChange={(e) => setPaymentMessage(e.target.value)}
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Copiez-collez le message de confirmation complet
                  </p>
                </div>

                <Button
                  onClick={handleSubmitProof}
                  disabled={submitting}
                  className="w-full"
                  size="lg"
                >
                  {submitting ? 'Envoi en cours...' : 'J\'ai payé'}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Success */}
        {step === 'success' && (
          <Card>
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-center">Paiement soumis !</CardTitle>
              <CardDescription className="text-center">
                Votre preuve de paiement a été envoyée avec succès
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-900">
                  ℹ️ Votre paiement est en cours de vérification par notre équipe. 
                  Vous recevrez une notification dès qu'il sera validé.
                </p>
              </div>

              <div className="space-y-2">
                <Button
                  onClick={() => onNavigate('home')}
                  className="w-full"
                  size="lg"
                >
                  Retour à l'accueil
                </Button>
                <Button
                  onClick={() => onNavigate('orders')}
                  variant="outline"
                  className="w-full"
                >
                  Voir mes commandes
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
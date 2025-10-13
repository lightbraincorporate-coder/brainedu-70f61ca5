import { useState } from 'react';
import { X, CreditCard, Check, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';

interface PaymentModalProps {
  total: number;
  onClose: () => void;
  onComplete: () => void;
}

const PaymentModal = ({ total, onClose, onComplete }: PaymentModalProps) => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('moov');
  const [transactionId, setTransactionId] = useState('');
  const [format, setFormat] = useState('pdf');

  const paymentMethods = [
    { id: 'mobile', name: 'Mobile Money', number: '+242 065 012 967', code: '*105#' },
    { id: 'airtel', name: 'Airtel Money', number: '+242 056 094 492', code: '*128#' },
    { id: 'wave', name: 'Wave', number: '+225 [à compléter]', code: 'App Wave' },
    { id: 'moov', name: 'Moov Money', number: '+225 [à compléter]', code: 'App Moov' }
  ];

  const formats = [
    { id: 'pdf', name: 'PDF', desc: 'Recommandé' },
    { id: 'epub', name: 'EPUB', desc: 'E-readers' },
    { id: 'txt', name: 'TXT', desc: 'Texte simple' }
  ];

  const handlePaymentMethodSelect = () => {
    if (!paymentMethod) {
      toast.error('Veuillez sélectionner un mode de paiement');
      return;
    }
    setStep(2);
  };

  const handleValidateTransaction = () => {
    if (!transactionId.trim()) {
      toast.error('Veuillez entrer votre ID de transaction');
      return;
    }
    if (transactionId.length < 8) {
      toast.error('L\'ID de transaction semble invalide');
      return;
    }
    setStep(3);
  };

  const handleDownload = () => {
    toast.success(`Téléchargement de vos fichiers en format ${format.toUpperCase()}...`);
    setTimeout(() => {
      toast.success('Commande complétée avec succès !');
      onComplete();
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 pt-20 overflow-y-auto">
      <Card className="max-w-2xl w-full my-8 animate-scale-in">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
          <div>
            <CardTitle className="text-2xl">Paiement</CardTitle>
            <CardDescription className="mt-1">
              Total à payer : <span className="text-primary font-bold text-lg">{total} F CFA</span>
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>
        <CardContent className="pt-6">
          {/* Step 1: Payment Method */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-lg font-semibold mb-4">Choisissez votre mode de paiement</h3>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-accent cursor-pointer">
                        <RadioGroupItem value={method.id} id={method.id} />
                        <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                          <div className="flex flex-col gap-1">
                            <span className="font-medium">{method.name}</span>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="font-mono">{method.code}</span>
                              <span>•</span>
                              <span>{method.number}</span>
                            </div>
                          </div>
                        </Label>
                        <Smartphone className="w-5 h-5 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Instructions de paiement
                </h4>
                <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                  <li>Composez le code USSD de votre service (affiché ci-dessus)</li>
                  <li>Envoyez {total} F CFA au numéro indiqué pour le service choisi</li>
                  <li>Notez bien votre ID de transaction reçu par SMS</li>
                  <li>Revenez ici pour valider votre paiement</li>
                </ol>
              </div>

              <Button size="lg" className="w-full" onClick={handlePaymentMethodSelect}>
                Continuer
              </Button>
            </div>
          )}

          {/* Step 2: Transaction ID */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-lg font-semibold mb-4">Validez votre paiement</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Après avoir effectué le paiement via {paymentMethods.find(m => m.id === paymentMethod)?.name}, 
                  entrez l'ID de transaction que vous avez reçu.
                </p>
                
                <div className="space-y-2">
                  <Label htmlFor="transaction">ID de Transaction *</Label>
                  <Input
                    id="transaction"
                    placeholder="Ex: MPxxxxxxxx ou WVxxxxxxxx"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    className="text-lg"
                  />
                  <p className="text-xs text-muted-foreground">
                    L'ID se trouve dans le SMS de confirmation de paiement
                  </p>
                </div>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <p className="text-sm font-semibold text-destructive mb-1">Important</p>
                <p className="text-sm text-muted-foreground">
                  Assurez-vous d'avoir bien effectué le paiement avant de valider. 
                  Les fausses déclarations peuvent entraîner le blocage de votre compte.
                </p>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Retour
                </Button>
                <Button className="flex-1" onClick={handleValidateTransaction}>
                  Valider
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Format Selection & Download */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Paiement validé !</h3>
                <p className="text-sm text-muted-foreground">
                  Transaction ID: <span className="font-mono font-semibold">{transactionId}</span>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Choisissez le format de téléchargement</h3>
                <RadioGroup value={format} onValueChange={setFormat}>
                  <div className="space-y-3">
                    {formats.map((fmt) => (
                      <div key={fmt.id} className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-accent cursor-pointer">
                        <RadioGroupItem value={fmt.id} id={fmt.id} />
                        <Label htmlFor={fmt.id} className="flex-1 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{fmt.name}</span>
                            <span className="text-sm text-muted-foreground">{fmt.desc}</span>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <Button size="lg" className="w-full gap-2" onClick={handleDownload}>
                <Check className="w-5 h-5" />
                Télécharger mes contenus
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentModal;

import { useState, useEffect } from 'react';
import { X, CreditCard, Check, Smartphone, Upload, FileText, Hash, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface PaymentModalProps {
  total: number;
  onClose: () => void;
  onComplete: () => void;
}

const AFRICAN_COUNTRIES = [
  "Afrique du Sud", "Algérie", "Angola", "Bénin", "Botswana", "Burkina Faso", "Burundi",
  "Cameroun", "Cap-Vert", "Comores", "Congo", "Côte d'Ivoire", "Djibouti", "Égypte",
  "Érythrée", "Eswatini", "Éthiopie", "Gabon", "Gambie", "Ghana", "Guinée", "Guinée-Bissau",
  "Guinée équatoriale", "Kenya", "Lesotho", "Libéria", "Libye", "Madagascar", "Malawi",
  "Mali", "Maroc", "Maurice", "Mauritanie", "Mozambique", "Namibie", "Niger", "Nigeria",
  "Ouganda", "RD Congo", "Rwanda", "Sao Tomé-et-Principe", "Sénégal", "Seychelles",
  "Sierra Leone", "Somalie", "Soudan", "Soudan du Sud", "Tanzanie", "Tchad", "Togo",
  "Tunisie", "Zambie", "Zimbabwe"
];

const PAYMENT_PLATFORMS = [
  "MTN Mobile Money",
  "Airtel Money",
  "Orange Money",
  "Moov Money",
  "Wave",
  "Flooz",
  "M-Pesa",
  "Ecobank Mobile",
  "UBA Mobile"
];

const PaymentModal = ({ total, onClose, onComplete }: PaymentModalProps) => {
  const [step, setStep] = useState(1);
  const [country, setCountry] = useState('');
  const [paymentPlatform, setPaymentPlatform] = useState('');
  const [paymentNumber, setPaymentNumber] = useState('');
  const [validationMethod, setValidationMethod] = useState<'id' | 'screenshot' | 'message'>('id');
  const [transactionId, setTransactionId] = useState('');
  const [transactionMessage, setTransactionMessage] = useState('');
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [format, setFormat] = useState('pdf');

  useEffect(() => {
    if (country && paymentPlatform) {
      loadPaymentNumber();
    }
  }, [country, paymentPlatform]);

  const loadPaymentNumber = async () => {
    const { data } = await supabase
      .from('secondary_admins')
      .select('payment_number')
      .eq('country', country)
      .eq('payment_platform', paymentPlatform)
      .eq('is_active', true)
      .single();

    if (data) {
      setPaymentNumber(data.payment_number);
    } else {
      setPaymentNumber('');
      toast.error('Aucun administrateur disponible pour ce pays et cette plateforme');
    }
  };

  const formats = [
    { id: 'pdf', name: 'PDF', desc: 'Recommandé' },
    { id: 'epub', name: 'EPUB', desc: 'E-readers' },
    { id: 'txt', name: 'TXT', desc: 'Texte simple' }
  ];

  const handleCountryPlatformSelect = () => {
    if (!country || !paymentPlatform) {
      toast.error('Veuillez sélectionner un pays et une plateforme');
      return;
    }
    if (!paymentNumber) {
      toast.error('Aucun numéro de paiement disponible pour cette configuration');
      return;
    }
    setStep(2);
  };

  const handleValidateTransaction = async () => {
    if (validationMethod === 'id') {
      if (!transactionId.trim()) {
        toast.error('Veuillez entrer votre ID de transaction');
        return;
      }
      if (!/^\d{10}$/.test(transactionId)) {
        toast.error('L\'ID doit contenir exactement 10 chiffres');
        return;
      }
    } else if (validationMethod === 'screenshot') {
      if (!screenshot) {
        toast.error('Veuillez uploader une capture d\'écran');
        return;
      }
      if (!screenshot.type.startsWith('image/')) {
        toast.error('Seuls les fichiers images sont acceptés');
        return;
      }
    } else if (validationMethod === 'message') {
      if (!transactionMessage.trim()) {
        toast.error('Veuillez coller le message de transaction');
        return;
      }
      if (!transactionMessage.includes('ID:') || !transactionMessage.includes('FCFA')) {
        toast.error('Le message ne semble pas être un message de transaction valide');
        return;
      }
    }
    
    // Trouver l'admin assigné
    const { data: adminData } = await supabase
      .from('secondary_admins')
      .select('id')
      .eq('country', country)
      .eq('payment_platform', paymentPlatform)
      .eq('is_active', true)
      .single();

    if (!adminData) {
      toast.error('Erreur: administrateur non trouvé');
      return;
    }

    // Créer la preuve de paiement
    const { data: { user } } = await supabase.auth.getUser();
    
    let proofData = '';
    let proofType = '';
    
    if (validationMethod === 'id') {
      proofData = transactionId;
      proofType = 'transaction_id';
    } else if (validationMethod === 'message') {
      proofData = transactionMessage;
      proofType = 'message';
    } else if (screenshot) {
      // Upload screenshot to storage
      const fileName = `${user?.id}_${Date.now()}_${screenshot.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('payment-proofs')
        .upload(fileName, screenshot);

      if (uploadError) {
        toast.error('Erreur lors de l\'upload de l\'image');
        return;
      }
      
      const { data: { publicUrl } } = supabase.storage
        .from('payment-proofs')
        .getPublicUrl(fileName);
      
      proofData = publicUrl;
      proofType = 'screenshot';
    }

    const { error: insertError } = await supabase
      .from('payment_proofs')
      .insert({
        user_id: user?.id || 'anonymous',
        assigned_admin_id: adminData.id,
        amount: total,
        payment_platform: paymentPlatform,
        country: country,
        proof_type: proofType,
        proof_data: proofData,
        status: 'pending'
      });

    if (insertError) {
      toast.error('Erreur lors de l\'enregistrement de la preuve');
      console.error(insertError);
      return;
    }

    toast.info('Votre preuve est en cours de vérification par notre système IA...');
    setStep(3);
  };

  const handleDownload = () => {
    toast.info('Les fichiers seront disponibles une fois uploadés par l\'administrateur.');
    toast.info('En attendant, votre commande a été enregistrée avec succès !');
    setTimeout(() => {
      toast.success('Commande complétée ! Vous serez notifié quand les fichiers seront disponibles.');
      onComplete();
      onClose();
    }, 2000);
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
          {/* Step 1: Country and Payment Platform Selection */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-lg font-semibold mb-4">Choisissez votre pays et mode de paiement</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label>Pays</Label>
                    <Select value={country} onValueChange={setCountry}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner votre pays" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        {AFRICAN_COUNTRIES.map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Plateforme de paiement</Label>
                    <Select value={paymentPlatform} onValueChange={setPaymentPlatform}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une plateforme" />
                      </SelectTrigger>
                      <SelectContent>
                        {PAYMENT_PLATFORMS.map((p) => (
                          <SelectItem key={p} value={p}>{p}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {paymentNumber && (
                    <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                      <Label className="text-sm font-medium mb-2 block">Numéro de paiement</Label>
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-primary" />
                        <span className="text-lg font-mono font-semibold">{paymentNumber}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Instructions de paiement
                </h4>
                <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                  <li>Sélectionnez votre pays et votre plateforme de paiement</li>
                  <li>Envoyez {total} F CFA au numéro indiqué ci-dessus</li>
                  <li>Notez bien votre ID de transaction reçu par SMS</li>
                  <li>Revenez ici pour valider votre paiement</li>
                </ol>
              </div>

              <Button size="lg" className="w-full" onClick={handleCountryPlatformSelect}>
                Continuer
              </Button>
            </div>
          )}

          {/* Step 2: Transaction Validation */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-lg font-semibold mb-4">Validez votre paiement</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Après avoir effectué le paiement via {paymentPlatform} au numéro {paymentNumber}, 
                  choisissez comment vous souhaitez prouver votre transaction.
                </p>
                
                {/* Validation Method Selection */}
                <div className="space-y-3 mb-6">
                  <Label>Méthode de validation</Label>
                  <RadioGroup value={validationMethod} onValueChange={(value) => setValidationMethod(value as 'id' | 'screenshot' | 'message')}>
                    <div className="flex items-start space-x-3 border rounded-lg p-4 hover:bg-accent cursor-pointer">
                      <RadioGroupItem value="id" id="id" className="mt-1" />
                      <Label htmlFor="id" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2 font-medium mb-1">
                          <Hash className="w-4 h-4" />
                          ID de transaction
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Entrez l'ID à 10 chiffres reçu dans votre SMS de confirmation (Ex: "ID: 1234567890")
                        </p>
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-3 border rounded-lg p-4 hover:bg-accent cursor-pointer">
                      <RadioGroupItem value="screenshot" id="screenshot" className="mt-1" />
                      <Label htmlFor="screenshot" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2 font-medium mb-1">
                          <Camera className="w-4 h-4" />
                          Capture d'écran
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Uploadez une capture d'écran du SMS de confirmation de transaction
                        </p>
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-3 border rounded-lg p-4 hover:bg-accent cursor-pointer">
                      <RadioGroupItem value="message" id="message" className="mt-1" />
                      <Label htmlFor="message" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2 font-medium mb-1">
                          <FileText className="w-4 h-4" />
                          Message complet
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Copiez et collez l'intégralité du message de confirmation reçu
                        </p>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* ID Input */}
                {validationMethod === 'id' && (
                  <div className="space-y-2 animate-fade-in">
                    <Label htmlFor="transaction">ID de Transaction (10 chiffres) *</Label>
                    <Input
                      id="transaction"
                      placeholder="Ex: 6773613622"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      className="text-lg font-mono"
                      maxLength={10}
                    />
                    <p className="text-xs text-muted-foreground">
                      Suite de 10 chiffres qui apparaît dans votre SMS (Ex: "ID: 6773613622")
                    </p>
                  </div>
                )}

                {/* Screenshot Upload */}
                {validationMethod === 'screenshot' && (
                  <div className="space-y-2 animate-fade-in">
                    <Label htmlFor="screenshot-upload">Capture d'écran *</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center hover:bg-accent transition-colors">
                      <input
                        id="screenshot-upload"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setScreenshot(e.target.files?.[0] || null)}
                        className="hidden"
                      />
                      <Label htmlFor="screenshot-upload" className="cursor-pointer">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        {screenshot ? (
                          <div>
                            <p className="font-medium text-sm">{screenshot.name}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {(screenshot.size / 1024).toFixed(1)} KB
                            </p>
                          </div>
                        ) : (
                          <div>
                            <p className="font-medium text-sm">Cliquez pour uploader</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Formats acceptés: JPG, PNG, WEBP
                            </p>
                          </div>
                        )}
                      </Label>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Prenez une capture d'écran claire du SMS de confirmation de transaction
                    </p>
                  </div>
                )}

                {/* Message Text */}
                {validationMethod === 'message' && (
                  <div className="space-y-2 animate-fade-in">
                    <Label htmlFor="message-text">Message de transaction *</Label>
                    <Textarea
                      id="message-text"
                      placeholder="Ex: Vous avez envoye 50 FCFA a DISTELLA NZEMBAYI 242065012967 le 2025-10-19 10:58:12. Solde: 383 FCFA. ID: 6773613622."
                      value={transactionMessage}
                      onChange={(e) => setTransactionMessage(e.target.value)}
                      className="min-h-[100px] text-sm font-mono"
                    />
                    <p className="text-xs text-muted-foreground">
                      Copiez l'intégralité du SMS de confirmation reçu après la transaction
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm font-semibold text-amber-800 dark:text-amber-200 mb-1">🤖 Vérification IA</p>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Votre preuve sera automatiquement vérifiée par notre système d'intelligence artificielle. 
                  Les transactions frauduleuses seront rejetées et peuvent entraîner le blocage du compte.
                </p>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Retour
                </Button>
                <Button className="flex-1" onClick={handleValidateTransaction}>
                  Soumettre pour vérification
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
                  Votre preuve a été soumise et est en cours de vérification par notre IA.
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-amber-800 dark:text-amber-200 mb-2">⚠️ Avertissement Important</p>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Nos cours sont des ressources <strong>globales et générales</strong> dispensées pour tous selon la classe. 
                  Nous ne couvrons pas tous les programmes spécifiques de tous les pays du monde. 
                  Chaque cours possède sa particularité selon le pays, le programme et le ministère de l'enseignement. 
                  <strong> Il ne faut pas juste se fier aux cours sur notre site</strong> - adaptez-les toujours à vos cours locaux et votre programme officiel.
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

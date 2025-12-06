import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, AlertCircle } from 'lucide-react';
import { loginAdminSupreme, loginAdminSecondaire } from '@/data/admin';

interface AdminLoginPageProps {
  onLoginSuccess: () => void;
  onBack: () => void;
}

const AdminLoginPage = ({ onLoginSuccess, onBack }: AdminLoginPageProps) => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setError(null);
    
    if (!phone || !code) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 800));

    const supremeResult = loginAdminSupreme(phone, code);
    
    if (supremeResult.success) {
      onLoginSuccess();
      return;
    }

    const secondaireResult = loginAdminSecondaire(phone, code);
    
    if (secondaireResult.success) {
      onLoginSuccess();
      return;
    }

    setError('Identifiants incorrects');
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl">Connexion Administrateur</CardTitle>
          <CardDescription>
            Entrez vos identifiants pour accéder au panel
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Numéro de téléphone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+242066070176"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="code">Code secret</Label>
            <Input
              id="code"
              type="password"
              placeholder="Entrez votre code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <div className="space-y-2">
            <Button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Connexion...
                </>
              ) : (
                'Se connecter'
              )}
            </Button>

            <Button
              onClick={onBack}
              variant="outline"
              className="w-full"
              disabled={isLoading}
            >
              Retour
            </Button>
          </div>

          <div className="text-xs text-center text-muted-foreground pt-4 border-t">
            Accès réservé aux administrateurs autorisés
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLoginPage;
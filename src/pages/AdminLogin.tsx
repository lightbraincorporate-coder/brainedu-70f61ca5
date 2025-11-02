import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Shield, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const isSuperAdmin = phone === '+242066070176' && code === 'LoneTecrasoWinter';
      
      let adminData = null;
      if (!isSuperAdmin) {
        // Vérifier admin secondaire via Supabase
        const { data } = await supabase
          .from('secondary_admins')
          .select('*')
          .eq('phone', phone)
          .eq('access_code', code)
          .eq('is_active', true)
          .single();

        if (!data) {
          toast({
            title: 'Accès refusé',
            description: 'Numéro ou code incorrect',
            variant: 'destructive',
          });
          return;
        }
        adminData = data;
      }

      // Créer ou obtenir un compte anonyme pour cet admin
      const { data: { user }, error: signInError } = await supabase.auth.signInAnonymously({
        options: {
          data: {
            phone: phone,
            admin_code: code,
            is_super_admin: isSuperAdmin
          }
        }
      });

      if (signInError) throw signInError;

      if (user) {
        const role = isSuperAdmin ? 'super_admin' : 'admin';
        
        // Assigner le rôle
        await supabase.functions.invoke('assign-admin-role', {
          body: { userId: user.id, phone, secretCode: code, role },
        });

        // Mettre à jour l'user_id de l'admin secondaire si nécessaire
        if (adminData) {
          await supabase
            .from('secondary_admins')
            .update({ user_id: user.id })
            .eq('id', adminData.id);
        }

        toast({
          title: 'Connexion réussie',
          description: 'Bienvenue, administrateur',
        });
        navigate(isSuperAdmin ? '/super-admin' : '/secondary-admin');
      }
    } catch (error: any) {
      toast({
        title: 'Erreur',
        description: error.message || 'Erreur de connexion',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-secondary/20 p-6 flex items-center justify-center">
      <div className="max-w-md w-full">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>

        <Card className="p-8">
          <div className="text-center mb-6">
            <Shield className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-3xl font-bold mb-2">Accès Administrateur</h1>
            <p className="text-muted-foreground">
              Connexion sécurisée pour administrateurs autorisés uniquement
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Numéro de téléphone
              </label>
              <Input
                type="tel"
                placeholder="+242066070176"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Code d'accès secret
              </label>
              <Input
                type="password"
                placeholder="Entrez le code d'accès"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>

            <Button
              onClick={handleLogin}
              disabled={loading || !phone || !code}
              className="w-full"
              size="lg"
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

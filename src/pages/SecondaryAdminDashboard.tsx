import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, FileUp, CheckCircle, XCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export default function SecondaryAdminDashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentProofs, setPaymentProofs] = useState<any[]>([]);
  const [stats, setStats] = useState({ approved: 0, pending: 0, rejected: 0 });
  const [adminInfo, setAdminInfo] = useState<any>(null);
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    loadAdminInfo();
    loadPaymentProofs();
    loadStats();

    // Écouter les nouveaux paiements en temps réel
    const channel = supabase
      .channel('secondary-admin-payments')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'payment_proofs'
        },
        async (payload) => {
          const { data: { user } } = await supabase.auth.getUser();
          const { data: adminData } = await supabase
            .from('secondary_admins')
            .select('id, country')
            .eq('user_id', user?.id)
            .single();

          // Vérifier si le paiement est pour ce pays
          if (adminData && payload.new.country === adminData.country) {
            loadPaymentProofs();
            loadStats();
            toast({ title: "Nouveau paiement", description: "Un nouveau paiement nécessite validation" });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const loadAdminInfo = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    const { data, error } = await supabase
      .from('secondary_admins')
      .select('*')
      .eq('user_id', user?.id)
      .single();

    if (error) {
      console.error('Error loading admin info:', error);
    } else {
      setAdminInfo(data);
    }
  };

  const loadPaymentProofs = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    const { data: adminData } = await supabase
      .from('secondary_admins')
      .select('id')
      .eq('user_id', user?.id)
      .single();

    if (adminData) {
      const { data, error } = await supabase
        .from('payment_proofs')
        .select('*')
        .eq('assigned_admin_id', adminData.id)
        .order('created_at', { ascending: false });

      if (error) {
        toast({ title: "Erreur", description: error.message, variant: "destructive" });
      } else {
        setPaymentProofs(data || []);
        const pending = data?.filter(p => p.status === 'pending').length || 0;
        setPendingCount(pending);
      }
    }
  };

  const loadStats = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    const { data: adminData } = await supabase
      .from('secondary_admins')
      .select('id')
      .eq('user_id', user?.id)
      .single();

    if (adminData) {
      const { data, error } = await supabase
        .from('payment_proofs')
        .select('status')
        .eq('assigned_admin_id', adminData.id);

      if (!error && data) {
        const stats = {
          approved: data.filter(p => p.status === 'approved').length,
          pending: data.filter(p => p.status === 'pending').length,
          rejected: data.filter(p => p.status === 'rejected').length
        };
        setStats(stats);
      }
    }
  };

  const handleValidatePayment = async (proofId: string, status: 'approved' | 'rejected') => {
    const { data: { user } } = await supabase.auth.getUser();

    const { error } = await supabase
      .from('payment_proofs')
      .update({
        status,
        validated_by: user?.id,
        validated_at: new Date().toISOString()
      })
      .eq('id', proofId);

    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Succès", description: `Paiement ${status === 'approved' ? 'validé' : 'refusé'}` });
      loadPaymentProofs();
      loadStats();
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Tableau de bord - Administrateur</h1>
            {adminInfo && (
              <p className="text-sm text-muted-foreground">{adminInfo.country} - {adminInfo.payment_platform}</p>
            )}
          </div>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Déconnexion
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600">{stats.approved}</div>
              <div className="text-sm text-muted-foreground">Paiements validés</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
              <div className="text-sm text-muted-foreground">En attente</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
              <div className="text-sm text-muted-foreground">Refusés</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="payments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="payments" className="relative">
              <CheckCircle className="mr-2 h-4 w-4" />
              Paiements
              {pendingCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {pendingCount}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="files"><FileUp className="mr-2 h-4 w-4" />Fichiers</TabsTrigger>
          </TabsList>

          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Validation des Paiements</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Montant</TableHead>
                      <TableHead>Type de preuve</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paymentProofs.map((proof) => (
                      <TableRow key={proof.id}>
                        <TableCell>{new Date(proof.created_at).toLocaleDateString()}</TableCell>
                        <TableCell>{proof.amount} FCFA</TableCell>
                        <TableCell>{proof.proof_type}</TableCell>
                        <TableCell>
                          <Badge variant={
                            proof.status === 'approved' ? 'default' :
                            proof.status === 'rejected' ? 'destructive' : 'secondary'
                          }>
                            {proof.status === 'approved' ? 'Validé' : proof.status === 'rejected' ? 'Refusé' : 'En attente'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {proof.status === 'pending' && (
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="default"
                                onClick={() => handleValidatePayment(proof.id, 'approved')}
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleValidatePayment(proof.id, 'rejected')}
                              >
                                <XCircle className="h-4 w-4" />
                              </Button>
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="files">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Fichiers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Accédez à l'interface d'upload de fichiers</p>
                <Button onClick={() => navigate('/admin')}>
                  <FileUp className="mr-2 h-4 w-4" />
                  Gérer les fichiers
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

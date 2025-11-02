import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, UserPlus, Users, FileUp, Shield, CheckCircle, XCircle, Trash2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export default function SuperAdminDashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [secondaryAdmins, setSecondaryAdmins] = useState<any[]>([]);
  const [paymentProofs, setPaymentProofs] = useState<any[]>([]);
  const [backupPhone, setBackupPhone] = useState('');
  const [stats, setStats] = useState<any>({});
  const [pendingCount, setPendingCount] = useState(0);

  // État pour l'ajout d'admin secondaire
  const [newAdmin, setNewAdmin] = useState({
    phone: '',
    accessCode: '',
    country: '',
    paymentPlatform: '',
    paymentNumber: ''
  });

  useEffect(() => {
    loadSecondaryAdmins();
    loadPaymentProofs();
    loadStats();

    // Écouter les nouveaux paiements en temps réel
    const channel = supabase
      .channel('payment-proofs-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'payment_proofs'
        },
        () => {
          loadPaymentProofs();
          loadStats();
          toast({ title: "Nouveau paiement", description: "Un nouveau paiement nécessite validation" });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const loadSecondaryAdmins = async () => {
    const { data, error } = await supabase
      .from('secondary_admins')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      setSecondaryAdmins(data || []);
    }
  };

  const loadPaymentProofs = async () => {
    const { data, error } = await supabase
      .from('payment_proofs')
      .select('*, secondary_admins(phone, country)')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      setPaymentProofs(data || []);
      const pending = data?.filter(p => p.status === 'pending').length || 0;
      setPendingCount(pending);
    }
  };

  const loadStats = async () => {
    const { data, error } = await supabase
      .from('payment_proofs')
      .select('assigned_admin_id, status, secondary_admins(phone, country)')
      .eq('status', 'approved');

    if (error) {
      console.error('Error loading stats:', error);
    } else {
      // Group by admin
      const adminStats: any = {};
      data?.forEach((proof: any) => {
        const adminId = proof.assigned_admin_id;
        if (!adminStats[adminId]) {
          adminStats[adminId] = {
            count: 0,
            phone: proof.secondary_admins?.phone,
            country: proof.secondary_admins?.country
          };
        }
        adminStats[adminId].count++;
      });
      setStats(adminStats);
    }
  };

  const handleAddSecondaryAdmin = async () => {
    if (!newAdmin.phone || !newAdmin.accessCode || !newAdmin.country || !newAdmin.paymentPlatform || !newAdmin.paymentNumber) {
      toast({ title: "Erreur", description: "Tous les champs sont requis", variant: "destructive" });
      return;
    }

    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();

    const { error } = await supabase
      .from('secondary_admins')
      .insert({
        phone: newAdmin.phone,
        access_code: newAdmin.accessCode,
        country: newAdmin.country,
        payment_platform: newAdmin.paymentPlatform,
        payment_number: newAdmin.paymentNumber,
        created_by: user?.id,
        user_id: user?.id // Temporaire jusqu'à ce que l'admin se connecte
      });

    setLoading(false);

    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Succès", description: "Administrateur secondaire ajouté" });
      setNewAdmin({ phone: '', accessCode: '', country: '', paymentPlatform: '', paymentNumber: '' });
      loadSecondaryAdmins();
    }
  };

  const handleRemoveAdmin = async (adminId: string) => {
    const { error } = await supabase
      .from('secondary_admins')
      .delete()
      .eq('id', adminId);

    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Succès", description: "Administrateur retiré" });
      loadSecondaryAdmins();
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

  const handleAddBackupNumber = async () => {
    if (!backupPhone) {
      toast({ title: "Erreur", description: "Veuillez entrer un numéro", variant: "destructive" });
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();

    const { error } = await supabase
      .from('super_admin_backup')
      .insert({
        phone: backupPhone,
        created_by: user?.id
      });

    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Succès", description: "Numéro de secours ajouté" });
      setBackupPhone('');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  // Count admins by country
  const adminsByCountry = secondaryAdmins.reduce((acc: any, admin) => {
    acc[admin.country] = (acc[admin.country] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tableau de bord - Administrateur Suprême</h1>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Déconnexion
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="admins" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="admins"><Users className="mr-2 h-4 w-4" />Admins</TabsTrigger>
            <TabsTrigger value="files"><FileUp className="mr-2 h-4 w-4" />Fichiers</TabsTrigger>
            <TabsTrigger value="payments" className="relative">
              <CheckCircle className="mr-2 h-4 w-4" />
              Paiements
              {pendingCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {pendingCount}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="backup"><Shield className="mr-2 h-4 w-4" />Secours</TabsTrigger>
            <TabsTrigger value="stats"><Users className="mr-2 h-4 w-4" />Statistiques</TabsTrigger>
          </TabsList>

          <TabsContent value="admins">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Administrateurs Secondaires</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(adminsByCountry).map(([country, count]) => (
                    <Card key={country}>
                      <CardContent className="pt-6">
                        <div className="text-2xl font-bold">{count as number}</div>
                        <div className="text-sm text-muted-foreground">{country}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Ajouter un administrateur</h3>
                  <div className="grid gap-4">
                    <div>
                      <Label>Numéro de téléphone</Label>
                      <Input
                        value={newAdmin.phone}
                        onChange={(e) => setNewAdmin({ ...newAdmin, phone: e.target.value })}
                        placeholder="+242..."
                      />
                    </div>
                    <div>
                      <Label>Code d'accès</Label>
                      <Input
                        value={newAdmin.accessCode}
                        onChange={(e) => setNewAdmin({ ...newAdmin, accessCode: e.target.value })}
                        placeholder="Code secret"
                      />
                    </div>
                     <div>
                       <Label>Pays</Label>
                       <Select value={newAdmin.country} onValueChange={(value) => setNewAdmin({ ...newAdmin, country: value })}>
                         <SelectTrigger>
                           <SelectValue placeholder="Sélectionner un pays" />
                         </SelectTrigger>
                         <SelectContent className="max-h-[300px]">
                           <SelectItem value="Afrique du Sud">Afrique du Sud</SelectItem>
                           <SelectItem value="Algérie">Algérie</SelectItem>
                           <SelectItem value="Angola">Angola</SelectItem>
                           <SelectItem value="Bénin">Bénin</SelectItem>
                           <SelectItem value="Botswana">Botswana</SelectItem>
                           <SelectItem value="Burkina Faso">Burkina Faso</SelectItem>
                           <SelectItem value="Burundi">Burundi</SelectItem>
                           <SelectItem value="Cameroun">Cameroun</SelectItem>
                           <SelectItem value="Cap-Vert">Cap-Vert</SelectItem>
                           <SelectItem value="Comores">Comores</SelectItem>
                           <SelectItem value="Congo">Congo</SelectItem>
                           <SelectItem value="Côte d'Ivoire">Côte d'Ivoire</SelectItem>
                           <SelectItem value="Djibouti">Djibouti</SelectItem>
                           <SelectItem value="Égypte">Égypte</SelectItem>
                           <SelectItem value="Érythrée">Érythrée</SelectItem>
                           <SelectItem value="Eswatini">Eswatini</SelectItem>
                           <SelectItem value="Éthiopie">Éthiopie</SelectItem>
                           <SelectItem value="Gabon">Gabon</SelectItem>
                           <SelectItem value="Gambie">Gambie</SelectItem>
                           <SelectItem value="Ghana">Ghana</SelectItem>
                           <SelectItem value="Guinée">Guinée</SelectItem>
                           <SelectItem value="Guinée-Bissau">Guinée-Bissau</SelectItem>
                           <SelectItem value="Guinée équatoriale">Guinée équatoriale</SelectItem>
                           <SelectItem value="Kenya">Kenya</SelectItem>
                           <SelectItem value="Lesotho">Lesotho</SelectItem>
                           <SelectItem value="Libéria">Libéria</SelectItem>
                           <SelectItem value="Libye">Libye</SelectItem>
                           <SelectItem value="Madagascar">Madagascar</SelectItem>
                           <SelectItem value="Malawi">Malawi</SelectItem>
                           <SelectItem value="Mali">Mali</SelectItem>
                           <SelectItem value="Maroc">Maroc</SelectItem>
                           <SelectItem value="Maurice">Maurice</SelectItem>
                           <SelectItem value="Mauritanie">Mauritanie</SelectItem>
                           <SelectItem value="Mozambique">Mozambique</SelectItem>
                           <SelectItem value="Namibie">Namibie</SelectItem>
                           <SelectItem value="Niger">Niger</SelectItem>
                           <SelectItem value="Nigeria">Nigeria</SelectItem>
                           <SelectItem value="Ouganda">Ouganda</SelectItem>
                           <SelectItem value="RD Congo">RD Congo</SelectItem>
                           <SelectItem value="Rwanda">Rwanda</SelectItem>
                           <SelectItem value="Sao Tomé-et-Principe">Sao Tomé-et-Principe</SelectItem>
                           <SelectItem value="Sénégal">Sénégal</SelectItem>
                           <SelectItem value="Seychelles">Seychelles</SelectItem>
                           <SelectItem value="Sierra Leone">Sierra Leone</SelectItem>
                           <SelectItem value="Somalie">Somalie</SelectItem>
                           <SelectItem value="Soudan">Soudan</SelectItem>
                           <SelectItem value="Soudan du Sud">Soudan du Sud</SelectItem>
                           <SelectItem value="Tanzanie">Tanzanie</SelectItem>
                           <SelectItem value="Tchad">Tchad</SelectItem>
                           <SelectItem value="Togo">Togo</SelectItem>
                           <SelectItem value="Tunisie">Tunisie</SelectItem>
                           <SelectItem value="Zambie">Zambie</SelectItem>
                           <SelectItem value="Zimbabwe">Zimbabwe</SelectItem>
                         </SelectContent>
                       </Select>
                     </div>
                     <div>
                       <Label>Plateforme de paiement</Label>
                       <Select value={newAdmin.paymentPlatform} onValueChange={(value) => setNewAdmin({ ...newAdmin, paymentPlatform: value })}>
                         <SelectTrigger>
                           <SelectValue placeholder="Sélectionner" />
                         </SelectTrigger>
                         <SelectContent>
                           <SelectItem value="MTN Mobile Money">MTN Mobile Money</SelectItem>
                           <SelectItem value="Airtel Money">Airtel Money</SelectItem>
                           <SelectItem value="Orange Money">Orange Money</SelectItem>
                           <SelectItem value="Moov Money">Moov Money</SelectItem>
                           <SelectItem value="Wave">Wave</SelectItem>
                           <SelectItem value="Flooz">Flooz</SelectItem>
                           <SelectItem value="M-Pesa">M-Pesa</SelectItem>
                           <SelectItem value="Ecobank Mobile">Ecobank Mobile</SelectItem>
                           <SelectItem value="UBA Mobile">UBA Mobile</SelectItem>
                         </SelectContent>
                       </Select>
                     </div>
                    <div>
                      <Label>Numéro de paiement</Label>
                      <Input
                        value={newAdmin.paymentNumber}
                        onChange={(e) => setNewAdmin({ ...newAdmin, paymentNumber: e.target.value })}
                        placeholder="Numéro pour recevoir les paiements"
                      />
                    </div>
                    <Button onClick={handleAddSecondaryAdmin} disabled={loading}>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Ajouter l'administrateur
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Liste des administrateurs</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Téléphone</TableHead>
                        <TableHead>Pays</TableHead>
                        <TableHead>Plateforme</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                       {secondaryAdmins.map((admin) => {
                         const maskedPhone = `+××× ×××${admin.phone.slice(-4)}`;
                         return (
                           <TableRow key={admin.id}>
                             <TableCell>{maskedPhone}</TableCell>
                             <TableCell>{admin.country}</TableCell>
                             <TableCell>{admin.payment_platform}</TableCell>
                             <TableCell>
                               <Badge variant={admin.is_active ? "default" : "secondary"}>
                                 {admin.is_active ? "Actif" : "Inactif"}
                               </Badge>
                             </TableCell>
                             <TableCell>
                               <Button
                                 variant="destructive"
                                 size="sm"
                                 onClick={() => handleRemoveAdmin(admin.id)}
                               >
                                 <Trash2 className="h-4 w-4" />
                               </Button>
                             </TableCell>
                           </TableRow>
                         );
                       })}
                    </TableBody>
                  </Table>
                </div>
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
                      <TableHead>Plateforme</TableHead>
                      <TableHead>Pays</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paymentProofs.map((proof) => (
                      <TableRow key={proof.id}>
                        <TableCell>{new Date(proof.created_at).toLocaleDateString()}</TableCell>
                        <TableCell>{proof.amount} FCFA</TableCell>
                        <TableCell>{proof.payment_platform}</TableCell>
                        <TableCell>{proof.country}</TableCell>
                        <TableCell>{proof.proof_type}</TableCell>
                        <TableCell>
                          <Badge variant={
                            proof.status === 'approved' ? 'default' :
                            proof.status === 'rejected' ? 'destructive' : 'secondary'
                          }>
                            {proof.status}
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

          <TabsContent value="backup">
            <Card>
              <CardHeader>
                <CardTitle>Numéro de Secours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Ajouter un numéro de secours</Label>
                  <div className="flex gap-2">
                    <Input
                      value={backupPhone}
                      onChange={(e) => setBackupPhone(e.target.value)}
                      placeholder="+242..."
                    />
                    <Button onClick={handleAddBackupNumber}>
                      <Shield className="mr-2 h-4 w-4" />
                      Ajouter
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats">
            <Card>
              <CardHeader>
                <CardTitle>Statistiques des Paiements par Administrateur</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Téléphone</TableHead>
                      <TableHead>Pays</TableHead>
                      <TableHead>Paiements validés</TableHead>
                    </TableRow>
                  </TableHeader>
                   <TableBody>
                     {Object.entries(stats).map(([adminId, data]: [string, any]) => {
                       const maskedPhone = data.phone ? `+××× ×××${data.phone.slice(-4)}` : 'N/A';
                       return (
                         <TableRow key={adminId}>
                           <TableCell>{maskedPhone}</TableCell>
                           <TableCell>{data.country}</TableCell>
                           <TableCell>
                             <Badge>{data.count}</Badge>
                           </TableCell>
                         </TableRow>
                       );
                     })}
                   </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Crown, UserPlus, Trash2, LogOut, TrendingUp, Users, CheckCircle, XCircle } from 'lucide-react';
import {
  getAdminsSecondaires,
  addAdminSecondaire,
  removeAdminSecondaire,
  logoutAdmin,
  AdminSecondaire
} from '@/data/admin';
import { africanCountries } from '@/data/countries';
import { getTotalPaymentsStats } from '@/data/payments';

interface AdminSupremePanelProps {
  onLogout: () => void;
}

const AdminSupremePanel = ({ onLogout }: AdminSupremePanelProps) => {
  const [admins, setAdmins] = useState<AdminSecondaire[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  
  const [newPhone, setNewPhone] = useState('');
  const [newCountry, setNewCountry] = useState('');
  const [newCode, setNewCode] = useState('');
  const [newPaymentMethod, setNewPaymentMethod] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const stats = getTotalPaymentsStats();
  const paymentMethods = newCountry ? africanCountries.find(c => c.name === newCountry)?.paymentMethods || [] : [];

  useEffect(() => {
    loadAdmins();
  }, []);

  const loadAdmins = () => {
    setAdmins(getAdminsSecondaires());
  };

  const handleAddAdmin = () => {
    setError(null);
    setSuccess(null);

    if (!newPhone || !newCountry || !newCode || !newPaymentMethod) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    const result = addAdminSecondaire(newPhone, newCountry, newCode, newPaymentMethod);

    if (result.success) {
      setSuccess('Administrateur ajouté avec succès');
      setNewPhone('');
      setNewCountry('');
      setNewCode('');
      setNewPaymentMethod('');
      setShowAddForm(false);
      loadAdmins();
    } else {
      setError(result.message);
    }
  };

  const handleRemoveAdmin = (adminId: string) => {
    if (confirm('Êtes-vous sûr de vouloir retirer cet administrateur ?')) {
      const result = removeAdminSecondaire(adminId);
      if (result.success) {
        setSuccess('Administrateur retiré avec succès');
        loadAdmins();
      } else {
        setError(result.message);
      }
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    onLogout();
  };

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Admin Suprême</h1>
              <p className="text-muted-foreground">Panel de gestion principal</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="w-4 h-4" />
            Déconnexion
          </Button>
        </div>

        {/* Statistiques globales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Paiements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                En attente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-500" />
                <p className="text-2xl font-bold">{stats.pending}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Approuvés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <p className="text-2xl font-bold">{stats.approved}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Montant total
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-500" />
                <p className="text-2xl font-bold">{stats.totalAmount} FCFA</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Messages */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
            {success}
          </div>
        )}

        {/* Bouton ajouter admin */}
        {!showAddForm && (
          <Button onClick={() => setShowAddForm(true)} className="mb-6 gap-2">
            <UserPlus className="w-4 h-4" />
            Ajouter un administrateur
          </Button>
        )}

        {/* Formulaire d'ajout */}
        {showAddForm && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Nouvel administrateur secondaire</CardTitle>
              <CardDescription>
                Remplissez les informations du nouvel administrateur
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Numéro de téléphone</Label>
                  <Input
                    type="tel"
                    placeholder="+242065012967"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Pays</Label>
                  <Select value={newCountry} onValueChange={setNewCountry}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez le pays" />
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

                <div className="space-y-2">
                  <Label>Code secret</Label>
                  <Input
                    type="password"
                    placeholder="Code d'accès"
                    value={newCode}
                    onChange={(e) => setNewCode(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Mode de paiement</Label>
                  <Select
                    value={newPaymentMethod}
                    onValueChange={setNewPaymentMethod}
                    disabled={!newCountry}
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
              </div>

              <div className="flex gap-2">
                <Button onClick={handleAddAdmin}>Ajouter</Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowAddForm(false);
                    setError(null);
                  }}
                >
                  Annuler
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Liste des administrateurs */}
        <Card>
          <CardHeader>
            <CardTitle>Administrateurs secondaires ({admins.length})</CardTitle>
            <CardDescription>
              Gérez les administrateurs et leurs permissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {admins.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Aucun administrateur secondaire</p>
              </div>
            ) : (
              <div className="space-y-4">
                {admins.map((admin) => (
                  <div
                    key={admin.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold">{admin.phone}</p>
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {admin.country}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {admin.paymentMethod}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {admin.validationsCount} validation{admin.validationsCount > 1 ? 's' : ''}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveAdmin(admin.id)}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSupremePanel;
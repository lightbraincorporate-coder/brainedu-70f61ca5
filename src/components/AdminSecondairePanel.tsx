import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, LogOut, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { getAdminSession, logoutAdmin, incrementAdminValidations, AdminSecondaire } from '@/data/admin';
import { getPendingPaymentsForAdmin, approvePayment, rejectPayment, PaymentProof } from '@/data/payments';
import { getCourseById } from '@/data/resources';

interface AdminSecondairePanelProps {
  onLogout: () => void;
}

const AdminSecondairePanel = ({ onLogout }: AdminSecondairePanelProps) => {
  const [adminData, setAdminData] = useState<AdminSecondaire | null>(null);
  const [pendingPayments, setPendingPayments] = useState<PaymentProof[]>([]);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    const session = getAdminSession();
    if (session && session.adminType === 'secondaire') {
      setAdminData(session.adminData as AdminSecondaire);
      loadPendingPayments((session.adminData as AdminSecondaire).id);
    }
  }, []);

  const loadPendingPayments = (adminId: string) => {
    const payments = getPendingPaymentsForAdmin(adminId);
    setPendingPayments(payments);
  };

  const handleApprove = async (paymentId: string) => {
    if (!adminData) return;

    setProcessingId(paymentId);
    setMessage(null);

    await new Promise(resolve => setTimeout(resolve, 800));

    const result = approvePayment(paymentId, adminData.id);

    if (result.success) {
      incrementAdminValidations(adminData.id);
      setMessage({ type: 'success', text: 'Paiement validé avec succès' });
      loadPendingPayments(adminData.id);
      
      const session = getAdminSession();
      if (session) {
        setAdminData(session.adminData as AdminSecondaire);
      }
    } else {
      setMessage({ type: 'error', text: result.message });
    }

    setProcessingId(null);
  };

  const handleReject = async (paymentId: string) => {
    if (!adminData) return;

    if (!confirm('Êtes-vous sûr de vouloir refuser ce paiement ?')) {
      return;
    }

    setProcessingId(paymentId);
    setMessage(null);

    await new Promise(resolve => setTimeout(resolve, 800));

    const result = rejectPayment(paymentId, adminData.id);

    if (result.success) {
      setMessage({ type: 'success', text: 'Paiement refusé' });
      loadPendingPayments(adminData.id);
    } else {
      setMessage({ type: 'error', text: result.message });
    }

    setProcessingId(null);
  };

  const handleLogout = () => {
    logoutAdmin();
    onLogout();
  };

  if (!adminData) {
    return null;
  }

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Admin Secondaire</h1>
              <p className="text-muted-foreground">
                {adminData.country} - {adminData.paymentMethod}
              </p>
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="w-4 h-4" />
            Déconnexion
          </Button>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Paiements en attente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <p className="text-2xl font-bold">{pendingPayments.length}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Validations totales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <p className="text-2xl font-bold">{adminData.validationsCount}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Message */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg border ${
              message.type === 'success'
                ? 'bg-green-50 text-green-700 border-green-200'
                : 'bg-red-50 text-red-700 border-red-200'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Liste des paiements en attente */}
        <Card>
          <CardHeader>
            <CardTitle>Paiements en attente de validation</CardTitle>
            <CardDescription>
              Vérifiez les preuves de paiement et validez ou refusez
            </CardDescription>
          </CardHeader>
          <CardContent>
            {pendingPayments.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <CheckCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Aucun paiement en attente</p>
              </div>
            ) : (
              <div className="space-y-6">
                {pendingPayments.map((payment) => (
                  <div
                    key={payment.id}
                    className="border rounded-lg p-6 space-y-4"
                  >
                    {/* Info paiement */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          {payment.totalAmount} FCFA
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {payment.country} • {payment.paymentMethod}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(payment.submittedAt).toLocaleString('fr-FR')}
                        </p>
                      </div>
                      <div className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
                        En attente
                      </div>
                    </div>

                    {/* Cours achetés */}
                    <div>
                      <p className="text-sm font-medium mb-2">
                        Cours achetés ({payment.courseIds.length}) :
                      </p>
                      <div className="space-y-1">
                        {payment.courseIds.map((courseId) => {
                          const course = getCourseById(courseId);
                          return course ? (
                            <div
                              key={courseId}
                              className="text-sm text-muted-foreground"
                            >
                              • {course.title} ({course.class})
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>

                    {/* Preuve de paiement */}
                    <div>
                      <p className="text-sm font-medium mb-2">
                        Preuve de paiement :
                      </p>
                      <div className="p-4 bg-gray-50 rounded-lg border">
                        <p className="text-sm font-mono break-words">
                          {payment.paymentMessage}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">
                            ID de transaction :
                          </span>
                          <span className="text-sm font-bold text-blue-600">
                            {payment.paymentId}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      <Button
                        onClick={() => handleApprove(payment.id)}
                        disabled={processingId === payment.id}
                        className="flex-1 gap-2 bg-green-600 hover:bg-green-700"
                      >
                        {processingId === payment.id ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Traitement...
                          </>
                        ) : (
                          <>
                            <CheckCircle className="w-4 h-4" />
                            Valider
                          </>
                        )}
                      </Button>
                      <Button
                        onClick={() => handleReject(payment.id)}
                        disabled={processingId === payment.id}
                        variant="destructive"
                        className="flex-1 gap-2"
                      >
                        <XCircle className="w-4 h-4" />
                        Refuser
                      </Button>
                    </div>
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

export default AdminSecondairePanel;
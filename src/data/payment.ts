export interface PaymentProof {
  id: string;
  userId: string; // Pour l'instant, ID temporaire
  courseIds: string[]; // Liste des cours achetés
  totalAmount: number;
  country: string;
  paymentMethod: string;
  adminId: string; // Admin qui doit valider
  adminPhone: string;
  paymentId: string; // ID de 10 chiffres du message de paiement
  paymentMessage: string; // Message complet de confirmation
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: Date;
  processedAt?: Date;
  processedBy?: string;
}

const PAYMENTS_KEY = 'pending_payments';
const PAYMENT_HISTORY_KEY = 'payment_history';

export const generateUserId = (): string => {
  let userId = localStorage.getItem('temp_user_id');
  if (!userId) {
    userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('temp_user_id', userId);
  }
  return userId;
};

export const getPendingPayments = (): PaymentProof[] => {
  if (typeof window === 'undefined') return [];
  
  const stored = localStorage.getItem(PAYMENTS_KEY);
  if (!stored) return [];
  
  try {
    const payments = JSON.parse(stored);
    return payments.map((p: any) => ({
      ...p,
      submittedAt: new Date(p.submittedAt),
      processedAt: p.processedAt ? new Date(p.processedAt) : undefined
    }));
  } catch {
    return [];
  }
};

const savePayments = (payments: PaymentProof[]): void => {
  localStorage.setItem(PAYMENTS_KEY, JSON.stringify(payments));
};

export const getPaymentHistory = (): PaymentProof[] => {
  if (typeof window === 'undefined') return [];
  
  const stored = localStorage.getItem(PAYMENT_HISTORY_KEY);
  if (!stored) return [];
  
  try {
    const payments = JSON.parse(stored);
    return payments.map((p: any) => ({
      ...p,
      submittedAt: new Date(p.submittedAt),
      processedAt: p.processedAt ? new Date(p.processedAt) : undefined
    }));
  } catch {
    return [];
  }
};

const savePaymentHistory = (payments: PaymentProof[]): void => {
  localStorage.setItem(PAYMENT_HISTORY_KEY, JSON.stringify(payments));
};

export const validatePaymentMessage = (message: string): { valid: boolean; paymentId?: string; error?: string } => {
  // Format attendu: "Vous avez envoye [MONTANT] FCFA a [NOM] [NUMERO] le [DATE]. Solde: [SOLDE] FCFA. ID: [10 CHIFFRES]."
  const idRegex = /ID:\s*(\d{10})/;
  const match = message.match(idRegex);
  
  if (!match) {
    return {
      valid: false,
      error: 'Format invalide. L\'ID de paiement (10 chiffres) est requis.'
    };
  }
  
  const paymentId = match[1];
  
  if (!message.includes('Vous avez envoye') || !message.includes('FCFA')) {
    return {
      valid: false,
      error: 'Le message ne correspond pas au format attendu.'
    };
  }
  
  return {
    valid: true,
    paymentId
  };
};

export const submitPayment = (
  courseIds: string[],
  totalAmount: number,
  country: string,
  paymentMethod: string,
  adminId: string,
  adminPhone: string,
  paymentMessage: string
): { success: boolean; message: string; paymentId?: string } => {
  
  const validation = validatePaymentMessage(paymentMessage);
  if (!validation.valid) {
    return {
      success: false,
      message: validation.error || 'Message de paiement invalide'
    };
  }
  
  const userId = generateUserId();
  const payments = getPendingPayments();
  
  const newPayment: PaymentProof = {
    id: `payment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    courseIds,
    totalAmount,
    country,
    paymentMethod,
    adminId,
    adminPhone,
    paymentId: validation.paymentId!,
    paymentMessage,
    status: 'pending',
    submittedAt: new Date()
  };
  
  payments.push(newPayment);
  savePayments(payments);
  
  return {
    success: true,
    message: 'Paiement soumis avec succès. En attente de validation.',
    paymentId: newPayment.id
  };
};

export const getPendingPaymentsForAdmin = (adminId: string): PaymentProof[] => {
  const payments = getPendingPayments();
  return payments.filter(p => p.adminId === adminId && p.status === 'pending');
};

export const approvePayment = (paymentId: string, adminId: string): { success: boolean; message: string; payment?: PaymentProof } => {
  const payments = getPendingPayments();
  const payment = payments.find(p => p.id === paymentId);
  
  if (!payment) {
    return {
      success: false,
      message: 'Paiement introuvable'
    };
  }
  
  if (payment.adminId !== adminId) {
    return {
      success: false,
      message: 'Vous n\'êtes pas autorisé à valider ce paiement'
    };
  }
  
  payment.status = 'approved';
  payment.processedAt = new Date();
  payment.processedBy = adminId;
  
  const updatedPayments = payments.filter(p => p.id !== paymentId);
  savePayments(updatedPayments);
  
  const history = getPaymentHistory();
  history.push(payment);
  savePaymentHistory(history);
  
  return {
    success: true,
    message: 'Paiement validé avec succès',
    payment
  };
};

export const rejectPayment = (paymentId: string, adminId: string): { success: boolean; message: string; payment?: PaymentProof } => {
  const payments = getPendingPayments();
  const payment = payments.find(p => p.id === paymentId);
  
  if (!payment) {
    return {
      success: false,
      message: 'Paiement introuvable'
    };
  }
  
  if (payment.adminId !== adminId) {
    return {
      success: false,
      message: 'Vous n\'êtes pas autorisé à refuser ce paiement'
    };
  }
  
  payment.status = 'rejected';
  payment.processedAt = new Date();
  payment.processedBy = adminId;
  
  const updatedPayments = payments.filter(p => p.id !== paymentId);
  savePayments(updatedPayments);
  
  const history = getPaymentHistory();
  history.push(payment);
  savePaymentHistory(history);
  
  return {
    success: true,
    message: 'Paiement refusé',
    payment
  };
};

export const countPendingPaymentsForAdmin = (adminId: string): number => {
  return getPendingPaymentsForAdmin(adminId).length;
};

export const getPaymentStatus = (paymentId: string): PaymentProof | null => {
  const pending = getPendingPayments();
  const history = getPaymentHistory();
  
  return [...pending, ...history].find(p => p.id === paymentId) || null;
};

export const getUserPayments = (): PaymentProof[] => {
  const userId = generateUserId();
  const pending = getPendingPayments();
  const history = getPaymentHistory();
  
  return [...pending, ...history].filter(p => p.userId === userId);
};

export const getTotalPaymentsStats = (): {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
  totalAmount: number;
} => {
  const pending = getPendingPayments();
  const history = getPaymentHistory();
  const all = [...pending, ...history];
  
  return {
    total: all.length,
    pending: pending.length,
    approved: history.filter(p => p.status === 'approved').length,
    rejected: history.filter(p => p.status === 'rejected').length,
    totalAmount: history
      .filter(p => p.status === 'approved')
      .reduce((sum, p) => sum + p.totalAmount, 0)
  };
};

export const clearAllPayments = (): void => {
  localStorage.removeItem(PAYMENTS_KEY);
  localStorage.removeItem(PAYMENT_HISTORY_KEY);
};
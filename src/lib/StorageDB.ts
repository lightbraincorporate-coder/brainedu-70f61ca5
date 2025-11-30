import { Admin, PaymentProof, AdminStats } from '@/types/admin';
 
const KEYS = {
  SECONDARY_ADMINS: 'secondaryAdmins',
  PAYMENT_PROOFS: 'paymentProofs',
  CURRENT_ADMIN: 'currentAdmin',
  CART_ITEMS: 'cartItems',
  PREMIUM_USERS: 'premiumUsers',
};

export const getAllSecondaryAdmins = (): Admin[] => {
  const data = localStorage.getItem(KEYS.SECONDARY_ADMINS);
  return data ? JSON.parse(data) : [];
};

export const addSecondaryAdmin = (admin: Omit<Admin, 'id' | 'createdAt' | 'validatedPaymentsCount'>): Admin => {
  const admins = getAllSecondaryAdmins();
  const newAdmin: Admin = {
    ...admin,
    id: `admin_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    validatedPaymentsCount: 0,
  };
  admins.push(newAdmin);
  localStorage.setItem(KEYS.SECONDARY_ADMINS, JSON.stringify(admins));
  return newAdmin;
};

export const removeSecondaryAdmin = (adminId: string): void => {
  const admins = getAllSecondaryAdmins();
  const filtered = admins.filter(a => a.id !== adminId);
  localStorage.setItem(KEYS.SECONDARY_ADMINS, JSON.stringify(filtered));
};

export const getAdminByPhoneAndCode = (phone: string, secretCode: string): Admin | null => {
  const admins = getAllSecondaryAdmins();
  return admins.find(a => a.phone === phone && a.secretCode === secretCode) || null;
};

export const getAdminByCountryAndPayment = (country: string, paymentMethod: string): Admin | null => {
  const admins = getAllSecondaryAdmins();
  return admins.find(a => a.country === country && a.paymentMethod === paymentMethod) || null;
};

export const updateAdminValidationCount = (adminId: string): void => {
  const admins = getAllSecondaryAdmins();
  const admin = admins.find(a => a.id === adminId);
  if (admin) {
    admin.validatedPaymentsCount += 1;
    localStorage.setItem(KEYS.SECONDARY_ADMINS, JSON.stringify(admins));
  }
};


export const getCurrentAdmin = (): Admin | null => {
  const data = localStorage.getItem(KEYS.CURRENT_ADMIN);
  return data ? JSON.parse(data) : null;
};

export const setCurrentAdmin = (admin: Admin | null): void => {
  if (admin) {
    localStorage.setItem(KEYS.CURRENT_ADMIN, JSON.stringify(admin));
  } else {
    localStorage.removeItem(KEYS.CURRENT_ADMIN);
  }
};


export const getAllPaymentProofs = (): PaymentProof[] => {
  const data = localStorage.getItem(KEYS.PAYMENT_PROOFS);
  return data ? JSON.parse(data) : [];
};

export const addPaymentProof = (proof: Omit<PaymentProof, 'id' | 'submittedAt' | 'status'>): PaymentProof => {
  const proofs = getAllPaymentProofs();
  const newProof: PaymentProof = {
    ...proof,
    id: `proof_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    status: 'pending',
    submittedAt: new Date().toISOString(),
  };
  proofs.push(newProof);
  localStorage.setItem(KEYS.PAYMENT_PROOFS, JSON.stringify(proofs));
  
  window.dispatchEvent(new Event('storage'));
  
  return newProof;
};

export const updatePaymentProofStatus = (
  proofId: string, 
  status: 'approved' | 'rejected',
  processedBy: string,
  rejectionReason?: string
): void => {
  const proofs = getAllPaymentProofs();
  const proof = proofs.find(p => p.id === proofId);
  
  if (proof) {
    proof.status = status;
    proof.processedAt = new Date().toISOString();
    proof.processedBy = processedBy;
    if (rejectionReason) {
      proof.rejectionReason = rejectionReason;
    }
    
    if (status === 'approved') {
      updateAdminValidationCount(proof.assignedAdminId);
      
      activatePremiumUser(proof.userId, proofId);
    }
    
    localStorage.setItem(KEYS.PAYMENT_PROOFS, JSON.stringify(proofs));
    window.dispatchEvent(new Event('storage'));
  }
};

export const getPendingPaymentProofs = (adminId?: string): PaymentProof[] => {
  const proofs = getAllPaymentProofs();
  return proofs.filter(p => {
    if (p.status !== 'pending') return false;
    if (adminId) return p.assignedAdminId === adminId;
    return true;
  });
};

export const getPaymentProofById = (proofId: string): PaymentProof | null => {
  const proofs = getAllPaymentProofs();
  return proofs.find(p => p.id === proofId) || null;
};

export const getAdminStats = (adminId?: string): AdminStats[] => {
  const proofs = getAllPaymentProofs();
  const admins = getAllSecondaryAdmins();
  
  const statsMap = new Map<string, AdminStats>();
  
  admins.forEach(admin => {
    statsMap.set(admin.id, {
      adminId: admin.id,
      adminPhone: admin.phone,
      totalValidated: 0,
      totalRejected: 0,
      pendingCount: 0,
      validatedToday: 0,
      validatedThisWeek: 0,
      validatedThisMonth: 0,
    });
  });
  
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const weekStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  
  proofs.forEach(proof => {
    if (adminId && proof.assignedAdminId !== adminId) return;
    
    const stats = statsMap.get(proof.assignedAdminId);
    if (!stats) return;
    
    if (proof.status === 'approved') {
      stats.totalValidated++;
      
      if (proof.processedAt) {
        const processedDate = new Date(proof.processedAt);
        if (processedDate >= todayStart) stats.validatedToday++;
        if (processedDate >= weekStart) stats.validatedThisWeek++;
        if (processedDate >= monthStart) stats.validatedThisMonth++;
      }
    } else if (proof.status === 'rejected') {
      stats.totalRejected++;
    } else if (proof.status === 'pending') {
      stats.pendingCount++;
    }
  });
  
  return Array.from(statsMap.values());
};

export const activatePremiumUser = (userId: string, proofId: string): void => {
  const data = localStorage.getItem(KEYS.PREMIUM_USERS);
  const users = data ? JSON.parse(data) : [];
  
  const existingIndex = users.findIndex((u: any) => u.userId === userId);
  
  const premiumUser = {
    userId,
    proofId,
    isActive: true,
    activatedAt: new Date().toISOString(),
    expiresAt: null, // Accès à vie
  };
  
  if (existingIndex >= 0) {
    users[existingIndex] = premiumUser;
  } else {
    users.push(premiumUser);
  }
  
  localStorage.setItem(KEYS.PREMIUM_USERS, JSON.stringify(users));
};

export const isPremiumUser = (userId: string): boolean => {
  const data = localStorage.getItem(KEYS.PREMIUM_USERS);
  if (!data) return false;
  
  const users = JSON.parse(data);
  const user = users.find((u: any) => u.userId === userId);
  
  return user?.isActive || false;
};


export const getCartItems = (): any[] => {
  const data = localStorage.getItem(KEYS.CART_ITEMS);
  return data ? JSON.parse(data) : [];
};

export const setCartItems = (items: any[]): void => {
  localStorage.setItem(KEYS.CART_ITEMS, JSON.stringify(items));
};

export const addToCart = (item: any): void => {
  const items = getCartItems();
  items.push(item);
  setCartItems(items);
};

export const removeFromCart = (itemId: string): void => {
  const items = getCartItems();
  const filtered = items.filter(i => i.id !== itemId);
  setCartItems(items);
};

export const clearCart = (): void => {
  localStorage.removeItem(KEYS.CART_ITEMS);
};

export const clearAllData = (): void => {
  Object.values(KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
};
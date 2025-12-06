
export interface AdminSupreme {
  type: 'supreme';
  phone: string;
  code: string;
}

export interface AdminSecondaire {
  id: string;
  type: 'secondaire';
  phone: string;
  country: string;
  code: string;
  paymentMethod: string;
  validationsCount: number;
  createdAt: Date;
}

export interface AdminSession {
  adminType: 'supreme' | 'secondaire';
  adminData: AdminSupreme | AdminSecondaire;
  loginTime: Date;
}

const ADMIN_SUPREME_PHONE = '+242066070176';
const ADMIN_SUPREME_CODE = 'LoneTecrasoWinter2009';

const ADMIN_SESSION_KEY = 'admin_session';
const ADMINS_SECONDAIRES_KEY = 'admins_secondaires';

export const getAdminsSecondaires = (): AdminSecondaire[] => {
  if (typeof window === 'undefined') return [];
  
  const stored = localStorage.getItem(ADMINS_SECONDAIRES_KEY);
  if (!stored) return [];
  
  try {
    const admins = JSON.parse(stored);
    return admins.map((a: any) => ({
      ...a,
      createdAt: new Date(a.createdAt)
    }));
  } catch {
    return [];
  }
};

const saveAdminsSecondaires = (admins: AdminSecondaire[]): void => {
  localStorage.setItem(ADMINS_SECONDAIRES_KEY, JSON.stringify(admins));
};

export const loginAdminSupreme = (phone: string, code: string): { success: boolean; message: string; admin?: AdminSupreme } => {
  if (phone === ADMIN_SUPREME_PHONE && code === ADMIN_SUPREME_CODE) {
    const admin: AdminSupreme = {
      type: 'supreme',
      phone: ADMIN_SUPREME_PHONE,
      code: ADMIN_SUPREME_CODE
    };
    
    const session: AdminSession = {
      adminType: 'supreme',
      adminData: admin,
      loginTime: new Date()
    };
    
    localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
    
    return {
      success: true,
      message: 'Connexion réussie',
      admin
    };
  }
  
  return {
    success: false,
    message: 'Identifiants incorrects'
  };
};

export const loginAdminSecondaire = (phone: string, code: string): { success: boolean; message: string; admin?: AdminSecondaire } => {
  const admins = getAdminsSecondaires();
  const admin = admins.find(a => a.phone === phone && a.code === code);
  
  if (admin) {
    const session: AdminSession = {
      adminType: 'secondaire',
      adminData: admin,
      loginTime: new Date()
    };
    
    localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
    
    return {
      success: true,
      message: 'Connexion réussie',
      admin
    };
  }
  
  return {
    success: false,
    message: 'Identifiants incorrects'
  };
};

export const getAdminSession = (): AdminSession | null => {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem(ADMIN_SESSION_KEY);
  if (!stored) return null;
  
  try {
    const session = JSON.parse(stored);
    return {
      ...session,
      loginTime: new Date(session.loginTime)
    };
  } catch {
    return null;
  }
};

export const logoutAdmin = (): void => {
  localStorage.removeItem(ADMIN_SESSION_KEY);
};

export const addAdminSecondaire = (
  phone: string,
  country: string,
  code: string,
  paymentMethod: string
): { success: boolean; message: string; admin?: AdminSecondaire } => {
  const admins = getAdminsSecondaires();
  
  if (admins.some(a => a.phone === phone)) {
    return {
      success: false,
      message: 'Un administrateur avec ce numéro existe déjà'
    };
  }
  
  if (admins.some(a => a.country === country && a.paymentMethod === paymentMethod)) {
    return {
      success: false,
      message: `Un administrateur existe déjà pour ${country} - ${paymentMethod}`
    };
  }
  
  const newAdmin: AdminSecondaire = {
    id: `admin_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    type: 'secondaire',
    phone,
    country,
    code,
    paymentMethod,
    validationsCount: 0,
    createdAt: new Date()
  };
  
  admins.push(newAdmin);
  saveAdminsSecondaires(admins);
  
  return {
    success: true,
    message: 'Administrateur ajouté avec succès',
    admin: newAdmin
  };
};

export const removeAdminSecondaire = (adminId: string): { success: boolean; message: string } => {
  let admins = getAdminsSecondaires();
  const initialLength = admins.length;
  
  admins = admins.filter(a => a.id !== adminId);
  
  if (admins.length === initialLength) {
    return {
      success: false,
      message: 'Administrateur introuvable'
    };
  }
  
  saveAdminsSecondaires(admins);
  
  return {
    success: true,
    message: 'Administrateur retiré avec succès'
  };
};

export const findAdminByCountryAndPayment = (country: string, paymentMethod: string): AdminSecondaire | null => {
  const admins = getAdminsSecondaires();
  return admins.find(a => a.country === country && a.paymentMethod === paymentMethod) || null;
};

export const incrementAdminValidations = (adminId: string): void => {
  const admins = getAdminsSecondaires();
  const admin = admins.find(a => a.id === adminId);
  
  if (admin) {
    admin.validationsCount++;
    saveAdminsSecondaires(admins);
  }
};

export const getAdminStats = (adminId: string, days: number = 7): { validations: number } => {
  // Pour l'instant, on retourne juste le total
  // Plus tard, vous pourrez filtrer par période
  const admins = getAdminsSecondaires();
  const admin = admins.find(a => a.id === adminId);
  
  return {
    validations: admin?.validationsCount || 0
  };
};

export const isAdminSupreme = (): boolean => {
  const session = getAdminSession();
  return session?.adminType === 'supreme';
};

export const isAdminSecondaire = (): boolean => {
  const session = getAdminSession();
  return session?.adminType === 'secondaire';
};

export const clearAllAdminData = (): void => {
  localStorage.removeItem(ADMIN_SESSION_KEY);
  localStorage.removeItem(ADMINS_SECONDAIRES_KEY);
};
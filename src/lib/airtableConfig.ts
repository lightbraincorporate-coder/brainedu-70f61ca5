// Configuration Airtable
export const AIRTABLE_CONFIG = {
  BASE_ID: 'appBW99WIVu9ZUami',
  TABLES: {
    USERS: 'utilisateurs',
    PAYMENTS: 'paiements',
    COURSES: 'cours',
    EXERCISES: 'exercices'
  }
};

// Helper pour convertir les données de BrainEdu vers Airtable
export const formatPaymentForAirtable = (payment: any) => ({
  fields: {
    'User ID': payment.user_id,
    'Montant': payment.amount,
    'Pays': payment.country,
    'Plateforme': payment.payment_platform,
    'Statut': 'Validé',
    'Date de validation': payment.validated_at,
    'Validé par': payment.validated_by,
  }
});

export const formatUserForAirtable = (user: any) => ({
  fields: {
    'User ID': user.user_id,
    'Téléphone': user.phone || '',
    'Email': user.email || '',
    'Date inscription': new Date().toISOString(),
    'Statut compte': user.is_premium ? 'Premium' : 'Gratuit',
  }
});
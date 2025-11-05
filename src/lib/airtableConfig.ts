// Configuration Airtable
export const AIRTABLE_CONFIG = {
  BASE_ID: 'appBW99WIVu9ZUami',
  TABLES: {
    USERS: 'users',
    PAYMENTS: 'payments',
    COURSES: 'courses',
    COURSE_RESUMES: 'course_resumes',
    EXPOSES: 'exposes',
    EXERCISES: 'exercises',
    CORRECTED_EXERCISES: 'corrected_exercises'
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
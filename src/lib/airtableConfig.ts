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

// Helper pour converter les données vers Airtable
export const formatPaymentForAirtable = (payment: any) => ({
  fields: {
    'User ID': payment.user_id,
    'Amount': payment.amount,
    'Country': payment.country,
    'Platform': payment.payment_platform,
    'Status': 'Approved',
    'Validated At': payment.validated_at,
    'Validated By': payment.validated_by,
  }
});

export const formatUserForAirtable = (user: any) => ({
  fields: {
    'User ID': user.user_id,
    'Phone': user.phone || '',
    'Email': user.email || '',
    'Registration Date': new Date().toISOString(),
    'Account Status': user.is_premium ? 'Premium' : 'Free',
  }
});

export const formatCourseForAirtable = (course: any) => ({
  fields: {
    'Course ID': course.id,
    'Level': course.level,
    'Class': course.class_name,
    'Subject': course.subject,
    'Trimester': course.trimester || '',
    'Course Name': course.course_name,
    'File Type': course.file_type,
    'Format': course.file_format,
    'Google Drive Link': course.google_drive_link || '',
    'Created At': course.created_at || new Date().toISOString(),
  }
});
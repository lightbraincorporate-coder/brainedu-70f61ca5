// Fonction pour masquer les numéros de téléphone
export function maskPhone(phone: string): string {
  if (!phone || phone.length < 4) return phone;
  // Garde seulement les 4 derniers chiffres
  return `+××× ×××${phone.slice(-4)}`;
}

// Fonction pour générer un email interne à partir du téléphone
export function phoneToEmail(phone: string): string {
  // Enlever tous les caractères non numériques
  const cleaned = phone.replace(/\D/g, '');
  return `admin-${cleaned}@braincorp.internal`;
}

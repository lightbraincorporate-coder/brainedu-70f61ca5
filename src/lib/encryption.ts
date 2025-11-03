// Fonction simple de chiffrement XOR pour les détails de paiement
// Note: Pour une vraie production, utiliser crypto-js ou similaire
const XOR_KEY = 'BrainCorp2024SecurePayment';

export function encryptPaymentDetails(text: string): string {
  if (!text) return text;
  
  let encrypted = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i) ^ XOR_KEY.charCodeAt(i % XOR_KEY.length);
    encrypted += String.fromCharCode(charCode);
  }
  
  // Encoder en base64 pour stockage sûr
  return btoa(encrypted);
}

export function decryptPaymentDetails(encrypted: string): string {
  if (!encrypted) return encrypted;
  
  try {
    // Décoder de base64
    const decoded = atob(encrypted);
    
    let decrypted = '';
    for (let i = 0; i < decoded.length; i++) {
      const charCode = decoded.charCodeAt(i) ^ XOR_KEY.charCodeAt(i % XOR_KEY.length);
      decrypted += String.fromCharCode(charCode);
    }
    
    return decrypted;
  } catch (e) {
    console.error('Erreur de déchiffrement:', e);
    return encrypted;
  }
}

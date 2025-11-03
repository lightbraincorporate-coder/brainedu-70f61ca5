// Fonction pour décoder un code César avec décalage de -4
export function decodeCaesar(encoded: string): string {
  return encoded
    .split('')
    .map(char => {
      const code = char.charCodeAt(0);
      
      // Lettres majuscules (A=65, Z=90)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + 4) % 26) + 65);
      }
      
      // Lettres minuscules (a=97, z=122)
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + 4) % 26) + 97);
      }
      
      // Autres caractères restent inchangés
      return char;
    })
    .join('');
}

// Fonction pour encoder un code César avec décalage de -4
export function encodeCaesar(text: string): string {
  return text
    .split('')
    .map(char => {
      const code = char.charCodeAt(0);
      
      // Lettres majuscules (A=65, Z=90)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 - 4 + 26) % 26) + 65);
      }
      
      // Lettres minuscules (a=97, z=122)
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 - 4 + 26) % 26) + 97);
      }
      
      // Autres caractères restent inchangés
      return char;
    })
    .join('');
}

// Code super admin encodé
export const ENCODED_SUPER_ADMIN_CODE = 'HkjaPaynwokSejpan';
export const ENCODED_SUPER_ADMIN_PHONE = '+242066070176';

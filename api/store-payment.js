
function extractPaymentId(smsText) {
  // Patterns courants pour MTN, Airtel, Orange, Moov Money
  const patterns = [
    /ID[:\s]+([A-Z0-9]{10})/i,           // "ID: A1B2C3D4E5"
    /Transaction[:\s]+([A-Z0-9]{10})/i,  // "Transaction: A1B2C3D4E5"
    /Ref[:\s]+([A-Z0-9]{10})/i,          // "Ref: A1B2C3D4E5"
    /Code[:\s]+([A-Z0-9]{10})/i,         // "Code: A1B2C3D4E5"
    /([A-Z0-9]{10})/                     

  for (const pattern of patterns) {
    const match = smsText.match(pattern);
    if (match) {
      return match[1].toUpperCase();
    }
  }

  return null;
}

function extractAmount(smsText) {
  // Cherche un montant en FCFA
  const patterns = [
    /(\d+)\s*FCFA/i,
    /(\d+)\s*CFA/i,
    /Montant[:\s]+(\d+)/i,
    /(\d+)\s*F\b/i
  ];

  for (const pattern of patterns) {
    const match = smsText.match(pattern);
    if (match) {
      return parseInt(match[1]);
    }
  }

  return null;
}

export default async function handler(req, res) {
  // Activer CORS pour que votre site puisse appeler cette API
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const { sender, full_message, timestamp } = req.body;

      const paymentId = extractPaymentId(full_message);
      const amount = extractAmount(full_message);

      if (!paymentId) {
        return res.status(400).json({ 
          success: false, 
          error: 'ID de paiement introuvable dans le SMS' 
        });
      }

      // Stocker le paiement
      const payment = {
        id: paymentId,
        amount: amount,
        sender: sender,
        timestamp: timestamp || new Date().toISOString(),
        raw_message: full_message,
        used: false,
        created_at: new Date().toISOString()
      };

      paymentsDatabase.push(payment);

      console.log('💰 Nouveau paiement enregistré:', payment);

      return res.status(200).json({ 
        success: true, 
        payment_id: paymentId,
        message: 'Paiement enregistré avec succès' 
      });

    } catch (error) {
      console.error('Erreur:', error);
      return res.status(500).json({ 
        success: false, 
        error: 'Erreur serveur' 
      });
    }
  }

  if (req.method === 'GET') {
    return res.status(200).json({ 
      payments: paymentsDatabase.filter(p => !p.used),
      total: paymentsDatabase.length 
    });
  }

  return res.status(405).json({ error: 'Méthode non autorisée' });
}

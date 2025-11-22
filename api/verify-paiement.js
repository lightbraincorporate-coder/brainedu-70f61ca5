export async function verifyPaymentHandler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const { paymentId, fileId, amount } = req.body;

      const payment = paymentsDatabase.find(
        p => p.id === paymentId.toUpperCase() && !p.used
      );

      if (!payment) {
        return res.status(404).json({ 
          valid: false, 
          message: 'Paiement introuvable ou déjà utilisé' 
        });
      }

      if (payment.amount !== amount) {
        return res.status(400).json({ 
          valid: false, 
          message: `Montant incorrect. Attendu: ${amount} FCFA, Reçu: ${payment.amount} FCFA` 
        });
      }

      const paymentAge = Date.now() - new Date(payment.timestamp).getTime();
      const maxAge = 24 * 60 * 60 * 1000; // 24 heures

      if (paymentAge > maxAge) {
        return res.status(400).json({ 
          valid: false, 
          message: 'Paiement expiré (plus de 24h)' 
        });
      }

      payment.used = true;
      payment.file_downloaded = fileId;
      payment.downloaded_at = new Date().toISOString();

      console.log('✅ Paiement validé:', payment);

      return res.status(200).json({ 
        valid: true, 
        message: 'Paiement vérifié avec succès',
        payment_date: payment.timestamp 
      });

    } catch (error) {
      console.error('Erreur:', error);
      return res.status(500).json({ 
        valid: false, 
        message: 'Erreur lors de la vérification' 
      });
    }
  }

  return res.status(405).json({ error: 'Méthode non autorisée' });
}
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useAdminPendingPayments = () => {
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    checkPendingPayments();

    // Écouter les changements en temps réel
    const channel = supabase
      .channel('admin-pending-payments')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'payment_proofs'
        },
        () => {
          checkPendingPayments();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const checkPendingPayments = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setPendingCount(0);
        return;
      }

      // Vérifier le rôle de l'utilisateur
      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (!roleData) {
        setPendingCount(0);
        return;
      }

      if (roleData.role === 'super_admin') {
        // Super admin voit tous les paiements en attente
        const { count, error } = await supabase
          .from('payment_proofs')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'pending');

        if (!error && count !== null) {
          setPendingCount(count);
        }
      } else if (roleData.role === 'admin') {
        // Admin secondaire voit uniquement ses paiements en attente
        const { data: adminData } = await supabase
          .from('secondary_admins')
          .select('id')
          .eq('user_id', user.id)
          .single();

        if (adminData) {
          const { count, error } = await supabase
            .from('payment_proofs')
            .select('*', { count: 'exact', head: true })
            .eq('assigned_admin_id', adminData.id)
            .eq('status', 'pending');

          if (!error && count !== null) {
            setPendingCount(count);
          }
        }
      }
    } catch (error) {
      console.error('Error checking pending payments:', error);
      setPendingCount(0);
    }
  };

  return pendingCount;
};

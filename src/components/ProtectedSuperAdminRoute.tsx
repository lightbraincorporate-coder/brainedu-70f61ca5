import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';

interface ProtectedSuperAdminRouteProps {
  children: React.ReactNode;
}

export default function ProtectedSuperAdminRoute({ children }: ProtectedSuperAdminRouteProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);

  useEffect(() => {
    checkSuperAdminStatus();
  }, []);

  const checkSuperAdminStatus = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/admin-login');
        return;
      }

      // Vérifier le rôle super_admin
      const { data: roleData, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (error || !roleData || roleData.role !== 'super_admin') {
        navigate('/admin-login');
        return;
      }

      setIsSuperAdmin(true);
    } catch (error) {
      console.error('Error checking super admin status:', error);
      navigate('/admin-login');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return isSuperAdmin ? <>{children}</> : null;
}

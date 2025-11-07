import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/external-client';
import { Loader2 } from 'lucide-react';

interface ProtectedSecondaryAdminRouteProps {
  children: React.ReactNode;
}

export default function ProtectedSecondaryAdminRoute({ children }: ProtectedSecondaryAdminRouteProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isSecondaryAdmin, setIsSecondaryAdmin] = useState(false);

  useEffect(() => {
    checkSecondaryAdminStatus();
  }, []);

  const checkSecondaryAdminStatus = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/admin-login');
        return;
      }

      // Vérifier le rôle admin (pas super_admin)
      const { data: roleData, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (error || !roleData || roleData.role !== 'admin') {
        navigate('/admin-login');
        return;
      }

      setIsSecondaryAdmin(true);
    } catch (error) {
      console.error('Error checking secondary admin status:', error);
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

  return isSecondaryAdmin ? <>{children}</> : null;
}

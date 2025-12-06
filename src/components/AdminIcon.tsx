import { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { getAdminSession, isAdminSecondaire } from '@/data/admin';
import { countPendingPaymentsForAdmin } from '@/data/payments';

interface AdminIconProps {
  onClick: () => void;
}

const AdminIcon = ({ onClick }: AdminIconProps) => {
  const [hasPendingPayments, setHasPendingPayments] = useState(false);

  useEffect(() => {
    const checkPendingPayments = () => {
      const session = getAdminSession();
      
      if (session && isAdminSecondaire()) {
        const adminData = session.adminData as any;
        const count = countPendingPaymentsForAdmin(adminData.id);
        setHasPendingPayments(count > 0);
      }
    };

    checkPendingPayments();

    const interval = setInterval(checkPendingPayments, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <Shield className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
      
      {/* Point rouge de notification */}
      {hasPendingPayments && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-background animate-pulse" />
      )}
    </div>
  );
};

export default AdminIcon;
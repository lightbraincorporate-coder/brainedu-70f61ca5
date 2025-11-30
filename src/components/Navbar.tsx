import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Search, 
  User, 
  Shield, 
  Crown,
  LogOut
} from 'lucide-react';
import { getCurrentAdmin, getPendingPaymentProofs, getCartItems } from '@/lib/StorageDB.ts';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [currentAdmin, setCurrentAdmin] = useState<any>(null);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    // Charger le panier
    updateCartCount();
    
    // Charger l'admin connecté
    const admin = getCurrentAdmin();
    setCurrentAdmin(admin);
    
    // Si admin connecté, charger les paiements en attente
    if (admin) {
      updatePendingCount(admin);
    }

    // Écouter les changements
    const handleStorageChange = () => {
      updateCartCount();
      const updatedAdmin = getCurrentAdmin();
      setCurrentAdmin(updatedAdmin);
      if (updatedAdmin) {
        updatePendingCount(updatedAdmin);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Vérifier toutes les 5 secondes si admin
    let interval: NodeJS.Timeout;
    if (admin) {
      interval = setInterval(() => {
        updatePendingCount(admin);
      }, 5000);
    }

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      if (interval) clearInterval(interval);
    };
  }, []);

  const updateCartCount = () => {
    const items = getCartItems();
    setCartCount(items.length);
  };

  const updatePendingCount = (admin: any) => {
    const pending = getPendingPaymentProofs(
      admin.role === 'supreme' ? undefined : admin.id
    );
    setPendingCount(pending.length);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // TODO: Implémenter la recherche
      console.log('Recherche:', searchQuery);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('currentAdmin');
    setCurrentAdmin(null);
    setPendingCount(0);
    onNavigate('home');
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Desktop Layout */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">BrainEdu</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Rechercher des cours, matières..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="pr-10"
              />
              <Button
                size="sm"
                variant="ghost"
                className="absolute right-0 top-0 h-full"
                onClick={handleSearch}
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Button 
              variant="ghost"
              onClick={() => onNavigate('resourceType')}
            >
              Catalogues
            </Button>
            <Button 
              variant="ghost"
              onClick={() => onNavigate('premium')}
            >
              Premium
            </Button>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Premium Badge */}
            {isPremium && (
              <Badge variant="default" className="hidden sm:flex">
                <Crown className="w-3 h-3 mr-1" />
                Premium
              </Badge>
            )}

            {/* Cart Button */}
            <Button
              variant="outline"
              size="icon"
              className="relative"
              onClick={() => onNavigate('cart')}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Admin Button */}
            {currentAdmin ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <Shield className="w-5 h-5" />
                    {pendingCount > 0 && (
                      <Badge 
                        variant="destructive" 
                        className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                      >
                        {pendingCount}
                      </Badge>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    {currentAdmin.role === 'supreme' ? 'Admin Suprême' : 'Admin Secondaire'}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={() => onNavigate(currentAdmin.role === 'supreme' ? 'admin-supreme' : 'admin-secondary')}
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Dashboard
                    {pendingCount > 0 && (
                      <Badge variant="destructive" className="ml-auto">
                        {pendingCount}
                      </Badge>
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Déconnexion
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant="outline"
                size="icon"
                onClick={() => onNavigate('admin-login')}
                title="Administration"
              >
                <Shield className="w-5 h-5" />
              </Button>
            )}

            {/* User Button */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => onNavigate('profile')}>
                  Profil
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('orders')}>
                  Mes commandes
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('premium')}>
                  Passer Premium
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden mt-4">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="pr-10"
            />
            <Button
              size="sm"
              variant="ghost"
              className="absolute right-0 top-0 h-full"
              onClick={handleSearch}
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                onNavigate('resourceType');
                setMobileMenuOpen(false);
              }}
            >
              Catalogues
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                onNavigate('premium');
                setMobileMenuOpen(false);
              }}
            >
              <Crown className="w-4 h-4 mr-2" />
              Premium
            </Button>
            {currentAdmin && (
              <Button 
                variant="ghost" 
                className="w-full justify-start relative"
                onClick={() => {
                  onNavigate(currentAdmin.role === 'supreme' ? 'admin-supreme' : 'admin-secondary');
                  setMobileMenuOpen(false);
                }}
              >
                <Shield className="w-4 h-4 mr-2" />
                Administration
                {pendingCount > 0 && (
                  <Badge variant="destructive" className="ml-auto">
                    {pendingCount}
                  </Badge>
                )}
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
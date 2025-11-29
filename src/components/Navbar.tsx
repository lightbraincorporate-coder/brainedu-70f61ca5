import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X, LogIn } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  cartItemsCount?: number;
}

const Navbar = ({ onNavigate, cartItemsCount = 0 }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
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
          <Button 
            variant="ghost"
            onClick={() => onNavigate('special')}
          >
            Spécial
          </Button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <Button
            variant="outline"
            size="icon"
            className="relative"
            onClick={() => onNavigate('cart')}
          >
            <ShoppingCart className="w-5 h-5" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartItemsCount}
              </span>
            )}
          </Button>

          {/* Login Button */}
          <Button
            variant="ghost"
            size="icon"
          >
            <LogIn className="w-5 h-5" />
          </Button>

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
              Premium
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                onNavigate('special');
                setMobileMenuOpen(false);
              }}
            >
              Spécial
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
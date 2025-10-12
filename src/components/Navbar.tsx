import { useState } from 'react';
import { Menu, X, ShoppingCart, Search, BookOpen, Sparkles, Crown, HelpCircle, Info, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  currentPage: string;
  cartItemCount: number;
  onNavigate: (page: string) => void;
  onSearch: () => void;
  onShowFAQ: () => void;
  onShowAbout: () => void;
  onShowGuide: () => void;
}

const Navbar = ({ 
  currentPage, 
  cartItemCount, 
  onNavigate, 
  onSearch,
  onShowFAQ,
  onShowAbout,
  onShowGuide
}: NavbarProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: BookOpen },
    { id: 'catalog', label: 'Catalogue', icon: Book },
    { id: 'special', label: 'Développement', icon: Sparkles },
    { id: 'premium', label: 'Premium', icon: Crown },
  ];

  return (
    <nav className="bg-card shadow-lg sticky top-0 z-40 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-2xl font-bold text-primary-foreground">B</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                BrainEdu
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? 'default' : 'ghost'}
                  onClick={() => {
                    onNavigate(item.id);
                    setShowMenu(false);
                  }}
                  className="gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            
            <Button
              variant="ghost"
              size="icon"
              onClick={onSearch}
              className="relative"
            >
              <Search className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={onShowFAQ}
              className="hidden sm:flex"
            >
              <HelpCircle className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => onNavigate('cart')}
              className="relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? 'default' : 'ghost'}
                  onClick={() => {
                    onNavigate(item.id);
                    setShowMenu(false);
                  }}
                  className="w-full justify-start gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              );
            })}
            <Button
              variant="ghost"
              onClick={() => {
                onShowFAQ();
                setShowMenu(false);
              }}
              className="w-full justify-start gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              FAQ
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                onShowAbout();
                setShowMenu(false);
              }}
              className="w-full justify-start gap-2"
            >
              <Info className="w-4 h-4" />
              À propos
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

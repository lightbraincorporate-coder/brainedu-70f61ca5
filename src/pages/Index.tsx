import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';
import CatalogPage from '@/components/CatalogPage';
import SpecialPage from '@/components/SpecialPage';
import PremiumPage from '@/components/PremiumPage';
import CartPage from '@/components/CartPage';
import FAQModal from '@/components/modals/FAQModal';
import AboutModal from '@/components/modals/AboutModal';
import GuideModal from '@/components/modals/GuideModal';
import FlashcardModal from '@/components/modals/FlashcardModal';
import PaymentModal from '@/components/modals/PaymentModal';
import SearchModal from '@/components/modals/SearchModal';
import { CartItem } from '@/types';
import { Mail, Phone, MapPin } from 'lucide-react';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Modals
  const [showFAQ, setShowFAQ] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [showFlashcard, setShowFlashcard] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleAddToCart = (item: CartItem) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setShowPayment(true);
  };

  const handlePaymentComplete = () => {
    setCart([]);
    setCurrentPage('home');
  };

  const getTotalCart = () => cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        currentPage={currentPage}
        cartItemCount={cart.length}
        onNavigate={setCurrentPage}
        onSearch={() => setShowSearch(true)}
        onShowFAQ={() => setShowFAQ(true)}
        onShowAbout={() => setShowAbout(true)}
        onShowGuide={() => setShowGuide(true)}
      />

      {/* Pages */}
      {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === 'catalog' && <CatalogPage onAddToCart={handleAddToCart} />}
      {currentPage === 'special' && (
        <SpecialPage 
          onAddToCart={handleAddToCart}
          onShowFlashcardForm={() => setShowFlashcard(true)}
        />
      )}
      {currentPage === 'premium' && <PremiumPage onAddToCart={handleAddToCart} />}
      {currentPage === 'cart' && (
        <CartPage 
          cart={cart}
          onRemoveFromCart={handleRemoveFromCart}
          onCheckout={handleCheckout}
        />
      )}

      {/* Modals */}
      {showFAQ && <FAQModal onClose={() => setShowFAQ(false)} />}
      {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
      {showGuide && <GuideModal onClose={() => setShowGuide(false)} />}
      {showFlashcard && <FlashcardModal onClose={() => setShowFlashcard(false)} />}
      {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}
      {showPayment && (
        <PaymentModal 
          total={getTotalCart()}
          onClose={() => setShowPayment(false)}
          onComplete={handlePaymentComplete}
        />
      )}

      {/* Footer */}
      <footer className="bg-card border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">B</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  BrainEdu
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Osez détenir le savoir. Votre plateforme éducative pour réussir à tous les niveaux.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Liens rapides</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button onClick={() => setCurrentPage('catalog')} className="hover:text-primary transition-colors">
                    Catalogue
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentPage('premium')} className="hover:text-primary transition-colors">
                    Premium
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowFAQ(true)} className="hover:text-primary transition-colors">
                    FAQ
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowGuide(true)} className="hover:text-primary transition-colors">
                    Guide d'utilisation
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:LightBrain03@gmail.com" className="hover:text-primary transition-colors">
                    LightBrain03@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div>Congo: +242 06 501 29 67</div>
                    <div>Côte d'Ivoire: +225 07 98 48 48 01</div>
                    <div>Gabon: +241 07 64 98 23</div>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Brazzaville, Congo
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} BrainEdu. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

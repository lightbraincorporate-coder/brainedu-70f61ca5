import { useState } from 'react';
import { Toaster } from 'sonner';
import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';
import ResourceTypePage from '@/components/ResourceTypePage';
import CourseCatalogPage from '@/components/CourseCatalogPage';
import ExerciseCatalogPage from '@/components/ExerciseCatalogPage';
import SummaryCatalogPage from '@/components/SummaryCatalogPage';
import ExposeCatalogPage from '@/components/ExposeCatalogPage';
import CartPage from '@/components/CartPage';
import PremiumPage from '@/components/PremiumPage';
import SpecialPage from '@/components/SpecialPage';
import { CartItem } from '@/types';

type PageType = 'home' | 'resourceType' | 'catalog' | 'cart' | 'premium' | 'special' | 'brain-corp';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [resourceType, setResourceType] = useState<'courses' | 'exercises' | 'summaries' | 'exposes' | null>(null);
  const [linkedCourseId, setLinkedCourseId] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [userRole, setUserRole] = useState<'free' | 'premium' | 'admin'>('free');

  const handleNavigate = (page: PageType, resType?: string, courseId?: string) => {
    setCurrentPage(page);
    
    // Si c'est une navigation vers le catalogue, on définit le type de ressource
    if (page === 'catalog' && resType) {
      setResourceType(resType as 'courses' | 'exercises' | 'summaries' | 'exposes');
    }
    
    // Si on navigue vers une ressource spécifique avec un cours lié
    if (courseId) {
      setLinkedCourseId(courseId);
    }
  };

  const handleAddToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <Navbar onNavigate={handleNavigate} cartItemsCount={cartItems.length} />
      
      {/* Home Page */}
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      
      {/* Resource Type Selection Page */}
      {currentPage === 'resourceType' && <ResourceTypePage onNavigate={handleNavigate} />}
      
      {/* Catalog Pages - Courses */}
      {currentPage === 'catalog' && resourceType === 'courses' && (
        <CourseCatalogPage onNavigate={handleNavigate} />
      )}
      
      {/* Catalog Pages - Exercises */}
      {currentPage === 'catalog' && resourceType === 'exercises' && (
        <ExerciseCatalogPage onNavigate={handleNavigate} linkedCourseId={linkedCourseId} />
      )}
      
      {/* Catalog Pages - Summaries */}
      {currentPage === 'catalog' && resourceType === 'summaries' && (
        <SummaryCatalogPage onNavigate={handleNavigate} linkedCourseId={linkedCourseId} />
      )}
      
      {/* Catalog Pages - Exposes */}
      {currentPage === 'catalog' && resourceType === 'exposes' && (
        <ExposeCatalogPage onNavigate={handleNavigate} linkedCourseId={linkedCourseId} />
      )}
      
      {/* Cart Page */}
      {currentPage === 'cart' && (
        <CartPage 
          items={cartItems} 
          onRemove={handleRemoveFromCart}
          onClear={handleClearCart}
          onNavigate={handleNavigate}
        />
      )}
      
      {/* Premium Page */}
      {currentPage === 'premium' && <PremiumPage onNavigate={handleNavigate} />}
      
      {/* Special Page */}
      {currentPage === 'special' && <SpecialPage onNavigate={handleNavigate} />}

      <Toaster />
    </>
  );
}

export default App;
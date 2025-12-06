
import { Course } from './resources';

export interface CartItem {
  course: Course;
  addedAt: Date;
}

const CART_KEY = 'shopping_cart';

export const getCart = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  
  const stored = localStorage.getItem(CART_KEY);
  if (!stored) return [];
  
  try {
    const items = JSON.parse(stored);
    return items.map((item: any) => ({
      ...item,
      addedAt: new Date(item.addedAt)
    }));
  } catch {
    return [];
  }
};

const saveCart = (items: CartItem[]): void => {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
};

export const addToCart = (course: Course): { success: boolean; message: string } => {
  const cart = getCart();
  
  if (cart.some(item => item.course.id === course.id)) {
    return {
      success: false,
      message: 'Ce cours est déjà dans votre panier'
    };
  }
  
  const newItem: CartItem = {
    course,
    addedAt: new Date()
  };
  
  cart.push(newItem);
  saveCart(cart);
  
  return {
    success: true,
    message: 'Cours ajouté au panier'
  };
};

export const removeFromCart = (courseId: string): { success: boolean; message: string } => {
  let cart = getCart();
  const initialLength = cart.length;
  
  cart = cart.filter(item => item.course.id !== courseId);
  
  if (cart.length === initialLength) {
    return {
      success: false,
      message: 'Cours introuvable dans le panier'
    };
  }
  
  saveCart(cart);
  
  return {
    success: true,
    message: 'Cours retiré du panier'
  };
};

export const clearCart = (): void => {
  localStorage.setItem(CART_KEY, JSON.stringify([]));
};

export const getCartCount = (): number => {
  return getCart().length;
};

export const getCartTotal = (): number => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.course.price, 0);
};

export const isInCart = (courseId: string): boolean => {
  const cart = getCart();
  return cart.some(item => item.course.id === courseId);
};

export const getCartCourseIds = (): string[] => {
  const cart = getCart();
  return cart.map(item => item.course.id);
};
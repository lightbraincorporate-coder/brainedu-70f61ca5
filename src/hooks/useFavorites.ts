import { useState, useEffect } from 'react';

export interface Favorite {
  id: string;
  type: 'course' | 'product';
  title: string;
  category?: string;
  addedAt: number;
}

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('brainedu-favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const addFavorite = (favorite: Omit<Favorite, 'addedAt'>) => {
    const newFavorite = { ...favorite, addedAt: Date.now() };
    const updated = [...favorites, newFavorite];
    setFavorites(updated);
    localStorage.setItem('brainedu-favorites', JSON.stringify(updated));
  };

  const removeFavorite = (id: string) => {
    const updated = favorites.filter(f => f.id !== id);
    setFavorites(updated);
    localStorage.setItem('brainedu-favorites', JSON.stringify(updated));
  };

  const isFavorite = (id: string) => {
    return favorites.some(f => f.id === id);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};

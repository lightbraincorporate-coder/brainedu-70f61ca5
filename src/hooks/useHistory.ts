import { useState, useEffect } from 'react';

export interface HistoryItem {
  id: string;
  page: string;
  title: string;
  timestamp: number;
}

export const useHistory = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('brainedu-history');
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  const addToHistory = (item: Omit<HistoryItem, 'timestamp'>) => {
    const newItem = { ...item, timestamp: Date.now() };
    const updated = [newItem, ...history.filter(h => h.id !== item.id)].slice(0, 50);
    setHistory(updated);
    localStorage.setItem('brainedu-history', JSON.stringify(updated));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('brainedu-history');
  };

  return { history, addToHistory, clearHistory };
};

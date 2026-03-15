import { useState, useEffect } from 'react';
import type { ShoppingItem, Category } from '../types';

const STORAGE_KEY = 'beach-house-shopping-list';

function loadItems(): ShoppingItem[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function useShoppingList() {
  const [items, setItems] = useState<ShoppingItem[]>(loadItems);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addItem(name: string, category: Category, quantity: number = 1) {
    const newItem: ShoppingItem = {
      id: crypto.randomUUID(),
      name: name.trim(),
      quantity,
      category,
      purchased: false,
    };
    setItems((prev) => [...prev, newItem]);
  }

  function toggleItem(id: string) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    );
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function clearPurchased() {
    setItems((prev) => prev.filter((item) => !item.purchased));
  }

  return { items, addItem, toggleItem, removeItem, clearPurchased };
}

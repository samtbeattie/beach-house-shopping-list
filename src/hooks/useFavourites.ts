import { useState, useEffect } from 'react';
import type { FavouriteItem, ShoppingItem } from '../types';

const STORAGE_KEY = 'beach-house-favourites';

function loadFavourites(): FavouriteItem[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function useFavourites() {
  const [favourites, setFavourites] = useState<FavouriteItem[]>(loadFavourites);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
  }, [favourites]);

  function addFavourite(item: ShoppingItem) {
    if (favourites.some((f) => f.name.toLowerCase() === item.name.toLowerCase())) return;
    setFavourites((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: item.name, category: item.category, quantity: item.quantity },
    ]);
  }

  function removeFavourite(id: string) {
    setFavourites((prev) => prev.filter((f) => f.id !== id));
  }

  return { favourites, addFavourite, removeFavourite };
}

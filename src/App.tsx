import { useState } from 'react';
import { useShoppingList } from './hooks/useShoppingList';
import { useFavourites } from './hooks/useFavourites';
import { Header } from './components/Header';
import { AddItemForm } from './components/AddItemForm';
import { ShoppingList } from './components/ShoppingList';
import { CategoryFilter } from './components/CategoryFilter';
import { SuggestedItems } from './components/SuggestedItems';
import { FavouritesPanel } from './components/FavouritesPanel';
import type { Category } from './types';

function App() {
  const { items, addItem, toggleItem, removeItem, clearPurchased } = useShoppingList();
  const { favourites, addFavourite, removeFavourite } = useFavourites();
  const [filterCategory, setFilterCategory] = useState<Category | null>(null);

  const favouriteNames = new Set(favourites.map((f) => f.name.toLowerCase()));

  const filteredItems = filterCategory
    ? items.filter((item) => item.category === filterCategory)
    : items;

  const purchasedCount = items.filter((i) => i.purchased).length;

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header itemCount={items.length} purchasedCount={purchasedCount} />
      <main className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <AddItemForm onAdd={addItem} />
        <CategoryFilter selected={filterCategory} onSelect={setFilterCategory} />
        <ShoppingList
          items={filteredItems}
          onToggle={toggleItem}
          onRemove={removeItem}
          onClearPurchased={clearPurchased}
          favouriteNames={favouriteNames}
          onToggleFavourite={(item) =>
            favouriteNames.has(item.name.toLowerCase())
              ? removeFavourite(favourites.find((f) => f.name.toLowerCase() === item.name.toLowerCase())!.id)
              : addFavourite(item)
          }
        />
        <FavouritesPanel
          favourites={favourites}
          existingItems={items}
          onAdd={addItem}
          onRemove={removeFavourite}
        />
        <SuggestedItems
          existingItems={items}
          onAdd={(name, category) => addItem(name, category, 1)}
        />
      </main>
    </div>
  );
}

export default App;

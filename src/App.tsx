import { useState } from 'react';
import { useShoppingList } from './hooks/useShoppingList';
import { Header } from './components/Header';
import { AddItemForm } from './components/AddItemForm';
import { ShoppingList } from './components/ShoppingList';
import { CategoryFilter } from './components/CategoryFilter';
import { SuggestedItems } from './components/SuggestedItems';
import type { Category } from './types';

function App() {
  const { items, addItem, toggleItem, removeItem, clearPurchased } = useShoppingList();
  const [filterCategory, setFilterCategory] = useState<Category | null>(null);

  const filteredItems = filterCategory
    ? items.filter((item) => item.category === filterCategory)
    : items;

  const purchasedCount = items.filter((i) => i.purchased).length;

  return (
    <div className="min-h-screen bg-sand-50">
      <Header itemCount={items.length} purchasedCount={purchasedCount} />
      <main className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <AddItemForm onAdd={addItem} />
        <CategoryFilter selected={filterCategory} onSelect={setFilterCategory} />
        <ShoppingList
          items={filteredItems}
          onToggle={toggleItem}
          onRemove={removeItem}
          onClearPurchased={clearPurchased}
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

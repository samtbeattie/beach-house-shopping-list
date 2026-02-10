import { useState } from 'react';
import { CATEGORIES } from '../types';
import type { Category } from '../types';

interface Props {
  onAdd: (name: string, category: Category, quantity: number) => void;
}

export function AddItemForm({ onAdd }: Props) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<Category>('Kitchen');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd(name, category, quantity);
    setName('');
    setQuantity(1);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-4 space-y-3">
      <div className="flex gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add an item..."
          className="flex-1 border border-sand-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          min={1}
          className="w-16 border border-sand-200 rounded-lg px-2 py-2 text-sm text-center focus:outline-none focus:ring-2 focus:ring-ocean-400"
        />
      </div>
      <div className="flex gap-2">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as Category)}
          className="flex-1 border border-sand-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ocean-400"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-ocean-500 hover:bg-ocean-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Add
        </button>
      </div>
    </form>
  );
}

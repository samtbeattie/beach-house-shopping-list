import { SUGGESTED_ITEMS } from '../types';
import type { ShoppingItem, Category } from '../types';

interface Props {
  existingItems: ShoppingItem[];
  onAdd: (name: string, category: Category) => void;
}

export function SuggestedItems({ existingItems, onAdd }: Props) {
  const existingNames = new Set(existingItems.map((i) => i.name.toLowerCase()));
  const available = SUGGESTED_ITEMS.filter(
    (s) => !existingNames.has(s.name.toLowerCase())
  );

  if (available.length === 0) return null;

  return (
    <div className="space-y-2">
      <h3 className="text-xs text-neutral-400 uppercase tracking-wide">Quick Add Suggestions</h3>
      <div className="flex flex-wrap gap-2">
        {available.map((item) => (
          <button
            key={item.name}
            onClick={() => onAdd(item.name, item.category)}
            className="text-xs bg-white border border-neutral-200 text-neutral-600 px-3 py-1.5 rounded-full hover:bg-black hover:text-white hover:border-black transition-colors"
          >
            + {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

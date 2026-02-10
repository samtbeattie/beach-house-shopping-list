import type { ShoppingItem } from '../types';
import { ShoppingItemRow } from './ShoppingItem';

interface Props {
  items: ShoppingItem[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onClearPurchased: () => void;
}

export function ShoppingList({ items, onToggle, onRemove, onClearPurchased }: Props) {
  const purchasedCount = items.filter((i) => i.purchased).length;

  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <p className="text-4xl mb-2">🏖️</p>
        <p className="text-sm">Your list is empty. Add some items or pick from suggestions below!</p>
      </div>
    );
  }

  const unpurchased = items.filter((i) => !i.purchased);
  const purchased = items.filter((i) => i.purchased);

  return (
    <div className="space-y-2">
      {unpurchased.map((item) => (
        <ShoppingItemRow key={item.id} item={item} onToggle={onToggle} onRemove={onRemove} />
      ))}
      {purchased.length > 0 && (
        <>
          <div className="flex items-center justify-between pt-3 pb-1">
            <span className="text-xs text-gray-400 uppercase tracking-wide">
              Purchased ({purchasedCount})
            </span>
            <button
              onClick={onClearPurchased}
              className="text-xs text-sunset-500 hover:text-sunset-400 transition-colors"
            >
              Clear purchased
            </button>
          </div>
          {purchased.map((item) => (
            <ShoppingItemRow key={item.id} item={item} onToggle={onToggle} onRemove={onRemove} />
          ))}
        </>
      )}
    </div>
  );
}

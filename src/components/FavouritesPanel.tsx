import type { FavouriteItem, ShoppingItem, Category } from '../types';

interface Props {
  favourites: FavouriteItem[];
  existingItems: ShoppingItem[];
  onAdd: (name: string, category: Category, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function FavouritesPanel({ favourites, existingItems, onAdd, onRemove }: Props) {
  if (favourites.length === 0) return null;

  const existingNames = new Set(existingItems.map((i) => i.name.toLowerCase()));

  return (
    <div className="space-y-2">
      <h3 className="text-xs text-neutral-400 uppercase tracking-wide">Favourites</h3>
      <div className="flex flex-wrap gap-2">
        {favourites.map((item) => {
          const alreadyAdded = existingNames.has(item.name.toLowerCase());
          return (
            <div key={item.id} className="flex items-center gap-1 bg-white border border-neutral-200 rounded-full px-3 py-1.5">
              <button
                onClick={() => !alreadyAdded && onAdd(item.name, item.category, item.quantity)}
                disabled={alreadyAdded}
                className={`text-xs transition-colors ${
                  alreadyAdded
                    ? 'text-neutral-300 cursor-default'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                ★ {item.name}
              </button>
              <button
                onClick={() => onRemove(item.id)}
                className="text-neutral-300 hover:text-black transition-colors text-sm leading-none ml-1"
                aria-label={`Remove ${item.name} from favourites`}
              >
                &times;
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

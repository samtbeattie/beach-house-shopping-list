import type { ShoppingItem as ShoppingItemType } from '../types';

interface Props {
  item: ShoppingItemType;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  isFavourite: boolean;
  onToggleFavourite: (item: ShoppingItemType) => void;
}

const CATEGORY_COLORS: Record<string, string> = {
  'Kitchen': 'bg-amber-100 text-amber-800',
  'Bathroom': 'bg-blue-100 text-blue-800',
  'Bedroom': 'bg-purple-100 text-purple-800',
  'Beach & Outdoor': 'bg-cyan-100 text-cyan-800',
  'Cleaning': 'bg-green-100 text-green-800',
  'Pantry': 'bg-orange-100 text-orange-800',
};

export function ShoppingItemRow({ item, onToggle, onRemove, isFavourite, onToggleFavourite }: Props) {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
        item.purchased ? 'bg-sand-100 opacity-60' : 'bg-white'
      }`}
    >
      <input
        type="checkbox"
        checked={item.purchased}
        onChange={() => onToggle(item.id)}
        className="w-5 h-5 rounded accent-ocean-500 cursor-pointer"
      />
      <div className="flex-1 min-w-0">
        <span
          className={`text-sm ${
            item.purchased ? 'line-through text-gray-400' : 'text-gray-800'
          }`}
        >
          {item.name}
        </span>
        {item.quantity > 1 && (
          <span className="text-xs text-gray-400 ml-2">x{item.quantity}</span>
        )}
      </div>
      <span className={`text-xs px-2 py-0.5 rounded-full ${CATEGORY_COLORS[item.category] ?? 'bg-gray-100 text-gray-600'}`}>
        {item.category}
      </span>
      <button
        onClick={() => onToggleFavourite(item)}
        className={`transition-colors text-lg leading-none ${
          isFavourite ? 'text-amber-400 hover:text-amber-300' : 'text-gray-300 hover:text-amber-400'
        }`}
        aria-label={isFavourite ? `Remove ${item.name} from favourites` : `Add ${item.name} to favourites`}
      >
        ★
      </button>
      <button
        onClick={() => onRemove(item.id)}
        className="text-gray-300 hover:text-sunset-500 transition-colors text-lg leading-none"
        aria-label={`Remove ${item.name}`}
      >
        &times;
      </button>
    </div>
  );
}

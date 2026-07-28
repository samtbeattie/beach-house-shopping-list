import type { ShoppingItem as ShoppingItemType } from '../types';

interface Props {
  item: ShoppingItemType;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  isFavourite: boolean;
  onToggleFavourite: (item: ShoppingItemType) => void;
}

export function ShoppingItemRow({ item, onToggle, onRemove, isFavourite, onToggleFavourite }: Props) {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
        item.purchased ? 'bg-neutral-100 border-neutral-100 opacity-60' : 'bg-white border-neutral-200'
      }`}
    >
      <input
        type="checkbox"
        checked={item.purchased}
        onChange={() => onToggle(item.id)}
        className="w-5 h-5 rounded accent-black cursor-pointer"
      />
      <div className="flex-1 min-w-0">
        <span
          className={`text-sm ${
            item.purchased ? 'line-through text-neutral-400' : 'text-neutral-900'
          }`}
        >
          {item.name}
        </span>
        {item.quantity > 1 && (
          <span className="text-xs text-neutral-400 ml-2">x{item.quantity}</span>
        )}
      </div>
      <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200">
        {item.category}
      </span>
      <button
        onClick={() => onToggleFavourite(item)}
        className={`transition-colors text-lg leading-none ${
          isFavourite ? 'text-black hover:text-neutral-600' : 'text-neutral-300 hover:text-black'
        }`}
        aria-label={isFavourite ? `Remove ${item.name} from favourites` : `Add ${item.name} to favourites`}
      >
        {isFavourite ? '★' : '☆'}
      </button>
      <button
        onClick={() => onRemove(item.id)}
        className="text-neutral-300 hover:text-black transition-colors text-lg leading-none"
        aria-label={`Remove ${item.name}`}
      >
        &times;
      </button>
    </div>
  );
}

import { CATEGORIES } from '../types';
import type { Category } from '../types';

interface Props {
  selected: Category | null;
  onSelect: (category: Category | null) => void;
}

export function CategoryFilter({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
          selected === null
            ? 'bg-ocean-500 text-white'
            : 'bg-sand-100 text-gray-600 hover:bg-sand-200'
        }`}
      >
        All
      </button>
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
            selected === cat
              ? 'bg-ocean-500 text-white'
              : 'bg-sand-100 text-gray-600 hover:bg-sand-200'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

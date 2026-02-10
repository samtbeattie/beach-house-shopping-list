export type Category =
  | 'Kitchen'
  | 'Bathroom'
  | 'Bedroom'
  | 'Beach & Outdoor'
  | 'Cleaning'
  | 'Pantry';

export const CATEGORIES: Category[] = [
  'Kitchen',
  'Bathroom',
  'Bedroom',
  'Beach & Outdoor',
  'Cleaning',
  'Pantry',
];

export interface ShoppingItem {
  id: string;
  name: string;
  quantity: number;
  category: Category;
  purchased: boolean;
}

export const SUGGESTED_ITEMS: { name: string; category: Category }[] = [
  { name: 'Sunscreen', category: 'Beach & Outdoor' },
  { name: 'Beach towels', category: 'Beach & Outdoor' },
  { name: 'Paper towels', category: 'Kitchen' },
  { name: 'Dish soap', category: 'Kitchen' },
  { name: 'Trash bags', category: 'Cleaning' },
  { name: 'Toilet paper', category: 'Bathroom' },
  { name: 'Hand soap', category: 'Bathroom' },
  { name: 'Shampoo', category: 'Bathroom' },
  { name: 'Bed sheets', category: 'Bedroom' },
  { name: 'Pillows', category: 'Bedroom' },
  { name: 'Coffee', category: 'Pantry' },
  { name: 'Bottled water', category: 'Pantry' },
  { name: 'Snacks', category: 'Pantry' },
  { name: 'Paper plates', category: 'Kitchen' },
  { name: 'Plastic cups', category: 'Kitchen' },
  { name: 'All-purpose cleaner', category: 'Cleaning' },
  { name: 'Sponges', category: 'Cleaning' },
  { name: 'Bug spray', category: 'Beach & Outdoor' },
  { name: 'Flip flops', category: 'Beach & Outdoor' },
  { name: 'Cooler ice', category: 'Beach & Outdoor' },
];

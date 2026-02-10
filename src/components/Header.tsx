export function Header({ itemCount, purchasedCount }: { itemCount: number; purchasedCount: number }) {
  return (
    <header className="bg-ocean-600 text-white py-6 px-4 shadow-lg">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">
          Beach House Shopping List
        </h1>
        <p className="text-ocean-400 mt-1 text-sm">
          {itemCount === 0
            ? 'Add items to get started'
            : `${purchasedCount} of ${itemCount} items purchased`}
        </p>
      </div>
    </header>
  );
}

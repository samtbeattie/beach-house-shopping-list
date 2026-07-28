export function Header({ itemCount, purchasedCount }: { itemCount: number; purchasedCount: number }) {
  return (
    <header className="bg-black text-white py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold tracking-tight">
          Graham's Bay
        </h1>
        <p className="text-neutral-400 mt-1 text-sm">
          {itemCount === 0
            ? 'Add items to get started'
            : `${purchasedCount} of ${itemCount} items purchased`}
        </p>
      </div>
    </header>
  );
}

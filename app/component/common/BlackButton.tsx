export default function BlackButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-3 py-1.5 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors font-sans cursor-pointer">
      {children}
    </button>
  );
}

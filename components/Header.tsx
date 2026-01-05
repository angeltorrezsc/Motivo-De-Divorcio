import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600">
          Catálogo
        </Link>
        <nav className="space-x-6">
          <Link href="/products" className="text-gray-600 hover:text-blue-600 font-medium">Productos</Link>
          <Link href="/movies" className="text-gray-600 hover:text-blue-600 font-medium">Películas</Link>
          <Link href="/calendar" className="text-gray-600 hover:text-blue-600 font-medium">Calendario</Link>
        </nav>
      </div>
    </header>
  );
}
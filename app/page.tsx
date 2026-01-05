import Link from 'next/link';
import Hero from '../components/Hero';
import SocialMediaButtons from '../components/SocialMediaButtons';
import Locations from '../components/Locations';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero
        title="Bienvenido al Catálogo MDD"
        description="Explora nuestras películas, productos y consulta nuestro calendario de estrenos."
        ctaText="Ver Películas"
        ctaLink="/movies"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        <Link href="/products" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow text-center bg-white">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Productos</h2>
          <p className="text-gray-600">Descubre nuestra variedad de productos disponibles.</p>
        </Link>
        
        <Link href="/movies" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow text-center bg-white">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Películas</h2>
          <p className="text-gray-600">Cartelera actualizada y próximos estrenos.</p>
        </Link>
        
        <Link href="/calendar" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow text-center bg-white">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Calendario</h2>
          <p className="text-gray-600">Fechas importantes y eventos de la semana.</p>
        </Link>
      </div>

      <div className="my-12">
        <Locations />
      </div>

      <div className="my-12">
        <SocialMediaButtons />
      </div>
    </div>
  );
}
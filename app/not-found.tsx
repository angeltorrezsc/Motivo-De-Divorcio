import React from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <Hero
        title="404 - Página no encontrada"
        description="Lo sentimos, la página que buscas no existe o ha sido movida."
        ctaText="Volver al inicio"
        ctaLink="/"
      />
      <div style={{ marginTop: '2rem' }}>
        <p>Tal vez quieras explorar nuestras secciones:</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
          <Link href="/peliculas" style={{ color: '#0070f3' }}>Películas</Link>
          <Link href="/productos" style={{ color: '#0070f3' }}>Productos</Link>
        </div>
      </div>
    </div>
  );
}
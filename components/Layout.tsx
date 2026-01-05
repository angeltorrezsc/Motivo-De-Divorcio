import React from 'react';
import Link from 'next/link';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ padding: '1rem', borderBottom: '1px solid #eee', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', color: '#333' }}>
            MDD
          </Link>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/peliculas" style={{ textDecoration: 'none', color: '#555' }}>Películas</Link>
            <Link href="/productos" style={{ textDecoration: 'none', color: '#555' }}>Productos</Link>
          </nav>
        </div>
      </header>
      <main style={{ flex: 1, maxWidth: 1200, width: '100%', margin: '0 auto', padding: '2rem 1rem' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
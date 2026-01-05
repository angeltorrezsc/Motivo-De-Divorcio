import React from 'react';
import Link from 'next/link';
import SocialMediaButtons from '../components/SocialMediaButtons';
import Hero from '../components/Hero';
import Grid from '../components/Grid';
import Card from '../components/Card';

export default function Home() {
  return (
    <section>
      <Hero
        title="Bienvenido a MDD"
        description="Tu universo de entretenimiento, productos y servicios."
        ctaText="Explorar Productos"
        ctaLink="/productos"
      />

      <Grid>
        <Link href="/peliculas" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card title="Películas">
            <p>Descubre los últimos estrenos y clásicos del cine.</p>
          </Card>
        </Link>
        <Link href="/calendario" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card title="Calendario">
            <p>No te pierdas nuestros próximos eventos y lanzamientos.</p>
          </Card>
        </Link>
        <Link href="/servicios" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card title="Servicios">
            <p>Conoce los servicios exclusivos que tenemos para ti.</p>
          </Card>
        </Link>
      </Grid>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <SocialMediaButtons />
      </div>
    </section>
  );
}

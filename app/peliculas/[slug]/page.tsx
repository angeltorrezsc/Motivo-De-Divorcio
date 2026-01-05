import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import rawMovies from '../../../data/peliculas.json';
import WhatsAppButton from '../../../components/WhatsAppButton';
import Badge from '../../../components/Badge';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { buildMovieMessage } from '../../../lib/whatsapp';
import { mapRawMovieToMovie } from '../../../lib/transform';
import { siteConfig } from '../../../lib/config';

export function generateStaticParams() {
  return (rawMovies as any[]).map((m) => ({
    slug: m.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const mRaw = (rawMovies as any[]).find((x) => x.slug === params.slug);
  if (!mRaw) return { title: 'Película no encontrada' };
  
  const movie = mapRawMovieToMovie(mRaw);
  return {
    title: `${movie.title} | MDD Películas`,
    description: movie.description || `Detalles de la película ${movie.title}`,
  };
}

export default function MovieDetail({ params }: { params: { slug: string } }) {
  const mRaw = (rawMovies as any[]).find((x) => x.slug === params.slug);
  if (!mRaw) return notFound();

  const movie = mapRawMovieToMovie(mRaw);
  const PHONE_NUMBER = siteConfig.phone;

  return (
    <article style={{ maxWidth: 800, margin: '0 auto' }}>
      <Breadcrumbs items={[
        { label: 'Inicio', href: '/' },
        { label: 'Películas', href: '/peliculas' },
        { label: movie.title }
      ]} />
      <h1>{movie.title}</h1>
      <img
        src={movie.image || '/img/placeholder.png'}
        alt={movie.title}
        style={{ width: '100%', maxWidth: 600, height: 'auto', borderRadius: 8, marginBottom: '1rem' }}
      />
      
      <div style={{ marginBottom: '1.5rem' }}>
        <Badge status={movie.status || 'pendiente'} />
      </div>

      <p style={{ lineHeight: 1.6, fontSize: '1.1rem' }}>{movie.description}</p>
      
      <div style={{ marginTop: '2rem' }}>
        <WhatsAppButton 
          phone={PHONE_NUMBER} 
          messageBuilder={() => buildMovieMessage(movie)}
          className="btn-whatsapp"
        >
          Consultar por WhatsApp
        </WhatsAppButton>
      </div>
    </article>
  );
}
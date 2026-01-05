import React from 'react';
import Link from 'next/link';

interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export default function Hero({ title, description, ctaText, ctaLink, backgroundImage }: HeroProps) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '4rem 1rem',
      backgroundColor: '#f8f9fa',
      borderRadius: 8,
      marginBottom: '2rem',
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: backgroundImage ? '#fff' : 'inherit'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{title}</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: 600, margin: '0 auto 2rem' }}>{description}</p>
      <Link href={ctaLink} style={{
        display: 'inline-block',
        padding: '0.8rem 1.5rem',
        backgroundColor: '#0070f3',
        color: 'white',
        textDecoration: 'none',
        borderRadius: 4,
        fontWeight: 'bold'
      }}>
        {ctaText}
      </Link>
    </div>
  );
}
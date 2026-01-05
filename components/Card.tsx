// components/Card.tsx
import React from 'react';
import Badge from './Badge';

interface CardProps {
  title: string;
  image?: string;
  status?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({ title, image, status, children, className }: CardProps) {
  return (
    <article className={className} style={{ border: '1px solid #eee', borderRadius: 8, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {image && <img src={image} alt={title} style={{ width: '100%', height: 200, objectFit: 'cover' }} />}
      <header style={{ padding: '1rem 1rem 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{title}</h3>
          {status && <Badge status={status} />}
        </div>
      </header>
      <div style={{ padding: '0 1rem 1rem', flex: 1 }}>{children}</div>
    </article>
  );
}

import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import rawProducts from '../../../data/productos.json';
import WhatsAppButton from '../../../components/WhatsAppButton';
import Badge from '../../../components/Badge';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { buildProductMessage } from '../../../lib/whatsapp';
import { mapRawProductToProduct } from '../../../lib/transform';
import { siteConfig } from '../../../lib/config';

export function generateStaticParams() {
  return (rawProducts as any[]).map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const pRaw = (rawProducts as any[]).find((x) => x.slug === params.slug);
  if (!pRaw) return { title: 'Producto no encontrado' };

  const product = mapRawProductToProduct(pRaw);
  return {
    title: `${product.title} | MDD Productos`,
    description: product.description || `Compra ${product.title} al mejor precio.`,
  };
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const pRaw = (rawProducts as any[]).find((x) => x.slug === params.slug);
  if (!pRaw) return notFound();

  const product = mapRawProductToProduct(pRaw);
  const PHONE_NUMBER = siteConfig.phone;

  return (
    <article style={{ maxWidth: 800, margin: '0 auto' }}>
      <Breadcrumbs items={[
        { label: 'Inicio', href: '/' },
        { label: 'Productos', href: '/productos' },
        { label: product.title }
      ]} />
      <h1>{product.title}</h1>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        <img
          src={product.image || '/img/placeholder.png'}
          alt={product.title}
          style={{ width: '100%', maxWidth: 400, height: 'auto', borderRadius: 8, objectFit: 'cover' }}
        />
        <div style={{ flex: 1, minWidth: 300 }}>
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Badge status={product.status || 'pendiente'} />
            {product.price && <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>${product.price}</span>}
          </div>

          <p style={{ lineHeight: 1.6 }}>{product.description}</p>
          {product.stock !== undefined && <p style={{ color: '#666' }}>Stock disponible: {product.stock}</p>}

          <div style={{ marginTop: '2rem' }}>
            <WhatsAppButton phone={PHONE_NUMBER} messageBuilder={() => buildProductMessage(product)}>
              Comprar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </article>
  );
}

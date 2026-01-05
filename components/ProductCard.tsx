import React from 'react';
import Link from 'next/link';
import Card from './Card';
import { Product } from '../lib/types';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/productos/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card
        title={product.title}
        image={product.image || '/img/placeholder.png'}
        status={product.status}
        className="card"
      >
        {product.price && <p>Precio: {product.price}</p>}
      </Card>
    </Link>
  );
}

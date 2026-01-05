'use client';

import React, { useState } from 'react';
import { Product } from '../lib/types';
import ProductCard from './ProductCard';
import Grid from './Grid';

export default function ProductSearch({ products }: { products: Product[] }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todas');

  // Obtener categorías únicas
  const categories = ['Todas', ...Array.from(new Set(products.map(p => p.category || 'General')))];

  const filtered = products.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'Todas' || (p.category || 'General') === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, padding: '0.8rem', fontSize: '1rem', borderRadius: 4, border: '1px solid #ccc', minWidth: '200px' }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: '0.8rem', fontSize: '1rem', borderRadius: 4, border: '1px solid #ccc', minWidth: '150px' }}
        >
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <Grid>
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </Grid>
      
      {filtered.length === 0 && <p>No se encontraron productos.</p>}
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import { Movie } from '../lib/types';
import MovieCard from './MovieCard';
import Grid from './Grid';

export default function MovieSearch({ movies, phone }: { movies: Movie[]; phone: string }) {
  const [search, setSearch] = useState('');

  const filtered = movies.filter(m => m.title.toLowerCase().includes(search.toLowerCase()));
  const disponibles = filtered.filter(m => m.status === 'disponible');
  const pendientes = filtered.filter(m => m.status !== 'disponible');

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Buscar películas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: '100%', padding: '0.8rem', fontSize: '1rem', borderRadius: 4, border: '1px solid #ccc' }}
        />
      </div>

      {disponibles.length > 0 && (
        <>
          <h2>Disponibles</h2>
          <Grid>
            {disponibles.map(m => <MovieCard key={m.id} movie={m} phone={phone} />)}
          </Grid>
        </>
      )}

      {pendientes.length > 0 && (
        <>
          <h2>Pendientes</h2>
          <Grid>
            {pendientes.map(m => <MovieCard key={m.id} movie={m} phone={phone} />)}
          </Grid>
        </>
      )}
      
      {filtered.length === 0 && <p>No se encontraron películas.</p>}
    </div>
  );
}
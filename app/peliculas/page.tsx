import React from 'react';
import rawMovies from '../../data/peliculas.json';
import MovieSearch from '../../components/MovieSearch';
import { mapRawMovies } from '../../lib/transform';
import { validateData, shouldValidateAtRuntime } from '../../lib/validate';
import { siteConfig } from '../../lib/config';

if (shouldValidateAtRuntime()) validateData('peliculas.json', rawMovies, { throwOnError: true });

export default function PeliculasPage() {
  const movies = mapRawMovies(rawMovies);
  const PHONE = siteConfig.phone;

  return (
    <section>
      <h1>Películas</h1>
      <MovieSearch movies={movies} phone={PHONE} />
    </section>
  );
}

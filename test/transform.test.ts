import { describe, it, expect } from 'vitest';
import { mapRawMovieToMovie, mapRawProductToProduct, mapRawToCalendarWeek } from '../lib/transform';

describe('transform utils', () => {
  it('maps raw movie correctly (spanish fields)', () => {
    const raw = {
      id: 123,
      titulo: 'Mi Pelicula',
      descripcion: 'Sinopsis de prueba',
      estado: 'disponible',
      portada: '/img/peli.jpg'
    };
    const movie = mapRawMovieToMovie(raw);
    expect(movie.id).toBe('123');
    expect(movie.title).toBe('Mi Pelicula');
    expect(movie.description).toBe('Sinopsis de prueba');
    expect(movie.status).toBe('disponible');
    expect(movie.image).toBe('/img/peli.jpg');
  });

  it('maps raw product correctly (spanish fields + array images)', () => {
    const raw = {
      id: 456,
      nombre: 'Laptop Gamer',
      precio: 1500,
      estado: 'agotado',
      imagenes: ['/img/laptop.jpg', '/img/laptop-side.jpg']
    };
    const product = mapRawProductToProduct(raw);
    expect(product.title).toBe('Laptop Gamer');
    expect(product.price).toBe(1500);
    expect(product.image).toBe('/img/laptop.jpg'); // Debe tomar la primera imagen
  });

  it('maps raw calendar week to calendar week data', () => {
    const raw = {
      titulo: 'Semana de Terror',
      weekStart: '2023-10-25',
      weekEnd: '2023-10-31',
      slug: 'semana-de-terror',
    };
    const weekData = mapRawToCalendarWeek(raw);
    expect(weekData.startDate).toBe('2023-10-25');
    expect(weekData.endDate).toBe('2023-10-31');
    expect(weekData.isActive).toBe(false); // Assuming '2023-10-25' is not the current date
    expect(weekData.events).toHaveLength(1);
    expect(weekData.events[0].title).toBe('Semana de Terror');
    expect(weekData.events[0].slug).toBe('semana-de-terror');
    expect(weekData.events[0].type).toBe('movie');
  });
});
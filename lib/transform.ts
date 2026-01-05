
// lib/transform.ts
import type { Movie, Product, CalendarWeekData, Service, CalendarEvent } from './types';
import { isWeekActive } from './calendar';

/**
 * Convierte un objeto "crudo" (por ejemplo desde data/*.json o DB) que
 * usa campos en español como `titulo`/`estado` a la interfaz Movie.
 */
export function mapRawMovieToMovie(raw: any): Movie {
  return {
    id: String(raw.id ?? raw._id ?? ''),
    slug: raw.slug ?? '',
    title: raw.title ?? raw.titulo ?? '',
    image: raw.image ?? raw.imagen ?? raw.portada ?? undefined,
    description: raw.description ?? raw.descripcion ?? undefined,
    status: (raw.status ?? raw.estado ?? 'pendiente') as Movie['status'],
    // añade aquí otros mapeos si tu Movie tiene más campos
  };
}

export function mapRawProductToProduct(raw: any): Product {
  return {
    id: String(raw.id ?? raw._id ?? ''),
    slug: raw.slug ?? '',
    title: raw.title ?? raw.nombre ?? '',
    image: raw.image ?? (Array.isArray(raw.imagenes) ? raw.imagenes[0] : raw.imagen) ?? undefined,
    description: raw.description ?? raw.descripcion ?? undefined,
    status: (raw.status ?? raw.estado ?? 'pendiente') as Product['status'],
    price: raw.price ?? raw.precio ?? undefined,
    stock: raw.stock ?? undefined,
    category: raw.category ?? raw.categoria ?? 'General',
  };
}

export function mapRawToCalendarWeek(raw: any): CalendarWeekData {
  const startDate = raw.weekStart ?? raw.inicio ?? '';
  const endDate = raw.weekEnd ?? raw.fin ?? '';
  
  const events: CalendarEvent[] = [];
  if (raw.titulo && raw.slug) {
    events.push({
      date: startDate, // Assumption: event happens on first day of week if not specified
      title: raw.titulo,
      type: 'movie', // Assumption: everything in this calendar is a movie.
      slug: raw.slug,
    });
  }

  return {
    startDate,
    endDate,
    events,
    isActive: isWeekActive(startDate, endDate),
  };
}

export function mapRawServiceToService(raw: any): Service {
  return {
    id: String(raw.id ?? raw._id ?? ''),
    slug: raw.slug ?? '',
    title: raw.title ?? raw.titulo ?? '',
    image: raw.image ?? raw.imagen ?? undefined,
    description: raw.description ?? raw.descripcion ?? undefined,
    status: (raw.status ?? raw.estado ?? 'disponible') as Service['status'],
    price: raw.price ?? raw.precio_base ?? raw.precio ?? undefined,
  };
}

export const mapRawMovies = (list: any[]) => Array.isArray(list) ? list.map(mapRawMovieToMovie) : [];
export const mapRawProducts = (list: any[]) => Array.isArray(list) ? list.map(mapRawProductToProduct) : [];
export const mapRawServices = (list: any[]) => Array.isArray(list) ? list.map(mapRawServiceToService) : [];

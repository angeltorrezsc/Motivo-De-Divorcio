// lib/whatsapp.ts
import { Movie, Product, Service } from './types';

export const buildWhatsAppLink = (phone: string, message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export const buildMovieMessage = (m: Movie) =>
  `Hola, me interesa la película "${m.title}"${m.description ? ` — ${m.description}` : ''}`;

export const buildProductMessage = (p: Product) =>
  `Hola, quiero info sobre "${p.title}".${p.price ? ` Precio: ${p.price}` : ''}`;

export const buildServiceMessage = (s: Service) =>
  `Hola, me interesa el servicio "${s.title}".${s.price ? ` Precio base: ${s.price}` : ''}`;

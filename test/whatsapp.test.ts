import { describe, it, expect } from 'vitest';
import { buildMovieMessage, buildProductMessage, buildServiceMessage, buildWhatsAppLink } from '../lib/whatsapp';
import { Movie, Product, Service } from '../lib/types';

describe('whatsapp utils', () => {
  it('builds movie message correctly', () => {
    const movie: Movie = { id: '1', title: 'Inception', description: 'Dream within a dream' };
    const msg = buildMovieMessage(movie);
    expect(msg).toContain('Inception');
    expect(msg).toContain('Dream within a dream');
  });

  it('builds product message correctly', () => {
    const product: Product = { id: '2', title: 'Gaming Laptop', price: 1500 };
    const msg = buildProductMessage(product);
    expect(msg).toContain('Gaming Laptop');
    expect(msg).toContain('1500');
  });

  it('builds service message correctly', () => {
    const service: Service = { id: 's1', slug: 'svc-1', title: 'Reparación', price: '$50' };
    const msg = buildServiceMessage(service);
    expect(msg).toContain('Reparación');
    expect(msg).toContain('$50');
  });

  it('builds whatsapp link correctly', () => {
    const link = buildWhatsAppLink('12345678', 'Hello World');
    expect(link).toBe('https://wa.me/12345678?text=Hello%20World');
  });
});
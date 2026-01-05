export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  image?: string;
  price?: string;
  category?: string;
  status?: string;
  stock?: number;
}

export interface Movie {
  id: string;
  slug: string;
  title: string;
  description: string;
  image?: string;
  releaseDate?: string;
  director?: string;
  status?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  price?: string;
  status?: string;
  image?: string;
}

export interface CalendarEvent {
  date: string;
  title: string;
  type: 'movie' | 'product' | 'other';
  slug?: string;
}

export interface CalendarWeekData {
  startDate: string;
  endDate: string;
  events: CalendarEvent[];
  isActive: boolean;
}
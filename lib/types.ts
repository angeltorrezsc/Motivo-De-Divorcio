// lib/types.ts
export type Availability = 'disponible' | 'pendiente' | 'agotado';

export interface BaseItem {
  id: string;
  slug: string;
  title: string;
  image?: string;
  status?: Availability;
  description?: string;
}

export interface Movie extends BaseItem {
  duration?: string;
  year?: number;
}

export interface Product extends BaseItem {
  price?: number;
  stock?: number;
  category?: string;
}

export interface CalendarWeek {
  title: string;
  weekStart: string;
  weekEnd: string;
  link?: string;
}

export interface Service extends BaseItem {
  price?: string | number;
}

export type ICalendarWeek = CalendarWeek;

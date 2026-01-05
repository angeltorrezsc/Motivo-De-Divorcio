import React from 'react';
import { Movie } from '../lib/types';
import WhatsAppButton from './WhatsAppButton';
import { buildMovieMessage } from '../lib/whatsapp';

export default function MovieCard({ movie, phone }: { movie: Movie, phone: string }) {
  return (
    <div className="max-w-2xl mx-auto border rounded-lg overflow-hidden shadow-lg bg-white my-8">
      {movie.image && (
        <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
      )}
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-gray-600 mb-4">{movie.description}</p>
        {movie.releaseDate && <p className="text-sm text-gray-500 mb-4">Estreno: {movie.releaseDate}</p>}
        
        <WhatsAppButton 
          phone={phone} 
          messageBuilder={() => buildMovieMessage(movie)}
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Reservar / Info
        </WhatsAppButton>
      </div>
    </div>
  );
}
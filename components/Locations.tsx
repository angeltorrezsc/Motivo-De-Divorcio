import React from 'react';

export default function Locations() {
  return (
    <div className="bg-gray-50 p-8 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Nuestra Ubicación</h2>
      <p className="text-gray-700 mb-2">Calle Principal #123, Zona Central</p>
      <p className="text-gray-700 mb-4">La Paz, Bolivia</p>
      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Ver en Google Maps
      </a>
    </div>
  );
}
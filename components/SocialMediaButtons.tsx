import React from 'react';

export default function SocialMediaButtons() {
  return (
    <div className="text-center">
      <h3 className="text-xl font-bold mb-4">Síguenos en redes sociales</h3>
      <div className="flex justify-center space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition-colors"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
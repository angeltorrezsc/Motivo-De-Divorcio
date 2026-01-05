import React from 'react';
import { Product } from '../lib/types';
import WhatsAppButton from './WhatsAppButton';
import { buildProductMessage } from '../lib/whatsapp';

export default function ProductCard({ product }: { product: Product }) {
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || '59170000000';

  return (
    <div className="max-w-2xl mx-auto border rounded-lg overflow-hidden shadow-lg bg-white my-8">
      {product.image && (
        <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
      )}
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        {product.price && <p className="text-xl font-semibold mb-4">{product.price}</p>}
        
        <WhatsAppButton 
          phone={phone} 
          messageBuilder={() => buildProductMessage(product)}
          className="inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors"
        >
          Consultar por WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}
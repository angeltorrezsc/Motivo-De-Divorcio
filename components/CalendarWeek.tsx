import React from 'react';
import { CalendarWeekData } from '../lib/types';
import Link from 'next/link';

export default function CalendarWeek({ week }: { week: CalendarWeekData }) {
  return (
    <div className={`border rounded-lg p-4 ${week.isActive ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
      <h3 className="text-lg font-bold mb-3">
        Semana: {week.startDate} - {week.endDate}
        {week.isActive && <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-1 rounded">Actual</span>}
      </h3>
      <div className="space-y-2">
        {week.events.map((evt, idx) => (
          <div key={idx} className="flex items-center justify-between p-2 bg-white rounded shadow-sm">
            <div>
              <span className="font-semibold text-gray-700 mr-2">{evt.date}:</span>
              <span>{evt.title}</span>
            </div>
            {evt.slug && (
              <Link 
                href={evt.type === 'movie' ? `/movies/${evt.slug}` : `/products/${evt.slug}`}
                className="text-blue-600 hover:underline text-sm"
              >
                Ver detalle
              </Link>
            )}
          </div>
        ))}
        {week.events.length === 0 && <p className="text-gray-400 italic">Sin eventos esta semana.</p>}
      </div>
    </div>
  );
}
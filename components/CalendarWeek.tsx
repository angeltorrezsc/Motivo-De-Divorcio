import React from 'react';
import { CalendarWeek as CW } from '../lib/types';
import { isWeekActive } from '../lib/calendar';

export default function CalendarWeek({ week, phone }: { week: CW; phone: string }) {
  const active = isWeekActive(week.weekStart, week.weekEnd);
  return (
    <div className="calendar-week" style={{border:'1px solid #ddd',padding:10,margin:6}}>
      <h4>{week.title}</h4>
      <small>{week.weekStart} → {week.weekEnd}</small>
      <div>
        {active && week.link ? (
          <a href={week.link} target="_blank" rel="noopener noreferrer">Ver película de la semana</a>
        ) : active ? (
          <span>Semana activa (sin enlace)</span>
        ) : (
          <span>Fecha programada</span>
        )}
      </div>
    </div>
  );
}

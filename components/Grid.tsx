import React from 'react';

interface GridProps {
  children: React.ReactNode;
  className?: string;
}

export default function Grid({ children, className = '' }: GridProps) {
  return (
    <div className={className} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', padding: '1rem 0' }}>
      {children}
    </div>
  );
}
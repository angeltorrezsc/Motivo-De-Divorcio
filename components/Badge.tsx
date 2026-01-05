import React from 'react';

const styles: Record<string, React.CSSProperties> = {
  disponible: { backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb' },
  pendiente: { backgroundColor: '#fff3cd', color: '#856404', border: '1px solid #ffeeba' },
  agotado: { backgroundColor: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb' },
  default: { backgroundColor: '#e2e3e5', color: '#383d41', border: '1px solid #d6d8db' },
};

interface BadgeProps {
  status: string;
}

export default function Badge({ status }: BadgeProps) {
  const style = styles[status.toLowerCase()] || styles.default;
  return (
    <span style={{ ...style, padding: '0.25em 0.6em', fontSize: '0.75em', fontWeight: 700, borderRadius: '0.25rem', display: 'inline-block' }}>
      {status}
    </span>
  );
}
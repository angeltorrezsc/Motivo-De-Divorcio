import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#666' }}>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
              {index > 0 && <span style={{ margin: '0 0.5rem' }}>/</span>}
              {isLast || !item.href ? (
                <span aria-current="page" style={{ color: '#333', fontWeight: isLast ? 'bold' : 'normal' }}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} style={{ textDecoration: 'none', color: '#0070f3' }}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
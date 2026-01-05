import React from 'react';
import { siteConfig } from '../lib/config';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #eee', padding: '3rem 1rem', marginTop: 'auto' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        
        <div>
          <h3 style={{ marginTop: 0 }}>{siteConfig.name}</h3>
          <p style={{ color: '#666' }}>
            Tu universo de entretenimiento y productos tecnológicos.
          </p>
        </div>

        <div>
          <h4 style={{ marginTop: 0 }}>Contacto</h4>
          <ul style={{ listStyle: 'none', padding: 0, color: '#666' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              WhatsApp: <a href={`https://wa.me/${siteConfig.phone}`} target="_blank" rel="noreferrer" style={{ color: '#0070f3', textDecoration: 'none' }}>{siteConfig.phone}</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href={siteConfig.location} target="_blank" rel="noreferrer" style={{ color: '#0070f3', textDecoration: 'none' }}>Ver Ubicación en Mapa</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginTop: 0 }}>Síguenos</h4>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {Object.entries(siteConfig.social).map(([network, url]) => (
              <a 
                key={network} 
                href={url} 
                target="_blank" 
                rel="noreferrer"
                style={{ textTransform: 'capitalize', color: '#0070f3', textDecoration: 'none' }}
              >
                {network}
              </a>
            ))}
          </div>
        </div>

      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #ddd', color: '#888', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} {siteConfig.name} - Todos los derechos reservados.
      </div>
    </footer>
  );
}
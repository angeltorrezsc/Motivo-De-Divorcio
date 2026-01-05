import '../styles/globals.css';
import React from 'react';
import Layout from '../components/Layout';

export const metadata = {
  title: 'MDD',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

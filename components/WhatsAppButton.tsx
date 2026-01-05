// components/WhatsAppButton.tsx
import React from 'react';

interface WhatsAppButtonProps {
  phone: string;                      // número (abstracto)
  messageBuilder: () => string;       // función que devuelve texto (abstracta)
  children?: React.ReactNode;
  className?: string;
}

export default function WhatsAppButton({ phone, messageBuilder, children = 'WhatsApp', className }: WhatsAppButtonProps) {
  const message = encodeURIComponent(messageBuilder());
  const href = `https://wa.me/${phone}?text=${message}`;
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

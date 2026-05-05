'use client';

import { MouseEvent, ReactNode } from 'react';

interface WhatsAppLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}

export function WhatsAppLink({
  href,
  children,
  className,
  target,
  rel,
  'aria-label': ariaLabel,
}: WhatsAppLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'Contactar', {
        event_category: 'engagement',
        event_label: 'whatsapp_click',
      });
    }
    // Let the default navigation happen naturally
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

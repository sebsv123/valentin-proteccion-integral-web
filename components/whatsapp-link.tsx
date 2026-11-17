'use client';

import type { ReactNode } from 'react';
import { trackCommercialCta } from '@/lib/commercial-cta-analytics';

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
  const handleClick = () => trackCommercialCta('whatsapp');

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

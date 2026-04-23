'use client';

import { trackWhatsAppClick } from '@/lib/analytics';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { ReactNode } from 'react';

interface WhatsAppButtonProps {
  href: string;
  location: string;
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
}

export function WhatsAppButton({ 
  href, 
  location, 
  children, 
  className = '',
  showIcon = false 
}: WhatsAppButtonProps) {
  const handleClick = () => {
    trackWhatsAppClick(location);
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={className}
    >
      {showIcon && <WhatsAppIcon className="w-5 h-5" />}
      {children}
    </a>
  );
}

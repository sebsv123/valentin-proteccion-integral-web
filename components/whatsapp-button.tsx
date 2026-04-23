'use client';

import { trackWhatsAppClick } from '@/lib/analytics';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { ReactNode, MouseEvent } from 'react';

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
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Prevent immediate navigation
    e.preventDefault();
    
    // Track the click
    trackWhatsAppClick(location);
    
    // Small delay to ensure event fires before navigation
    setTimeout(() => {
      window.open(href, '_blank', 'noopener,noreferrer');
    }, 200);
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

'use client';

import { ReactNode } from 'react';

interface RevealLightProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  className?: string;
  duration?: number;
}

// CSS-based animation component (no framer-motion) for better TBT performance
export default function RevealLight({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  duration = 0.8,
}: RevealLightProps) {
  if (direction === 'none') {
    return <div className={className}>{children}</div>;
  }

  // CSS animation with delay
  const animationStyle: React.CSSProperties = {
    animationName: `reveal-${direction}`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    animationFillMode: 'forwards',
    animationTimingFunction: 'cubic-bezier(0.21, 1, 0.36, 1)',
    opacity: 0,
  };

  return (
    <div className={className} style={animationStyle}>
      {children}
    </div>
  );
}

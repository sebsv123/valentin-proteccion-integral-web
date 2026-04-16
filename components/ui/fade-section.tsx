'use client';

import { useEffect, useRef, useState } from 'react';

interface FadeSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  threshold?: number;
}

export function FadeSection({ children, className = '', delay = 0, direction = 'up', threshold = 0.1 }: FadeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const translate = { up: 'translateY(28px)', left: 'translateX(-24px)', right: 'translateX(24px)', none: 'none' };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : translate[direction],
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

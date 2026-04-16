'use client';

import { useState, useCallback, useRef } from 'react';

interface Spark { id: number; x: number; y: number; angle: number }

interface ClickSparkProps {
  children?: React.ReactNode;
  className?: string;
  color?: string;
}

export function ClickSpark({ children, className = '', color = '#25D366' }: ClickSparkProps) {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const counter = useRef(0);

  const fire = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const s: Spark[] = Array.from({ length: 8 }, (_, i) => ({
      id: counter.current++, x, y, angle: i * 45,
    }));
    setSparks(p => [...p, ...s]);
    setTimeout(() => setSparks(p => p.filter(sp => !s.find(ss => ss.id === sp.id))), 600);
  }, []);

  return (
    <div className={`relative ${className}`} onClick={fire} style={{ isolation: 'isolate' }}>
      {children}
      {sparks.map(s => (
        <span
          key={s.id}
          className="click-spark-dot"
          style={{
            '--angle': `${s.angle}deg`,
            '--spark-color': color,
            left: s.x,
            top: s.y,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

'use client';

import { useEffect, useRef } from 'react';

interface Dot {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;
}

interface ParticlesBgProps {
  className?: string;
  count?: number;
  color?: string;
  maxDist?: number;
}

export function ParticlesBg({ className = '', count = 55, color = '255,255,255', maxDist = 110 }: ParticlesBgProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let mx = -999, my = -999;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left; my = e.clientY - r.top;
    };
    canvas.addEventListener('mousemove', onMove);

    const dots: Dot[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.4 + 0.5,
      opacity: Math.random() * 0.45 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(d => {
        const dx = mx - d.x, dy = my - d.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 130 && dist > 0) {
          d.vx += (dx / dist) * 0.012;
          d.vy += (dy / dist) * 0.012;
        }
        d.vx = Math.max(-0.75, Math.min(0.75, d.vx * 0.995));
        d.vy = Math.max(-0.75, Math.min(0.75, d.vy * 0.995));
        d.x = (d.x + d.vx + canvas.width) % canvas.width;
        d.y = (d.y + d.vy + canvas.height) % canvas.height;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${d.opacity})`;
        ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dist = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(${color},${(1 - dist / maxDist) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener('mousemove', onMove);
    };
  }, [count, color, maxDist]);

  return <canvas ref={ref} className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} />;
}

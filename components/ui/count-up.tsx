'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number; // seconds
  delay?: number;    // seconds
  precision?: number;
  suffix?: string;
  className?: string;
}

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  precision = 0,
  suffix = '',
  className = '',
}: CountUpProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const startTime = performance.now() + delay * 1000;
        const totalDuration = duration * 1000;

        const tick = (now: number) => {
          if (now < startTime) { requestAnimationFrame(tick); return; }
          const elapsed = Math.min(now - startTime, totalDuration);
          const progress = elapsed / totalDuration;
          // easeOut cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(from + (to - from) * eased);
          if (elapsed < totalDuration) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { rootMargin: '-50px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [from, to, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {count.toFixed(precision)}
      {suffix}
    </span>
  );
}

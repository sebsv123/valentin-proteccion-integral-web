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
  from: fromProp,
  duration = 2,
  delay = 0,
  precision = 0,
  suffix = '',
  className = '',
}: CountUpProps) {
  // FIX: Never start from 0, use 10% of final value or provided from value
  const from = fromProp ?? Math.max(1, Math.floor(to * 0.1));
  
  // SSR & Initial state: show final value so search engines and users see real data immediately
  const [count, setCount] = useState(to);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    // FIX: Fallback for environments without IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      setCount(to);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        // Reset to initial count only when animation starts (now from 10% of target, never 0)
        setCount(from);

        const startTime = performance.now() + delay * 1000;
        const totalDuration = duration * 1000;

        const tick = (now: number) => {
          if (now < startTime) {
            requestAnimationFrame(tick);
            return;
          }
          const elapsed = Math.min(now - startTime, totalDuration);
          const progress = elapsed / totalDuration;
          // easeOut cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(from + (to - from) * eased);
          if (elapsed < totalDuration) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
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

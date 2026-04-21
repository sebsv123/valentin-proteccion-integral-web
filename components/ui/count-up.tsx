'use client';

import { useEffect, useRef, useState, useMemo } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number; // seconds
  delay?: number;    // seconds
  precision?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function CountUp({
  to,
  from: fromProp,
  duration = 1.5,
  delay = 0,
  precision = 0,
  suffix = '',
  prefix = '',
  className = '',
}: CountUpProps) {
  // Calculate starting value: never from 0, minimum 10% of target
  const from = useMemo(() => {
    if (fromProp !== undefined) return fromProp;
    // For small numbers like 10, ensure we start at least at 3-4
    const tenPercent = Math.floor(to * 0.1);
    return Math.max(Math.ceil(to * 0.3), tenPercent, 1);
  }, [fromProp, to]);
  
  // Track if component is mounted (client-side only)
  const [isMounted, setIsMounted] = useState(false);
  const [count, setCount] = useState(to); // Start with final value for SSR
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only run animation on client side after mounting
    if (!isMounted) return;
    
    const el = ref.current;
    if (!el) return;
    
    // Skip if already animated (prevents re-animation on route changes)
    if (hasAnimated) return;
    
    // Fallback for environments without IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      setCount(to);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) return;
        
        setHasAnimated(true);
        observer.disconnect();

        // Start animation from calculated initial value
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
          // easeOut cubic for smooth deceleration
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = from + (to - from) * eased;
          setCount(current);
          
          if (elapsed < totalDuration) {
            requestAnimationFrame(tick);
          } else {
            setCount(to); // Ensure exact final value
          }
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isMounted, from, to, duration, delay, hasAnimated]);

  // Format display value
  const displayValue = count.toFixed(precision);

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${to}${suffix}`}>
      {/* For SSR: always show final value */}
      <span className="sr-only">{prefix}{to}{suffix}</span>
      {/* Visual display */}
      <span aria-hidden="true">
        {prefix}{displayValue}{suffix}
      </span>
    </span>
  );
}

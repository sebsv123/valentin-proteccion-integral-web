"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AuroraStaticBackground } from './aurora-static-background';

export default function AuroraBackground() {
  const [animate, setAnimate] = useState(() => typeof window !== 'undefined' &&
    !window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)').matches && !document.hidden);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)');
    const update = () => setAnimate(!media.matches && !document.hidden);
    update();
    media.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    return () => {
      media.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  // Unmount motion nodes: CSS-only overrides would leave their JS loop running.
  if (!animate) return <AuroraStaticBackground />;

  // Animated version for desktop only
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[var(--bg)]">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            translate: ['0% 0%', '10% -10%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -left-[20%] -top-[20%] h-[140%] w-[140%] opacity-20 blur-[120px]"
          style={{
            background: 'radial-gradient(circle at center, var(--blue) 0%, transparent 60%)',
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -45, 0],
            translate: ['0% 0%', '-10% 10%', '0% 0%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -right-[20%] -bottom-[20%] h-[140%] w-[140%] opacity-20 blur-[120px]"
          style={{
            background: 'radial-gradient(circle at center, var(--green) 0%, transparent 60%)',
          }}
        />
      </div>
    </div>
  );
}

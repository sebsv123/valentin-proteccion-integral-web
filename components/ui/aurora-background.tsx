"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AuroraBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detect mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Static gradient for mobile (no animation to reduce TBT)
  if (mounted && isMobile) {
    return (
      <div 
        className="fixed inset-0 -z-10 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #f0f9ff 100%)'
        }}
      />
    );
  }

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

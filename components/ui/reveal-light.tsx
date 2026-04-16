'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RevealLightProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  className?: string;
  duration?: number;
}

export default function RevealLight({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  duration = 0.8,
}: RevealLightProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
      scale: direction === 'scale' ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.21, 1, 0.36, 1], // Custom premium cubic-bezier for a smooth "pop"
      },
    },
  };

  if (direction === 'none') {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

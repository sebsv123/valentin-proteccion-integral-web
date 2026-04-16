'use client';

import { motion } from 'framer-motion';

interface BlurTextProps {
  text: string;
  className?: string;
  wordDelay?: number;
  initialDelay?: number;
}

export function BlurText({ text, className = '', wordDelay = 0.07, initialDelay = 0 }: BlurTextProps) {
  const words = text.split(' ');
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.28em] last:mr-0"
          initial={{ filter: 'blur(14px)', opacity: 0, y: 10 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: initialDelay + i * wordDelay, ease: [0.16, 1, 0.3, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

"use client";

import { ReactNode } from 'react';

export default function MetallicPaint({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-10">{children}</div>
      {/* CSS shimmer — replaces framer-motion animation */}
      <span
        className="absolute inset-0 z-20 pointer-events-none metallic-shine"
        aria-hidden="true"
      />
    </div>
  );
}

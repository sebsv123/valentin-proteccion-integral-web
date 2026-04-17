'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function HeroImage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/premium/hero-family-opt.webp"
        alt="Familia protegida por Valentín Protección Integral"
        fill
        priority
        fetchPriority="high"
        quality={isMobile ? 40 : 60}
        className="object-cover object-center"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 700px"
      />
    </div>
  );
}

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
        src="https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Asesoramiento médico profesional y tecnológico"
        fill
        priority
        fetchPriority="high"
        className="object-cover object-center opacity-70"
        sizes="100vw"
      />
    </div>
  );
}

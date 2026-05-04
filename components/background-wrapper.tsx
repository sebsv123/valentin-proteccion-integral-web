"use client";

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const AuroraBackground = dynamic(() => import('@/components/ui/aurora-background'), { ssr: false });
const IridescenceBackground = dynamic(() => import('@/components/ui/iridescence-background'), { ssr: false });

export function BackgroundWrapper() {
  const pathname = usePathname();
  const [showHeavyBg, setShowHeavyBg] = useState(false);
  
  // Home page gets Iridescence, subpages get Aurora
  const isHome = pathname === '/';

  // Lazy load heavy WebGL background after LCP (2s delay) to avoid TBT
  useEffect(() => {
    if (!isHome) return;
    const timer = setTimeout(() => {
      setShowHeavyBg(true);
    }, 2000); // Load after LCP is complete
    return () => clearTimeout(timer);
  }, [isHome]);

  return (
    <>
      {isHome ? (
        showHeavyBg ? <IridescenceBackground /> : <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#f0f4ff] via-[#e8f0fe] to-[#f0f9ff]" />
      ) : (
        <AuroraBackground />
      )}
    </>
  );
}

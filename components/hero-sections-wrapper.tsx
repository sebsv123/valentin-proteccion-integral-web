'use client';

import dynamic from 'next/dynamic';

// CRITICAL: Isolate framer-motion components with ssr:false
// This prevents framer-motion from being included in the initial SSR bundle
// and eliminates the 25s+ TBT caused by hydration

export const HeroLeadSection = dynamic(
  () => import('@/components/hero-animated').then(m => m.HeroLeadSection),
  { 
    ssr: false,
    loading: () => <div className="min-h-[85vh] bg-white" />
  }
);

export const StatsSection = dynamic(
  () => import('@/components/hero-animated').then(m => m.StatsSection),
  { 
    ssr: false,
    loading: () => null
  }
);

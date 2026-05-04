'use client';

import dynamic from 'next/dynamic';

// HeroLeadSection now renders with SSR to fix LCP delay (1920ms resource load)
// HeroImage is SSR-compatible with CSS-based mobile detection
// StatsSection stays client-only as it's below the fold

export const HeroLeadSection = dynamic(
  () => import('@/components/hero-animated').then(m => m.HeroLeadSection),
  { 
    ssr: true,
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

"use client";

import dynamic from 'next/dynamic';

export const StatsSection = dynamic(
  () => import('@/components/hero-animated').then(m => m.StatsSection),
  { 
    ssr: false,
    loading: () => null
  }
);

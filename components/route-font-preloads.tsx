'use client';

import { preload } from 'react-dom';
import { usePathname } from 'next/navigation';
import { rootFontPreloadsForPath } from '@/lib/root-fonts';

/** Keep existing global hints, except the unused first-viewport serif on Salud. */
export function RouteFontPreloads() {
  const pathname = usePathname();
  for (const href of rootFontPreloadsForPath(pathname)) {
    preload(href, { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous', fetchPriority: pathname === '/empresas/salud' ? 'low' : undefined });
  }
  return null;
}

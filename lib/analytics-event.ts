import type { BeforeSendEvent } from '@vercel/analytics';

/** Keep only coarse page paths; unexpected/custom events fail closed. */
export function sanitizeAnalyticsEvent(event: BeforeSendEvent, allowed: boolean): BeforeSendEvent | null {
  if (!allowed || event.type !== 'pageview') return null;
  try {
    const url = new URL(event.url);
    if (!['https:', 'http:'].includes(url.protocol)) return null;
    const segments = url.pathname.split('/').filter(Boolean).map(decodeURIComponent);
    if (segments.some((segment) => segment.length > 40 || /@|\d{4,}|[=+\s]/.test(segment))) return null;
    url.search = '';
    url.hash = '';
    return { ...event, url: url.toString() };
  } catch { return null; }
}

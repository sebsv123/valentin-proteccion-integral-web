/** Approved global font resources. Content-hashed binaries are versioned in public/static. */
export const ROOT_BODY_FONT_PRELOAD_URL = '/static/fonts/vpi-global/e8f2fbee2754df70-s.p.9b7a96b4.woff2';
export const ROOT_FONT_PRELOAD_URLS = [
  '/static/fonts/vpi-global/2a65768255d6b625-s.p.d19752fb.woff2',
  ROOT_BODY_FONT_PRELOAD_URL,
] as const;

/** Salud needs Montserrat for global UI; its editorial fonts already have their own hints. */
export function rootFontPreloadsForPath(pathname: string | null): readonly string[] {
  return pathname === '/empresas/salud' ? [ROOT_BODY_FONT_PRELOAD_URL] : ROOT_FONT_PRELOAD_URLS;
}

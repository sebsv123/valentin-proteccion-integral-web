import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
  ...routing,
  localeDetection: false,
});

export const config = {
  // The Spanish tree is legacy and must remain untouched. The pilot only
  // needs locale negotiation for the new /en routes.
  matcher: ['/en', '/en/:path*'],
};

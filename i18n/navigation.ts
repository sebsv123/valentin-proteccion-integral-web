import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);

export function localizedPath(locale: 'es' | 'en', pathname: '/' | '/international' | '/international/peru' | '/international/australia' | '/international/india' | '/international/south-korea' | '/contact' | '/foreigners' | '/insurance' | '/insurance/health' | '/insurance/health/foreigners') {
  return getPathname({ locale, href: pathname });
}

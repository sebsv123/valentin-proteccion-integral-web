import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);

export function localizedPath(locale: 'es' | 'en', pathname: '/' | '/internacional' | '/internacional/peru' | '/contacto' | '/extranjeros' | '/seguros' | '/seguros/salud' | '/seguros/salud-extranjeros') {
  return getPathname({ locale, href: pathname });
}

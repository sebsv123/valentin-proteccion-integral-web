import type { Metadata } from 'next';
import { InternationalPageView } from './InternationalPageView';
import { getInternationalMetadata, internationalContent } from './international-content';

export const metadata: Metadata = getInternationalMetadata('es');

export default function InternacionalPage() {
  return <InternationalPageView content={internationalContent.es} locale="es" />;
}

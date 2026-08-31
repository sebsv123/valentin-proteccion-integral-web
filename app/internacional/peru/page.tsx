import type { Metadata } from 'next';
import { PeruPageView } from './PeruPageView';
import { getPeruMetadata, peruContent } from './peru-content';

export const metadata: Metadata = getPeruMetadata('es');

export default function PeruPage() {
  return <PeruPageView content={peruContent.es} locale="es" />;
}

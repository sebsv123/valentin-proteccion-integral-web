import type { Metadata } from 'next';
import { UnifiedBusinessHealthPage } from '@/components/unified-business-pages';

export const metadata: Metadata = {
  title: 'Seguro de salud para autónomos y pymes | Valentín Protección Integral',
  description: 'Revisa salud para autónomos y pymes: composición del colectivo, modalidades ambulatoria, completa y reembolso, fiscalidad y documentación.',
  alternates: { canonical: 'https://valentinproteccionintegral.com/empresas/salud', languages: { es: 'https://valentinproteccionintegral.com/empresas/salud', en: 'https://valentinproteccionintegral.com/en/business/health-insurance', 'x-default': 'https://valentinproteccionintegral.com/empresas/salud' } },
  openGraph: { title: 'Seguro de salud para autónomos y pymes', description: 'Una ruta clara para revisar personas, cobertura, fiscalidad y condiciones.', url: 'https://valentinproteccionintegral.com/empresas/salud', type: 'website' },
};

export default function BusinessHealthPage() {
  return <UnifiedBusinessHealthPage locale="es" />;
}

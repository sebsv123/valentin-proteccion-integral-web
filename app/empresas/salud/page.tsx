import type { Metadata } from 'next';
import { BusinessHealthExperience } from '@/components/business-health-rebuild/experience';

export const metadata: Metadata = {
  title: 'Seguro de salud para autónomos y pymes | Valentín Protección Integral',
  description: 'Seguro de salud para tu equipo con criterio VPI. Compara niveles de cobertura, revisa aportación y condiciones y solicita un estudio para tu pyme o actividad autónoma.',
  alternates: { canonical: 'https://valentinproteccionintegral.com/empresas/salud', languages: { es: 'https://valentinproteccionintegral.com/empresas/salud', en: 'https://valentinproteccionintegral.com/en/business/health-insurance', 'x-default': 'https://valentinproteccionintegral.com/empresas/salud' } },
  openGraph: { title: 'Seguro de salud para autónomos y pymes', description: 'Salud para tu equipo. Criterio para elegir cobertura, coste y condiciones con VPI.', url: 'https://valentinproteccionintegral.com/empresas/salud', images: ['/images/business/vpi-business-hero.webp'], type: 'website' },
};

export default function BusinessHealthPage() {
  return <BusinessHealthExperience />;
}

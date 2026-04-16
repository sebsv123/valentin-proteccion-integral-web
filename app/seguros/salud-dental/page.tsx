import type { Metadata } from 'next';
import { DentalLanding } from '@/components/dental-landing';

export const metadata: Metadata = {
  title: 'Seguro Dental en Madrid · Sin Carencias | Valentín Protección Integral',
  description:
    'Seguro dental en Madrid desde el día 1: revisiones y limpiezas sin carencias. Rosa y Sebastián Valentín te responden en 30 minutos. Sin letra pequeña, sin sorpresas.',
  keywords: [
    'seguro dental Madrid',
    'seguro dental sin carencias Madrid',
    'seguro dental barato Madrid',
    'seguro dental familiar Madrid',
    'contratar seguro dental Madrid',
  ],
  alternates: { canonical: 'https://valentinproteccionintegral.com/seguros/salud-dental' },
  openGraph: {
    title: 'Seguro Dental en Madrid · Sin Carencias | Valentín Protección Integral',
    description:
      'Tu seguro dental en Madrid sin periodos de espera para revisiones y limpiezas. Respuesta garantizada en 30 minutos. Rosa y Sebastián Valentín.',
    url: 'https://valentinproteccionintegral.com/seguros/salud-dental',
    type: 'website',
  },
};

export default function SaludDentalPage() {
  return <DentalLanding />;
}

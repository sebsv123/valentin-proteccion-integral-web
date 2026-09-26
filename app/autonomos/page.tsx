import type { Metadata } from 'next';
import { SelfEmployedAudiencePage } from '@/components/unified-business-pages';

export const metadata: Metadata = {
  title: 'Seguros y soluciones para autónomos | Valentín Protección Integral',
  description: 'Una puerta de entrada para autónomos: revisa salud para tu actividad y soluciones de ciberseguridad dentro de la rama Empresas y Autónomos.',
  alternates: { canonical: 'https://valentinproteccionintegral.com/autonomos', languages: { es: 'https://valentinproteccionintegral.com/autonomos', en: 'https://valentinproteccionintegral.com/en/for/self-employed', 'x-default': 'https://valentinproteccionintegral.com/autonomos' } },
  openGraph: { title: 'Seguros y soluciones para autónomos', description: 'Salud y ciberseguridad para autónomos, con alcance y condiciones revisados según el producto.', url: 'https://valentinproteccionintegral.com/autonomos', locale: 'es_ES', type: 'website' },
};

export default function AutonomosRootPage() {
  return <SelfEmployedAudiencePage locale="es" />;
}

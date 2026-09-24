import type { Metadata } from 'next';
import { BusinessBranchPage } from '@/components/unified-business-pages';

export const metadata: Metadata = {
  title: 'Soluciones para empresas y autónomos | Valentín Protección Integral',
  description: 'Revisa las soluciones de salud y ciberseguridad que VPI distribuye para empresas, equipos y autónomos.',
  alternates: { canonical: 'https://valentinproteccionintegral.com/empresas', languages: { es: 'https://valentinproteccionintegral.com/empresas', en: 'https://valentinproteccionintegral.com/en/business', 'x-default': 'https://valentinproteccionintegral.com/empresas' } },
  openGraph: { title: 'Soluciones para empresas y autónomos', description: 'Salud y ciberseguridad para empresas, equipos y autónomos, con orientación clara.', url: 'https://valentinproteccionintegral.com/empresas', type: 'website' },
};

export default function EmpresasPage() {
  return <BusinessBranchPage locale="es" />;
}

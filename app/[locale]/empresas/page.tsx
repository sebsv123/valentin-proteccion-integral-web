import type { Metadata } from 'next';
import { BusinessBranchPage } from '@/components/unified-business-pages';

export const metadata: Metadata = {
  title: 'Solutions for businesses and self-employed professionals | Valentín Protección Integral',
  description: 'Review the health insurance and cybersecurity solutions VPI distributes for businesses, teams and self-employed professionals.',
  alternates: { canonical: 'https://valentinproteccionintegral.com/en/business', languages: { es: 'https://valentinproteccionintegral.com/empresas', en: 'https://valentinproteccionintegral.com/en/business', 'x-default': 'https://valentinproteccionintegral.com/empresas' } },
  openGraph: { title: 'Solutions for businesses and self-employed professionals', description: 'Health insurance and cybersecurity for businesses, teams and self-employed professionals.', url: 'https://valentinproteccionintegral.com/en/business', locale: 'en_GB', type: 'website' },
};

export default function Page() {
  return <BusinessBranchPage locale="en" />;
}

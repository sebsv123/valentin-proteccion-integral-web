import type { Metadata } from 'next';
import { UnifiedBusinessHealthPage } from '@/components/unified-business-pages';

export const metadata: Metadata = {
  title: 'Health insurance for self-employed professionals and SMEs | Valentín Protección Integral',
  description: 'Review group composition, outpatient, comprehensive and reimbursement options, tax scope and documentation for business health insurance.',
  alternates: { canonical: 'https://valentinproteccionintegral.com/en/business/health-insurance', languages: { es: 'https://valentinproteccionintegral.com/empresas/salud', en: 'https://valentinproteccionintegral.com/en/business/health-insurance', 'x-default': 'https://valentinproteccionintegral.com/empresas/salud' } },
  openGraph: { title: 'Health insurance for self-employed professionals and SMEs', description: 'A clear route to review people, cover, tax scope and policy conditions.', url: 'https://valentinproteccionintegral.com/en/business/health-insurance', locale: 'en_GB', type: 'website' },
};

export default function Page() {
  return <UnifiedBusinessHealthPage locale="en" />;
}

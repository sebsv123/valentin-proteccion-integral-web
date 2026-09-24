import type { Metadata } from 'next';
import { SelfEmployedAudiencePage } from '@/components/unified-business-pages';

export const metadata: Metadata = {
  title: 'Insurance and solutions for self-employed professionals | Valentín Protección Integral',
  description: 'A clear entry point for self-employed professionals to review health insurance and cybersecurity solutions within the unified business branch.',
  alternates: { canonical: 'https://valentinproteccionintegral.com/en/for/self-employed', languages: { es: 'https://valentinproteccionintegral.com/autonomos', en: 'https://valentinproteccionintegral.com/en/for/self-employed', 'x-default': 'https://valentinproteccionintegral.com/autonomos' } },
  openGraph: { title: 'Insurance and solutions for self-employed professionals', description: 'Health insurance and cybersecurity with clear scope and product conditions.', url: 'https://valentinproteccionintegral.com/en/for/self-employed', locale: 'en_GB', type: 'website' },
};

export default function Page() {
  return <SelfEmployedAudiencePage locale="en" />;
}

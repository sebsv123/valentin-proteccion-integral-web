import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InsuranceHubPageView } from '@/app/seguros/page';

export const metadata: Metadata = {
  title: 'Insurance in Madrid | Valentín Protección Integral',
  description: 'Health, life, dental, pet and travel insurance with clear, personal guidance in Madrid.',
  alternates: { canonical: 'https://valentinproteccionintegral.com/en/insurance', languages: { es: 'https://valentinproteccionintegral.com/seguros', en: 'https://valentinproteccionintegral.com/en/insurance', 'x-default': 'https://valentinproteccionintegral.com/seguros' } },
  openGraph: { title: 'Insurance in Madrid | Valentín Protección Integral', description: 'Health, life, dental, pet and travel insurance with clear, personal guidance in Madrid.', url: 'https://valentinproteccionintegral.com/en/insurance', locale: 'en_GB', type: 'website' },
};

export default async function EnglishInsurance({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'en') notFound();
  return <InsuranceHubPageView locale="en" />;
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductPageView } from '@/app/seguros/[slug]/page';

export const metadata: Metadata = {
  title: 'Health insurance in Madrid | Valentín Protección Integral',
  description: 'Compare health insurance options in Madrid with clear, personal guidance.',
  alternates: { canonical: 'https://valentinproteccionintegral.com/en/insurance/health', languages: { es: 'https://valentinproteccionintegral.com/seguros/salud', en: 'https://valentinproteccionintegral.com/en/insurance/health', 'x-default': 'https://valentinproteccionintegral.com/seguros/salud' } },
  openGraph: { title: 'Health insurance in Madrid | Valentín Protección Integral', description: 'Compare health insurance options in Madrid with clear, personal guidance.', url: 'https://valentinproteccionintegral.com/en/insurance/health', locale: 'en_GB', type: 'website' },
};

export default async function EnglishHealth({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'en') notFound();
  return <ProductPageView slug="salud" locale="en" />;
}

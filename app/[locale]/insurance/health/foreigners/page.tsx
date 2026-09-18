import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SaludExtranjerosPageView } from '@/app/seguros/salud-extranjeros/page';

export const metadata: Metadata = {
  title: 'Health insurance for visas and residence in Spain | VPI',
  description: 'Health insurance for study visas, residence and long-stay procedures in Spain where cover is required. We review the applicable requirements; final decisions rest with the competent authority or consulate.',
  alternates: { canonical: 'https://valentinproteccionintegral.com/en/insurance/health/foreigners', languages: { es: 'https://valentinproteccionintegral.com/seguros/salud-extranjeros', en: 'https://valentinproteccionintegral.com/en/insurance/health/foreigners', 'x-default': 'https://valentinproteccionintegral.com/seguros/salud-extranjeros' } },
  openGraph: { title: 'Health insurance for visas and residence in Spain | VPI', description: 'Health insurance for study visas, residence and long-stay procedures in Spain where cover is required. We review the applicable requirements; final decisions rest with the competent authority or consulate.', url: 'https://valentinproteccionintegral.com/en/insurance/health/foreigners', locale: 'en_GB', type: 'website', images: [{ url: '/images/rosa_y_sebastian.jpeg', width: 1200, height: 630, alt: 'Rosa and Sebastián - Valentín Protección Integral' }] },
};

export default async function EnglishHealthForeigners({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'en') notFound();
  return <SaludExtranjerosPageView locale="en" />;
}

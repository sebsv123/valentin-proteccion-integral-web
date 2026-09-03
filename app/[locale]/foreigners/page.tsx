import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ExtranjerosPageView } from '@/app/extranjeros/page';

export const metadata: Metadata = {
  title: 'Health insurance for foreigners in Spain | VPI',
  description: 'Health insurance guidance for studies, visas, residence and renewals in Spain.',
  alternates: { canonical: 'https://valentinproteccionintegral.com/en/foreigners', languages: { es: 'https://valentinproteccionintegral.com/extranjeros', en: 'https://valentinproteccionintegral.com/en/foreigners', 'x-default': 'https://valentinproteccionintegral.com/extranjeros' } },
  openGraph: { title: 'Health insurance for foreigners in Spain | VPI', description: 'Health insurance guidance for studies, visas, residence and renewals in Spain.', url: 'https://valentinproteccionintegral.com/en/foreigners', locale: 'en_GB', type: 'website' },
};

export default async function EnglishForeigners({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'en') notFound();
  return <ExtranjerosPageView locale="en" />;
}

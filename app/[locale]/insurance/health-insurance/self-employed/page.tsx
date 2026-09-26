import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Health insurance for self-employed professionals | Valentín Protección Integral',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://valentinproteccionintegral.com/en/business/health-insurance' },
};

export default async function LegacySelfEmployedHealthPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'en') notFound();
  permanentRedirect('/en/business/health-insurance');
}

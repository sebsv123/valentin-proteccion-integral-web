import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { HomePageView, pilotContent } from '@/components/i18n-pilot-pages';
import { routing } from '@/i18n/routing';

export async function generateStaticParams() { return routing.locales.map((locale) => ({ locale })); }

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Clear insurance guidance | Valentín Protección Integral', description: 'Clear, personal insurance guidance from Valentín Protección Integral.', alternates: { canonical: 'https://valentinproteccionintegral.com/en', languages: { es: 'https://valentinproteccionintegral.com', en: 'https://valentinproteccionintegral.com/en', 'x-default': 'https://valentinproteccionintegral.com' } }, openGraph: { locale: 'en_GB', url: 'https://valentinproteccionintegral.com/en', title: 'Clear insurance guidance | Valentín Protección Integral', description: 'Clear, personal insurance guidance from Valentín Protección Integral.', type: 'website' } };
}

export default async function PilotHomeRoute({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (locale !== 'en') notFound(); return <HomePageView content={pilotContent.en.home} locale="en" />; }

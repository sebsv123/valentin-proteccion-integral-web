import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { HomePageView } from '@/app/page';
import { routing } from '@/i18n/routing';
import { getHomeContent } from '@/components/home-content';

export async function generateStaticParams() { return routing.locales.map((locale) => ({ locale })); }

export async function generateMetadata(): Promise<Metadata> {
  const content = getHomeContent('en');
  return { title: content.meta.title, description: content.meta.description, alternates: { canonical: 'https://valentinproteccionintegral.com/en', languages: { es: 'https://valentinproteccionintegral.com', en: 'https://valentinproteccionintegral.com/en', 'x-default': 'https://valentinproteccionintegral.com' } }, openGraph: { locale: 'en_GB', url: 'https://valentinproteccionintegral.com/en', title: content.meta.ogTitle, description: content.meta.ogDescription, type: 'website' } };
}

export default async function PilotHomeRoute({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (locale !== 'en') notFound(); return <HomePageView locale="en" />; }

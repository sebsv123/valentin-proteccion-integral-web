import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { InternationalPageView, pilotContent } from '@/components/i18n-pilot-pages';

export const metadata: Metadata = { title: 'VPI International | Prepare your next destination', description: 'Insurance guidance from Spain with local specialists for your next destination.', alternates: { canonical: 'https://valentinproteccionintegral.com/en/international', languages: { es: 'https://valentinproteccionintegral.com/internacional', en: 'https://valentinproteccionintegral.com/en/international', 'x-default': 'https://valentinproteccionintegral.com/internacional' } }, openGraph: { locale: 'en_GB', url: 'https://valentinproteccionintegral.com/en/international', title: 'VPI International', description: 'Prepare your next destination with VPI.', type: 'website' } };

export default async function PilotInternationalRoute({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (locale !== 'en') notFound(); return <InternationalPageView content={pilotContent.en.international} locale="en" />; }

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PeruPageView, pilotContent } from '@/components/i18n-pilot-pages';

export const metadata: Metadata = { title: 'Peru, Spain and international mobility | VPI', description: 'Guidance for visas and mobility between Peru, Spain and other destinations.', alternates: { canonical: 'https://valentinproteccionintegral.com/en/international/peru', languages: { es: 'https://valentinproteccionintegral.com/internacional/peru', en: 'https://valentinproteccionintegral.com/en/international/peru', 'x-default': 'https://valentinproteccionintegral.com/internacional/peru' } }, openGraph: { locale: 'en_GB', url: 'https://valentinproteccionintegral.com/en/international/peru', title: 'Peru, Spain and international mobility | VPI', description: 'Guidance for visas and mobility between Peru, Spain and other destinations.', type: 'article' } };

export default async function PilotPeruRoute({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (locale !== 'en') notFound(); return <PeruPageView content={pilotContent.en.peru} locale="en" />; }

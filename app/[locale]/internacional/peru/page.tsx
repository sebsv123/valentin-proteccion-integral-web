import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PeruPageView } from '@/app/internacional/peru/PeruPageView';
import { getPeruMetadata, peruContent } from '@/app/internacional/peru/peru-content';

export const metadata: Metadata = getPeruMetadata('en');

export default async function PilotPeruRoute({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (locale !== 'en') notFound(); return <PeruPageView content={peruContent.en} locale="en" />; }

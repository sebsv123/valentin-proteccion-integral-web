import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { InternationalPageView } from '@/app/internacional/InternationalPageView';
import { getInternationalMetadata, internationalContent } from '@/app/internacional/international-content';

export const metadata: Metadata = getInternationalMetadata('en');

export default async function PilotInternationalRoute({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (locale !== 'en') notFound(); return <InternationalPageView content={internationalContent.en} locale="en" />; }

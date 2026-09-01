import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { AustraliaPageView } from '@/app/internacional/australia/page';
import { australiaContent, getAustraliaMetadata } from '@/app/internacional/australia/australia-content';
export const metadata: Metadata = getAustraliaMetadata('en');
export default async function AustraliaEnglishRoute({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (locale !== 'en') notFound(); return <AustraliaPageView content={australiaContent.en} locale="en" />; }

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { IndiaPageView } from '@/app/internacional/india/page';
import { getIndiaMetadata, indiaContent } from '@/app/internacional/india/india-content';
export const metadata: Metadata = getIndiaMetadata('en');
export default async function IndiaEnglishRoute({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (locale !== 'en') notFound(); return <IndiaPageView content={indiaContent.en} locale="en" />; }

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { KoreaPageView } from '@/app/internacional/corea-del-sur/page';
import { getKoreaMetadata } from '@/app/internacional/corea-del-sur/corea-content';
export const metadata: Metadata = getKoreaMetadata('en');
export default async function SouthKoreaEnglishRoute({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (locale !== 'en') notFound(); return <KoreaPageView locale="en" />; }

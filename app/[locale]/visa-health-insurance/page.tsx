import type { AttributionSearchParams } from '@/lib/commercial-attribution';
import { notFound } from 'next/navigation';
import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('hub', 'en');
export default async function VisaHealthHubPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<AttributionSearchParams> }) { const { locale } = await params; if (locale !== 'en') notFound(); return <VisaHealthKnowledgePage pageKey="hub" locale="en" attribution={await searchParams} />; }

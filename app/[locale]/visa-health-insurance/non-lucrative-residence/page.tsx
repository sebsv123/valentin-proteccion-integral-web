import { getBlueprintPartner } from '@/lib/blueprint-referral';
import { notFound } from 'next/navigation';
import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('nonLucrative', 'en');
export default async function NonLucrativeHealthPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ partner?: string | string[] }> }) { const { locale } = await params; if (locale !== 'en') notFound(); const query = await searchParams; return <VisaHealthKnowledgePage pageKey="nonLucrative" locale="en" partner={getBlueprintPartner(query.partner)} />; }

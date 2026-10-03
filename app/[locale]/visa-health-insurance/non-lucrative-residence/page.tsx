import { notFound } from 'next/navigation';
import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('nonLucrative', 'en');
export default async function NonLucrativeHealthPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (locale !== 'en') notFound(); return <VisaHealthKnowledgePage pageKey="nonLucrative" locale="en" />; }

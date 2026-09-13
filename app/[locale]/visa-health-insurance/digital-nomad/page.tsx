import { notFound } from 'next/navigation';
import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('digitalNomad', 'en');
export default async function DigitalNomadHealthPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (locale !== 'en') notFound(); return <VisaHealthKnowledgePage pageKey="digitalNomad" locale="en" />; }

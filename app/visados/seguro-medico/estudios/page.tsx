import type { AttributionSearchParams } from '@/lib/commercial-attribution';
import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('student', 'es');
export default async function StudentVisaHealthPage({ searchParams }: { searchParams: Promise<AttributionSearchParams> }) { return <VisaHealthKnowledgePage pageKey="student" locale="es" attribution={await searchParams} />; }

import type { AttributionSearchParams } from '@/lib/commercial-attribution';
import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('nonLucrative', 'es');
export default async function NonLucrativeHealthPage({ searchParams }: { searchParams: Promise<AttributionSearchParams> }) { return <VisaHealthKnowledgePage pageKey="nonLucrative" locale="es" attribution={await searchParams} />; }

import type { AttributionSearchParams } from '@/lib/commercial-attribution';
import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('tracker', 'es');
export default async function ConsulateTrackerPage({ searchParams }: { searchParams: Promise<AttributionSearchParams> }) { return <VisaHealthKnowledgePage pageKey="tracker" locale="es" attribution={await searchParams} />; }

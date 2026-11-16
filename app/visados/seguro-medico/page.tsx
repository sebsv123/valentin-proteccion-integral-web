import type { AttributionSearchParams } from '@/lib/commercial-attribution';
import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('hub', 'es');
export default async function VisaHealthHubPage({ searchParams }: { searchParams: Promise<AttributionSearchParams> }) { return <VisaHealthKnowledgePage pageKey="hub" locale="es" attribution={await searchParams} />; }

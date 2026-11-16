import type { AttributionSearchParams } from '@/lib/commercial-attribution';
import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('digitalNomad', 'es');
export default async function DigitalNomadHealthPage({ searchParams }: { searchParams: Promise<AttributionSearchParams> }) { return <VisaHealthKnowledgePage pageKey="digitalNomad" locale="es" attribution={await searchParams} />; }

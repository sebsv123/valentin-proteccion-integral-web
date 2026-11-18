import { getBlueprintPartner } from '@/lib/blueprint-referral';
import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('tracker', 'es');
export default async function ConsulateTrackerPage({ searchParams }: { searchParams: Promise<{ partner?: string | string[] }> }) { const query = await searchParams; return <VisaHealthKnowledgePage pageKey="tracker" locale="es" partner={getBlueprintPartner(query.partner)} />; }

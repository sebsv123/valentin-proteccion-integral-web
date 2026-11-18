import { getBlueprintPartner } from '@/lib/blueprint-referral';
import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('hub', 'es');
export default async function VisaHealthHubPage({ searchParams }: { searchParams: Promise<{ partner?: string | string[] }> }) { const query = await searchParams; return <VisaHealthKnowledgePage pageKey="hub" locale="es" partner={getBlueprintPartner(query.partner)} />; }

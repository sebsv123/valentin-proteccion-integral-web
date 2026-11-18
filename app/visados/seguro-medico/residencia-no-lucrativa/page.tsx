import { getBlueprintPartner } from '@/lib/blueprint-referral';
import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('nonLucrative', 'es');
export default async function NonLucrativeHealthPage({ searchParams }: { searchParams: Promise<{ partner?: string | string[] }> }) { const query = await searchParams; return <VisaHealthKnowledgePage pageKey="nonLucrative" locale="es" partner={getBlueprintPartner(query.partner)} />; }

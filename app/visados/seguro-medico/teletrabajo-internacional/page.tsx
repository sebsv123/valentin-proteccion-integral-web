import { getBlueprintPartner } from '@/lib/blueprint-referral';
import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('digitalNomad', 'es');
export default async function DigitalNomadHealthPage({ searchParams }: { searchParams: Promise<{ partner?: string | string[] }> }) { const query = await searchParams; return <VisaHealthKnowledgePage pageKey="digitalNomad" locale="es" partner={getBlueprintPartner(query.partner)} />; }

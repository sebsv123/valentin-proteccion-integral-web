import { getBlueprintPartner } from '@/lib/blueprint-referral';
import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('student', 'es');
export default async function StudentVisaHealthPage({ searchParams }: { searchParams: Promise<{ partner?: string | string[] }> }) { const query = await searchParams; return <VisaHealthKnowledgePage pageKey="student" locale="es" partner={getBlueprintPartner(query.partner)} />; }

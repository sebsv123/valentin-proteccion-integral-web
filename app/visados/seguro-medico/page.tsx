import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('hub', 'es');
export default function VisaHealthHubPage() { return <VisaHealthKnowledgePage pageKey="hub" locale="es" />; }

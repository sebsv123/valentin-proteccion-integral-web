import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('tracker', 'es');
export default function ConsulateTrackerPage() { return <VisaHealthKnowledgePage pageKey="tracker" locale="es" />; }

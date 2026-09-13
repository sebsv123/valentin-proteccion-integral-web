import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('nonLucrative', 'es');
export default function NonLucrativeHealthPage() { return <VisaHealthKnowledgePage pageKey="nonLucrative" locale="es" />; }

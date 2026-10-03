import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('digitalNomad', 'es');
export default function DigitalNomadHealthPage() { return <VisaHealthKnowledgePage pageKey="digitalNomad" locale="es" />; }

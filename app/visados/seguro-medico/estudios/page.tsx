import { VisaHealthKnowledgePage, getVisaKnowledgeMetadata } from '@/components/visa-health-knowledge-page';
export const metadata = getVisaKnowledgeMetadata('student', 'es');
export default function StudentVisaHealthPage() { return <VisaHealthKnowledgePage pageKey="student" locale="es" />; }

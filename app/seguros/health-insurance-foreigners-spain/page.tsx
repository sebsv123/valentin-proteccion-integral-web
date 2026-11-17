import { SaludExtranjerosPageView } from '@/app/seguros/salud-extranjeros/page';
export { metadata } from '@/app/[locale]/insurance/health/foreigners/page';

// next.config.ts keeps the existing permanent redirect to the canonical EN route.
// If this component is rendered directly, it shares the same reviewed content.
export const dynamic = 'force-static';
export default function HistoricalEnglishForeignersPage() {
  return <SaludExtranjerosPageView locale="en" />;
}

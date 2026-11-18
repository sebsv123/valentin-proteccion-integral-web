import { getBlueprintPartner } from '@/lib/blueprint-referral';
import type { Metadata } from 'next';
import { ForeignersIntakeStart } from '@/components/extranjeros/foreigners-intake-start';
import { getForeignersIntakeUrl } from '@/lib/foreigners-intake';
import { redirect } from 'next/navigation';

export const metadata: Metadata = { title: 'Iniciar consulta | VPI', robots: { index: false, follow: false } };

export default async function StartPage({ searchParams }: { searchParams: Promise<{ partner?: string }> }) {
  const { partner } = await searchParams;
  const destination = getForeignersIntakeUrl('es', undefined, getBlueprintPartner(partner));
  if (destination) redirect(destination);
  return <ForeignersIntakeStart locale="es" partner={partner} />;
}

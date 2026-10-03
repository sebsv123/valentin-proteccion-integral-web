import type { Metadata } from 'next';
import { ForeignersIntakeStart } from '@/components/foreigners-intake-start';
import { getForeignersIntakeUrl } from '@/lib/foreigners-intake';
import { redirect } from 'next/navigation';

export const metadata: Metadata = { title: 'Iniciar consulta | VPI', robots: { index: false, follow: false } };

export default async function StartPage({ searchParams }: { searchParams: Promise<{ partner?: string }> }) {
  const { partner } = await searchParams;
  const destination = getForeignersIntakeUrl('es');
  if (destination) redirect(destination);
  return <ForeignersIntakeStart locale="es" partner={partner} />;
}

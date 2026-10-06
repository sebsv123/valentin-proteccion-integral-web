import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { ForeignersIntakeStart } from '@/components/extranjeros/foreigners-intake-start';
import { getForeignersIntakeUrl, getForeignersSituationFromSlug } from '@/lib/foreigners-intake';

export const metadata: Metadata = { title: 'Iniciar consulta | VPI', robots: { index: false, follow: false } };

export default async function StartSituationPage({ params, searchParams }: { params: Promise<{ situation: string }>; searchParams: Promise<{ partner?: string }> }) {
  const { situation: slug } = await params;
  const { partner } = await searchParams;
  const situation = getForeignersSituationFromSlug('es', slug);
  if (!situation) notFound();

  const destination = getForeignersIntakeUrl('es', situation);
  if (destination) redirect(destination);
  return <ForeignersIntakeStart locale="es" situation={situation} partner={partner} />;
}

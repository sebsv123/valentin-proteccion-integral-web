import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { ForeignersIntakeStart } from '@/components/extranjeros/foreigners-intake-start';
import { getForeignersIntakeUrl, getForeignersSituationFromSlug } from '@/lib/foreigners-intake';

export const metadata: Metadata = { title: 'Start your enquiry | VPI', robots: { index: false, follow: false } };

export default async function EnglishStartSituationPage({ params, searchParams }: { params: Promise<{ locale: string; situation: string }>; searchParams: Promise<{ partner?: string }> }) {
  const { locale, situation: slug } = await params;
  if (locale !== 'en') notFound();
  const { partner } = await searchParams;
  const situation = getForeignersSituationFromSlug('en', slug);
  if (!situation) notFound();

  const destination = getForeignersIntakeUrl('en', situation);
  if (destination) redirect(destination);
  return <ForeignersIntakeStart locale="en" situation={situation} partner={partner} />;
}

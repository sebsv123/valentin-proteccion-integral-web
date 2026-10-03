import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { ForeignersIntakeStart } from '@/components/foreigners-intake-start';
import { getForeignersIntakeUrl } from '@/lib/foreigners-intake';

export const metadata: Metadata = { title: 'Start your enquiry | VPI', robots: { index: false, follow: false } };

export default async function EnglishStartPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ partner?: string }> }) {
  const { locale } = await params;
  if (locale !== 'en') notFound();
  const { partner } = await searchParams;
  const destination = getForeignersIntakeUrl('en');
  if (destination) redirect(destination);
  return <ForeignersIntakeStart locale="en" partner={partner} />;
}

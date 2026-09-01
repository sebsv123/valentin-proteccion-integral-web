import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContactoPageView } from '@/app/contacto/page';

export const metadata: Metadata = {
  title: 'Contact — Insurance advice in Madrid | VPI',
  description: 'Contact Valentín Protección Integral for clear, personal insurance guidance in Madrid.',
  alternates: { canonical: 'https://valentinproteccionintegral.com/en/contact', languages: { es: 'https://valentinproteccionintegral.com/contacto', en: 'https://valentinproteccionintegral.com/en/contact', 'x-default': 'https://valentinproteccionintegral.com/contacto' } },
  openGraph: { title: 'Contact — Insurance advice in Madrid | VPI', description: 'Contact Valentín Protección Integral for clear, personal insurance guidance in Madrid.', url: 'https://valentinproteccionintegral.com/en/contact', locale: 'en_GB', type: 'website' },
};

export default async function EnglishContact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'en') notFound();
  return <ContactoPageView locale="en" />;
}

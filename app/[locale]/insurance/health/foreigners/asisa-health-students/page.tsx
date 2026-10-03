import { notFound } from 'next/navigation';
import { AsisaForeignersProductPage, getAsisaProductMetadata } from '@/components/asisa-foreigners-product-page';

export const metadata = getAsisaProductMetadata('students', 'en');

export default async function AsisaHealthStudentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'en') notFound();
  return <AsisaForeignersProductPage productKey="students" locale="en" />;
}

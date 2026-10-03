import { AsisaForeignersProductPage, getAsisaProductMetadata } from '@/components/asisa-foreigners-product-page';

export const metadata = getAsisaProductMetadata('students', 'es');
export const dynamic = 'force-static';

export default function AsisaHealthStudentsPage() {
  return <AsisaForeignersProductPage productKey="students" locale="es" />;
}

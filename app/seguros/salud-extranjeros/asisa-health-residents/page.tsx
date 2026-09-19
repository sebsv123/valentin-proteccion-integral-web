import { AsisaForeignersProductPage, getAsisaProductMetadata } from '@/components/asisa-foreigners-product-page';

export const metadata = getAsisaProductMetadata('residents', 'es');
export const dynamic = 'force-static';

export default function AsisaHealthResidentsPage() {
  return <AsisaForeignersProductPage productKey="residents" locale="es" />;
}

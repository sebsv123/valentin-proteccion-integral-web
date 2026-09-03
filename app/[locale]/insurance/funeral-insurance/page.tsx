import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductPageView } from '@/app/seguros/[slug]/page';
import { products } from '@/lib/products';
import { getLocalizedProduct, localizedProductPath } from '@/lib/product-locales';

const product = products.find((item) => item.slug === 'decesos')!;
const english = getLocalizedProduct(product, 'en');
const url = 'https://valentinproteccionintegral.com/en/insurance/funeral-insurance';
const esUrl = 'https://valentinproteccionintegral.com/seguros/decesos';

export const metadata: Metadata = { title: english.metaTitle, description: english.metaDescription, alternates: { canonical: url, languages: { es: esUrl, en: url, 'x-default': esUrl } }, openGraph: { title: english.metaTitle, description: english.metaDescription, url, locale: 'en_GB', type: 'website' } };

export default async function EnglishFuneral({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (locale !== 'en') notFound(); return <ProductPageView slug="decesos" locale="en" />; }

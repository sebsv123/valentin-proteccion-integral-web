import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductSubpagePageView } from '@/app/seguros/[slug]/[subslug]/page';
import { subpages } from '@/lib/products';
import { getLocalizedSubpage } from '@/lib/product-locales';

const subpage = subpages.find((item) => item.parent === 'mascotas' && item.slug === 'responsabilidad-civil')!;
const english = getLocalizedSubpage(subpage, 'en');
const url = 'https://valentinproteccionintegral.com/en/insurance/pet-insurance/civil-liability';
const esUrl = 'https://valentinproteccionintegral.com/seguros/mascotas/responsabilidad-civil';

export const metadata: Metadata = { title: english.metaTitle, description: english.metaDescription, alternates: { canonical: url, languages: { es: esUrl, en: url, 'x-default': esUrl } }, openGraph: { title: english.metaTitle, description: english.metaDescription, url, locale: 'en_GB', type: 'website' } };

export default async function EnglishPetCivilLiability({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (locale !== 'en') notFound(); return <ProductSubpagePageView parent="mascotas" subpage={subpage} locale="en" />; }

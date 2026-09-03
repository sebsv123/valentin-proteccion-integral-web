import type { Metadata } from 'next';
import { LocalizedCorporatePage } from '@/components/localized-info-pages';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'About Us | Valentín Protección Integral', description: 'Meet the people behind Valentín Protección Integral.', alternates: { canonical: 'https://valentinproteccionintegral.com/en/about-us', languages: { es: 'https://valentinproteccionintegral.com/sobre-nosotros', en: 'https://valentinproteccionintegral.com/en/about-us', 'x-default': 'https://valentinproteccionintegral.com/sobre-nosotros' } }, openGraph: { title: 'About Us | Valentín Protección Integral', description: 'Meet the people behind Valentín Protección Integral.', url: 'https://valentinproteccionintegral.com/en/about-us', locale: 'en_GB', type: 'website' } };
export default function Page() { return <LocalizedCorporatePage page="about-us" locale="en" />; }

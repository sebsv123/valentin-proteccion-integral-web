import type { Metadata } from 'next';
import { LocalizedReviewsPage } from '@/components/localized-info-pages';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Reviews | Valentín Protección Integral', description: 'Real experiences shared by clients of Valentín Protección Integral.', alternates: { canonical: 'https://valentinproteccionintegral.com/en/reviews', languages: { es: 'https://valentinproteccionintegral.com/opiniones', en: 'https://valentinproteccionintegral.com/en/reviews', 'x-default': 'https://valentinproteccionintegral.com/opiniones' } }, openGraph: { title: 'Reviews | Valentín Protección Integral', description: 'Real client experiences.', url: 'https://valentinproteccionintegral.com/en/reviews', locale: 'en_GB', type: 'website' } };
export default function Page() { return <LocalizedReviewsPage locale="en" />; }

import type { Metadata } from 'next';
import { LocalizedLegalPage } from '@/components/localized-info-pages';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Cookie Policy | Valentín Protección Integral', description: 'Information about cookies used on valentinproteccionintegral.com.', robots: { index: false, follow: false }, alternates: { canonical: 'https://valentinproteccionintegral.com/en/cookies', languages: { es: 'https://valentinproteccionintegral.com/cookies', en: 'https://valentinproteccionintegral.com/en/cookies', 'x-default': 'https://valentinproteccionintegral.com/cookies' } } };
export default function Page() { return <LocalizedLegalPage page="cookies" locale="en" />; }

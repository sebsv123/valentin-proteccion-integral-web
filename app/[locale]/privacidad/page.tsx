import type { Metadata } from 'next';
import { LocalizedLegalPage } from '@/components/localized-info-pages';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Privacy Policy | Valentín Protección Integral', description: 'Privacy policy and personal data processing under the GDPR.', robots: { index: false, follow: false }, alternates: { canonical: 'https://valentinproteccionintegral.com/en/privacy', languages: { es: 'https://valentinproteccionintegral.com/privacidad', en: 'https://valentinproteccionintegral.com/en/privacy', 'x-default': 'https://valentinproteccionintegral.com/privacidad' } } };
export default function Page() { return <LocalizedLegalPage page="privacy" locale="en" />; }

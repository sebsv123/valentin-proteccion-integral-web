import type { Metadata } from 'next';
import { LocalizedLegalPage } from '@/components/localized-info-pages';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Legal Notice | Valentín Protección Integral', description: 'Legal notice and website owner information.', robots: { index: false, follow: false }, alternates: { canonical: 'https://valentinproteccionintegral.com/en/legal-notice', languages: { es: 'https://valentinproteccionintegral.com/aviso-legal', en: 'https://valentinproteccionintegral.com/en/legal-notice', 'x-default': 'https://valentinproteccionintegral.com/aviso-legal' } } };
export default function Page() { return <LocalizedLegalPage page="legal-notice" locale="en" />; }

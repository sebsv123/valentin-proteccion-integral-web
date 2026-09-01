import type { Metadata } from 'next';
import { LocalizedCorporatePage } from '@/components/localized-info-pages';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'How We Help | Valentín Protección Integral', description: 'Clear, personal insurance guidance from Valentín Protección Integral.', alternates: { canonical: 'https://valentinproteccionintegral.com/en/how-we-help', languages: { es: 'https://valentinproteccionintegral.com/como-te-ayudamos', en: 'https://valentinproteccionintegral.com/en/how-we-help', 'x-default': 'https://valentinproteccionintegral.com/como-te-ayudamos' } }, openGraph: { title: 'How We Help | Valentín Protección Integral', description: 'Clear, personal insurance guidance.', url: 'https://valentinproteccionintegral.com/en/how-we-help', locale: 'en_GB', type: 'website' } };
export default function Page() { return <LocalizedCorporatePage page="how-we-help" locale="en" />; }

import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import { site } from '@/lib/products';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading', weight: ['600', '700', '800'], display: 'swap', preload: true });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-body', weight: ['400', '500', '600', '700'], display: 'swap', preload: true });

const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
// Meta Pixel ID desde variable de entorno — evita hardcode en producción
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

import { BackgroundWrapper } from '@/components/background-wrapper';

import { WebVitals } from "@/components/web-vitals";
import { CookieBanner } from "@/components/cookie-banner";
import { ChatWidget } from "@/components/ChatWidget";
import { TrackingScripts } from "@/components/tracking-scripts";

import SchemaLocalBusiness from '@/components/seo/schema-local-business';
import SchemaPersons from '@/components/seo/schema-persons';

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  manifest: '/manifest.json',
  alternates: {
    // canonical se define en cada página individualmente
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: site.title,
    description: site.description,
    type: 'website',
    url: site.domain,
    siteName: site.name,
    locale: 'es_ES',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    // title y description se definen en cada página individualmente
    images: ['/og-image.webp'],
  },
  other: {
    'facebook-domain-verification': 's7ts2da9rfedyxqu70u6zm5hbkhsj2',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Preconnect to Google Fonts CDN for faster font loading */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preconnect only to origins that load immediately */}
        <link rel="ai-content-declaration" href="/llms.txt" />
        <link rel="ai-content-declaration" href="/llms-full.txt" />
      </head>
      <body className={`${montserrat.variable} ${playfair.variable} antialiased font-sans pb-16 sm:pb-0`}>
        <BackgroundWrapper />
        <SchemaLocalBusiness />
        <SchemaPersons />
        {process.env.NODE_ENV === 'development' && <WebVitals />}
        {children}
        <CookieBanner />
        <ChatWidget />
        <TrackingScripts clarityId={clarityId} metaPixelId={META_PIXEL_ID} />
      </body>
    </html>
  );
}

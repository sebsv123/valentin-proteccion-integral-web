import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Script from 'next/script';
import { SocialProof } from '@/components/social-proof';
import { site } from '@/lib/products';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading', weight: ['600', '700', '800'], display: 'swap', preload: true });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-body', weight: ['400', '500', '600', '700'], display: 'swap', preload: true });

const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
const GA_ID = 'G-TG4JSVQR5Q';
const META_PIXEL_ID = '1307875004562255';

import { BackgroundWrapper } from "@/components/background-wrapper";
import { ClickSpark } from "@/components/ui/click-spark";
import { WebVitals } from "@/components/web-vitals";
import { Analytics } from "@vercel/analytics/react";

import SchemaLocalBusiness from '@/components/seo/schema-local-business';
import SchemaPersons from '@/components/seo/schema-persons';
import CustomCursor from '@/components/ui/CustomCursor';

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
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
    title: site.title,
    description: site.description,
    images: ['/og-image.webp'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="ai-content-declaration" href="/llms.txt" />
        <link rel="ai-content-declaration" href="/llms-full.txt" />
        {/* Google Analytics GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body className={`${montserrat.variable} ${playfair.variable} antialiased font-sans`}>
        <BackgroundWrapper />
        <ClickSpark />
        <SchemaLocalBusiness />
        <SchemaPersons />
        <WebVitals />
        <Analytics />
        {children}
        <SocialProof />
        <CustomCursor />
        {clarityId ? (
          <Script id="clarity" strategy="afterInteractive">{`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}</Script>
        ) : null}
      </body>
    </html>
  );
}

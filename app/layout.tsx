import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Script from 'next/script';
import { site } from '@/lib/products';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading', weight: ['600', '700', '800'], display: 'swap', preload: true });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-body', weight: ['400', '500', '600', '700'], display: 'swap', preload: true });

const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
const META_PIXEL_ID = '1307875004562255';

import { BackgroundWrapper } from '@/components/background-wrapper';

import { WebVitals } from "@/components/web-vitals";
import { Analytics } from "@vercel/analytics/react";
import { CookieBanner } from "@/components/cookie-banner";

import SchemaLocalBusiness from '@/components/seo/schema-local-business';
import SchemaPersons from '@/components/seo/schema-persons';

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
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TNB5FR4W"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <BackgroundWrapper />
        <SchemaLocalBusiness />
        <SchemaPersons />
        {process.env.NODE_ENV === 'development' && <WebVitals />}
        <Analytics />
        {children}
        <CookieBanner />
        {/* Deferred tracking scripts - loaded after page is interactive to eliminate TBT */}
        <Script id="deferred-tracking" strategy="afterInteractive">
          {`
            // Load GTM after page is fully loaded
            if (typeof window !== 'undefined') {
              window.addEventListener('load', function() {
                setTimeout(function() {
                  // GTM
                  (function(w,d,s,l,i){
                    w[l]=w[l]||[];
                    w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                    var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                    j.async=true;
                    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                    f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-TNB5FR4W');
                  
                  // Meta Pixel
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
                  
                  // Clarity
                  ${clarityId ? `(function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                  })(window, document, "clarity", "script", "${clarityId}");` : ''}
                }, 100);
              });
            }
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
      </body>
    </html>
  );
}

"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

type ConsentState = "accepted" | "rejected" | null;

type TrackingScriptsProps = {
  clarityId?: string;
  metaPixelId?: string;
};

function readConsent(): ConsentState {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem("cookie-consent");
  return value === "accepted" || value === "rejected" ? value : null;
}

export function TrackingScripts({ clarityId, metaPixelId }: TrackingScriptsProps) {
  const [consent, setConsent] = useState<ConsentState>(null);

  useEffect(() => {
    setConsent(readConsent());

    const handleStorage = () => setConsent(readConsent());
    const handleConsentUpdate = () => setConsent(readConsent());

    window.addEventListener("storage", handleStorage);
    window.addEventListener("cookie-consent-updated", handleConsentUpdate);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("cookie-consent-updated", handleConsentUpdate);
    };
  }, []);

  if (consent !== "accepted") return null;

  return (
    <>
      <Analytics />
      <Script id="gtm-consented" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TNB5FR4W');
        `}
      </Script>

      {metaPixelId ? (
        <Script id="meta-pixel-consented" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      ) : null}

      {clarityId ? (
        <Script id="clarity-consented" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      ) : null}
    </>
  );
}

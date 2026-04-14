'use client'

import Script from 'next/script'

interface GoogleReviewsWidgetProps {
  title?: string;
  subtitle?: string;
}

export default function GoogleReviewsWidget({ title, subtitle }: GoogleReviewsWidgetProps) {
  return (
    <section className="section-pad pt-0">
      <div className="container-shell">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {subtitle && <p className="kicker">{subtitle}</p>}
            {title && <h2 className="mt-4 section-title mx-auto max-w-3xl">{title}</h2>}
          </div>
        )}
        <div className="sk-ww-google-reviews" data-embed-id="25672562" />
        <Script
          src="https://widgets.sociablekit.com/google-reviews/widget.js"
          strategy="lazyOnload"
        />
      </div>
    </section>
  )
}

'use client'

import Script from 'next/script'

export default function GoogleReviewsWidget() {
  return (
    <>
      <div className="sk-ww-google-reviews" data-embed-id="25672562" />
      <Script
        src="https://widgets.sociablekit.com/google-reviews/widget.js"
        strategy="lazyOnload"
      />
    </>
  )
}

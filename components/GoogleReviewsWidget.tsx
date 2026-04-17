'use client'

import { useEffect, useRef, useState } from 'react'

interface GoogleReviewsWidgetProps {
  title?: string;
  subtitle?: string;
}

export default function GoogleReviewsWidget({ title, subtitle }: GoogleReviewsWidgetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!loaded) return
    const script = document.createElement('script')
    script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js'
    script.async = true
    document.body.appendChild(script)
  }, [loaded])

  return (
    <section className="section-pad pt-0">
      <div className="container-shell">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {subtitle && <p className="kicker">{subtitle}</p>}
            {title && <h2 className="mt-4 section-title mx-auto max-w-3xl">{title}</h2>}
          </div>
        )}
        <div ref={ref}>
          {loaded ? (
            <div className="sk-ww-google-reviews" data-embed-id="25672562" />
          ) : (
            <div className="h-64 animate-pulse bg-gray-100 rounded-xl" />
          )}
        </div>
      </div>
    </section>
  )
}

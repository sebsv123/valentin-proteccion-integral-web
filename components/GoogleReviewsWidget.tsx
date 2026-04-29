import ReviewsCarouselWrapper from './ReviewsCarouselWrapper'

interface GoogleReviewsWidgetProps {
  title?: string
  subtitle?: string
}

async function getReviews() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://valentinproteccionintegral.com'
    const res = await fetch(`${baseUrl}/api/reviews`, {
      next: { revalidate: 86400 },
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export default async function GoogleReviewsWidget({ title, subtitle }: GoogleReviewsWidgetProps) {
  const data = await getReviews()

  return (
    <section className="section-pad pt-0">
      <div className="container-shell">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {subtitle && <p className="kicker">{subtitle}</p>}
            {title && <h2 className="mt-4 section-title mx-auto max-w-3xl">{title}</h2>}
          </div>
        )}
        {data?.reviews?.length > 0 ? (
          <ReviewsCarouselWrapper
            reviews={data.reviews}
            rating={data.rating}
            user_ratings_total={data.user_ratings_total}
          />
        ) : (
          <div className="text-center py-12">
            <a
              href="https://search.google.com/local/reviews?placeid=ChIJM_JBwmqbQQ0R-9vVnwTsuRA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2"
            >
              Ver nuestras opiniones en Google →
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

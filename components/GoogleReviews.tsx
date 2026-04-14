import { Star } from 'lucide-react';
import Image from 'next/image';

const PLACE_ID = 'ChIJM_JBwmqbQQ0R-9vVnwTsuRA';
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

interface GoogleReview {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: {
    text: string;
  };
  authorAttribution: {
    displayName: string;
    photoUri: string;
  };
}

interface PlaceData {
  displayName: {
    text: string;
  };
  rating: number;
  userRatingCount: number;
  reviews: GoogleReview[];
}

async function getGoogleReviews(): Promise<PlaceData | null> {
  if (!API_KEY) {
    console.warn('Google Places API Key not found');
    return null;
  }

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'displayName,rating,userRatingCount,reviews',
      },
      next: { revalidate: 3600 }, // Caché de 1 hora
    });

    if (!res.ok) {
      throw new Error('Failed to fetch Google Reviews');
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    return null;
  }
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.round(rating) ? 'fill-[#f97316] text-[#f97316]' : 'text-gray-200'
          }`}
        />
      ))}
    </div>
  );
}

export default async function GoogleReviews() {
  const data = await getGoogleReviews();

  if (!data) return null;

  const { rating, userRatingCount, reviews } = data;
  const sortedReviews = reviews ? [...reviews].sort((a, b) => b.rating - a.rating).slice(0, 5) : [];

  return (
    <section className="section-pad bg-white">
      <div className="container-shell">
        <div className="soft-card p-8 md:p-12 shadow-sm border border-gray-100">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div>
              <p className="kicker">Opiniones reales</p>
              <div className="mt-3 flex items-center gap-5">
                <span className="font-heading text-6xl font-extrabold text-[var(--blue-deep)]">
                  {rating.toFixed(1).replace('.', ',')}
                </span>
                <div>
                  <StarRating rating={rating} />
                  <p className="mt-1 text-sm text-[var(--muted)] font-medium">
                    {userRatingCount} reseñas en Google · <span className="text-[#34A853] font-bold">Reseñas Verificadas</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-gray-50 px-6 py-4 rounded-3xl border border-gray-100">
              <div className="h-10 w-10 relative">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <p className="text-sm font-bold text-[var(--blue-deep)]">Google Business Profile</p>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedReviews.map((review, i) => (
              <div key={i} className="flex flex-col h-full bg-white rounded-3xl p-6 border border-gray-100 hover:border-[var(--blue-deep)]/20 hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gray-100 shrink-0">
                    <Image 
                      src={review.authorAttribution.photoUri} 
                      alt={review.authorAttribution.displayName}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-bold text-[var(--blue-deep)] truncate">{review.authorAttribution.displayName}</p>
                    <p className="text-xs text-[var(--muted)]">{review.relativePublishTimeDescription}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <StarRating rating={review.rating} />
                </div>

                <p className="text-sm leading-8 text-[var(--muted)] flex-1 italic">
                  "{review.text.text.length > 200 ? `${review.text.text.substring(0, 200)}...` : review.text.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
            <a 
              href={`https://search.google.com/local/reviews?placeid=${PLACE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Leer todas las reseñas en Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

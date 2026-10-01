import 'server-only';

const PLACE_ID = 'ChIJM_JBwmqbQQ0R-9vVnwTsuRA';

export type GoogleReviewsData = {
  reviews: Array<{
    author_name: string;
    rating: number;
    text: string;
    relative_time_description: string;
    profile_photo_url: string;
  }>;
  rating: number;
  user_ratings_total: number;
};

/**
 * Fetch reviews directly from Google on the server. This avoids a static
 * Preview build self-fetching the Production domain just to render reviews.
 */
export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;

  try {
    const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
    url.searchParams.set('place_id', PLACE_ID);
    url.searchParams.set('fields', 'name,rating,user_ratings_total,reviews');
    url.searchParams.set('language', 'es');
    url.searchParams.set('reviews_sort', 'newest');
    url.searchParams.set('key', apiKey);

    const response = await fetch(url, { next: { revalidate: 86400 } });
    if (!response.ok) return null;

    const upstream = await response.json();
    if (upstream.status !== 'OK') return null;

    const reviews = (upstream.result?.reviews || [])
      .filter((review: { rating: number }) => review.rating >= 4)
      .slice(0, 6)
      .map((review: {
        author_name: string;
        rating: number;
        text: string;
        relative_time_description: string;
        profile_photo_url: string;
      }) => ({
        author_name: review.author_name,
        rating: review.rating,
        text: review.text,
        relative_time_description: review.relative_time_description,
        profile_photo_url: review.profile_photo_url,
      }));

    return {
      reviews,
      rating: upstream.result.rating,
      user_ratings_total: upstream.result.user_ratings_total,
    };
  } catch {
    return null;
  }
}

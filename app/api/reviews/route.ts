import { NextResponse } from 'next/server'

const PLACE_ID = 'ChIJM_JBwmqbQQ0R-9vVnwTsuRA'
const API_KEY = process.env.GOOGLE_PLACES_API_KEY

export const revalidate = 86400 // caché 24h en Vercel

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json({ error: 'Missing API key' }, { status: 500 })
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews&language=es&reviews_sort=newest&key=${API_KEY}`
    const res = await fetch(url, { next: { revalidate: 86400 } })
    const data = await res.json()

    if (data.status !== 'OK') {
      return NextResponse.json({ error: data.status }, { status: 502 })
    }

    const reviews = (data.result.reviews || [])
      .filter((r: { rating: number }) => r.rating >= 4)
      .slice(0, 6)
      .map((r: {
        author_name: string
        rating: number
        text: string
        relative_time_description: string
        profile_photo_url: string
      }) => ({
        author_name: r.author_name,
        rating: r.rating,
        text: r.text,
        relative_time_description: r.relative_time_description,
        profile_photo_url: r.profile_photo_url,
      }))

    return NextResponse.json({
      reviews,
      rating: data.result.rating,
      user_ratings_total: data.result.user_ratings_total,
    })
  } catch {
    return NextResponse.json({ error: 'Fetch failed' }, { status: 500 })
  }
}

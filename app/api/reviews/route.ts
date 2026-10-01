import { NextResponse } from 'next/server'
import { getGoogleReviews } from '@/lib/server/google-reviews'

export const revalidate = 86400 // caché 24h en Vercel

export async function GET() {
  if (!process.env.GOOGLE_PLACES_API_KEY) {
    return NextResponse.json({ error: 'Missing API key' }, { status: 500 })
  }

  const data = await getGoogleReviews()
  if (!data) return NextResponse.json({ error: 'Fetch failed' }, { status: 502 })
  return NextResponse.json(data)
}

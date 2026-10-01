import assert from 'node:assert/strict';
import test from 'node:test';
import { getGoogleReviews } from '../lib/server/google-reviews.ts';

test('Google reviews fail closed without a server API key', async () => {
  const previous = process.env.GOOGLE_PLACES_API_KEY;
  delete process.env.GOOGLE_PLACES_API_KEY;
  try {
    assert.equal(await getGoogleReviews(), null);
  } finally {
    if (previous === undefined) delete process.env.GOOGLE_PLACES_API_KEY;
    else process.env.GOOGLE_PLACES_API_KEY = previous;
  }
});

test('Google reviews response is reduced to the public review contract', async () => {
  const previousKey = process.env.GOOGLE_PLACES_API_KEY;
  const previousFetch = globalThis.fetch;
  process.env.GOOGLE_PLACES_API_KEY = 'synthetic-key';
  globalThis.fetch = async () => new Response(JSON.stringify({
    status: 'OK',
    result: {
      rating: 4.8,
      user_ratings_total: 62,
      reviews: [
        { author_name: 'Client', rating: 5, text: 'Great', relative_time_description: 'today', profile_photo_url: 'https://lh3.googleusercontent.com/avatar=s128' },
        { author_name: 'Low rating', rating: 3, text: 'Skip', relative_time_description: 'today', profile_photo_url: '' },
      ],
    },
  }));
  try {
    assert.deepEqual(await getGoogleReviews(), {
      rating: 4.8,
      user_ratings_total: 62,
      reviews: [{ author_name: 'Client', rating: 5, text: 'Great', relative_time_description: 'today', profile_photo_url: 'https://lh3.googleusercontent.com/avatar=s128' }],
    });
  } finally {
    globalThis.fetch = previousFetch;
    if (previousKey === undefined) delete process.env.GOOGLE_PLACES_API_KEY;
    else process.env.GOOGLE_PLACES_API_KEY = previousKey;
  }
});

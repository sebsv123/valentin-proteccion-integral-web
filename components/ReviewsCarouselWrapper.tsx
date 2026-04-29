'use client';

import dynamic from 'next/dynamic';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url: string;
}

interface ReviewsCarouselWrapperProps {
  reviews: Review[];
  rating: number;
  user_ratings_total: number;
}

// Dynamically import ReviewsCarousel with ssr:false to prevent framer-motion
// from being included in the initial SSR bundle. This reduces TBT significantly.
const ReviewsCarousel = dynamic(
  () => import('./ReviewsCarousel').then(m => m.default),
  { 
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center py-12">
        <div className="animate-pulse flex space-x-4">
          <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
          <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
          <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    )
  }
);

export default function ReviewsCarouselWrapper({ reviews, rating, user_ratings_total }: ReviewsCarouselWrapperProps) {
  return (
    <ReviewsCarousel 
      reviews={reviews} 
      rating={rating} 
      user_ratings_total={user_ratings_total} 
    />
  );
}

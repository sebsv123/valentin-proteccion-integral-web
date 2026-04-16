import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

import GraciasClientPage from './GraciasClientPage';

export default function GraciasPage() {
  return <GraciasClientPage />;
}

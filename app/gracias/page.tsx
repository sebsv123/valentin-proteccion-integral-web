import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gracias — Valentín Protección Integral',
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

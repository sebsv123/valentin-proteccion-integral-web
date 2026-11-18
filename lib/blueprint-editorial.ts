import 'server-only';
import type { Metadata } from 'next';
import { blueprintEditorialDrafts, type EditorialDraft } from './blueprint-editorial-content';

const domain = 'https://valentinproteccionintegral.com';
/** Explicit local-only gate. Even an accidentally set preview flag cannot expose these on Vercel. */
export function getBlueprintEditorialDraft(slug: string) {
  if (process.env.VPI_EDITORIAL_PREVIEW !== '1' || process.env.VERCEL || process.env.VERCEL_ENV) return undefined;
  return blueprintEditorialDrafts.find(post => post.slug === slug);
}

export function editorialMetadata(post: EditorialDraft): Metadata {
  const url = `${domain}/en/blog/${post.slug}`;
  return {
    title: post.metaTitle, description: post.metaDescription,
    robots: { index: false, follow: false, noarchive: true },
    alternates: { canonical: url },
    openGraph: { title: post.metaTitle, description: post.metaDescription, type: 'article', locale: 'en_GB', url, images: [{url: `${domain}${post.socialImage}`, width: 1200, height: 630, alt: post.imageAlt}] },
    twitter: { card: 'summary_large_image', title: post.metaTitle, description: post.metaDescription, images: [`${domain}${post.socialImage}`] },
  };
}

/** No invented publication date or named reviewer. Publication requires a separate approved catalogue change. */
export function editorialSchema(post: EditorialDraft) {
  return {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: post.title, description: post.metaDescription, inLanguage: 'en',
    creativeWorkStatus: 'Draft', dateModified: post.reviewed,
    image: `${domain}${post.socialImage}`,
    mainEntityOfPage: `${domain}/en/blog/${post.slug}`,
    author: { '@type': 'Organization', name: 'VPI editorial team' },
    publisher: { '@type': 'Organization', name: 'Valentín Protección Integral', url: domain, logo: {'@type': 'ImageObject', url: `${domain}/brand/vpi/logo-horizontal.png`} },
    citation: post.sources.map(([, url]) => url),
  };
}

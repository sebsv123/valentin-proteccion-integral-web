import 'server-only';
import type { Metadata } from 'next';
import { getBlogPostBySlug } from './blog-catalog';
import { blueprintEditorialArticles, type EditorialArticleContent } from './blueprint-editorial-content';

const domain = 'https://valentinproteccionintegral.com';
/** Publication is controlled by the shared blog catalogue, with no preview flag. */
export function getBlueprintEditorialPost(slug: string) {
  if (getBlogPostBySlug('en', slug)?.renderer !== 'editorial') return undefined;
  return blueprintEditorialArticles.find(post => post.slug === slug);
}

export function editorialMetadata(post: EditorialArticleContent): Metadata {
  const url = `${domain}/en/blog/${post.slug}`;
  return {
    title: post.metaTitle, description: post.metaDescription,
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: { title: post.metaTitle, description: post.metaDescription, type: 'article', publishedTime: post.published, modifiedTime: post.reviewed, locale: 'en_GB', url, images: [{url: `${domain}${post.socialImage}`, width: 1200, height: 630, alt: post.imageAlt}] },
    twitter: { card: 'summary_large_image', title: post.metaTitle, description: post.metaDescription, images: [`${domain}${post.socialImage}`] },
  };
}

/** Approved publication date and corporate editorial authorship. */
export function editorialSchema(post: EditorialArticleContent) {
  return {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: post.title, description: post.metaDescription, inLanguage: 'en',
    creativeWorkStatus: 'Published', datePublished: post.published, dateModified: post.reviewed,
    image: `${domain}${post.socialImage}`,
    mainEntityOfPage: `${domain}/en/blog/${post.slug}`,
    author: { '@type': 'Organization', name: 'VPI editorial team' },
    publisher: { '@type': 'Organization', name: 'Valentín Protección Integral', url: domain, logo: {'@type': 'ImageObject', url: `${domain}/brand/vpi/logo-horizontal.png`} },
    citation: post.sources.map(([, url]) => url),
  };
}

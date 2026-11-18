import type { Metadata } from 'next';
import { getBlueprintEditorialPost, editorialMetadata, editorialSchema } from '@/lib/blueprint-editorial';
import { EditorialArticle } from '@/components/editorial-article';
import { BlueprintReferralProvider } from '@/components/extranjeros/blueprint-referral';
import { getBlueprintPartner } from '@/lib/blueprint-referral';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { BlogArticle } from '@/components/blog-article';
import { getBlogPostBySlug, getLocalizedRelatedPosts, getPublishedEnglishPosts, toLegacyBlogPost } from '@/lib/blog-catalog';
import { getPexelsImage } from '@/lib/pexels';
import SchemaFAQ from '@/components/seo/schema-faq';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ArticleSchema from '@/components/ArticleSchema';

export const dynamic = 'force-dynamic';

export function generateStaticParams() { return getPublishedEnglishPosts().map((post) => ({ slug: post.slug.en })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  const { slug, locale } = await params;
  if (locale !== 'en') notFound();
  const editorial = locale === 'en' ? getBlueprintEditorialPost(slug) : undefined;
  if (editorial) return editorialMetadata(editorial);
  const entry = getBlogPostBySlug('en', slug); const post = entry && toLegacyBlogPost(entry, 'en');
  if (!entry || !post) return {};
  return { title: post.metaTitle, description: post.metaDescription, alternates: { canonical: `https://valentinproteccionintegral.com/en/blog/${slug}`, languages: { es: `https://valentinproteccionintegral.com/blog/${entry.slug.es}`, en: `https://valentinproteccionintegral.com/en/blog/${slug}`, 'x-default': `https://valentinproteccionintegral.com/blog/${entry.slug.es}` } }, openGraph: { title: post.metaTitle, description: post.metaDescription, type: 'article', locale: 'en_GB', url: `https://valentinproteccionintegral.com/en/blog/${slug}`, images: [{ url: `https://valentinproteccionintegral.com${post.image}`, alt: post.imageAlt }] } };
}

export default async function EnglishBlogArticlePage({ params, searchParams }: { params: Promise<{ slug: string; locale: string }>; searchParams: Promise<{ partner?: string | string[] }> }) {
  const { slug, locale } = await params;
  if (locale !== 'en') notFound();
  const editorial = locale === 'en' ? getBlueprintEditorialPost(slug) : undefined;
  if (editorial) {
    const partner = getBlueprintPartner((await searchParams).partner);
    return <BlueprintReferralProvider partner={partner}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(editorialSchema(editorial)).replace(/</g, '\\u003c') }} />
      <Header /><main><div className="container-shell py-5"><Breadcrumbs items={[{ label: 'Home', href: '/en' }, { label: 'Blog', href: '/en/blog' }, { label: editorial.title }]} /></div><EditorialArticle post={editorial} referred={Boolean(partner)} /></main><Footer />
    </BlueprintReferralProvider>;
  }
  const entry = getBlogPostBySlug('en', slug); const post = entry && toLegacyBlogPost(entry, 'en');
  if (!entry || !post) notFound();
  const imageUrl = post.image.startsWith('/images/') ? post.image : await getPexelsImage(entry.slug.es ?? slug);
  const related = getLocalizedRelatedPosts(entry.id, 'en').map((item) => toLegacyBlogPost(item, 'en')).filter((item): item is NonNullable<typeof item> => Boolean(item));
  return <>
    <BreadcrumbSchema locale="en" items={[{ name: 'Home', url: '/en' }, { name: 'Blog', url: '/en/blog' }, { name: post.title, url: `/en/blog/${slug}` }]} />
    <ArticleSchema title={post.title} description={post.metaDescription} datePublished={post.date} dateModified={post.dateModified} imageUrl={imageUrl.startsWith('http') ? imageUrl : `https://valentinproteccionintegral.com${imageUrl}`} articleUrl={`https://valentinproteccionintegral.com/en/blog/${slug}`} authorUrl="https://valentinproteccionintegral.com/en/about-us" inLanguage="en" />
    {post.faqs && <SchemaFAQ faqs={post.faqs} locale="en" />}
    <Header /><main><div className="container-shell pt-6 md:pt-8"><Breadcrumbs items={[{ label: 'Home', href: '/en' }, { label: 'Blog', href: '/en/blog' }, { label: post.title }]} /></div><BlogArticle post={{ ...post, image: imageUrl }} locale="en" relatedPosts={related} /></main><Footer /><StickyWhatsApp />
  </>;
}

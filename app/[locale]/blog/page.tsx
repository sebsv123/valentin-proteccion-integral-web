import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { BlogGrid } from '@/components/blog-grid';
import { getBlogPosts, toLegacyBlogPost } from '@/lib/blog-catalog';
import { getPexelsImage } from '@/lib/pexels';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';

export const metadata: Metadata = {
  title: 'Insurance Blog · Clear Guides and Advice | Valentín',
  description: 'Clear, practical guides about insurance in Spain, with no jargon or pressure.',
  alternates: { canonical: 'https://valentinproteccionintegral.com/en/blog', languages: { es: 'https://valentinproteccionintegral.com/blog', en: 'https://valentinproteccionintegral.com/en/blog', 'x-default': 'https://valentinproteccionintegral.com/blog' } },
  openGraph: { title: 'Insurance Blog · Clear Guides and Advice | Valentín', description: 'Clear, practical guides about insurance in Spain, with no jargon or pressure.', url: 'https://valentinproteccionintegral.com/en/blog', locale: 'en_GB', type: 'website' },
};

export default async function EnglishBlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'en') notFound();
  const posts = await Promise.all(getBlogPosts('en').map(async (entry) => {
    const post = toLegacyBlogPost(entry, 'en');
    if (!post) return null;
    return { ...post, pexelsImage: await getPexelsImage(entry.slug.es) };
  }));
  const publishedPosts = posts.filter((post): post is NonNullable<typeof post> => Boolean(post));
  return <>
    <SchemaBreadcrumb locale="en" items={[{ name: 'Home', item: 'https://valentinproteccionintegral.com/en', position: 1 }, { name: 'Blog', item: 'https://valentinproteccionintegral.com/en/blog', position: 2 }]} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Blog', inLanguage: 'en', name: 'Insurance Blog · Valentín Protección Integral', url: 'https://valentinproteccionintegral.com/en/blog', blogPost: publishedPosts.map((post) => ({ '@type': 'BlogPosting', headline: post.title, description: post.excerpt, url: `https://valentinproteccionintegral.com/en/blog/${post.slug}`, datePublished: post.date, inLanguage: 'en', author: { '@type': 'Person', name: 'Rosa Valentín', url: 'https://valentinproteccionintegral.com/en/about-us' } })) }) }} />
    <Header />
    <main>
      <section className="section-pad pt-6 md:pt-10"><div className="container-shell"><Breadcrumbs items={[{ label: 'Home', href: '/en' }, { label: 'Blog' }]} /><div className="mt-6 soft-card overflow-hidden p-7 md:p-10"><p className="kicker">Blog</p><h1 className="mt-3 font-heading text-5xl font-bold tracking-tight text-[var(--blue-deep)] md:text-6xl">Useful content to help you decide with confidence</h1><p className="mt-4 max-w-3xl text-lg leading-9 text-[var(--muted)]">Clear guides, practical advice and questions worth checking before choosing insurance.</p></div></div></section>
      <BlogGrid posts={publishedPosts} locale="en" />
    </main>
    <Footer /><StickyWhatsApp />
  </>;
}

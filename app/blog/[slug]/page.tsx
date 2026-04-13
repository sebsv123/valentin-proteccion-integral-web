import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { BlogArticle } from '@/components/blog-article';
import { blogPosts, getBlogPost } from '@/lib/blog';
import { site } from '@/lib/products';
import SchemaFAQ from '@/components/seo/schema-faq';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';
import SchemaArticle from '@/components/seo/schema-article';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `${site.domain}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      images: [{ url: `${site.domain}${post.image}`, alt: post.imageAlt }],
      publishedTime: post.date,
    },
  };
}

export const dynamic = 'force-static';

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <SchemaBreadcrumb 
        items={[
          { name: 'Inicio', item: site.domain, position: 1 },
          { name: 'Blog', item: `${site.domain}/blog`, position: 2 },
          { name: post.title, item: `${site.domain}/blog/${post.slug}`, position: 3 }
        ]} 
      />
      <SchemaArticle 
        title={post.title}
        description={post.metaDescription}
        datePublished={post.date}
        dateModified={post.dateModified}
        author="Rosa Valentín"
        image={post.image}
        url={`${site.domain}/blog/${post.slug}`}
      />
      {post.faqs && <SchemaFAQ faqs={post.faqs} />}
      <Header />
      <main>
        <div className="container-shell pt-6 md:pt-8">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]} />
        </div>
        <BlogArticle post={post} />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}

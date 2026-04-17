import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { BlogArticle } from '@/components/blog-article';
import { blogPosts, getBlogPost } from '@/lib/blog';
import { site } from '@/lib/products';
import { getPexelsImage, isLocalImage } from '@/lib/pexels';
import SchemaFAQ from '@/components/seo/schema-faq';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ArticleSchema from '@/components/ArticleSchema';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  // Obtener imagen de Pexels si es local
  const imageUrl = isLocalImage(post.image)
    ? await getPexelsImage(slug)
    : post.image;

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
      siteName: 'Valentín Protección Integral',
      locale: 'es_ES',
      images: [{ url: imageUrl.startsWith('http') ? imageUrl : `${site.domain}${imageUrl}`, alt: post.imageAlt }],
      publishedTime: post.date,
    },
  };
}

export const dynamic = 'force-static';

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  // Obtener imagen de Pexels si es local
  const imageUrl = isLocalImage(post.image)
    ? await getPexelsImage(slug)
    : post.image;

  // Crear post con imagen actualizada
  const postWithImage = {
    ...post,
    image: imageUrl,
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` }
        ]}
      />
      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        datePublished={post.date}
        dateModified={post.dateModified}
        imageUrl={imageUrl.startsWith('http') ? imageUrl : `https://valentinproteccionintegral.com${imageUrl}`}
        articleUrl={`https://valentinproteccionintegral.com/blog/${post.slug}`}
      />
      {post.faqs && <SchemaFAQ faqs={post.faqs} />}
      <Header />
      <main>
        <div className="container-shell pt-6 md:pt-8">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]} />
        </div>
        <BlogArticle post={postWithImage} />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}

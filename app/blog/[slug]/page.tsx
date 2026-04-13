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
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      images: [{ url: `${site.domain}${post.image}`, alt: post.imageAlt }],
      publishedTime: post.date,
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <script
        id={`schema-blog-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "headline": post.title,
                "description": post.metaDescription,
                "datePublished": post.date,
                "dateModified": post.dateModified ?? post.date,
                "url": `${site.domain}/blog/${post.slug}`,
                "image": `${site.domain}${post.image}`,
                "author": {
                  "@type": "Person",
                  "name": "Rosa Valentín",
                  "jobTitle": "Asesora de seguros independiente",
                  "url": site.domain,
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Valentín Protección Integral",
                  "url": site.domain,
                },
              },
              ...(post.faqs && post.faqs.length > 0 ? [{
                "@type": "FAQPage",
                "mainEntity": post.faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
                })),
              }] : []),
              {
                "@type": "LocalBusiness",
                "name": "Valentín Protección Integral",
                "url": site.domain,
                "telephone": "+34603448765",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "C. de los Reyes Católicos, 12",
                  "addressLocality": "Boadilla del Monte",
                  "addressRegion": "Madrid",
                  "addressCountry": "ES",
                },
                "sameAs": [
                  "https://search.google.com/local/reviews?placeid=ChIJM_JBwmqbQQ0R-9vVnwTsuRA",
                ],
                ...(post.reviewCount ? {
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": String(post.reviewCount),
                    "bestRating": "5",
                  },
                } : {}),
              },
            ],
          }),
        }}
      />
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

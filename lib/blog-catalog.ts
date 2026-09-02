import type { BlogPost } from '@/lib/blog';
import { blogPosts } from '@/lib/blog';
import { blogEnglishContent } from '@/lib/blog-en-content';

export type BlogLocale = 'es' | 'en';

export type BlogContent = Pick<
  BlogPost,
  'title' | 'excerpt' | 'image' | 'imageAlt' | 'metaTitle' | 'metaDescription' | 'sections' | 'tips' | 'faqs'
>;

export type BlogInternalLink =
  | { kind: 'route'; routeId: string; fallbackEs?: string }
  | { kind: 'blog'; blogPostId: string }
  | { kind: 'external'; href: string };

export type BlogCatalogEntry = {
  id: string;
  slug: { es: string; en?: string };
  shared: {
    date: string;
    dateModified?: string;
    readTime: string;
    category: string;
    reviewCount?: number;
    googleReviewsUrl?: string;
    googleWriteReviewUrl?: string;
  };
  content: { es: BlogContent | null; en?: BlogContent };
  renderer: 'shared' | 'explicit';
  internalLinks?: BlogInternalLink[];
  sitemap: { indexableEs: boolean; priority: number };
};

const stableIds: Record<string, string> = {
  'mejor-seguro-medico-calidad-precio-espana': 'blog-health-value-2026',
  'fiarse-opiniones-para-elegir-seguro': 'blog-insurance-reviews',
  'incluir-personas-poliza-medica': 'blog-add-people-health-policy',
  'seguros-salud-cubren-recien-nacidos': 'blog-newborn-health-cover',
  'donde-consultar-que-incluye-mi-poliza': 'blog-policy-cover-details',
  'seguro-medico-asistencia-en-viaje-que-cubre': 'blog-health-travel-assistance',
  'seguro-de-vida-riesgo-que-es': 'blog-term-life-insurance',
  'tipos-de-seguros-de-vida': 'blog-life-insurance-types',
  'ventajas-agente-de-seguros': 'blog-insurance-agent-benefits',
  'seguro-medico-privado-madrid': 'blog-private-health-madrid',
  'mejor-seguro-salud-madrid-2026': 'blog-best-health-madrid-2026',
  'guia-seguro-salud-espana-2026': 'blog-health-guide-spain-2026',
  'seguro-vida-esencial-familia': 'blog-family-life-insurance',
  'seguros-mascotas-2026-vale-la-pena': 'blog-pet-insurance-worth-it',
  'seguro-vida-hipoteca-obligatorio': 'blog-mortgage-life-insurance',
  'seguro-perros-madrid-ley-bienestar-2026': 'blog-dog-liability-madrid-law',
  'asesor-seguros-vs-portal-online': 'blog-advisor-vs-comparison-site',
  'seguros-boadilla-del-monte': 'blog-insurance-boadilla',
  'seguro-perro-obligatorio-madrid': 'blog-mandatory-dog-insurance-madrid',
  'cuanto-cuesta-seguro-salud-madrid': 'blog-health-insurance-cost-madrid',
  'seguro-dental-familias-madrid': 'blog-family-dental-madrid',
  'mejor-seguro-salud-autonomos-madrid': 'blog-self-employed-health-madrid',
  'seguros-vida-hipoteca-boadilla-madrid': 'blog-mortgage-life-boadilla',
  'seguro-accidentes-convenio-madrid': 'blog-employer-accident-insurance-madrid',
  'seguro-ahorro-jubilacion-madrid': 'blog-retirement-savings-madrid',
  'seguro-medico-autonomos-madrid-deduccion-fiscal': 'blog-self-employed-health-tax',
  'seguro-decesos-familiar-madrid-que-cubre': 'blog-family-funeral-madrid',
  'seguro-dental-vs-salud-completa-madrid': 'blog-dental-vs-health-madrid',
  'como-aplicar-protector-solar-beneficios': 'blog-sunscreen-guide',
};

const sharedContent = (post: BlogPost): BlogContent => ({
  title: post.title,
  excerpt: post.excerpt,
  image: post.image,
  imageAlt: post.imageAlt,
  metaTitle: post.metaTitle,
  metaDescription: post.metaDescription,
  sections: post.sections,
  tips: post.tips,
  faqs: post.faqs,
});

const englishSlugs: Record<string, string> = {
  'mejor-seguro-medico-calidad-precio-espana': 'best-value-health-insurance-spain',
  'seguro-medico-privado-madrid': 'private-health-insurance-madrid',
  'mejor-seguro-salud-madrid-2026': 'best-health-insurance-madrid-2026',
  'guia-seguro-salud-espana-2026': 'health-insurance-guide-spain-2026',
  'cuanto-cuesta-seguro-salud-madrid': 'health-insurance-cost-madrid',
  'incluir-personas-poliza-medica': 'add-people-to-health-insurance',
  'seguros-salud-cubren-recien-nacidos': 'health-insurance-newborn-cover',
  'mejor-seguro-salud-autonomos-madrid': 'best-health-insurance-self-employed-madrid',
  'seguro-medico-autonomos-madrid-deduccion-fiscal': 'self-employed-health-insurance-tax-deduction',
  'seguro-dental-vs-salud-completa-madrid': 'dental-vs-comprehensive-health-insurance',
  'seguro-medico-asistencia-en-viaje-que-cubre': 'travel-medical-assistance-insurance',
  'seguros-mascotas-2026-vale-la-pena': 'pet-insurance-worth-it-2026',
  'seguro-perro-obligatorio-madrid': 'mandatory-dog-insurance-madrid',
  'seguro-dental-familias-madrid': 'family-dental-insurance-madrid',
  'seguro-decesos-familiar-madrid-que-cubre': 'funeral-insurance-madrid-guide',
};

const fromBlogPost = (post: BlogPost): BlogCatalogEntry => ({
  id: stableIds[post.slug],
  slug: { es: post.slug, ...(englishSlugs[post.slug] ? { en: englishSlugs[post.slug] } : {}) },
  shared: {
    date: post.date,
    dateModified: post.dateModified,
    readTime: post.readTime,
    category: post.category,
    reviewCount: post.reviewCount,
    googleReviewsUrl: post.googleReviewsUrl,
    googleWriteReviewUrl: post.googleWriteReviewUrl,
  },
  content: { es: sharedContent(post), ...(blogEnglishContent[post.slug] ? { en: { ...blogEnglishContent[post.slug], image: post.image } } : {}) },
  renderer: 'shared',
  sitemap: { indexableEs: true, priority: [
    'mejor-seguro-medico-calidad-precio-espana',
    'seguro-medico-privado-madrid',
    'mejor-seguro-salud-madrid-2026',
    'seguros-boadilla-del-monte',
    'cuanto-cuesta-seguro-salud-madrid',
    'mejor-seguro-salud-autonomos-madrid',
    'seguros-vida-hipoteca-boadilla-madrid',
    'seguro-medico-autonomos-madrid-deduccion-fiscal',
  ].includes(post.slug) ? 0.7 : 0.6 },
});

const explicitEntries: BlogCatalogEntry[] = [
  {
    id: 'blog-mortgage-disability-gap-2026',
    slug: { es: 'cuanto-te-indemniza-realmente-tu-seguro-hipoteca-nomina-en-invalidez-solo-50' },
    shared: { date: '2026-04-23', readTime: 'especial', category: 'consejos' },
    content: { es: null },
    renderer: 'explicit',
    internalLinks: [
      { kind: 'route', routeId: 'health', fallbackEs: '/seguros/salud' },
      { kind: 'route', routeId: 'accidents', fallbackEs: '/seguros/accidentes' },
      { kind: 'route', routeId: 'boadilla', fallbackEs: '/zonas/boadilla-del-monte' },
    ],
    sitemap: { indexableEs: true, priority: 0.6 },
  },
  {
    id: 'blog-family-protection-18000-2026',
    slug: { es: 'por-que-necesitas-mas-de-9-000e-en-proteccion-familiar-madrid-2026-must-have' },
    shared: { date: '2026-04-23', readTime: 'especial', category: 'consejos' },
    content: { es: null },
    renderer: 'explicit',
    internalLinks: [
      { kind: 'route', routeId: 'health', fallbackEs: '/seguros/salud' },
      { kind: 'route', routeId: 'families', fallbackEs: '/para/familias' },
    ],
    sitemap: { indexableEs: true, priority: 0.6 },
  },
  {
    id: 'blog-european-pet-passport-2026',
    slug: { es: 'pasaporte-europeo-mascotas-obligatorio-2026-vacunas-precio-madrid' },
    shared: { date: '2026-04-23', readTime: 'especial', category: 'consejos' },
    content: { es: null },
    renderer: 'explicit',
    internalLinks: [
      { kind: 'route', routeId: 'pets', fallbackEs: '/seguros/mascotas' },
      { kind: 'route', routeId: 'boadilla', fallbackEs: '/zonas/boadilla-del-monte' },
    ],
    sitemap: { indexableEs: true, priority: 0.6 },
  },
];

export const blogCatalog: BlogCatalogEntry[] = [
  ...blogPosts.filter((post) => !explicitEntries.some((entry) => entry.slug.es === post.slug)).map(fromBlogPost),
  ...explicitEntries,
];

export function getBlogPostBySlug(locale: BlogLocale, slug: string) {
  return blogCatalog.find((post) => post.slug[locale] === slug);
}

export function getLocalizedBlogPost(id: string, locale: BlogLocale) {
  const post = blogCatalog.find((candidate) => candidate.id === id);
  return post && (post.content[locale] || (locale === 'es' && post.renderer === 'explicit')) ? post : undefined;
}

export function getBlogPosts(locale: BlogLocale) {
  return blogCatalog.filter((post) => post.content[locale] || (locale === 'es' && post.renderer === 'explicit'));
}

function hasCompleteContent(content: BlogContent | null | undefined) {
  return Boolean(
    content?.title &&
    content.excerpt &&
    content.metaTitle &&
    content.metaDescription &&
    content.image &&
    content.imageAlt &&
    content.sections.length > 0 &&
    content.tips.length > 0 &&
    (!content.faqs || content.faqs.every((faq) => faq.question && faq.answer)),
  );
}

export function getPublishedEnglishPosts() {
  return blogCatalog.filter((post) => post.slug.en && hasCompleteContent(post.content.en));
}

export function getLocalizedRelatedPosts(id: string, locale: BlogLocale, count = 2) {
  const current = blogCatalog.find((post) => post.id === id);
  if (!current) return [];
  return getBlogPosts(locale)
    .filter((post) => post.id !== id)
    .sort((a, b) => {
      const sameCategory = Number(b.shared.category === current.shared.category) - Number(a.shared.category === current.shared.category);
      return sameCategory || b.shared.date.localeCompare(a.shared.date) || a.id.localeCompare(b.id);
    })
    .slice(0, count);
}

export function getLocalizedBlogPath(id: string, locale: BlogLocale) {
  const post = blogCatalog.find((candidate) => candidate.id === id);
  const slug = post?.slug[locale];
  return slug ? (locale === 'en' ? `/en/blog/${slug}` : `/blog/${slug}`) : undefined;
}

export function toLegacyBlogPost(post: BlogCatalogEntry, locale: BlogLocale): BlogPost | undefined {
  const content = post.content[locale];
  if (!content) return undefined;
  return { ...content, ...post.shared, slug: post.slug[locale] ?? post.slug.es };
}

export function getBlogSitemapEntries(locale: 'es') {
  return blogCatalog
    .filter((post) => post.sitemap.indexableEs && post.slug[locale])
    .map((post) => ({
      slug: post.slug[locale],
      enSlug: post.slug.en,
      date: post.shared.date,
      priority: post.sitemap.priority,
    }));
}

export function validateBlogCatalog() {
  const ids = new Set<string>();
  const slugs = new Set<string>();
  for (const post of blogCatalog) {
    if (ids.has(post.id)) throw new Error(`Duplicate blog id: ${post.id}`);
    if (slugs.has(post.slug.es)) throw new Error(`Duplicate ES blog slug: ${post.slug.es}`);
    if (!post.id || !post.slug.es) throw new Error('Blog catalog entries require an id and ES slug');
    ids.add(post.id);
    slugs.add(post.slug.es);
    if (post.slug.en && !hasCompleteContent(post.content.en)) throw new Error(`EN slug without complete EN content: ${post.slug.en}`);
  }
  const englishSlugEntries = blogCatalog.filter((post) => post.slug.en);
  const publishedEnglish = getPublishedEnglishPosts();
  if (blogCatalog.length !== 32) throw new Error('Expected 32 blog catalog entries, found ' + blogCatalog.length);
  if (englishSlugEntries.length !== 15 || publishedEnglish.length !== 15) {
    throw new Error('Expected exactly 15 complete EN blog entries, found ' + englishSlugEntries.length + ' slugs and ' + publishedEnglish.length + ' published');
  }
  if (blogCatalog.length - publishedEnglish.length !== 17) {
    throw new Error('Expected 17 Spanish-only blog entries, found ' + (blogCatalog.length - publishedEnglish.length));
  }
  return true;
}

validateBlogCatalog();

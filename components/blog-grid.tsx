'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogCategories } from '@/lib/blog';
import type { BlogPost } from '@/lib/blog';

interface BlogGridProps {
  posts: (BlogPost & { pexelsImage: string })[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState('todos');

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'todos') return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [posts, activeCategory]);

  // Get count of posts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { todos: posts.length };
    posts.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, [posts]);

  return (
    <>
      {/* Category Filter Tags */}
      <div className="container-shell mb-8">
        <div className="flex flex-wrap gap-2">
          {blogCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = categoryCounts[cat.id] || 0;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                  font-semibold text-sm
                  transition-all duration-200 ease-out
                  ${
                    isActive
                      ? 'bg-[var(--blue-deep)] text-white shadow-lg shadow-blue-900/25'
                      : 'bg-white text-[var(--muted)] border border-[var(--border)] hover:border-[var(--blue)]/30 hover:text-[var(--blue-deep)] hover:shadow-md'
                  }
                `}
              >
                {cat.label}
                <span
                  className={`
                    inline-flex items-center justify-center
                    min-w-[1.25rem] h-5 px-1 rounded-full text-xs font-bold
                    ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-[var(--bg-soft)] text-[var(--muted)]'
                    }
                  `}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="container-shell">
        {filteredPosts.length === 0 ? (
          <div className="soft-card p-12 text-center">
            <p className="text-lg text-[var(--muted)]">
              No hay artículos en esta categoría aún.
            </p>
            <button
              onClick={() => setActiveCategory('todos')}
              className="mt-4 text-[var(--blue)] font-semibold hover:underline underline-offset-4"
            >
              Ver todos los artículos
            </button>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <article
                key={post.slug}
                className="soft-card overflow-hidden group animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={post.pexelsImage}
                      alt={post.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(0,34,68,0.5))]" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold text-[var(--blue-deep)] shadow-sm">
                        {blogCategories.find((c) => c.id === post.category)?.label || post.category}
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="flex items-center gap-3 text-xs text-white/80">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading text-2xl font-semibold text-[var(--blue-deep)] group-hover:text-[var(--blue)] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-base leading-8 text-[var(--muted)] line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)]">
                      Seguir leyendo
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}

        {/* Results count */}
        <p className="mt-6 text-sm text-[var(--muted)] text-center">
          Mostrando {filteredPosts.length} de {posts.length} artículos
        </p>
      </div>
    </>
  );
}

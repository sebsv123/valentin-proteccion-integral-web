'use client';
import { useEffect, useRef, type ReactNode } from 'react';

/** Progressive enhancement of two editorial images only. SSR content remains visible. */
export function PremiumMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if (!root.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const nodes = [...root.current.querySelectorAll<HTMLElement>('[data-editorial-reveal]')];
    const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{
      if (entry.isIntersecting) { (entry.target as HTMLElement).dataset.editorialReveal = 'shown'; observer.unobserve(entry.target); }
    }),{rootMargin:'0px 0px -4% 0px',threshold:.12});
    nodes.forEach(node=>{if(node.getBoundingClientRect().top>window.innerHeight){node.dataset.editorialReveal='waiting';observer.observe(node)}else node.dataset.editorialReveal='shown'});
    return ()=>observer.disconnect();
  },[]);
  return <div ref={root}>{children}</div>;
}

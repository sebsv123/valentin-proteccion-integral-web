import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { ForeignersTrackedLink } from './foreigners-tracked-link';
import styles from './answer-first-section.module.css';

type AnswerFirstSectionProps = {
  eyebrow?: string;
  title: string;
  answer: string;
  facts: string[];
  factTitles?: string[];
  links?: { label: string; href: string }[];
  linksAriaLabel?: string;
  emphasizeFirstLink?: boolean;
  firstLinkTracking?: { action: 'cta_click'; label: string };
  sectionDataAttribute?: string;
  visual?: ReactNode;
};

export function AnswerFirstSection({ eyebrow = 'Respuesta rápida', title, answer, facts, factTitles, links = [], linksAriaLabel = 'Páginas relacionadas', emphasizeFirstLink = false, firstLinkTracking, sectionDataAttribute, visual }: AnswerFirstSectionProps) {
  return (
    <section className="border-y border-slate-200 bg-slate-50/70 py-10 md:py-14" aria-labelledby="answer-first-title" data-foreigners-section={sectionDataAttribute}>
      <div className={`container-shell ${visual ? styles.layout : ''}`}>
        <div className={visual ? styles.content : 'max-w-4xl'}>
          <p className="kicker">{eyebrow}</p>
          <h2 id="answer-first-title" className="mt-2 text-2xl font-bold tracking-tight text-[var(--blue-deep)] md:text-3xl">{title}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">{answer}</p>
          {factTitles ? (
            <ul className={`mt-6 ${styles.facts}`}>
              {facts.map((fact, index) => (
                <li key={fact} className={styles.factCard}>
                  <span className={styles.factMarker} aria-hidden="true" />
                  <div className={styles.factCopy}>
                    {factTitles[index] ? <span className={styles.factTitle}>{factTitles[index]}</span> : null}
                    <span className={styles.factText}>{fact}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-slate-700 md:grid-cols-2">
              {facts.map((fact) => <li key={fact} className="rounded-lg bg-white px-4 py-3 shadow-sm">{fact}</li>)}
            </ul>
          )}
          {links.length > 0 && (
            <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold" aria-label={linksAriaLabel}>
              {links.map((link, index) => emphasizeFirstLink && index === 0 ? (
                firstLinkTracking ? (
                  <ForeignersTrackedLink key={link.href} href={link.href} action={firstLinkTracking.action} label={firstLinkTracking.label} className="btn-primary min-h-11 px-5 text-sm">{link.label} <ArrowRight className="h-4 w-4" aria-hidden="true" /></ForeignersTrackedLink>
                ) : (
                  <Link key={link.href} href={link.href} className="btn-primary min-h-11 px-5 text-sm">{link.label} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                )
              ) : (
                <Link key={link.href} href={link.href} className="text-[var(--blue)] underline decoration-[var(--blue)]/30 underline-offset-4">{link.label} →</Link>
              ))}
            </nav>
          )}
        </div>
        {visual ? <div className={styles.visual}>{visual}</div> : null}
      </div>
    </section>
  );
}

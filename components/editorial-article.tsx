import Image from 'next/image';
import { ArrowRight, Check, Clock, FileCheck2, Lightbulb, TriangleAlert } from 'lucide-react';
import { ReferralLink as Link } from '@/components/extranjeros/blueprint-referral';
import { FAQAccordion } from '@/components/faq-accordion';
import type { EditorialDraft } from '@/lib/blueprint-editorial-content';
import styles from './editorial-article.module.css';

/** Limited, escaped inline markup from our own editorial content; no raw HTML. */
function Inline({ text }: { text: string }) {
  return <>{text.split(/(\[[^\]]+\]\([^\s)]+\)|\*\*[^*]+\*\*)/g).map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^\s)]+)\)$/);
    if (link) return link[2].startsWith('/') ? <Link key={i} href={link[2]}>{link[1]}</Link> : <a key={i} href={link[2]}>{link[1]}</a>;
    return part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part;
  })}</>;
}

export function EditorialArticle({ post, referred = false }: { post: EditorialDraft; referred?: boolean }) {
  return <article className={styles.article}>
    <header className={styles.hero}>
      <div className="container-shell">
        <p className={styles.preview}>Editorial preview · Draft for Sebastián’s approval · Not published</p>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className="kicker">{post.eyebrow}</p>
            <h1>{post.title}</h1>
            <p className={styles.intro}>{post.intro}</p>
            <div className={styles.byline}><span>VPI editorial team</span><span><Clock size={15} aria-hidden="true" /> {post.readTime} read</span></div>
            <p className={styles.reviewDate}>Sources reviewed <time dateTime={post.reviewed}>18 November 2026</time></p>
          </div>
          <figure className={styles.heroFigure}>
            <Image src={post.image} alt={post.imageAlt} width={1600} height={1067} sizes="(max-width: 900px) 100vw, 48vw" priority className={styles.heroImage} />
            <figcaption>{post.imageCredit}</figcaption>
          </figure>
        </div>
      </div>
    </header>
    <div className="container-shell">
      <div className={styles.overview}>
        <div><p className="kicker">The planning principle</p><h2>{post.summary}</h2><p>{post.summaryText}</p></div>
        <ol className={styles.process} aria-label="Document planning process">{post.process.map(([title, text], i) => <li key={title}><span className={styles.number} aria-hidden="true">0{i + 1}</span><div><strong>{title}</strong><span>{text}</span></div></li>)}</ol>
      </div>
      <div className={styles.readingGrid}>
        <aside className={styles.sidebar}>
          <nav aria-label="On this page"><p className="kicker">In this guide</p><ol>{post.sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.heading}</a></li>)}<li><a href="#checklist">Planning checklist</a></li><li><a href="#questions">Common questions</a></li><li><a href="#sources">Official sources</a></li></ol></nav>
          <div className={styles.sidebarNote}><FileCheck2 aria-hidden="true" size={24} /><p>Keep one working list. Give every document an owner and a next action.</p></div>
        </aside>
        <div className={styles.body}>
          {post.sections.map((section, index) => <section id={section.id} key={section.id} className={styles.section}>
            <div className={styles.sectionHeading}><span aria-hidden="true">0{index + 1}</span><h2>{section.heading}</h2></div>
            {section.content.map((text, i) => {
              const partnerRecommendation = text.includes('Blueprint');
              if (partnerRecommendation && referred) return null;
              return partnerRecommendation ? <aside key={i} className={styles.partnerNote} aria-label="Local support"><p className="kicker">Local support · VPI collaborator</p><p><Inline text={text} /></p></aside> : <p key={i}><Inline text={text} /></p>;
            })}
            {post.callouts[index] && <aside className={`${styles.callout} ${post.callouts[index][0] === 'warning' ? styles.warning : ''}`}>
              {post.callouts[index][0] === 'warning' ? <TriangleAlert aria-hidden="true" size={22} /> : <Lightbulb aria-hidden="true" size={22} />}
              <div><h3>{post.callouts[index][1]}</h3><p>{post.callouts[index][2]}</p></div>
            </aside>}
          </section>)}
          <section id="checklist" className={styles.checklist}>
            <p className="kicker">Save for your planning</p><h2>{post.checklistTitle}</h2>
            <p>A working framework. Your competent authority’s current instructions determine what you submit.</p>
            <ul>{post.checklist.map(([title, text]) => <li key={title}><Check size={20} aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></li>)}</ul>
          </section>
          <section id="questions" className={styles.section}><p className="kicker">Before you move on</p><h2>Common questions</h2><FAQAccordion items={referred ? post.faqs.filter(item => !item.a.includes('Blueprint')) : post.faqs} contextualLinks={false} locale="en" /></section>
          <section id="insurance-help" className={styles.cta}>
            <p className="kicker">The insurance part of your plan</p><h2>Let’s make your insurance enquiry practical.</h2>
            <p>Tell VPI your procedure, responsible office and planned dates. Our team offers personal guidance in fluent English and Spanish.</p>
            <Link href="/en/foreigners" className="btn-primary">Discuss health insurance with VPI <ArrowRight size={18} aria-hidden="true" /></Link>
            <p className={styles.ctaFine}>VPI is the commercial brand of exclusive insurance agents. Policy availability and conditions depend on the product and insurer. The competent authority decides your application.</p>
          </section>
          <section id="sources" className={styles.sources}><h2>Official sources & further reading</h2><p>Reviewed 18 November 2026. Check the current instructions again before purchase or submission. The Los Angeles checklist, where cited, applies to its own jurisdiction.</p><ul>{post.sources.map(([label, href]) => <li key={href}><a href={href}>{label} <span aria-hidden="true">↗</span></a></li>)}</ul></section>
        </div>
      </div>
    </div>
  </article>;
}

"use client";

import { useId, useState } from 'react';
import { ChevronDown, GraduationCap, RefreshCw } from 'lucide-react';
import styles from './health-faq-section.module.css';
import { useLocale } from 'next-intl';
import { healthContent } from '@/app/seguros/health-content';

const questionIcons = [GraduationCap, RefreshCw] as const;

export function HealthFaqSection() {
  const en = useLocale() === 'en';
  const visibleQuestions = (en ? healthContent.en.faq : healthContent.es.faq).map((item, index) => ({ ...item, Icon: index === 0 ? questionIcons[0] : questionIcons[1] }));
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();
  return <section className={styles.section} aria-labelledby="salud-faq-title">
    <div className={styles.topography} aria-hidden="true"><svg viewBox="0 0 1440 700" preserveAspectRatio="none"><path d="M-32 115c103-73 224-63 280 12s145 99 244 38 215-61 280 9" /><path d="M-20 64c117-76 249-62 314 28s134 100 243 39 216-37 310 31" /><path d="M1181 55c91 12 180 68 206 145s-7 153-85 186-151 82-98 181" /><path d="M1238 10c116 28 184 98 188 183s-44 152-121 188-99 89-38 174" /></svg></div>
    <div className={`container-shell ${styles.shell}`}>
      <div className={styles.grid}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{en ? 'HEALTH FAQs' : 'PREGUNTAS FRECUENTES DE SALUD'}</p>
          <h2 id="salud-faq-title">{en ? 'Clear answers before you buy' : 'Respuestas claras antes de contratar'}</h2>
          <span className={styles.wave} aria-hidden="true"><svg viewBox="0 0 108 17"><path d="M2 12c14-12 29 4 43-2s23-8 33 0 18 5 28-4" /></svg></span>
          <p>{en ? 'These are some of the questions that come up most when comparing health insurance. We answer them directly so you know what to review in your situation.' : 'Estas son algunas de las dudas que más aparecen al comparar seguros de salud. Las respondemos de forma directa para que sepas qué conviene revisar en tu caso.'}</p>
        </div>
        <div className={styles.accordion}>
          {visibleQuestions.map(({ question, answer, Icon }, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            return <article key={question} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
              <h3><button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? -1 : index)}><span className={styles.icon}><Icon aria-hidden="true" /></span><span>{question}</span><ChevronDown aria-hidden="true" className={styles.chevron} /></button></h3>
              <div id={panelId} role="region" aria-label={question} className={styles.answer} hidden={!isOpen}><div><p>{answer}</p></div></div>
            </article>;
          })}
        </div>
      </div>
    </div>
  </section>;
}

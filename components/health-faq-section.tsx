"use client";

import Link from 'next/link';
import { useId, useState } from 'react';
import { ArrowRight, BedDouble, ChevronDown, GraduationCap, MessageCircle, RefreshCw, Scale } from 'lucide-react';
import { buildWhatsAppHref } from '@/lib/products';
import styles from './health-faq-section.module.css';

const questions = [
  { question: '¿Todos los seguros de SALUD incluyen hospitalización?', answer: 'No. Las modalidades básicas se centran en medicina ambulatoria, como consultas, especialistas y pruebas. Si buscas cobertura de ingreso y cirugía, debes optar por una modalidad completa.', Icon: BedDouble },
  { question: '¿Qué diferencia hay entre copago y reembolso?', answer: 'El copago es una cantidad que abonas al utilizar determinados servicios médicos. El reembolso permite acudir, según la modalidad contratada, a profesionales externos al cuadro médico y recuperar una parte de la factura dentro de los límites establecidos.', Icon: Scale },
  { question: '¿Sirve este seguro para residencia o estudios?', answer: 'Existen seguros específicos para estudios y residencia en España. La modalidad adecuada depende del trámite, la duración, la edad, las fechas de cobertura y la documentación exigida en cada caso.', Icon: GraduationCap },
  { question: '¿Puedo cambiar de modalidad más adelante?', answer: 'El cambio puede depender del producto, el momento de la solicitud y las condiciones de contratación. Antes de modificar una modalidad conviene revisar coberturas, carencias, cuestionario de salud y fecha de efecto.', Icon: RefreshCw },
];

export function HealthFaqSection({ whatsappMessage }: { whatsappMessage: string }) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();
  return <section className={styles.section} aria-labelledby="salud-faq-title">
    <div className={styles.topography} aria-hidden="true"><svg viewBox="0 0 1440 700" preserveAspectRatio="none"><path d="M-32 115c103-73 224-63 280 12s145 99 244 38 215-61 280 9" /><path d="M-20 64c117-76 249-62 314 28s134 100 243 39 216-37 310 31" /><path d="M1181 55c91 12 180 68 206 145s-7 153-85 186-151 82-98 181" /><path d="M1238 10c116 28 184 98 188 183s-44 152-121 188-99 89-38 174" /></svg></div>
    <div className={`container-shell ${styles.shell}`}>
      <div className={styles.grid}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>PREGUNTAS FRECUENTES DE SALUD</p>
          <h2 id="salud-faq-title">Respuestas claras antes de contratar</h2>
          <span className={styles.wave} aria-hidden="true"><svg viewBox="0 0 108 17"><path d="M2 12c14-12 29 4 43-2s23-8 33 0 18 5 28-4" /></svg></span>
          <p>Estas son algunas de las dudas que más aparecen al comparar seguros de salud. Las respondemos de forma directa para que sepas qué conviene revisar en tu caso.</p>
        </div>
        <div className={styles.accordion}>
          {questions.map(({ question, answer, Icon }, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            return <article key={question} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
              <h3><button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? -1 : index)}><span className={styles.icon}><Icon aria-hidden="true" /></span><span>{question}</span><ChevronDown aria-hidden="true" className={styles.chevron} /></button></h3>
              <div id={panelId} role="region" aria-label={question} className={styles.answer} hidden={!isOpen}><div><p>{answer}</p>{index === 0 ? <div className={styles.answerActions}><Link href="/contacto">Pedir orientación <ArrowRight aria-hidden="true" /></Link><a href={buildWhatsAppHref(whatsappMessage)}><MessageCircle aria-hidden="true" />Escríbenos por <strong>WhatsApp</strong></a></div> : null}</div></div>
            </article>;
          })}
        </div>
      </div>
    </div>
  </section>;
}

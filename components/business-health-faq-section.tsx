'use client';

import { useState } from 'react';
import { ChevronDown, CircleHelp } from 'lucide-react';
import styles from './business-health-faq-section.module.css';

const items = [
  ['¿Cuál es el número mínimo de asegurados?', 'Existen opciones que pueden estudiarse desde dos asegurados. La composición admitida y las condiciones dependen de la modalidad y de cómo se configure el colectivo.'],
  ['¿Puede contratarlo un autónomo?', 'Puede estudiarse para autónomos con empleados o estructuras profesionales pequeñas. Antes de preparar la propuesta debemos revisar quién formará parte del colectivo y qué modalidad admite esa composición.'],
  ['¿Se pueden incluir familiares?', 'Determinadas modalidades pueden permitir la incorporación de familiares, siempre que la contratación y la composición del colectivo lo contemplen. Conviene revisarlo antes de solicitar las altas.'],
  ['¿Qué diferencia hay entre beneficio social y retribución flexible?', 'En el beneficio social la empresa asume total o parcialmente el coste. En la retribución flexible el trabajador destina voluntariamente una parte de su salario bruto al seguro. También puede estudiarse una aportación compartida cuando la solución lo permita.'],
  ['¿Todas las modalidades incluyen hospitalización?', 'No. Las opciones ambulatorias se centran en consultas, especialistas y pruebas. Para incluir hospitalización y cirugía es necesario elegir una modalidad completa.'],
  ['¿Qué información hace falta para preparar una propuesta?', 'Normalmente necesitamos el número aproximado de personas, sus rangos de edad, la provincia, el nivel de cobertura, la fecha prevista y la forma en que la empresa quiere asumir el coste.'],
  ['¿Pueden incorporarse nuevas personas más adelante?', 'Las altas posteriores pueden gestionarse según las condiciones de la póliza, las fechas de incorporación y los requisitos aplicables a cada persona. Revisamos el procedimiento con la empresa antes de implantar la solución.'],
];

export function BusinessHealthFaqSection() { const [open, setOpen] = useState(0); return <section className={styles.section} aria-labelledby="business-health-faq-title"><div className={`container-shell ${styles.shell}`}><header className={styles.heading}><p className={styles.eyebrow}>PREGUNTAS FRECUENTES</p><h2 id="business-health-faq-title">Preguntas habituales antes de contratar</h2><p>Estas respuestas son una orientación inicial. Las condiciones definitivas dependen de la modalidad, la composición del colectivo y la documentación contractual.</p></header><div className={styles.accordion}>{items.map(([question, answer], index) => { const expanded = open === index; const panelId = `business-health-faq-panel-${index}`; const questionId = `business-health-faq-question-${index}`; return <div className={`${styles.item} ${expanded ? styles.active : ''}`} key={question}><button id={questionId} type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setOpen(expanded ? -1 : index)}><span className={styles.qIcon}><CircleHelp aria-hidden="true" /></span><span>{question}</span><ChevronDown aria-hidden="true" /></button><div id={panelId} role="region" aria-labelledby={questionId} className={styles.answer} hidden={!expanded}><p>{answer}</p></div></div>; })}</div></div></section>; }

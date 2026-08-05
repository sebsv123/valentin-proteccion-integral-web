import { BadgePlus, ClipboardPlus, Hospital, MonitorSmartphone, Plane, ScanLine, ShieldPlus, Stethoscope } from 'lucide-react';
import styles from './business-health-services-section.module.css';

const stages = [
  { number: '01', short: 'Consulta', title: 'Consulta y prevención', copy: 'Atención médica habitual para resolver consultas, realizar seguimiento y prevenir problemas de salud.', services: ['Medicina general y pediatría.', 'Especialidades médicas.', 'Urgencias y prevención.'] },
  { number: '02', short: 'Diagnóstico', title: 'Diagnóstico y tratamiento', copy: 'Pruebas y tratamientos para confirmar un diagnóstico y continuar el proceso asistencial.', services: ['Análisis y pruebas diagnósticas.', 'Rehabilitación.', 'Técnicas especiales de tratamiento.'] },
  { number: '03', short: 'Hospitalización', title: 'Hospitalización', copy: 'Las modalidades completas pueden incorporar ingreso, cirugía y atención hospitalaria.', services: ['Hospitalización y cirugía.', 'Hospital de día.', 'Embarazo y parto según condiciones.'] },
  { number: '04', short: 'Atención digital', title: 'Atención digital y seguimiento', copy: 'Servicios a distancia para consultar, hacer seguimiento y acceder a apoyo profesional.', services: ['Telemedicina.', 'Videoconsulta.', 'Apoyo y orientación médica.'] },
];

const additional = [
  { Icon: BadgePlus, title: 'Cobertura dental básica', copy: 'Puede incluir consultas, limpiezas, extracciones, curas y determinadas pruebas dentales dentro del cuadro concertado. Según modalidad y condiciones.' },
  { Icon: Plane, title: 'Asistencia durante viajes', copy: 'Atención médica y coordinación de asistencia durante desplazamientos temporales, dentro de los límites contratados.' },
  { Icon: ClipboardPlus, title: 'Segunda opinión médica', copy: 'Revisión de diagnósticos o tratamientos complejos por profesionales especializados cuando el servicio esté incluido.' },
  { Icon: ShieldPlus, title: 'Protección por accidente', copy: 'Determinadas modalidades pueden incorporar una indemnización por fallecimiento accidental de hasta 6.000 €, según edad y condiciones.' },
];

function JourneyPanel() {
  return <div className={styles.journeyPanel} aria-hidden="true">
    <svg className={styles.route} viewBox="0 0 520 410" fill="none" aria-hidden="true"><path d="M84 70 C210 45 285 152 238 210 S300 316 443 345" stroke="#35AAA0" strokeWidth="2.5" strokeLinecap="round" /></svg>
    <div className={`${styles.node} ${styles.nodeOne}`}><span className={styles.nodeNumber}>01</span><span className={styles.iconCircle}><Stethoscope /></span><b>Consulta</b></div>
    <div className={`${styles.node} ${styles.nodeTwo}`}><span className={styles.nodeNumber}>02</span><span className={styles.iconCircle}><ScanLine /></span><b>Diagnóstico</b></div>
    <div className={`${styles.node} ${styles.nodeThree}`}><span className={styles.nodeNumber}>03</span><span className={styles.iconCircle}><Hospital /></span><b>Hospitalización</b></div>
    <div className={`${styles.node} ${styles.nodeFour}`}><span className={styles.nodeNumber}>04</span><span className={styles.iconCircle}><MonitorSmartphone /></span><b>Seguimiento digital</b></div>
  </div>;
}

export function BusinessHealthServicesSection() {
  return <section className={styles.section} aria-labelledby="business-health-services-title"><div className={`container-shell ${styles.shell}`}>
    <header className={styles.heading}><p className={styles.eyebrow}>SERVICIOS MÉDICOS</p><h2 id="business-health-services-title">Del primer diagnóstico al seguimiento médico</h2><p>Según la modalidad contratada, el equipo puede acceder a consultas, pruebas, tratamientos, hospitalización y servicios digitales dentro de una misma cobertura.</p></header>
    <div className={styles.mainGrid}><JourneyPanel /><div className={styles.stageList}>{stages.map(({number,title,copy,services})=><article className={styles.stage} key={number}><div className={styles.stageNumber}>{number}</div><div className={styles.stageContent}><h3>{title}</h3><p>{copy}</p><ul>{services.map(service=><li key={service}>{service}</li>)}</ul></div></article>)}</div></div>
    <section className={styles.additional} aria-labelledby="business-health-additional-title"><header className={styles.additionalHeading}><p className={styles.eyebrow}>SERVICIOS ADICIONALES SEGÚN MODALIDAD</p><h3 id="business-health-additional-title">Prestaciones que pueden ampliar la cobertura</h3><p>Algunas modalidades incorporan servicios adicionales que complementan la asistencia médica principal.</p></header><div className={styles.additionalItems}>{additional.map(({Icon,title,copy})=><article key={title}><Icon aria-hidden="true" /><h4>{title}</h4><p>{copy}</p></article>)}</div><p className={styles.additionalNote}>Las prestaciones adicionales dependen de la modalidad, la edad, los límites y las condiciones de contratación.</p></section>
  </div></section>;
}

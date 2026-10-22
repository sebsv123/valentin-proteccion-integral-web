import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { B2BAbsenceCalculator } from '@/components/b2b/b2b-interactions';
import s from '@/components/empresas/empresas.module.css';

export const metadata: Metadata = { title: 'Calculadora de absentismo | VPI Empresas', description: 'Estima el coste salarial directo del absentismo con tus datos. Herramienta orientativa con metodología explícita.', alternates: { canonical: 'https://valentinproteccionintegral.com/empresas/recursos' } };
export default function ResourcesPage() {
  return <div className={s.page}><Header /><main className={`${s.shell} ${s.resourcesPage}`}><a href="/empresas" className={s.arrowLink}>← Volver a empresas</a><p className={s.eyebrow}>HERRAMIENTA PARA EMPRESAS</p><h1>Haz visible el coste<br /><em>del absentismo.</em></h1><p className={s.resourceIntro}>Ajusta personas, salario, tasa y días laborables. El resultado estima coste salarial directo; no calcula el ahorro que produciría contratar un seguro.</p><section id="calculadora-absentismo" aria-labelledby="calculator-title"><h2 id="calculator-title" className={s.srOnly}>Estimación del coste salarial</h2><B2BAbsenceCalculator /></section><section id="propuesta" className={s.resourceTail}><h2>Los números abren la conversación.</h2><p>La salud de tu equipo requiere más contexto que una estimación de costes.</p><a href="/empresas#propuesta" className={s.primary}>Solicitar propuesta</a></section></main><Footer /></div>;
}

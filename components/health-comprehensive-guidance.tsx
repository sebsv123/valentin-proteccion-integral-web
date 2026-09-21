import Link from 'next/link';

type Locale = 'es' | 'en';

const scenarios: Record<Locale, Array<{ title: string; copy: string }>> = {
  es: [
    { title: 'Principalmente consultas y especialistas', copy: 'Si prevés un uso principalmente ambulatorio, la hospitalización puede no ser el factor central de tu decisión.' },
    { title: 'Quiero que el proceso pueda continuar en privado', copy: 'La hospitalización puede importar si quieres valorar ingreso o cirugía privada después de un diagnóstico, según la póliza.' },
    { title: 'Usaría la pública para los ingresos', copy: 'Puedes valorar la atención privada ambulatoria y mantener otra preferencia para los ingresos; revisa qué estructura responde a ese uso.' },
    { title: 'Tengo un hospital o especialista concreto', copy: 'Comprueba que el profesional o centro está disponible en el cuadro médico vigente antes de contratar.' },
  ],
  en: [
    { title: 'Mostly consultations and specialists', copy: 'If you expect mainly outpatient use, hospital cover may not be the central factor in your decision.' },
    { title: 'I want the pathway to continue privately', copy: 'Hospital cover may matter if you want to consider private admission or surgery after a diagnosis, subject to the policy.' },
    { title: 'I would use public hospitals', copy: 'You may prefer private outpatient care while using public hospitals for admissions; review which structure fits that use.' },
    { title: 'I have a specific hospital or specialist', copy: 'Check that the professional or centre is available in the current medical directory before arranging cover.' },
  ],
};

const checks: Record<Locale, Array<{ title: string; copy: string }>> = {
  es: [
    { title: 'Cuadro médico hospitalario', copy: 'Comprueba los hospitales y profesionales disponibles para la modalidad y el producto concretos. La red puede cambiar.' },
    { title: 'Carencias', copy: 'Una carencia limita cuándo puede utilizarse una prestación después del inicio. No es lo mismo que una preexistencia.' },
    { title: 'Autorización previa', copy: 'Un ingreso, una prueba o una cirugía pueden necesitar autorización según la aseguradora y la póliza. Tener cita no equivale a tener autorización.' },
    { title: 'Cuestionario y suscripción', copy: 'Si hay cuestionario de salud, respóndelo con exactitud conforme a lo que pregunte la aseguradora. La suscripción no garantiza aceptación ni rechazo.' },
    { title: 'Exclusiones y límites', copy: 'Revisa qué tratamientos, servicios o situaciones quedan fuera o tienen condiciones particulares en la documentación.' },
    { title: 'Fecha de efecto', copy: 'Comprueba desde cuándo empieza la cobertura y cómo se relaciona esa fecha con carencias, autorizaciones y el uso que prevés.' },
  ],
  en: [
    { title: 'Hospital network', copy: 'Check the hospitals and professionals available for the specific plan and product. Networks can change.' },
    { title: 'Waiting periods', copy: 'A waiting period limits when a benefit can be used after the policy starts. It is different from a pre-existing condition.' },
    { title: 'Prior authorisation', copy: 'An admission, test or surgery may require authorisation depending on the insurer and policy. Having an appointment is not the same as having authorisation.' },
    { title: 'Questionnaire and underwriting', copy: 'If there is a health questionnaire, answer accurately according to what the insurer asks. Underwriting does not guarantee acceptance or rejection.' },
    { title: 'Exclusions and limits', copy: 'Check which treatments, services or situations are excluded or subject to particular conditions in the policy documents.' },
    { title: 'Effective date', copy: 'Check when cover starts and how that date relates to waiting periods, authorisations and the use you expect.' },
  ],
};

export function HealthComprehensiveGuidance({ locale }: { locale: Locale }) {
  const en = locale === 'en';
  return (
    <>
      <section className="section-pad bg-alternate" aria-labelledby="comprehensive-scenarios-title">
        <div className="container-shell">
          <p className="kicker">{en ? 'THE HOSPITAL COVER DECISION' : 'LA DECISIÓN SOBRE HOSPITALIZACIÓN'}</p>
          <h2 id="comprehensive-change-title" className="mt-3 section-title">{en ? 'What changes when hospital cover is added?' : '¿Qué cambia al añadir hospitalización?'}</h2>
          <p className="section-copy mt-4 max-w-3xl">{en ? 'There is no universal answer. Think about how you expect to use private healthcare and whether hospital admission or surgery should form part of that pathway.' : 'No hay una respuesta universal. Piensa en cómo esperas usar la sanidad privada y si quieres que el ingreso hospitalario o la cirugía formen parte de ese recorrido.'}</p>
          <h3 id="comprehensive-scenarios-title" className="mt-8 font-heading text-2xl font-bold text-[var(--blue-deep)]">{en ? 'Do you need hospital cover or mainly specialists and tests?' : '¿Necesitas hospitalización o principalmente especialistas y pruebas?'}</h3>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {scenarios[locale].map((scenario) => (
              <article key={scenario.title} className="rounded-[22px] border border-[var(--border)] bg-white p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold leading-tight text-[var(--blue-deep)]">{scenario.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{scenario.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white-pure" aria-labelledby="comprehensive-checks-title">
        <div className="container-shell">
          <p className="kicker">{en ? 'BEFORE YOU CHOOSE' : 'ANTES DE ELEGIR'}</p>
          <h2 id="comprehensive-checks-title" className="mt-3 section-title">{en ? 'Before choosing hospital cover, check this' : 'Antes de elegir cobertura con hospitalización, comprueba esto'}</h2>
          <p className="section-copy mt-4 max-w-3xl">{en ? 'These checks describe what to verify in the specific policy. They do not predict how an insurer will assess an individual application.' : 'Estos puntos indican qué conviene verificar en la póliza concreta. No predicen cómo valorará una aseguradora una solicitud individual.'}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {checks[locale].map((check) => (
              <article key={check.title} className="rounded-[22px] border border-[var(--border)] bg-[var(--bg)] p-6">
                <h3 className="font-heading text-xl font-bold leading-tight text-[var(--blue-deep)]">{check.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{check.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <Link className="text-[var(--blue)] underline underline-offset-4" href={en ? '/en/insurance/health' : '/seguros/salud'}>{en ? 'Back to health insurance decisions' : 'Volver a las decisiones de salud'}</Link>
            <Link className="text-[var(--blue)] underline underline-offset-4" href={en ? '/en/insurance/health-insurance/reimbursement' : '/seguros/salud/reembolso'}>{en ? 'Review reimbursement as a different mechanism' : 'Revisar el reembolso como mecanismo distinto'}</Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Script from 'next/script';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { BusinessCyberHero } from '@/components/business-cyber-hero';
import { BusinessCyberValueStrip } from '@/components/business-cyber-value-strip';
import { BusinessCyberImpactSection } from '@/components/business-cyber-impact-section';
import { BusinessCyberIncidentsSection } from '@/components/business-cyber-incidents-section';
import { BusinessCyberProtectionSection } from '@/components/business-cyber-protection-section';
import { BusinessCyberPreventionVsResponse } from '@/components/business-cyber-prevention-vs-response';
import { BusinessCyberResponseProcess } from '@/components/business-cyber-response-process';
import { BusinessCyberProfilesSection } from '@/components/business-cyber-profiles-section';
import { BusinessCyberPreventionSection } from '@/components/business-cyber-prevention-section';
import { BusinessCyberFaqSection } from '@/components/business-cyber-faq-section';
import { BusinessCyberLeadForm } from '@/components/business-cyber-lead-form';
import { BusinessCyberFinalCta } from '@/components/business-cyber-final-cta';
import { site } from '@/lib/products';
import styles from './cybersecurity-page.module.css';

const cyberFaq = [
  ['¿Un ciberseguro sustituye al antivirus o a mi proveedor informático?', 'No. Las medidas de seguridad reducen la probabilidad y el alcance de un incidente. La ciberprotección está orientada a organizar la respuesta y afrontar determinadas consecuencias cuando el incidente ya se ha producido, según la modalidad contratada.'],
  ['¿Tiene sentido para una empresa pequeña?', 'Puede tenerlo cuando la actividad depende de correo electrónico, equipos, facturación, datos, plataformas o proveedores tecnológicos. El tamaño es solo uno de los factores que deben revisarse.'],
  ['¿Y si toda la informática está externalizada?', 'La empresa puede seguir sufriendo la interrupción, las pérdidas económicas, las reclamaciones o el daño reputacional aunque el fallo se origine en un proveedor. También deben revisarse los contratos y responsabilidades de cada parte.'],
  ['¿Puede cubrir un error cometido por un empleado?', 'Algunas soluciones contemplan incidentes originados por errores humanos o ingeniería social, pero la aplicación concreta depende de las coberturas, exclusiones y circunstancias del caso.'],
  ['¿Qué ocurre cuando comunico un incidente?', 'Se recopila información inicial, se valora el alcance y pueden coordinarse actuaciones técnicas, legales o de comunicación. El proceso depende del tipo de incidente y de la solución contratada.'],
  ['¿Qué información necesitáis para preparar un estudio?', 'Actividad, tamaño del equipo, provincia, facturación aproximada, dependencia tecnológica, tipo de datos tratados, medidas de seguridad y antecedentes de incidentes o reclamaciones que deban declararse.'],
  ['¿Toda pérdida causada por phishing o fraude queda cubierta?', 'No. La cobertura depende de la modalidad, los límites, las exclusiones, las medidas de seguridad y las circunstancias concretas del fraude.'],
] as const;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Ciberprotección para empresas', provider: { '@type': 'Organization', name: site.name }, areaServed: 'España', serviceType: 'Orientación sobre soluciones de ciberprotección empresarial', url: `${site.domain}/empresas/ciberseguridad` },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: site.domain }, { '@type': 'ListItem', position: 2, name: 'Empresas' }, { '@type': 'ListItem', position: 3, name: 'Ciberseguridad', item: `${site.domain}/empresas/ciberseguridad` }] },
    { '@type': 'FAQPage', mainEntity: cyberFaq.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
  ],
};

export const metadata: Metadata = {
  title: 'Ciberseguridad para Empresas | Valentín Protección Integral',
  description: 'Soluciones de ciberprotección para autónomos y empresas frente a ransomware, phishing, fraude, brechas de datos e interrupciones de actividad.',
  alternates: { canonical: 'https://valentinproteccionintegral.com/empresas/ciberseguridad' },
  robots: { index: true, follow: true },
  openGraph: { title: 'Ciberseguridad para Empresas | Valentín Protección Integral', description: 'Soluciones de ciberprotección para autónomos y empresas frente a ransomware, phishing, fraude, brechas de datos e interrupciones de actividad.', url: 'https://valentinproteccionintegral.com/empresas/ciberseguridad', type: 'website', images: [{ url: `${site.domain}/brand/logo-vpi.jpeg`, alt: site.name }] },
  twitter: { card: 'summary_large_image', title: 'Ciberseguridad para Empresas | Valentín Protección Integral', description: 'Soluciones de ciberprotección para autónomos y empresas frente a incidentes e interrupciones de actividad.', images: [`${site.domain}/brand/logo-vpi.jpeg`] },
};

export default function CybersecurityPage() {
  return <div className={styles.page}><Header /><Script id="business-cyber-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><main><div className="container-shell pt-6 md:pt-8"><Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Empresas' }, { label: 'Ciberseguridad' }]} /></div><BusinessCyberHero /><BusinessCyberValueStrip /><BusinessCyberImpactSection /><BusinessCyberIncidentsSection /><BusinessCyberProtectionSection /><BusinessCyberPreventionVsResponse /><BusinessCyberResponseProcess /><BusinessCyberProfilesSection /><BusinessCyberPreventionSection /><BusinessCyberFaqSection /><BusinessCyberLeadForm /><BusinessCyberFinalCta /></main><Footer /></div>;
}

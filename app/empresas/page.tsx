import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Building2, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { buildWhatsAppHref, site } from "@/lib/products";
import styles from "./empresas-page.module.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Soluciones para empresas",
      description:
        "Soluciones de salud para equipos y ciberprotección para empresas.",
      url: `${site.domain}/empresas`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: site.domain },
        {
          "@type": "ListItem",
          position: 2,
          name: "Empresas",
          item: `${site.domain}/empresas`,
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Soluciones para empresas | Salud y Ciberseguridad | Valentín Protección Integral",
  description:
    "Soluciones de salud para equipos y ciberprotección para empresas. Estudiamos cada caso y explicamos las opciones con claridad.",
  alternates: { canonical: `${site.domain}/empresas` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Soluciones para empresas | Valentín Protección Integral",
    description:
      "Salud para equipos y ciberprotección para empresas, explicadas con claridad.",
    url: `${site.domain}/empresas`,
    type: "website",
    images: [{ url: `${site.domain}/brand/logo-vpi.jpeg`, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluciones para empresas | Valentín Protección Integral",
    description: "Salud para equipos y ciberprotección para empresas.",
    images: [`${site.domain}/brand/logo-vpi.jpeg`],
  },
};

export default function EmpresasPage() {
  return (
    <div className={styles.page}>
      <Header />
      <Script
        id="business-solutions-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <div className="container-shell pt-6 md:pt-8">
          <Breadcrumbs
            items={[{ label: "Inicio", href: "/" }, { label: "Empresas" }]}
          />
        </div>
        <section
          className={styles.hero}
          aria-labelledby="business-solutions-title"
        >
          <p className={styles.eyebrow}>SOLUCIONES PARA EMPRESAS</p>
          <h1 id="business-solutions-title">
            Protección para las personas y para la continuidad del negocio
          </h1>
          <p className={styles.intro}>
            Estudiamos soluciones de salud para equipos y ciberprotección para
            empresas que necesitan reducir el impacto de un incidente y
            recuperar su actividad.
          </p>
        </section>
        <section
          className={styles.options}
          aria-labelledby="business-options-title"
        >
          <h2 id="business-options-title" className={styles.srOnly}>
            Elige una solución para tu empresa
          </h2>
          <article className={`${styles.option} ${styles.health}`}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/home/meeting-real.jpg"
                alt="Equipo reunido en un entorno luminoso para revisar una propuesta"
                fill
                sizes="(max-width: 800px) 100vw, 48vw"
              />
            </div>
            <div className={styles.optionBody}>
              <div className={styles.optionIcon}>
                <Building2 aria-hidden="true" />
              </div>
              <p className={styles.optionEyebrow}>SALUD PARA EMPRESAS</p>
              <h3>Cobertura médica adaptada al equipo y al presupuesto</h3>
              <p>
                Comparamos asistencia ambulatoria, hospitalización, copagos,
                reembolso y formas de financiación desde dos asegurados, según
                modalidad y condiciones.
              </p>
              <Link href="/empresas/salud" className={styles.optionLink}>
                Ver Salud para empresas <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </article>
          <article className={`${styles.option} ${styles.cyber}`}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/ciberseguridad/equipo-trabajando.jpg"
                alt="Equipo trabajando con herramientas digitales en una oficina"
                fill
                sizes="(max-width: 800px) 100vw, 48vw"
              />
            </div>
            <div className={styles.optionBody}>
              <div className={styles.optionIcon}>
                <ShieldCheck aria-hidden="true" />
              </div>
              <p className={styles.optionEyebrow}>
                CIBERPROTECCIÓN PARA EMPRESAS
              </p>
              <h3>
                Prepararse para responder cuando un incidente afecta al negocio
              </h3>
              <p>
                Estudiamos soluciones frente a ransomware, fraude, accesos no
                autorizados, brechas de datos e interrupciones de actividad,
                según modalidad y condiciones.
              </p>
              <Link
                href="/empresas/ciberseguridad"
                className={styles.optionLink}
              >
                Ver Ciberseguridad <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </article>
        </section>
        <section
          className={styles.contact}
          aria-label="Orientación para empresas"
        >
          <h2>¿No sabes qué solución encaja con tu empresa?</h2>
          <p>
            Cuéntanos qué necesitas y te orientamos hacia la solución adecuada.
          </p>
          <a
            href={buildWhatsAppHref(
              "Hola, quiero orientación sobre soluciones para empresas.",
            )}
            className={styles.contactLink}
          >
            Hablar con nosotros <ArrowRight aria-hidden="true" />
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

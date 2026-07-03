export default function SchemaPersons() {
  const rosa = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rosa Valentín",
    "jobTitle": "Agente de Seguros Registrada DGSFP",
    "description": "Agente de seguros registrada en la DGSFP, responsable profesional de la marca Valentín Protección Integral en Madrid. Especialista en seguros de salud, mascotas, dental, viaje, accidentes, decesos y negocios. Asesora con claridad y sin presión comercial.",
    "url": "https://valentinproteccionintegral.com/sobre-nosotros",
    "image": "https://valentinproteccionintegral.com/og-image.webp",
    "telephone": "+34 603 448 765",
    "email": "contacto@valentinproteccionintegral.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Boadilla del Monte",
      "addressRegion": "Comunidad de Madrid",
      "addressCountry": "ES"
    },
    "sameAs": [
      "https://www.instagram.com/segurosvalentin/",
      "https://wa.me/34603448765"
    ],
    "knowsAbout": [
      "Seguros de salud",
      "Seguros para mascotas",
      "Seguros dentales",
      "Seguros de viaje",
      "Seguros de accidentes",
      "Protección jurídica",
      "Seguros de electrodomésticos",
      "Seguros de decesos",
      "Seguros para negocios y pymes",
      "Seguros para extranjeros con visado en España",
      "Ley de Bienestar Animal seguros mascotas",
      "Seguros para autónomos Madrid"
    ],
    "worksFor": {
      "@type": "LocalBusiness",
      "name": "Valentín Protección Integral",
      "url": "https://valentinproteccionintegral.com"
    }
  };

  const sebastian = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sebastián Sifontes Valentín",
    "jobTitle": "Especialista en seguros de vida, salud y accidentes",
    "description": "Economista y especialista en seguros de vida, salud y accidentes. Graduado en Doble Grado de Gestión y Administración Pública y Economía por la Universidad Complutense de Madrid, con estancia académica en la Freie Universität Berlin. Máster en Big Data, Data Science e Inteligencia Artificial (UCM, 2025-2026). Forma parte del equipo de Valentín Protección Integral y atiende consultas sobre protección familiar y seguros de vida.",
    "url": "https://valentinproteccionintegral.com",
    "sameAs": [
      "https://www.linkedin.com/in/sebastian-sifontes-valentin-752665187"
    ],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Universidad Complutense de Madrid",
        "url": "https://www.ucm.es"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "Freie Universität Berlin",
        "url": "https://www.fu-berlin.de"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Doble Grado en Gestión y Administración Pública – Economía",
        "credentialCategory": "degree",
        "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Universidad Complutense de Madrid" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Máster en Big Data, Data Science e Inteligencia Artificial",
        "credentialCategory": "postgraduate",
        "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Universidad Complutense de Madrid" }
      }
    ],
    "knowsAbout": [
      "Seguros de vida",
      "Seguro de vida vinculado a hipoteca",
      "Protección familiar mediante seguros",
      "Capital decreciente en seguros de vida",
      "Seguros de salud ASISA",
      "Seguros de accidentes personales",
      "Economía y administración pública",
      "Big Data aplicado al sector asegurador",
      "Inteligencia Artificial en seguros",
      "Análisis de datos económicos"
    ],
    "worksFor": {
      "@type": "LocalBusiness",
      "name": "Valentín Protección Integral",
      "url": "https://valentinproteccionintegral.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rosa) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sebastian) }}
      />
    </>
  );
}

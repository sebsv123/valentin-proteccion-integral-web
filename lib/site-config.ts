/**
 * FUENTE ÚNICA DE VERDAD de identidad, contacto y datos profesionales de
 * Valentín Protección Integral.
 *
 * Reglas (no romper):
 * - VPI es una MARCA COMERCIAL, no una compañía aseguradora.
 * - La responsable profesional es Rosa Isabel Valentín González.
 * - Datos de Rosa (NIF y clave DGSFP) verificados: no mezclar con los de
 *   ningún otro miembro del equipo.
 * - El código DGSFP de Sebastián (C046172295271S) NO debe publicarse.
 * - ASISA / ASISA VIDA y cualquier aseguradora son ENTIDADES TERCERAS.
 *
 * Los componentes deben leer de aquí en lugar de escribir estos datos a mano.
 */

export const siteConfig = {
  brand: {
    name: 'Valentín Protección Integral',
    shortName: 'VPI',
    // Naturaleza jurídica pública de la marca
    nature: 'Marca comercial de mediación de seguros',
    isInsurer: false,
    logo: '/brand/logo-vpi.webp',
    domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://valentinproteccionintegral.com',
  },

  /** Persona profesional públicamente responsable de la actividad y del sitio. */
  responsiblePerson: {
    fullName: 'Rosa Isabel Valentín González',
    displayName: 'Rosa Valentín',
    role: 'Agente de seguros registrada en la DGSFP · Responsable de la actividad',
    nif: '79234434D',
    dgsfpCode: 'C012479234434D',
    // Registro público donde puede comprobarse la inscripción
    dgsfpRegistryUrl: 'https://rrpp.dgsfp.mineco.es/',
  },

  /** Otros miembros del equipo. NUNCA publicar su clave DGSFP. */
  team: [
    {
      fullName: 'Sebastián Sifontes Valentín',
      displayName: 'Sebastián Valentín',
      role: 'Miembro del equipo · Especialista en salud y accidentes',
      // dgsfpCode intencionadamente ausente: no debe publicarse
    },
  ],

  contact: {
    phone: '+34 603 448 765',
    phoneHref: '+34603448765',
    whatsappNumber: '34603448765',
    whatsappHref: 'https://wa.me/34603448765',
    email: 'contacto@valentinproteccionintegral.com',
    addressLocality: 'Boadilla del Monte',
    addressRegion: 'Comunidad de Madrid',
    addressCountry: 'ES',
    schedule: 'Atención en horario comercial; las solicitudes fuera de horario se atienden el siguiente día laborable.',
  },

  social: {
    instagram: 'https://www.instagram.com/segurosvalentin/',
    instagramHandle: '@segurosvalentin',
  },

  legalLinks: {
    privacidad: '/privacidad',
    cookies: '/cookies',
    avisoLegal: '/aviso-legal',
  },

  /** Aseguradoras: SIEMPRE presentadas como entidades terceras. */
  insurers: {
    disclaimer:
      'Las aseguradoras (como ASISA o ASISA VIDA) son entidades terceras. VPI distribuye sus productos y te orienta, pero la aceptación del riesgo, las coberturas, las prestaciones y el pago de indemnizaciones corresponden a la aseguradora según la póliza.',
  },
} as const;

export type SiteConfig = typeof siteConfig;

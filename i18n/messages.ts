import type { Locale } from './routing';

export const messages = {
  es: {
    common: {
      home: 'Inicio',
      international: 'Internacional',
      contact: 'Contacto',
      language: 'Idioma',
      spanish: 'Español',
      english: 'English',
    },
    home: {
      eyebrow: 'ASESORES DE SEGUROS EN MADRID · ASESORAMIENTO CLARO Y PERSONAL',
      title: 'Protege lo importante, sin decidir a ciegas.',
      description: 'Te ayudamos a elegir con criterio. Analizamos tu caso, te explicamos las condiciones con claridad y te acompañamos antes y después de contratar.',
      advisor: 'Hablar con un asesor',
      whatsapp: 'Prefiero escribir por WhatsApp',
    },
    international: {
      eyebrow: 'VPI INTERNACIONAL',
      title: 'Cuando el destino cambia, también cambia lo que necesitas alrededor',
      lead: 'VPI Internacional conecta nuestra orientación aseguradora desde España con especialistas locales que conocen el país al que llegas.',
      discover: 'Descubrir destinos',
    },
    peru: {
      eyebrow: 'PERÚ · ESPAÑA · MOVILIDAD INTERNACIONAL',
      title: 'Perú, España y movilidad internacional',
      description: 'Asesoría para visados, movilidad internacional y procesos entre Perú, España y otros destinos, con VIP Global Perú y Valentín Protección Integral.',
      worldEyebrow: 'MUNDO → PERÚ',
      worldTitle: 'Y si el destino es Perú, también hay camino.',
      worldLead: 'VIP Global Perú también acompaña a quienes quieren vivir, estudiar o trabajar en Perú.',
    },
  },
  en: {
    common: {
      home: 'Home',
      international: 'International',
      contact: 'Contact',
      language: 'Language',
      spanish: 'Español',
      english: 'English',
    },
    home: {
      eyebrow: 'INSURANCE ADVISORS IN MADRID · CLEAR, PERSONAL GUIDANCE',
      title: 'Protect what matters, without deciding blindly.',
      description: 'We help you choose with confidence. We understand your situation, explain the conditions clearly and stay by your side before and after you buy.',
      advisor: 'Speak to an advisor',
      whatsapp: 'I would rather write on WhatsApp',
    },
    international: {
      eyebrow: 'VPI INTERNATIONAL',
      title: 'When your destination changes, so does what you need around you',
      lead: 'VPI International connects our insurance guidance from Spain with local specialists who understand the country you are moving to.',
      discover: 'Discover destinations',
    },
    peru: {
      eyebrow: 'PERU · SPAIN · INTERNATIONAL MOBILITY',
      title: 'Peru, Spain and international mobility',
      description: 'Guidance for visas, international mobility and processes between Peru, Spain and other destinations, with VIP Global Perú and Valentín Protección Integral.',
      worldEyebrow: 'WORLD → PERU',
      worldTitle: 'And if Peru is the destination, there is a path too.',
      worldLead: 'VIP Global Perú also supports people who want to live, study or work in Peru.',
    },
  },
} as const satisfies Record<Locale, unknown>;

export type Messages = (typeof messages)[Locale];

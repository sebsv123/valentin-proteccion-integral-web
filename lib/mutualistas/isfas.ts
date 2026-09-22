/** Official references and short, reusable content for the ISFAS help centre. */
import { siteConfig } from '@/lib/site-config';
import { isfasPartners } from '@/lib/mutualistas/partners';

export const isfasGuide = {
  path: '/mutualistas/isfas',
  reviewedOn: '2026-09-23',
  official: {
    home: 'https://www.defensa.gob.es/isfas/',
    affiliation: 'https://www.defensa.gob.es/isfas/afiliacion/titulares/',
    modalities: 'https://www.defensa.gob.es/isfas/destacados/ASanitaria/',
    ordinaryChange: 'https://www.defensa.gob.es/isfas/destacados/ASanitaria/DetalleAsistencia/DetalleCordinario.html',
    militaryCare: 'https://www.defensa.gob.es/isfas/destacados/ASanitaria/DetalleAsistencia/SanidadMilitar.html',
    procedures: 'https://sede.isfas.gob.es/sede-web/catalogo',
    concert: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-3596',
    emergency112: 'https://administracion.gob.es/tu-espacio-europeo/derechos-obligaciones/ciudadanos/asistencia-sanitaria/numeros-urgencia',
  },
  insurers: {
    asisa: {
      label: 'ASISA',
      code: 'A5',
      advisor: siteConfig.coFounders[1].displayName,
      advisorRole: siteConfig.coFounders[1].insurerRelationship,
      resources: {
        doctors: 'https://www.asisa.es/cuadro-medico',
        authorizations: 'https://www.asisa.es/mutualistas/mutuas-medicas/informacion/autorizaciones-medicas',
        card: 'https://www.asisa.es/mutualistas/mutuas-medicas/informacion/asegurados',
        app: 'https://www.asisa.es/preguntas-frecuentes/area-privada/tramites/que-tramites-puedo-hacer-desde-mi-area-privada',
        emergency: 'https://www.asisa.es/mutualistas/mutuas-medicas/informacion/urgencias',
        help: 'https://www.asisa.es/mutualistas/mutuas-medicas/contacto',
      },
      emergencyPhone: '900 900 118',
      emergencyHref: 'tel:900900118',
    },
    adeslas: {
      label: 'SegurCaixa Adeslas',
      code: 'A2',
      advisor: siteConfig.coFounders[0].displayName,
      advisorRole: siteConfig.coFounders[0].insurerRelationship,
      resources: {
        doctors: 'https://www.segurcaixaadeslas.es/mutualidades/isfas',
        authorizations: 'https://www.segurcaixaadeslas.es/servicios-para-clientes',
        card: 'https://www.segurcaixaadeslas.es/descarga-app-adeslas',
        app: 'https://www.segurcaixaadeslas.es/descarga-app-adeslas',
        emergency: 'https://www.segurcaixaadeslas.es/mutualidades/isfas',
        help: 'https://www.segurcaixaadeslas.es/contacto',
      },
      emergencyPhone: '900 322 237',
      emergencyHref: 'tel:900322237',
    },
  },
  partners: isfasPartners,
} as const;

export const isfasFaq = [
  { question: '¿Qué es ISFAS?', answer: 'Es el organismo que gestiona el Régimen Especial de Seguridad Social de las Fuerzas Armadas y otros colectivos adscritos.', source: isfasGuide.official.home },
  { question: '¿Quién pertenece a ISFAS?', answer: 'Entre los titulares de afiliación obligatoria están militares de carrera, tropa y marinería en servicio, alumnado de centros militares y determinados miembros de la Guardia Civil. Hay otros supuestos y exclusiones.', source: isfasGuide.official.affiliation },
  { question: '¿Qué modalidades sanitarias existen?', answer: 'A1 utiliza la red pública; A2, SegurCaixa Adeslas; A5, ASISA. Existen modalidades combinadas con Sanidad Militar con condiciones territoriales.', source: isfasGuide.official.modalities },
  { question: '¿Puedo tener ASISA con ISFAS?', answer: 'Sí, ASISA es entidad concertada para 2025–2026 y corresponde a la modalidad A5 completa.', source: isfasGuide.official.concert },
  { question: '¿Puedo tener Adeslas con ISFAS?', answer: 'Sí, SegurCaixa Adeslas es entidad concertada para 2025–2026 y corresponde a la modalidad A2 completa.', source: isfasGuide.official.concert },
  { question: '¿Cuándo puedo cambiar de entidad?', answer: 'El cambio ordinario se solicita en enero y solo puede hacerse una vez al año. ISFAS contempla supuestos extraordinarios sujetos a requisitos.', source: isfasGuide.official.modalities },
  { question: '¿Dónde veo mi cuadro médico?', answer: 'En el buscador oficial de tu entidad. Comprueba que el profesional o centro atiende tu modalidad ISFAS.', source: isfasGuide.insurers.asisa.resources.doctors, secondarySource: isfasGuide.insurers.adeslas.resources.doctors },
  { question: '¿Necesito autorización para una prueba?', answer: 'Depende de la prestación. Antes de pedir cita, consulta las autorizaciones de tu entidad o pregunta al centro que la realizará.', source: isfasGuide.insurers.asisa.resources.authorizations, secondarySource: isfasGuide.insurers.adeslas.resources.authorizations },
  { question: '¿Cómo obtengo o utilizo mi tarjeta?', answer: 'La tarjeta y los accesos digitales los gestiona tu entidad. Consulta sus instrucciones para identificarte y acceder a la asistencia.', source: isfasGuide.insurers.asisa.resources.card, secondarySource: isfasGuide.insurers.adeslas.resources.card },
  { question: '¿Qué hago en una urgencia?', answer: 'Si necesitas atención inmediata, llama al centro coordinador de tu entidad; ante una emergencia, llama al 112. No esperes respuesta de VPI por WhatsApp.', source: isfasGuide.official.emergency112 },
  { question: '¿Qué puede hacer VPI por mí?', answer: 'Podemos orientarte para localizar el canal correcto y resolver dudas sobre el uso de tu asistencia. Las autorizaciones corresponden a la entidad y los trámites de afiliación a ISFAS.', source: isfasGuide.official.procedures },
  { question: '¿VPI pertenece a ISFAS?', answer: 'No. Valentín Protección Integral es una marca de mediación de seguros y no forma parte de ISFAS ni de la Administración.', source: '/sobre-nosotros' },
] as const;

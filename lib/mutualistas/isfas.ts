/** Official references and short, reusable content for the ISFAS help centre. */
import { siteConfig } from '@/lib/site-config';
import { isfasPartners } from '@/lib/mutualistas/partners';

export const isfasGuide = {
  path: '/mutualistas/isfas',
  reviewedOn: '2026-10-01',
  official: {
    home: 'https://www.defensa.gob.es/isfas/',
    affiliation: 'https://www.defensa.gob.es/isfas/afiliacion/titulares/',
    modalities: 'https://www.defensa.gob.es/isfas/destacados/ASanitaria/',
    ordinaryChange: 'https://www.defensa.gob.es/isfas/destacados/ASanitaria/DetalleAsistencia/DetalleCordinario.html',
    militaryCare: 'https://www.defensa.gob.es/isfas/destacados/ASanitaria/DetalleAsistencia/SanidadMilitar.html',
    procedures: 'https://sede.isfas.gob.es/sede-web/catalogo',
    contact: 'https://www.defensa.gob.es/isfas/contacto/',
    claims: 'https://www.defensa.gob.es/isfas/formularios/reclamacion/index.html',
    beneficiaries: 'https://www.defensa.gob.es/isfas/afiliacion/beneficiarios/',
    electronicPrescription: 'https://www.defensa.gob.es/isfas/destacados/RecetaE.html',
    addressChanges: 'https://www.defensa.gob.es/isfas/destacados/NuevasTarjetas.html',
    abroad: 'https://www.defensa.gob.es/isfas/destacados/Extranjero/index.html',
    benefits: 'https://www.defensa.gob.es/isfas/destacados/Prestaciones/index.html',
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
        isfasFaq: 'https://www.asisa.es/mutualistas/mutuas-medicas/isfas',
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

export const isfasFaqGroups = [
  {
    id: 'faq-isfas', label: 'ISFAS', intro: 'Primeros pasos y gestiones del Instituto.',
    items: [
      { question: 'Acabo de incorporarme. ¿Qué hago primero?', answer: 'Primero confirma que tu alta ya figura en ISFAS y revisa qué modalidad tienes asignada. Después guarda los accesos de la red o entidad que te corresponda. Si tu alta todavía no aparece o tienes dudas con los datos, consulta con ISFAS antes de utilizar los canales de ASISA o Adeslas.', cta: 'Abrir Sede de ISFAS', source: isfasGuide.official.procedures },
      { question: '¿Cómo sé mi modalidad y qué significan A1, A2 y A5?', answer: 'A1 corresponde a la red pública, A2 a SegurCaixa Adeslas y A5 a ASISA. Para saber cuál tienes tú, revisa tu documentación de afiliación o confírmalo con ISFAS. No utilices los canales de una entidad hasta tener clara tu modalidad.', cta: 'Consultar modalidades ISFAS', source: isfasGuide.official.modalities },
      { question: '¿Qué gestiona ISFAS y qué gestiona mi entidad?', answer: 'ISFAS gestiona tu afiliación, beneficiarios, certificados y cambios de modalidad. Si estás en ASISA o Adeslas, la entidad gestiona el uso diario de su asistencia: cuadro médico, tarjeta y autorizaciones. Si estás en A1, utilizas la red pública.', cta: 'Abrir Sede de ISFAS', source: isfasGuide.official.procedures },
      { question: 'Todavía no tengo tarjeta. ¿Puedo ir al médico?', answer: 'Si estás en A2 o A5 y tu entidad ya conoce tu alta, debe facilitarte una tarjeta provisional u otro documento para utilizar sus medios mientras llega la tarjeta definitiva. Si no lo has recibido, pídelo a Adeslas o ASISA. Si estás en A1, confirma con ISFAS cómo identificarte en la red pública; las tarjetas de esas entidades no corresponden a tu modalidad.', cta: 'Consultar mi situación con ISFAS', source: isfasGuide.official.contact },
      { question: '¿Quién puede ser beneficiario?', answer: 'ISFAS permite incluir beneficiarios cuando se cumplen los requisitos establecidos para cada relación y situación. Si quieres añadir a alguien, comprueba primero si cumple las condiciones y presenta el alta ante ISFAS. VPI puede orientarte sobre dónde encontrar el trámite, pero el alta la realiza el Instituto.', cta: 'Ver beneficiarios en ISFAS', source: isfasGuide.official.beneficiaries },
      { question: '¿Cuándo puedo cambiar de entidad?', answer: 'En enero puedes solicitar a ISFAS un cambio ordinario, uno al año. Fuera de ese periodo existen supuestos extraordinarios con condiciones propias; confirma el tuyo con ISFAS antes de presentar la solicitud.', cta: 'Ver cambio de entidad', source: isfasGuide.official.modalities },
      { question: '¿Qué hago si cambio de destino o provincia?', answer: 'Comunica a ISFAS el cambio de domicilio o destino y actualiza tus datos según indique el Instituto. Cambiar de provincia no supone por sí solo un cambio de entidad: consulta con ISFAS si tu caso cumple los requisitos de un cambio extraordinario.', cta: 'Ver cambio de domicilio o destino', source: isfasGuide.official.addressChanges },
      { question: '¿Qué son las modalidades combinadas con Sanidad Militar?', answer: 'Además de A1, A2 y A5 existen modalidades en las que parte de la asistencia se combina con recursos de Sanidad Militar. Si en tu documentación aparece una modalidad C o D, consulta su esquema oficial antes de pedir cita, porque los canales pueden ser distintos.', cta: 'Ver modalidades combinadas', source: isfasGuide.official.modalities },
      { question: '¿Qué hago si necesito asistencia sanitaria fuera de España?', answer: 'El procedimiento depende de si viajas temporalmente, vas destinado o resides fuera. Antes de salir, consulta en ISFAS el apartado que corresponde a tu situación y la documentación necesaria; no presupongas que tu entidad en España cubre el viaje.', cta: 'Ver asistencia en el extranjero', source: isfasGuide.official.abroad },
      { question: '¿ISFAS tiene otras prestaciones además de la asistencia sanitaria?', answer: 'Sí. ISFAS publica otras prestaciones y ayudas, cada una con sus requisitos. Consulta el índice oficial y tramítalas ante el Instituto cuando corresponda.', cta: 'Ver prestaciones ISFAS', source: isfasGuide.official.benefits },
      { question: '¿Qué hago si mi entidad deniega una autorización o un reintegro?', answer: 'Pide primero a tu entidad el motivo de la denegación y guarda la respuesta o documentación del caso. Si no se resuelve y tu situación está entre los supuestos previstos en el Concierto, puedes plantearla ante tu Delegación de ISFAS. Si no sabes qué vía corresponde, VPI puede ayudarte a identificar el canal, pero la reclamación la tramita ISFAS.', cta: 'Ver reclamación ISFAS/Entidad', source: isfasGuide.official.claims },
      { question: '¿Cómo sé si una prueba o tratamiento está incluido?', answer: 'El Concierto ISFAS define la asistencia que deben prestar las entidades concertadas, pero una prestación concreta puede tener requisitos, centro concertado o autorización previa. Si tienes una prueba o tratamiento específico, comprueba los requisitos con tu entidad y utiliza el Concierto como referencia oficial.', cta: 'Consultar Concierto ISFAS', source: isfasGuide.official.concert },
    ],
  },
  {
    id: 'faq-asisa', label: 'ASISA', intro: 'Uso de la asistencia ISFAS con ASISA.',
    items: [
      { question: '¿Dónde busco un médico de ASISA para ISFAS?', answer: 'Usa el cuadro médico oficial de ASISA y selecciona la opción que corresponda a tu asistencia ISFAS. Comprueba centro y especialidad antes de pedir cita. Si el centro no te reconoce como mutualista, confirma tus datos con ASISA.', cta: 'Abrir cuadro médico ASISA', source: isfasGuide.insurers.asisa.resources.doctors },
      { question: '¿Cómo solicito una autorización con ASISA?', answer: 'Ten a mano la prescripción del profesional y comprueba si la prueba o tratamiento necesita autorización. Si la necesita, solicítala por el canal oficial de ASISA y espera su confirmación antes de realizarla.', cta: 'Gestionar autorización en ASISA', source: isfasGuide.insurers.asisa.resources.authorizations },
      { question: '¿Dónde encuentro mi tarjeta en la App ASISA?', answer: 'En la App ASISA, entra en «Tarjetas» y luego en «Ver todas». Si acabas de darte de alta y aún no tienes tarjeta, pregunta a ASISA por el documento provisional para utilizar la asistencia.', cta: 'Ver información de ASISA ISFAS', source: isfasGuide.insurers.asisa.resources.isfasFaq },
      { question: '¿Cómo uso la receta ISFAS con ASISA?', answer: 'Pregunta a tu médico si ya utiliza la receta electrónica de ISFAS. Si la utiliza, sigue el sistema de identificación indicado por ISFAS; si todavía no está incorporado, puede seguir utilizándose la receta oficial en papel. Una receta privada de ASISA no sustituye a la receta oficial de ISFAS.', cta: 'Ver cómo funciona la receta ISFAS', source: isfasGuide.official.electronicPrescription },
      { question: '¿Qué hago con un visado o si otra persona recoge mi medicación?', answer: 'Si tu medicamento necesita visado, consulta el procedimiento vigente con ISFAS antes de acudir a la farmacia: la guía oficial se está actualizando para incorporar el visado electrónico. Si otra persona recoge una prescripción electrónica por ti, debe llevar tu DNI y tu tarjeta sanitaria o la hoja de identificación del paciente.', cta: 'Ver instrucciones de receta ISFAS', source: isfasGuide.official.electronicPrescription },
      { question: '¿Cómo puedo cambiar a ASISA siendo de ISFAS?', answer: 'El cambio se solicita a ISFAS durante el periodo ordinario de enero. Fuera de ese periodo solo puede hacerse cuando se cumple alguno de los supuestos extraordinarios previstos por el Instituto.', cta: 'Ver cambio de entidad en ISFAS', source: isfasGuide.official.modalities },
    ],
  },
  {
    id: 'faq-adeslas', label: 'Adeslas', intro: 'Uso de la asistencia ISFAS con Adeslas.',
    items: [
      { question: '¿Dónde busco el cuadro médico de Adeslas para ISFAS?', answer: 'En la página oficial de Adeslas para ISFAS tienes el acceso al cuadro médico. Comprueba el centro y la especialidad antes de pedir cita. Si el centro no te reconoce como mutualista, confirma tus datos con Adeslas.', cta: 'Abrir cuadro médico Adeslas', source: isfasGuide.insurers.adeslas.resources.doctors },
      { question: '¿Cómo gestiono una autorización con Adeslas?', answer: 'Antes de realizar la prueba o tratamiento, confirma con Adeslas o con el centro si necesita autorización. Si la necesita, consulta los canales que Adeslas tenga habilitados para tu asistencia y comprueba qué función está disponible para tu caso antes de realizarla.', cta: 'Ver canales de autorización Adeslas', source: isfasGuide.insurers.adeslas.resources.authorizations },
      { question: '¿Dónde veo mi tarjeta digital y otras gestiones?', answer: 'Consulta la tarjeta digital desde la app o el Área Cliente de Adeslas. Desde ahí también pueden aparecer otras gestiones disponibles para tu asistencia, como autorizaciones. Las funciones habilitadas pueden variar según el tipo de asistencia.', cta: 'Ver App Adeslas', source: isfasGuide.insurers.adeslas.resources.card },
      { question: '¿Cómo uso la receta ISFAS con Adeslas?', answer: 'Pregunta a tu médico si ya trabaja con la receta electrónica de ISFAS. Si está incorporado, sigue el sistema de identificación indicado por ISFAS; si no, puede seguir utilizándose la receta oficial en papel. No confundas este circuito con la receta privada de otros productos de Adeslas.', cta: 'Ver cómo funciona la receta ISFAS', source: isfasGuide.official.electronicPrescription },
      { question: '¿Cómo puedo cambiar a Adeslas siendo de ISFAS?', answer: 'El cambio ordinario se solicita a ISFAS durante enero. Fuera de ese periodo, consulta primero si tu situación encaja en alguno de los supuestos extraordinarios previstos por el Instituto.', cta: 'Ver cambio de entidad en ISFAS', source: isfasGuide.official.modalities },
    ],
  },
] as const;

/** The JSON-LD and the visible accordions use exactly the same questions. */
export const isfasFaq = isfasFaqGroups.flatMap<{ question: string; answer: string; cta: string; source: string }>(({ items }) => items);

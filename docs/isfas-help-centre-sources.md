# ISFAS — auditoría editorial pre-publicación

Consulta: 23-09-2026. Alcance: `/mutualistas/isfas`. La información general no sustituye la respuesta de ISFAS o la entidad para un caso individual. Prioridad: ISFAS/BOE frente a copy comercial.

| Claim | Texto publicado (resumen fiel) | Fuente oficial | Fecha | Resultado |
| --- | --- | --- | --- | --- |
| Modalidades completas | A1 pública, A2 SegurCaixa Adeslas, A5 ASISA | [ISFAS: modalidades](https://www.defensa.gob.es/isfas/destacados/ASanitaria/) | 23-09-2026 | Confirmado; no implica cambio libre en cualquier momento. |
| Modalidades combinadas | Existen modalidades con Sanidad Militar sujetas a condiciones | [ISFAS: modalidades](https://www.defensa.gob.es/isfas/destacados/ASanitaria/), [detalle militar](https://www.defensa.gob.es/isfas/destacados/ASanitaria/DetalleAsistencia/SanidadMilitar.html) | 23-09-2026 | Confirmado; sin prometer disponibilidad territorial. |
| Entidades concertadas | ASISA y SegurCaixa Adeslas para 2025–2026 | [BOE-A-2025-3596](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-3596) | 23-09-2026 | Confirmado; no afirmar continuidad posterior a 2026. |
| Cambio ordinario | Enero, un cambio ordinario anual | [ISFAS: cambio ordinario](https://www.defensa.gob.es/isfas/destacados/ASanitaria/DetalleAsistencia/DetalleCordinario.html), [Sede](https://sede.isfas.gob.es/sede-web/catalogo) | 23-09-2026 | Confirmado. |
| Cambio extraordinario | Supuestos con requisitos propios | [ISFAS: modalidades](https://www.defensa.gob.es/isfas/destacados/ASanitaria/) | 23-09-2026 | Confirmado; se omiten criterios individualizados. |
| Afiliación obligatoria | Ejemplos de colectivos titulares; hay otros supuestos y excepciones | [ISFAS: titulares](https://www.defensa.gob.es/isfas/afiliacion/titulares/) | 23-09-2026 | Confirmado; no es lista jurídica exhaustiva. |
| Beneficiarios y certificados | La Sede tramita alta de beneficiario y certificados | [Sede ISFAS: catálogo](https://sede.isfas.gob.es/sede-web/catalogo) | 23-09-2026 | Confirmado; VPI no se atribuye esos trámites. |
| Sede electrónica | Catálogo de trámites ISFAS | [Sede ISFAS](https://sede.isfas.gob.es/sede-web/catalogo) | 23-09-2026 | Confirmado, HTTP 200 en Chromium. |
| Cuadro médico ASISA | Buscar profesionales y comprobar modalidad ISFAS | [ASISA: cuadro médico](https://www.asisa.es/cuadro-medico) | 23-09-2026 | Confirmado; sin prometer profesional concreto. |
| Cuadro médico Adeslas | Acceso desde la página ISFAS de Adeslas | [Adeslas: ISFAS](https://www.segurcaixaadeslas.es/mutualidades/isfas) | 23-09-2026 | Confirmado; HTTP 200 en Chromium con agente de usuario común. |
| Autorizaciones ASISA | Requisitos según prestación | [ASISA: autorizaciones mutualistas](https://www.asisa.es/mutualistas/mutuas-medicas/informacion/autorizaciones-medicas) | 23-09-2026 | Confirmado; no se promete autorización automática. |
| Autorizaciones Adeslas | Canal digital y seguimiento | [Adeslas: servicios](https://www.segurcaixaadeslas.es/servicios-para-clientes), [FAQ](https://www.segurcaixaadeslas.es/particulares/seguros-medicos/preguntas-frecuentes) | 23-09-2026 | Confirmado; HTTP 200 en Chromium con agente de usuario común. |
| Tarjeta/app ASISA | Instrucciones y área de asegurados | [ASISA: asegurados mutualistas](https://www.asisa.es/mutualistas/mutuas-medicas/informacion/asegurados) | 23-09-2026 | Confirmado; sin prometer sustitución universal de tarjeta. |
| Tarjeta/app Adeslas | App con tarjeta digital | [Adeslas: app](https://www.segurcaixaadeslas.es/descarga-app-adeslas) | 23-09-2026 | Confirmado; HTTP 200 en Chromium con agente de usuario común. |
| Urgencias ASISA | Centro coordinador: 900 900 118 | [ASISA: urgencias mutualistas](https://www.asisa.es/mutualistas/mutuas-medicas/informacion/urgencias), [catálogo ISFAS 2026](https://www.defensa.gob.es/isfas/Galerias/ficheros/Isfas/ASISA/VF_Jaexn_ISFAS_26.pdf) | 23-09-2026 | Confirmado en ambas fuentes. |
| Urgencias Adeslas | Centro coordinador: 900 322 237 | [Adeslas: ISFAS](https://www.segurcaixaadeslas.es/mutualidades/isfas), [catálogo ISFAS 2026](https://www.defensa.gob.es/isfas/Galerias/ficheros/Isfas/ADESLAS/LIBRO_BALEARES_ISFAS_2026.pdf) | 23-09-2026 | Confirmado; distinto del 900 50 50 40 de clientes generales. |
| Emergencia general | 112 | [Administración General: urgencias](https://administracion.gob.es/tu-espacio-europeo/derechos-obligaciones/ciudadanos/asistencia-sanitaria/numeros-urgencia) | 23-09-2026 | Confirmado; separado del contacto comercial. |
| Identidad VPI | Rosa: agente exclusiva Adeslas; Sebastián: agente exclusivo ASISA | `lib/site-config.ts` y `/sobre-nosotros` | 23-09-2026 | Configuración publicada; WhatsApp `+34 603 448 765` es general, no directo de ambos. |
| Partner | “Academia de Combate” | Confirmación del usuario; `lib/mutualistas/partners.ts` | 23-09-2026 | Confirmado. Solo slug `academia-combate`. |

## Decisiones y límites

- Title evergreen: el concierto sí sigue identificado como 2025–2026 en el cuerpo y requiere revisión antes de 2027. `reviewedOn` y `app/sitemap.ts` deben actualizarse tras revisar contenido.
- Se excluyeron cifras de cuadros médicos, comparativas, superioridad, cobertura absoluta, autorización garantizada y la ventana extraordinaria puntual de 2025.
- El navegador automatizado obtuvo inicialmente HTTP 500 de `defensa.gob.es` y challenge 403 de `segurcaixaadeslas.es`. Repetidos con un agente de usuario Chromium común, ambos dominios devolvieron HTTP 200 y contenido correcto. La comprobación secuencial de todos los enlaces obtuvo 200 en los de Adeslas/ASISA/BOE/Sede; Defensa respondió con timeouts intermitentes en esa pasada. No se publicó ninguna URL no corroborada.
- FAQPage se genera a partir de las mismas 23 preguntas renderizadas (12 ISFAS, 6 ASISA y 5 Adeslas). No se presupone aparición de rich results.

## Rutas y atención

| Intención | Interacciones desde la primera pantalla | Prioridad |
| --- | --- | --- |
| Nuevo ingreso | Primeros pasos → Sede ISFAS (2) | Trámite oficial antes que WhatsApp. |
| ASISA + médico | “Soy ASISA” → cuadro médico ASISA (2) | Entidad oficial. |
| Adeslas + autorización | “Soy Adeslas” → autorizaciones Adeslas (2) | Entidad oficial. |
| No sé mi modalidad | “No sé mi modalidad” → contacto ISFAS (2) | El contacto confirma situaciones personales; la página de modalidades solo explica los códigos. |
| A1 sin canal claro | Bloque modalidad → contacto ISFAS | Red pública; no dirigir a cuadro médico de ASISA/Adeslas. |
| Urgencia | Acceso visible en hero → teléfono 112/entidad (2) | Nunca WhatsApp. |
| Cambio | Gestiones ISFAS → reglas de cambio (1 enlace externo) | Sin oferta de cambio fuera de plazo. |

El WhatsApp precargado va a `34603448765`, punto común de VPI confirmado por el equipo. Cada botón de entidad la nombra; al seleccionar ASISA o Adeslas en el hero, los CTA generales de la misma vista también la incorporan. El mensaje de nuevo ingreso conserva su texto. La derivación posterior al agente exclusivo es **operativa**, no está automatizada por la web.

## Datos y eventos

`ref=academia-combate` se conserva solo en `sessionStorage` (`vpi_isfas_partner`) durante la sesión de pestaña y se añade al mensaje; no se guarda en servidor ni se acepta texto arbitrario. El proxy quita otros parámetros por 307 antes de cargar scripts. Canonical fijo a `/mutualistas/isfas`.

Eventos propios solo tras consentimiento: `isfas_page_view`, `isfas_partner_ref`, `isfas_entidad_asisa`, `isfas_entidad_adeslas`, `isfas_modalidad_desconocida`, `isfas_whatsapp_click`, `isfas_phone_click`, `isfas_official_isfas_click`, `isfas_medical_directory_click`, `isfas_authorization_click`, `isfas_emergency_click`. Campos: `page_path`, `partner_ref` (slug permitido), `entity` (`asisa`/`adeslas`) y `purpose: emergency` en teléfono de urgencias. Ningún mensaje WhatsApp ni texto libre pasa a `trackEvent`. GTM/GA4/Vercel Analytics globales tienen configuración remota no controlada por esta ruta.

V13: el salto interno del hero hacia las entidades no cuenta como `isfas_medical_directory_click`; ese evento se reserva para la salida al cuadro médico oficial. Un clic en un teléfono de urgencias produce deliberadamente `isfas_emergency_click` (contexto) y `isfas_phone_click` (canal telefónico): son dos dimensiones del mismo clic y **no deben sumarse como conversiones independientes** en reporting. Para confirmar una modalidad personal o pedir orientación A1, el destino es [Contacto ISFAS](https://www.defensa.gob.es/isfas/contacto/); la [página de modalidades](https://www.defensa.gob.es/isfas/destacados/ASanitaria/) solo explica los códigos, no consulta el expediente individual.

Piezas conceptualmente comunes para MUFACE/MUGEJU: enlace oficial, panel de entidad, FAQ, CTA y tracking con allowlist. Específicas de mutualidad: códigos, trámites, plazos, concierto y copy; de entidad: URLs, teléfonos, profesional; de partner: `slug → nombre`. La guía ya separa datos en `lib/mutualistas/`, pero parte del JSX continúa en `page.tsx`: antes de añadir otra mutualidad conviene extraer una plantilla de secciones comunes. No debe copiarse la página ISFAS ni crear rutas vacías.

## Estado visual final y límites vigentes

- La página usa `ejercito_aire.jpg` únicamente en el hero mediante `next/image`. La fotografía sanitaria se descartó y no forma parte de `public/` ni del render.
- No hay logos autorizados de ASISA o Adeslas en este proyecto. Se mantienen nombres tipográficos de igual peso; `data-logo-approval="pending"` reserva la integración futura previa autorización.
- En móvil, el CMP puede tapar inicialmente los accesos secundarios del hero hasta que se desplace la página o se decida sobre cookies. Al seguir el ancla de urgencias, los tres teléfonos quedan visibles por encima del banner. El CMP global no se modificó.

## V12 — auditoría de utilidad de FAQ (23-09-2026)

La revisión priorizó primer ingreso, tarjeta provisional, Sanidad Militar, extranjero, prestaciones, incidencias, cuadro médico y autorizaciones. Se retiraron las preguntas comerciales y la urgencia duplicada. El reparto final, tras trasladar la pregunta de cobertura concertada al grupo general, es de 12 ISFAS, 6 ASISA y 5 Adeslas.

La fuente enlazada junto a cada respuesta es la principal; cuando una respuesta abarca dos competencias, se documentan aquí las fuentes complementarias. El resumen no sustituye el trámite oficial ni promete cobertura, autorización, reintegro o derecho individual a cambiar fuera de plazo. El selector mejorado solo oculta visualmente los grupos no elegidos tras cargar JavaScript: las 23 preguntas están en el HTML inicial y los tres `details` siguen disponibles sin JavaScript. FAQPage procede del mismo array visible, sin preguntas añadidas solo al schema.

| FAQ / claim resumido | Fuente oficial principal (URL) | Revisión | Observaciones / límite |
| --- | --- | --- | --- |
| ISFAS: primer paso tras incorporarse: alta, modalidad y accesos | [Sede ISFAS](https://sede.isfas.gob.es/sede-web/catalogo) | 23-09-2026 | Orientación secuencial; no sustituye el alta. |
| ISFAS: A1 pública, A2 Adeslas, A5 ASISA; confirmar asignación | [Modalidades ISFAS](https://www.defensa.gob.es/isfas/destacados/ASanitaria/) | 23-09-2026 | No implica libre elección en cualquier fecha. |
| ISFAS: documento provisional desde alta conocida por entidad; identificación A1 pendiente | [Concierto BOE, cláusula 1.7](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-3596), [contacto oficial ISFAS](https://www.defensa.gob.es/isfas/contacto/) | 23-09-2026 | El Concierto respalda A2/A5. Para A1 no se halló un procedimiento público específico de identificación: el CTA dirige al contacto oficial para consultar la situación personal. No se promete cobertura de medios ajenos. |
| ISFAS: beneficiarios sujetos a requisitos y alta ante Instituto | [Beneficiarios ISFAS](https://www.defensa.gob.es/isfas/afiliacion/beneficiarios/) | 23-09-2026 | Sin resolver elegibilidad individual. |
| ISFAS: gestiones del Instituto frente a accesos de entidad | [Sede ISFAS](https://sede.isfas.gob.es/sede-web/catalogo), [Concierto BOE](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-3596) | 23-09-2026 | No se presenta a VPI como gestor oficial. |
| ISFAS: cambio ordinario en enero y excepciones condicionadas | [Modalidades ISFAS](https://www.defensa.gob.es/isfas/destacados/ASanitaria/) | 23-09-2026 | Un cambio ordinario al año; extraordinarios sujetos a requisitos. |
| ISFAS: variación de domicilio/provincia, distinta de cambio de entidad | [Actualización de domicilio ISFAS](https://www.defensa.gob.es/isfas/destacados/NuevasTarjetas.html), [modalidades](https://www.defensa.gob.es/isfas/destacados/ASanitaria/) | 23-09-2026 | Si cambia provincia, la propia página ISFAS indica vía no electrónica; no se promete cambio de entidad. |
| ISFAS: combinadas con Sanidad Militar | [Modalidades ISFAS](https://www.defensa.gob.es/isfas/destacados/ASanitaria/) | 23-09-2026 | Sin explicar exhaustivamente C/D ni asegurar disponibilidad local. |
| ISFAS: asistencia exterior según motivo y duración | [Asistencia en el extranjero ISFAS](https://www.defensa.gob.es/isfas/destacados/Extranjero/index.html) | 23-09-2026 | No se afirma que el concierto de la entidad española cubra viajes. |
| ISFAS: otras prestaciones y ayudas del Instituto | [Prestaciones ISFAS](https://www.defensa.gob.es/isfas/destacados/Prestaciones/index.html) | 23-09-2026 | No se replican importes, requisitos ni un catálogo exhaustivo. |
| ISFAS: reclamación por determinados supuestos de denegación/reintegro | [Formularios de reclamación ISFAS/Entidad](https://www.defensa.gob.es/isfas/formularios/reclamacion/index.html), [ayuda del trámite en Sede](https://sede.isfas.gob.es/ispre/ayuda/reclamaciones/RECCONENT.html), [Concierto BOE, cláusula 6.4](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-3596) | 23-09-2026 | El CTA lleva al formulario oficial, no a quejas generales. La ayuda de Sede describía el supuesto, aunque el rastreador automatizado devolvió error al abrirla. No se promete estimación; VPI solo identifica canal. |
| ASISA: buscar médico en cuadro oficial | [Cuadro médico ASISA](https://www.asisa.es/cuadro-medico) | 23-09-2026 | Comprobar asistencia ISFAS y profesional concreto. |
| ASISA: autorización según prestación y confirmación de entidad | [Autorizaciones mutualistas ASISA](https://www.asisa.es/mutualistas/mutuas-medicas/informacion/autorizaciones-medicas) | 23-09-2026 | No se promete concesión. |
| ASISA: tarjeta en App y documento provisional | [FAQ ASISA ISFAS](https://www.asisa.es/mutualistas/mutuas-medicas/isfas), [Concierto BOE](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-3596) | 23-09-2026 | El documento provisional depende de alta comunicada a la entidad. |
| ASISA: receta concertada, privada y farmacia ordinaria | [Receta ISFAS](https://www.defensa.gob.es/isfas/destacados/RecetaE.html), [FAQ ASISA ISFAS](https://www.asisa.es/mutualistas/mutuas-medicas/isfas) | 23-09-2026 | Implantación según incorporación del médico; no se equipara receta privada a oficial. |
| ASISA: visado y recogida por tercero | [Receta ISFAS](https://www.defensa.gob.es/isfas/destacados/RecetaE.html) | 23-09-2026 | Página ISFAS aún describe circuito de papel para visado; comprobar caso actualizado con Instituto. |
| ASISA: solicitar cambio ante ISFAS | [Modalidades ISFAS](https://www.defensa.gob.es/isfas/destacados/ASanitaria/) | 23-09-2026 | No decide ASISA ni se garantiza excepción. |
| Adeslas: cuadro médico ISFAS | [Adeslas ISFAS](https://www.segurcaixaadeslas.es/mutualidades/isfas) | 23-09-2026 | Sin prometer profesional o centro concreto. |
| Adeslas: solicitud y seguimiento de autorización | [Servicios Adeslas](https://www.segurcaixaadeslas.es/servicios-para-clientes) | 23-09-2026 | Página general: verificar funciones habilitadas para el mutualista. |
| Adeslas: tarjeta digital y gestiones | [App Adeslas](https://www.segurcaixaadeslas.es/descarga-app-adeslas) | 23-09-2026 | Página general; no se atribuyen funciones privadas de forma universal. |
| Adeslas: receta concertada ISFAS, no receta privada | [Receta ISFAS](https://www.defensa.gob.es/isfas/destacados/RecetaE.html) | 23-09-2026 | Sin usar como fuente una funcionalidad exclusiva de póliza privada. |
| Adeslas: solicitar cambio ante ISFAS | [Modalidades ISFAS](https://www.defensa.gob.es/isfas/destacados/ASanitaria/) | 23-09-2026 | No decide Adeslas ni se garantiza excepción. |
| ISFAS: comprobar una prestación concreta de cualquier entidad concertada | [Concierto BOE](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-3596) | 23-09-2026 | FAQ trasladada de Adeslas a ISFAS y redactada para ASISA o Adeslas. No equivale a autorización automática de toda prestación. |

Revisión editorial final: 23 FAQ (12 ISFAS, 6 ASISA, 5 Adeslas). El traslado de la pregunta sobre pruebas no modifica el número total ni crea contenido exclusivo para el schema; HTML visible y FAQPage siguen usando `isfasFaqGroups`/`isfasFaq`. Los CTA de tarjeta y reclamación apuntan ahora a contacto y formulario oficiales de ISFAS, respectivamente.

Control de enlaces: los 14 destinos únicos citados por la FAQ devolvieron HTTP 200 en Chromium local el 23-09-2026, incluidos domicilio, extranjero y prestaciones de ISFAS. Las restricciones de rastreo de `defensa.gob.es` pueden producir fallos intermitentes y no se interpretan por sí solas como baja del recurso. No se modificaron teléfonos ni canales de urgencia.

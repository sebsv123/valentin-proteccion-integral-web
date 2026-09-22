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
- Las FAQ de cuadro médico, autorizaciones y tarjeta ahora muestran recursos de ambas entidades; antes remitían solo a ASISA aunque la respuesta era general.
- El navegador automatizado obtuvo inicialmente HTTP 500 de `defensa.gob.es` y challenge 403 de `segurcaixaadeslas.es`. Repetidos con un agente de usuario Chromium común, ambos dominios devolvieron HTTP 200 y contenido correcto. La comprobación secuencial de todos los enlaces obtuvo 200 en los de Adeslas/ASISA/BOE/Sede; Defensa respondió con timeouts intermitentes en esa pasada. No se publicó ninguna URL no corroborada.
- FAQPage contiene solo las doce preguntas visibles. No se presupone aparición de rich results.

## Rutas y atención

| Intención | Interacciones desde la primera pantalla | Prioridad |
| --- | --- | --- |
| Nuevo ingreso | Acceso rápido → Sede ISFAS (2) | Trámite oficial antes que WhatsApp. |
| ASISA + médico | “Soy ASISA” → cuadro médico ASISA (2) | Entidad oficial. |
| Adeslas + autorización | “Soy Adeslas” → autorizaciones Adeslas (2) | Entidad oficial. |
| No sé mi modalidad | “No sé mi modalidad” → ISFAS modalidades/Sede (2) | ISFAS antes de ASISA/Adeslas. |
| Urgencia | Acceso visible en hero → teléfono 112/entidad (2) | Nunca WhatsApp. |
| Cambio | Acción rápida → reglas ISFAS (2) | Sin oferta de cambio fuera de plazo. |

El WhatsApp precargado va a `34603448765`, punto común de VPI. Cada botón de entidad la nombra; al seleccionar ASISA o Adeslas en el hero, los CTA generales de la misma vista también la incorporan. El mensaje de nuevo ingreso conserva su texto. La derivación posterior al agente exclusivo es **operativa**, no está automatizada por la web y debe confirmarse con el equipo antes de publicar.

## Datos y eventos

`ref=academia-combate` se conserva solo en `sessionStorage` (`vpi_isfas_partner`) durante la sesión de pestaña y se añade al mensaje; no se guarda en servidor ni se acepta texto arbitrario. El proxy quita otros parámetros por 307 antes de cargar scripts. Canonical fijo a `/mutualistas/isfas`.

Eventos propios solo tras consentimiento: `isfas_page_view`, `isfas_partner_ref`, `isfas_entidad_asisa`, `isfas_entidad_adeslas`, `isfas_modalidad_desconocida`, `isfas_whatsapp_click`, `isfas_phone_click`, `isfas_official_isfas_click`, `isfas_medical_directory_click`, `isfas_authorization_click`, `isfas_emergency_click`. Campos: `page_path`, `partner_ref` (slug permitido), `entity` (`asisa`/`adeslas`) y `purpose: emergency` en teléfono de urgencias. Ningún mensaje WhatsApp ni texto libre pasa a `trackEvent`. GTM/GA4/Vercel Analytics globales tienen configuración remota no controlada por esta ruta.

Piezas conceptualmente comunes para MUFACE/MUGEJU: enlace oficial, panel de entidad, FAQ, CTA y tracking con allowlist. Específicas de mutualidad: códigos, trámites, plazos, concierto y copy; de entidad: URLs, teléfonos, profesional; de partner: `slug → nombre`. La guía ya separa datos en `lib/mutualistas/`, pero parte del JSX continúa en `page.tsx`: antes de añadir otra mutualidad conviene extraer una plantilla de secciones comunes. No debe copiarse la página ISFAS ni crear rutas vacías.

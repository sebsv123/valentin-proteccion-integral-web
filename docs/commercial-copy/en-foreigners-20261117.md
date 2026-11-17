# EN foreigners · posicionamiento comercial · 17-11-2026

Base: main `5c595141b20a3064c71b2bf2fd4df9d006d5ffd4`. Draft independiente,
sin incorporar ni modificar PR #16/#21/#22/#23. No hay merge o despliegue productivo.

## Ruta real y alcance

GET de producción comprobado: `/en/insurance/health/foreigners` responde 200;
`/seguros/health-insurance-foreigners-spain` responde 308 hacia ella. La página
pública EN importa `SaludExtranjerosPageView` de la página ES; no servía el JSX
histórico. Una búsqueda web devolvió una copia antigua de la ruta histórica,
pero no se ha tratado esa caché como respuesta actual ni como evidencia de tráfico.
Los datos GSC del encargo son evidencia aportada, no una nueva extracción.

La copia histórica duplicada se sustituye por la vista EN compartida, conservando
el redirect. Así tampoco queda una segunda fuente con promesas universales y
MedicalBusiness. La vista activa ya usaba Service y lo mantiene. No cambian title,
description, canonical, hreflang, rutas ni configuración de redirects.

## Cambios

| Objetivo | Resultado en la página EN |
|---|---|
| Venta con asesoramiento personal | Hero y pasos explican experiencia práctica y selección entre las soluciones que VPI puede comercializar, con requisitos, cobertura y precio. Sin comparativa universal de todo el mercado. |
| Identidad | Agentes exclusivos, diferenciados de aseguradora/correduría; la aseguradora emite póliza y certificado. |
| Inglés y atención internacional | Inglés fluido y español en hero, diferenciales, identidad y FAQ. Se distingue del idioma de médicos, asistencia y call centres, dependiente del producto/proveedor. |
| Pago mensual | Hero, diferenciales, bloque de planificación y FAQ: solo donde la póliza y oferta individual lo permiten; no implica contrato mensual o libre cancelación ni aceptación consular automática. |
| Mayores de 70 | Diferencial y sección propia: explorar opciones elegibles para residencia, sujetas a edad de entrada real, suscripción/salud y trámite. Sin promesa universal de emisión ni máximos de edad extrapolados. |
| Marca genérica VPI | EN deja de mostrar nombres/comparativas de aseguradoras y usa criterios por situación. La versión ES se conserva. |
| Idoneidad | Revisión antes de comprar y apoyo documental, separando seguro y resolución administrativa. No aprobación de visado garantizada. |
| Representación visual | Se mantiene el contenedor de tarjeta, usando la foto existente del equipo en EN. La imagen anterior simulaba un certificado con sellos consulares y afirmaciones de cobertura; no se reutiliza en EN. |
| Enlaces | Se conservan CTAs y destinos de WhatsApp; se añaden enlaces EN a estudios y residencia no lucrativa desde el enlace a la guía existente. |

No nuevas cifras de clientes, países, años, precios o admisión por edades.
No nuevas promesas universales sobre copagos, carencias, consulados o permanencia.
FAQ visible y JSON-LD se generan desde el mismo contenido. No se modifica la
imagen ni el contenido comercial español en este trabajo.

## Respaldo y decisión de garantía

- La competencia comercial, inglés fluido y capacidad de estudiar casos 70+ son
  el posicionamiento expresamente confirmado en el encargo; estudiar no es emitir.
- Se leyó localmente MANUAL DE PRODUCTOS ASISA 2026.pdf, pp. 69–71. Confirma que
  los productos de visado descritos no admiten cambios/devoluciones ordinarios;
  la excepción requiere póliza sin iniciar efecto y carta oficial de denegación
  de visado o autorización de residencia. No basta un requerimiento informal.
- La página conserva esa información contractual condicionada en FAQ, sin marcas
  ni promesa de devolución íntegra propia. No se presenta como garantía ampliada VPI.
- El manual también distingue modalidades para residentes ya autorizados con
  fraccionamiento y condiciones distintas; no se generaliza al visado inicial.
- El segundo manual citado en el encargo no se localizó entre los recursos
  consultados. No se han publicado máximos 70/85 ni inferencias de elegibilidad
  basadas en colectivos o productos restringidos.
- No se encontró documento autorizado de la garantía propia. Se ha solicitado
  decisión al responsable y se entrega redacción para revisión **privada**, fuera
  del repositorio y no importada por la aplicación. El plan de garantía se mantiene;
  no se sustituye por una promesa inventada ni se publica su texto pendiente.

Para activar una garantía propia, VPI debe aprobar por escrito: conceptos e importe
a devolver; supuestos y exclusiones; rechazo formal por causa aseguradora; cobertura
no iniciada; documentación; plazos de solicitud y abono; quién paga; productos y
procedimientos incluidos; responsable y versión contractual. Si excede las condiciones
de la compañía, no atribuir ese compromiso a la aseguradora. Requiere otra revisión
antes de incorporarlo a página/FAQ/schema. La elección entre garantía propia y
alternativa de aseguradora sigue siendo una decisión del responsable.

Fuentes públicas auxiliares para distinguir documentación y trámite:
[Interior — NIE](https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/ciudadanos-de-la-union-europea/numero-de-Identidad-de-extranjero-nie/index.html),
[Interior — TIE](https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/regimen-general/tarjeta-de-identidad-de-extranjero/index.html).
No se copian manuales, condiciones privadas o documentos de clientes al repositorio.

## Verificación

- TypeScript, build, lint y regresiones existentes del workflow: PASS local.
- `npm run test:en-foreigners:rendered`: HTTP 200/308, metadatos/hreflang intactos,
  Service, igualdad FAQ/schema, mensajes comerciales y sus condiciones, ausencia
  de promesas antiguas/marcas en EN y contenido ES preservado. Integrado en CI.
- `npm run test:related:rendered`: contrato previo de extranjeros intacto.
- Chromium local 1440×1000 y 390×844: siete FAQs abiertas y comprobadas;
  cambio a español; sin desbordamiento horizontal móvil; mismos destinos de
  WhatsApp; texto visible ES idéntico a la build de base; cero POST y errores JS.
- No formularios enviados, mensajes, cambios de Forms/Sheets, trackers ni cookies.
- CI remoto se informa en la PR. No se autoriza desplegar: `vercel.json` desactiva
  únicamente el despliegue Git automático de esta rama, conservando el comportamiento
  por defecto de las demás. No se crea Preview ni se cambia configuración externa.
  [Mecanismo documentado por Vercel](https://vercel.com/docs/project-configuration/git-configuration#gitdeploymentenabled).

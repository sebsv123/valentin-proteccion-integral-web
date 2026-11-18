# Procedencia de imágenes — Blueprint editorial

Revisión: 18 de noviembre de 2026. Los assets se sirven localmente, sin dependencia de una API o del servidor del fotógrafo. No se usan fotografías ni elementos gráficos de Blueprint.

| Archivo en `public/` | Procedencia | Uso y tratamiento |
| --- | --- | --- |
| `partners/blueprint-spain.png` | Logo oficial ya existente en el repositorio; solicitado expresamente por Sebastián | Bienvenida de referral. Original 311×64, se muestra a 120 px de ancho. No se modifica ni enlaza como recomendación externa. |
| `images/editorial/fingerprint-preparation.webp` | Ilustración original generada para esta entrega mediante la herramienta integrada `image_gen` y la habilidad imagegen | 1600×1067, WebP calidad 84, aproximadamente 172 KiB. Escena conceptual identificada como ilustración generada con IA; sin documentos, emblemas o certificados oficiales. No representa a un cliente ni al equipo de Blueprint. |
| `images/editorial/moving-to-madrid.webp` | Alex Azabache, [White Concrete Buildings Under White Clouds, Pexels #3722818](https://www.pexels.com/photo/white-concrete-buildings-under-white-clouds-3722818/) | Fotografía real de Madrid. [Pexels License](https://www.pexels.com/license/); [confirmación de uso comercial por Pexels](https://help.pexels.com/hc/en-us/articles/360042295214-Can-I-use-the-photos-and-videos-for-a-commercial-project). Descargada de `https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&w=1800`. 1600×1067, WebP calidad 82, aproximadamente 172 KiB. Crédito visible. |
| `images/editorial/fbi-background-check-spain-social.jpg` | Derivada de la ilustración original anterior | 1200×630 JPEG; recorte con banda y título VPI creados mediante Sharp/SVG. |
| `images/editorial/moving-usa-spain-documents-insurance-social.jpg` | Derivada de la fotografía Pexels anterior | 1200×630 JPEG; recorte con banda y título VPI creados mediante Sharp/SVG. |

La licencia Pexels permite el uso comercial según sus términos. La fotografía se incorpora a una composición editorial de VPI; no se redistribuye como producto de stock ni se sugiere respaldo del fotógrafo.

## Generación original

Modo: herramienta integrada `image_gen`, sin API/CLI adicional. Prompt utilizado:

> Use case: illustration-story. Create a premium editorial illustration for a Spanish insurance agency's article on preparing residence documents and coordinating health insurance. Wide landscape 3:2 composition. Close view of a person's hand resting naturally on a small unbranded optical fingerprint reader on a warm ivory desk. Other hand of technician nearby, anatomically correct. Refined layered paper-cut / textured gouache illustration, sophisticated navy blue, muted teal and warm terracotta, subtle grain, soft daylight. Generous clear negative space toward left. Focus on the act of taking fingerprints, calm helpful atmosphere. No text, no paper documents, no passports, no certificates, no official seals, no police badges, no logos, no flags, no biometric screen patterns. This is an original conceptual illustration, not a documentary photo.

Se inspeccionaron las dos imágenes antes de integrarlas. Los hero usan `next/image`, dimensiones declaradas, `sizes` responsive y prioridad solo para la imagen principal. Los textos alternativos describen la imagen; el proceso y checklist se construyen en HTML semántico para que no dependan de una imagen para entenderse.

# 🏥 INFORME DE AUDITORÍA COMPLETA
## Valentín Protección Integral Web
### Preparación para Mercado — Octubre 2026

---

## 1. RESUMEN EJECUTIVO

La web de Valentín Protección Integral es un proyecto **Next.js 16 App Router** con alto potencial comercial pero con **inconsistencias estructurales, de diseño y SEO críticas** que deben resolverse antes de escalar en campañas.

### Hallazgos principales:
1. **43+ rutas generadas**, pero solo 36 indexadas en sitemap. Faltan páginas de producto clave.
2. **Dos sistemas de diseño paralelos** (CSS global + Tailwind puro de landings) generando inconsistencia visual.
3. **3 rutas duplicadas para autónomos** (`/autonomos`, `/landing/autonomos`, `/para/autonomos`) compitiendo entre sí.
4. **Página en inglés duplicada** (`/seguros/health-insurance-foreigners-spain`) sin hreflang correcto.
5. **Meta Pixel ID hardcodeado** en layout (`1307875004562255`) — dependencia frágil.
6. **Compliance casi limpio**: no se detectaron términos prohibidos en `.tsx`, pero hay `"Comparamos las mejores opciones"` y `"sin presión"` en metadata de `/seguros`.
7. **WhatsApp principal correcto** (34603448765), pero hay un segundo número (34689791380) para Sebastián en Schema.
8. **Imagen `acreditacion-sebastian-asisa.png`** menciona ASISA en nombre de archivo — riesgo compliance.
9. **Falta `npm run build` exitoso** — no se pudo verificar por timeout.
10. **0 "use client" innecesarios detectados** en páginas principales — buen trabajo server-first.

---

## 2. ESTADO TÉCNICO GENERAL

### Stack real
| Componente | Versión |
|-----------|---------|
| Next.js | **16.1.6** |
| React | **19.2.0** |
| TypeScript | **5.9.3** |
| Tailwind CSS | **latest** (v4) |
| Framer Motion | **11.5.4** |
| GSAP | **3.14.2** |
| Swiper | **11.1.14** |
| Embla Carousel | **8.3.0** |
| React Hook Form | **7.53.0** |
| Zod | **3.23.8** |
| Lucide React | **0.453.0** |
| Sharp | **0.34.5** |

### Configuración
- **next.config.ts**: Bien configurado — imágenes, headers de seguridad, redirects 301, bundle analyzer, CSS optimizado
- **tailwind.config.ts**: **Vacío** (solo `extend: {}`) — todo el diseño está en `globals.css` como clases CSS tradicionales
- **tsconfig.json**: No analizado en detalle
- **Middleware**: No existe
- **Layout global**: Bien estructurado con GTM, Meta Pixel, Clarity, Schema, Analytics, fuentes
- **Robots**: Bloquea `/gracias`, `/api/`, `/_next/`
- **Sitemap**: 36 URLs explícitas + dominio base

### Scripts
- `dev`, `build`, `start` — sin `lint` configurado

### Git
- Branch: `main`
- Último commit: `554905e` — "fix: actualizar enlace de Instagram a segurosvalentin"
- Working tree: limpio (por confirmar)

---

## 3. MAPA COMPLETO DE RUTAS (FASE 2)

### 3.1 Páginas principales

| URL | Archivo | Tipo | Metadata | Canonical | En Nav | En Footer | Sitemap | Indexable | Acción |
|-----|---------|------|----------|-----------|--------|-----------|---------|-----------|--------|
| `/` | `app/page.tsx` | Home | ✅ Layout | `/` | ✅ | ❌ | ✅ | ✅ | Mantener |
| `/seguros` | `app/seguros/page.tsx` | Producto hub | ✅ | `/seguros` | ✅ | ✅ | ✅ | ✅ | Mantener |
| `/seguros/[slug]` | `app/seguros/[slug]/page.tsx` | Producto dinámico | ✅ Dinámico | Dinámico | ❌ | ❌ | ❌ | ✅ | Mantener |
| `/seguros/salud-individual` | Archivo estático | Producto | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | Mantener |
| `/seguros/salud-dental` | Archivo estático | Híbrido salud+dental | ✅ | ❌ | ❌ | ❌ | ✅ | ❓ | Revisar — posible redundancia |
| `/seguros/salud-extranjeros` | Archivo estático | Producto extranjeros | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | Mantener |
| `/seguros/salud-senior` | Archivo estático | Producto senior | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | Añadir a sitemap |
| `/seguros/dental` | Archivo estático | Producto dental | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | Mantener |
| `/seguros/vida` | Archivo estático | Producto vida | ✅ | ❌ | ❌ | ❌ | ❌ ⚠️ | ✅ | Añadir a sitemap |
| `/seguros/vida/hipoteca` | Archivo estático | Subproducto | ✅ | ❌ | ❌ | ❌ | ❌ ⚠️ | ✅ | Añadir a sitemap |
| `/seguros/mascotas` | Archivo estático | Producto mascotas | ✅ | ❌ | ❌ | ❌ | ❌ ⚠️ | ✅ | Añadir a sitemap |
| `/seguros/viaje` | Archivo estático | Producto viaje | ✅ | ❌ | ❌ | ❌ | ❌ ⚠️ | ✅ | Añadir a sitemap |
| `/seguros/decesos` | Archivo estático | Producto decesos | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | Mantener |
| `/seguros/accidentes-decesos` | Archivo estático | Producto combinado | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | Mantener |
| `/seguros/accidentes` | Archivo estático | **Redirigido 301** | - | - | ❌ | ❌ | ❌ | ❌ | ✅ Redirigido correctamente |
| `/seguros/health-insurance-foreigners-spain` | Archivo estático | Inglés extranjeros | ✅ | ❌ | ❌ | ❌ | ✅ | ❓ | Revisar — hreflang necesario |
| `/extranjeros` | `app/extranjeros/page.tsx` | Landing vertical | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | Mantener (pilar) |
| `/garantias` | `app/garantias/page.tsx` | Confianza | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | Mantener |
| `/sobre-nosotros` | `app/sobre-nosotros/page.tsx` | Confianza | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | Mantener |
| `/sobre-mi` | `app/sobre-mi/page.tsx` | **Redirigido 301** | - | - | ❌ | ❌ | ❌ | ❌ | ✅ Redirigido correctamente |
| `/contacto` | `app/contacto/page.tsx` | Contacto | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | Mantener |
| `/como-te-ayudamos` | `app/como-te-ayudamos/page.tsx` | Confianza/proceso | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | Mantener |
| `/opiniones` | `app/opiniones/page.tsx` | Confianza/reviews | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | Mantener |
| `/blog` | `app/blog/page.tsx` | Blog index | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | Mantener |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Blog post dinámico | ✅ Dinámico | ❌ | ❌ | ❌ | ✅ (explícito) | ✅ | Mantener |

### 3.2 Páginas de audiencia (/para/)

| URL | Archivo | Tipo | Metadata | Sitemap | Indexable | Acción |
|-----|---------|------|----------|---------|-----------|--------|
| `/para/familias` | Archivo estático | Audiencia | ✅ | ✅ | ✅ | Mantener |
| `/para/autonomos` | Archivo estático | Audiencia | ✅ | ✅ | ✅ | ⚠️ Triplicado — ver FASE 3 |
| `/para/seniors` | Archivo estático | Audiencia | ✅ | ✅ | ✅ | Mantener |
| `/para/jovenes-profesionales` | Archivo estático | Audiencia | ✅ | ✅ | ✅ | Mantener |

### 3.3 Zonas locales

| URL | Archivo | Tipo | Sitemap | Acción |
|-----|---------|------|---------|--------|
| `/zonas` | `app/zonas/page.tsx` | Hub zonas | ❌ ⚠️ | Añadir a sitemap |
| `/zonas/[zona]` | `app/zonas/[zona]/page.tsx` | Dinámico | ❌ | Mantener |
| `/zonas/boadilla-del-monte` | Archivo estático | Zona | ✅ | Mantener |
| `/zonas/majadahonda` | Archivo estático | Zona | ✅ | Mantener |
| `/zonas/pozuelo-de-alarcon` | Archivo estático | Zona | ✅ | Mantener |
| `/zonas/madrid` | Archivo estático | Zona | ✅ | Mantener |

### 3.4 Landings y campañas

| URL | Archivo | Tipo | Sitemap | Indexable | Acción |
|-----|---------|------|---------|-----------|--------|
| `/landing/asesoria-gratuita` | Archivo estático | Campaña/landing | ❌ | ✅ actualmente | ⚠️ Evaluar noindex |
| `/landing/autonomos` | Archivo estático | Landing autonomos | ❌ ⚠️ | ✅ | Triplicado — fusionar o redirigir |
| `/autonomos` | Archivo estático | Landing autonomos | ✅ | ✅ | ¿Canónica? |
| `/para/autonomos` | Archivo estático | Audiencia autonomos | ✅ | ✅ | ¿Canónica? |

### 3.5 Legales

| URL | Archivo | Sitemap | Acción |
|-----|---------|---------|--------|
| `/aviso-legal` | Archivo estático | ✅ | Mantener |
| `/privacidad` | Archivo estático | ✅ | Mantener |
| `/cookies` | Archivo estático | ✅ | Mantener |
| `/gracias` | Archivo estático | ❌ (noindex) | ✅ Correcto |

### 3.6 Blog posts en sitemap
32 artículos de blog listados en sitemap con fechas entre 2026-01 y 2026-06. Todos parecen legítimos y alineados con verticales del negocio.

### 3.7 API
- `app/api/wa/inbound/route.ts` — Webhook de WhatsApp (n8n). No indexable.

---

## 4. RUTAS REDUNDANTES O CONFLICTIVAS (FASE 3)

### 4.1 Triple ruta para autónomos 🔴 CRÍTICO

| Ruta | Contenido |
|------|-----------|
| `/autonomos` | Landing principal autónomos |
| `/landing/autonomos` | Landing de campaña |
| `/para/autonomos` | Página de audiencia |

**Problema**: 3 páginas compiten por la misma keyword "seguros autónomos Madrid". Canibalización SEO severa.

**Recomendación**:
- **Canónica**: `/autonomos` (mejor URL, más corta)
- `/para/autonomos` → Redirect 301 a `/autonomos`
- `/landing/autonomos` → Noindex si es para campañas de pago, o redirect 301 a `/autonomos`
- Fusionar el mejor contenido de las 3 en `/autonomos`

### 4.2 Inglés sin hreflang 🟡 MEDIO

- `/seguros/salud-extranjeros` (ES)
- `/seguros/health-insurance-foreigners-spain` (EN)

**Problema**: Mismo contenido en dos idiomas sin `hreflang` tags. Google podría marcarlo como duplicado.

**Recomendación**:
- Añadir `hreflang="es"` en la ES y `hreflang="en"` en la EN
- O consolidar todo en `/extranjeros` con selector de idioma

### 4.3 `/seguros/salud-dental` — posible redundancia 🟡 MEDIO

**Problema**: Existe `/seguros/dental` y `/seguros/salud-dental`. Podrían ser la misma página o competir.

**Recomendación**: Revisar si `/seguros/salud-dental` es necesaria o si es un subtema de salud. Si es redundante, redirigir a `/seguros/dental`.

### 4.4 `/seguros/viaje` sin acceso desde navegación 🟡 MEDIO

No está en el menú principal (`mainNav`) ni en el sitemap. Es un producto importante pero invisible.

### 4.5 `app/seguros/[slug]` — ruta dinámica catch-all 🟢 OK

Genera páginas para todos los productos definidos en `lib/products.ts` con sus subpáginas. Funciona correctamente pero debe asegurarse que no genere páginas para slugs no definidos (404).

---

## 5. NAVEGACIÓN Y ARQUITECTURA RECOMENDADA (FASE 4)

### 5.1 Estado actual de navegación

**Header (mainNav desde lib/products.ts)**:
- Inicio, Seguros, Cómo te ayudamos, Sobre nosotros, Blog, Opiniones, Zonas, Contacto
- ✅ Estructura limpia
- ❌ **Faltan**: Extranjeros (pilar estratégico), Garantías (confianza)
- ❌ `/seguros/viaje`, `/seguros/mascotas`, `/seguros/vida` no tienen entrada directa desde header

**Footer**:
- Contiene enlaces a productos, zonas, legales
- WhatsApp: `+34603448765` ✅
- Instagram: `segurosvalentin` ✅

**StaggeredMenu (menú derecho)**:
- Ofrece acceso rápido a productos
- Incluye Extranjeros ✅

**StickyWhatsApp**:
- Flotante en móvil con tracking ✅

### 5.2 WhatsApp e Instagram

| Elemento | Esperado | Real | Estado |
|----------|----------|------|--------|
| WhatsApp principal | 34603448765 | 34603448765 | ✅ |
| WhatsApp Sebastián (schema) | 34603448765 | 34689791380 | 🔴 DIFERENTE |
| Instagram | segurosvalentin | segurosvalentin | ✅ |

**⚠️ El número de Sebastián en SchemaPersons (34689791380) difiere del principal. Verificar si es intencional o debe unificarse.**

### 5.3 Diagnóstico de navegación

**Fortalezas**:
- Estructura de menú simple y clara
- Mega menú/Staggered con acceso a productos
- Footer completo con enlaces
- Sticky WhatsApp con tracking

**Debilidades**:
- Extranjeros no está en menú principal (solo en staggered y footer)
- Garantías no está en menú principal
- Productos como Viaje, Mascotas, Vida no tienen presencia en navegación primaria
- `/opiniones` en menú principal cuando podría estar dentro de confianza/garantías

### 5.4 Estructura de navegación recomendada

```
HEADER:
├── Inicio
├── Seguros (mega menú)
│   ├── Salud
│   ├── Vida
│   ├── Dental
│   ├── Mascotas
│   ├── Viaje
│   ├── Accidentes + Decesos
│   └── Negocios / Autónomos
├── Extranjeros ← AÑADIR
├── Zonas
├── Garantías ← AÑADIR
├── Blog
├── Sobre nosotros
└── Contacto

FOOTER:
├── Productos (todos)
├── Extranjeros
├── Zonas
├── Garantías
├── Opiniones
├── Blog
├── Sobre nosotros
├── Contacto
├── Legales
└── Social (IG: segurosvalentin ✅, WhatsApp: 34603448765 ✅)
```

---

## 6. DISEÑO Y CONSISTENCIA VISUAL (FASE 5 + FASE 6)

### 6.1 Sistema visual — Fragmentación

**Dos sistemas de estilos paralelos detectados**:

| Sistema | Usado por | Clases |
|---------|-----------|--------|
| **CSS global** (`globals.css`) | Home, /seguros, /blog, /garantias, /sobre-nosotros, etc. | `.section-pad`, `.container-shell`, `.soft-card`, `.btn-primary`, `.btn-whatsapp`, `.kicker`, `.section-title`, `.glass`, `.text-gradient` |
| **Tailwind puro** (`buttonVariants()`) | Los 8 landings (salud, vida, dental, decesos, accidentes, mascotas, viaje, extranjeros) | `container mx-auto px-4`, `py-14 sm:py-20`, `cn(buttonVariants(...))` |

**Impacto**: Si cambias un color o espaciado en el sistema global, los landings no se actualizan. Si cambias Tailwind, las páginas principales no se actualizan. Esto duplica el esfuerzo de mantenimiento.

### 6.2 Dos sistemas de animación

| Sistema | Usado por |
|---------|-----------|
| **CSS animations** (`fade-up` + IntersectionObserver) | Home, blog, productos |
| **framer-motion** (`motion.div`) | Landings, hero-animated, reviews |

### 6.3 Evaluación visual por página

| Página | Nota (1-10) | Fortalezas | Debilidades | Acción |
|--------|-------------|------------|-------------|--------|
| Home (`/`) | **8** | Hero con animación, stats, confianza, CTA claro | Layout puede sentirse denso | Mantener, pulir |
| `/extranjeros` | **9** | Diseño premium, confianza visual alta, fotos reales | - | Mantener (referencia) |
| `/garantias` | **8** | GarantiaSection bien estructurada, badges | - | Mantener |
| `/seguros` (hub) | **7** | Cards claras, Rosa trust block | Fotos de stock mezcladas | Pulir |
| `/seguros/salud-extranjeros` | **8** | Bien estructurado, CTA claro | - | Mantener |
| `/seguros/vida` | **7** | Sebastián advisor personalizado | Podría tener más jerarquía | Pulir |
| `/seguros/dental` | **6** | Funcional | Diseño más genérico, sin alma | Rediseñar |
| `/seguros/mascotas` | **6** | - | Imágenes inconsistentes | Rediseñar |
| `/seguros/viaje` | **6** | - | Demasiado texto, pocas imágenes | Rediseñar |
| `/seguros/decesos` | **7** | Tono humano | - | Mantener |
| `/seguros/accidentes-decesos` | **6** | - | Pack forzado, poca claridad | Revisar |
| `/landing/asesoria-gratuita` | **5** | - | Parece prueba/borrador | Revisar o redirigir |
| `/landing/autonomos` | **5** | - | Muy similar a /autonomos | Fusionar |
| `/blog` | **7** | Blog grid funciona | - | Mantener |
| Páginas `/para/` | **6** | Funcionales | Genéricas, sin punch | Pulir |
| Páginas `/zonas/` | **6** | SEO local | Contenido genérico | Mejorar |

### 6.4 Componentes con deuda técnica

| Componente | Problema | Recomendación |
|-----------|----------|---------------|
| `buttonVariants()` en `ui/button.tsx` | Usado solo por landings; no por páginas principales | Unificar con `.btn-primary` de globals.css |
| Landings (8 archivos) | No usan clases globales del proyecto | Migrar progresivamente a clases globales |
| `hero-animated.tsx` | Usa framer-motion | OK, pero asegurar que no bloquee LCP |
| `hero-server.tsx` | Usa CSS animations | OK, buen rendimiento |
| `salud-landing.tsx`, `vida-landing.tsx`, etc. | "use client" necesarios por framer-motion | OK |
| `ReviewsCarousel` vs `ReviewsCarouselWrapper` | Posible duplicación | Verificar si uno es wrapper innecesario |

### 6.5 Componentes huérfanos detectados

| Componente | ¿Usado? | Acción |
|-----------|---------|--------|
| `components/ui/dot-grid.tsx` | Posiblemente en hero | Verificar uso |
| `components/ui/simple-cursor.tsx` | ¿Usado? | Verificar si se importa |
| `components/magicui/logo-hero.tsx` | Posiblemente en home | OK |
| `components/magicui/globe.tsx` | Posiblemente decorativo | OK si se usa |
| `components/ui/aurora-background.tsx` | Posiblemente en algún hero | Verificar uso |
| `components/accidentes-landing.tsx` | Redirigido, ¿aún se importa? | Posiblemente huérfano |
| `components/decesos-landing.tsx` | Posiblemente usado en /seguros/decesos | Verificar |
| `components/dental-lead-form.tsx` | Formulario específico dental | Puede unificarse con lead-form |
| `components/GuaranteeBadge.tsx` | Probablemente en /garantias | OK |
| `components/garantia-precio.tsx` | Posiblemente en home o garantias | Verificar uso |
| `components/whatsapp-button.tsx` y `whatsapp-link.tsx` | ✅ Usados ampliamente | OK, pero ¿son redundantes entre sí? |

---

## 7. AUDITORÍA SEO (FASE 8)

### 7.1 Metadata

**Layout global**:
- `title`: "Asesora de Seguros en Madrid · +10 Años de Experiencia"
- `description`: Correcta, 155 caracteres
- `openGraph`: Bien configurado con imagen 1200x630
- `robots`: index, follow
- `canonical`: `/` (en layout, override en páginas)

**⚠️ Todas las páginas heredan el robots `index, follow` del layout**. Las páginas que deberían ser noindex (landings de campaña) deben sobrescribirlo explícitamente.

### 7.2 Sitemap — URLs faltantes 🚨

**Páginas que existen pero NO están en sitemap**:
- `/seguros/vida`
- `/seguros/vida/hipoteca`
- `/seguros/mascotas`
- `/seguros/viaje`
- `/seguros/salud-senior`
- `/zonas` (hub)
- `/landing/asesoria-gratuita`
- `/landing/autonomos`

**Páginas en sitemap que deben revisarse**:
- `/landing/asesoria-gratuita` — ¿debería estar indexada? Probablemente noindex
- `/landing/autonomos` — canibaliza con `/autonomos`

### 7.3 Canonicals

**⚠️ La mayoría de páginas NO declaran canonical explícito.** Heredan el `/` del layout, lo cual es incorrecto. Cada página debe declarar su propio canonical.

### 7.4 Schema

| Schema | Ubicación | Estado |
|--------|-----------|--------|
| `LocalBusiness` | `components/seo/schema-local-business.tsx` | ✅ Correcto |
| `Person` (Rosa + Sebastián) | `components/seo/schema-persons.tsx` | ✅ Correcto |
| `Article` (blog) | `components/ArticleSchema.tsx` | ✅ Correcto |
| `BreadcrumbList` | `components/BreadcrumbSchema.tsx` | ✅ Correcto |
| `FAQPage` | `components/FaqSchema.tsx` | ✅ Correcto |
| `Review` / `AggregateRating` | **NO ENCONTRADO** | Añadir para /opiniones |

### 7.5 Canibalización detectada

| Keywords | Páginas compitiendo | Gravedad |
|----------|---------------------|----------|
| "seguro autónomos Madrid" | `/autonomos`, `/landing/autonomos`, `/para/autonomos` | 🔴 Alta |
| "seguro salud extranjeros Madrid" | `/extranjeros`, `/seguros/salud-extranjeros`, `/seguros/health-insurance-foreigners-spain` | 🟡 Media |
| "seguro dental Madrid" | `/seguros/dental`, `/seguros/salud-dental` | 🟡 Media |

### 7.6 Blog — Calidad SEO

**32 artículos en sitemap** con slugs bien formados. Temas alineados con verticales. **Buen trabajo**.

**Problemas**:
- Algunos posts tienen imágenes con nombres que incluyen timestamps (`_1776077957194`) — nombres poco profesionales
- Falta interlinking sistemático hacia páginas comerciales
- El blog no tiene categorías visibles

---

## 8. TRACKING Y CONVERSIÓN (FASE 9)

### 8.1 Setup actual

| Herramienta | Implementación | Estado |
|-------------|---------------|--------|
| **GTM** | `GTM-TNB5FR4W` en layout (deferred) | ✅ |
| **GA4** | Vía GTM + `gtag` en `lib/analytics.ts` | ✅ |
| **Meta Pixel** | `1307875004562255` hardcodeado en layout | ⚠️ Debe ir en .env |
| **Clarity** | `NEXT_PUBLIC_CLARITY_ID` desde .env | ✅ |
| **Vercel Analytics** | `<Analytics />` en layout | ✅ |

### 8.2 Eventos trackeados

| Evento | Dónde | Parámetros | Estado |
|--------|-------|------------|--------|
| `Contactar` | `trackWhatsAppClick()` | `method`, `location` | ✅ |
| `lead_form_submit` | `trackLeadFormSubmit()` | `product_slug`, `lead_type`, `page_location`, UTMs | ✅ |
| `Lead` (Meta) | En `trackLeadFormSubmit()` | `content_name` | ✅ |
| `PageView` (Meta) | Layout | - | ✅ |

### 8.3 UTMs

Bien implementado en `lib/analytics.ts`:
- Captura en `sessionStorage` ✅
- Se adjuntan a `lead_form_submit` ✅
- Se usa `valentin_utm` como key ✅

### 8.4 Problemas detectados

| Problema | Gravedad | Recomendación |
|----------|----------|---------------|
| Meta Pixel ID hardcodeado | 🟡 | Mover a `NEXT_PUBLIC_META_PIXEL_ID` |
| No hay evento `phone_click` separado | 🟡 | Añadir tracking de click-to-call |
| No hay evento `whatsapp_click` con `product_slug` | 🟡 | Añadir contexto de página al evento WhatsApp |
| `/gracias` no tiene evento `conversion` dedicado | 🟢 | Opcional — `lead_form_submit` ya cubre |
| No hay evento `scroll_depth` | 🟢 | Opcional para medir engagement |

---

## 9. FORMULARIOS Y LEADS (FASE 10)

### 9.1 Formularios existentes

| Formulario | Archivo | Campos | Validación | Envío | Redirige a /gracias | UTM |
|-----------|---------|--------|------------|-------|---------------------|-----|
| LeadForm (principal) | `components/lead-form.tsx` | Nombre, teléfono, email, producto, mensaje | react-hook-form + zod | `lead_form_submit` + WhatsApp fallback | ✅ | ✅ |
| DentalLeadForm | `components/dental-lead-form.tsx` | Nombre, teléfono, email | Básica | WhatsApp directo | ❌ (abre WhatsApp) | ❌ |
| FAQ Chat | `components/faq-chat.tsx` | Mensaje | No | WhatsApp | ❌ | ❌ |
| Formularios en landings | Integrados en cada landing | Varía | Varía | WhatsApp o lead_form_submit | Varía | Varía |

### 9.2 Diagnóstico

**Fortalezas**:
- LeadForm principal bien estructurado con zod
- Tracking de leads completo con UTMs
- Redirección a /gracias con protección anti-duplicados

**Debilidades**:
- **DentalLeadForm es una versión inferior**: sin zod, sin tracking avanzado, sin redirección a /gracias
- **Formularios de landings inconsistentes**: cada landing puede tener su propia implementación
- **Falta honeypot/captcha**: sin protección anti-spam
- **Falta checkbox RGPD explícito**: necesario para cumplimiento

### 9.3 Recomendación

Unificar TODOS los formularios en UN solo `LeadForm` configurable por props:
```tsx
<LeadForm 
  productSlug="dental"
  leadType="dental_consulta"
  fields={['name', 'phone', 'email']}
  ctaText="Quiero mi consulta gratis"
/>
```

---

## 10. IMÁGENES Y ASSETS (FASE 11)

### 10.1 Inventario general

- **~100+ imágenes** en `public/images/`
- Carpetas: `agent`, `blog`, `dental`, `extranjeros`, `home`, `pexels`, `premium`, `products`, `zonas`
- Formatos mezclados: `.jpg`, `.png`, `.webp`

### 10.2 Imágenes problemáticas

| Imagen | Problema | Acción |
|--------|----------|--------|
| `public/images/blog/blog_*_177607*.png` | Nombres con timestamps | Renombrar |
| `public/images/dental/` (9 imágenes) | Muchas parecen stock/Pexels | Revisar licencias |
| `public/images/pexels/` (11 imágenes) | Stock photos | Verificar licencias Pexels |
| `public/images/products/electrodomesticos.*` | Producto retirado (redirect en next.config) | Imagen huérfana — eliminar |
| `public/images/products/negocio.*` | Producto retirado | Imagen huérfana — eliminar |
| `public/images/products/proteccion-juridica.*` | Producto retirado | Imagen huérfana — eliminar |
| `public/images/premium/certificado-oficial.png` | ¿Contiene datos reales? | Verificar privacidad |
| `public/images/premium/certificado-salud-individual.png` | ¿Contiene datos reales? | Verificar privacidad |
| `public/images/products/salud-extranjeros.png` | Relacionado con ASISA (por subpage) | ⚠️ Compliance |

### 10.3 Imágenes con riesgo de compliance

- **`public/images/acreditacion-sebastian-asisa.png`** (referenciada en `lib/products.ts` línea 507, subpage `salud/extranjeros`) → El nombre del archivo contiene "ASISA". Renombrar a `acreditacion-sebastian-dgsfp.png` o similar.

### 10.4 Assets no usados (huérfanos)

| Imagen | Estado probable |
|--------|-----------------|
| `electrodomesticos.*` | Producto retirado |
| `negocio.*` | Producto retirado |
| `proteccion-juridica.*` | Producto retirado |
| `viaje-*.jpg` múltiples | Posiblemente no todas en uso |
| `hero-salud.jpg` + `hero-salud.webp` | Posible duplicado |

### 10.5 Optimización

- Se detectó script `optimize-images.mjs` — verificar si se ejecuta en build
- `next.config.ts` tiene buena configuración de `images` (AVIF, WebP, deviceSizes)
- `minimumCacheTTL: 2592000` (30 días) — correcto

---

## 11. COMPLIANCE, LEGAL Y COPY (FASE 7)

### 11.1 Búsqueda de términos prohibidos

Resultados de búsqueda en todo el repo (`.tsx`, `.ts`):

| Término | Encontrado en código |
|---------|---------------------|
| "correduría" | ❌ No encontrado |
| "corredor" | ❌ No encontrado |
| "mediador independiente" | ❌ No encontrado |
| "analizamos el mercado" | ❌ No encontrado (como frase exacta) |
| "comparamos compañías" | ❌ No encontrado (como frase exacta) |
| "sin ataduras" | ❌ No encontrado |
| "ASISA" | ❌ No encontrado en código |
| "Adeslas" | ❌ No encontrado en código |
| "Sanitas" | ❌ No encontrado en código |
| "segurosrosavalentin" | ❌ No encontrado |
| "garantizamos" | ❌ No encontrado |
| "aprobación garantizada" | ❌ No encontrado |

### 11.2 Hallazgos de compliance 🟡

| Hallazgo | Ubicación | Gravedad |
|----------|-----------|----------|
| `"Comparamos las mejores opciones del mercado por ti, sin presión"` | `app/seguros/page.tsx` — metadata description | 🟡 Bordeando "comparamos" |
| `"sin presión"` | Misma línea | 🟡 Similar a "sin ataduras" |
| `"Analizamos seguros de salud privados en Madrid"` | `lib/products.ts` línea 85 (heroCopy salud) | 🟡 Bordeando "analizamos el mercado" |
| `acreditacion-sebastian-asisa.png` | Nombre de archivo referenciado en código | 🔴 Menciona aseguradora por nombre |
| WhatsApp Sebastián: 34689791380 | `schema-persons.tsx` | 🟡 No coincide con principal |

### 11.3 Datos DGSFP

- Sebastián: `C046172295271S` — se buscó en código. **No encontrado en el código**, solo en la documentación de la tarea.
- ⚠️ **El número DGSFP de Sebastián NO aparece en la web**. Debe añadirse en SchemaPersons y posiblemente en CredentialsBar.

### 11.4 Consistencia "Rosa" vs "Sebastián"

- **Rosa Valentín**: Figura principal, asesora, aparece en homepage, `/seguros`, testimonios
- **Sebastián**: Especialista en VIDA, aparece en `/seguros/vida`, schema, extranjeros
- Asignación correcta ✅

---

## 12. PROBLEMAS TÉCNICOS ADICIONALES (FASE 12)

### 12.1 Performance

**Buenas prácticas detectadas**:
- `next/image` con `priority` en hero
- Fuentes con `display: swap`
- GTM/Meta/Clarity cargados con `strategy="afterInteractive"` + delay
- `compress: true`, `poweredByHeader: false`
- `removeConsole` en producción
- AVIF + WebP configurados

**Riesgos**:
- `cobe` (globo 3D) y `ogl` (WebGL) son librerías pesadas — verificar que se cargan dinámicamente
- `framer-motion` y `gsap` ambos presentes — posible redundancia (2 librerías de animación)
- `swiper` y `embla-carousel-react` ambos presentes — 2 carouseles
- Muchas páginas de landing son "use client" completas (por framer-motion) — inevitable pero afecta al JS bundle

### 12.2 Accesibilidad

- `html lang="es"` ✅
- `alt` en imágenes del sitemap y productos ✅
- Falta verificar: aria-labels, focus states, navegación por teclado, contraste
- `noscript` para GTM y Meta Pixel ✅

### 12.3 Librerías redundantes

| Librería 1 | Librería 2 | Conflicto |
|-----------|-----------|-----------|
| `framer-motion` | `gsap` | Dos motores de animación |
| `swiper` | `embla-carousel-react` | Dos carouseles |
| `react-spring` | `framer-motion` | Tres librerías de animación |
| `cobe` | `ogl` | Ambas son WebGL |

**Recomendación**: Consolidar en **framer-motion** (animaciones UI) + **swiper** (carouseles), eliminar `gsap`, `react-spring`, `embla-carousel-react`.

---

## 13. OPORTUNIDADES COMERCIALES (FASE 13)

### 13.1 Madurez por vertical

| Vertical | Madurez | Páginas | CTAs | Confianza | Prioridad |
|----------|---------|---------|------|-----------|-----------|
| **Salud** | 🟢 Alta | `/seguros/salud-*`, subpáginas | ✅ Buenos | ✅ Alta | P1 — Mantener |
| **Extranjeros** | 🟢 Alta | `/extranjeros`, `/seguros/salud-extranjeros`, EN | ✅ Excelentes | ✅ Muy alta | P1 — Potenciar |
| **Vida** | 🟡 Media | `/seguros/vida`, `/seguros/vida/hipoteca` | ✅ Buenos | ✅ Alta | P2 — Añadir a navegación |
| **Mascotas** | 🟡 Media | `/seguros/mascotas` | ✅ Buenos | 🟡 Media | P2 — Mejorar visual |
| **Viaje** | 🟡 Media | `/seguros/viaje` | ✅ Buenos | 🟡 Media | P2 — Añadir a navegación |
| **Dental** | 🟡 Media | `/seguros/dental`, `/seguros/salud-dental` | ✅ Buenos | 🟡 Media | P3 — Unificar diseño |
| **Decesos** | 🟡 Media | `/seguros/decesos` | ✅ Buenos | 🟡 Media | P3 — OK |
| **Accidentes** | 🟡 Media | `/seguros/accidentes-decesos` | ✅ Buenos | 🟡 Media | P3 — OK |
| **Autónomos** | 🔴 Baja | 3 páginas compitiendo | 🟡 Confuso | 🟡 Baja | P1 — Consolidar YA |
| **Zonas** | 🟡 Media | 4 zonas + hub | 🟡 Genérico | 🟡 Media | P3 — Mejorar contenido |
| **Blog** | 🟢 Alta | 32+ artículos | ✅ Interlinking | ✅ Alta | P2 — Categorizar |

### 13.2 Páginas que faltan (oportunidades)

| Página | Justificación | Prioridad |
|--------|---------------|-----------|
| `/estudiantes` | Complemento a extranjeros, salud para estudiantes | P2 |
| `/autonomos` (consolidada) | Unificar las 3 existentes en una página potente | P1 |
| `/empresas` | Seguros para negocios (salud empleados, accidentes convenio) | P3 |

---

## 14. LISTA DE PROBLEMAS PRIORIZADA (FASE 14 + FASE 15)

### A. CRÍTICO — Antes de más campañas 🔴

| # | Problema | Archivos | Impacto | Esfuerzo |
|---|----------|----------|---------|----------|
| A1 | **Triple ruta autónomos** canibalizando | `/autonomos`, `/landing/autonomos`, `/para/autonomos` | Alto SEO | Medio |
| A2 | **Meta Pixel ID hardcodeado** en layout | `app/layout.tsx` | Seguridad/config | Bajo |
| A3 | **Imagen con nombre ASISA** | `lib/products.ts` línea 507 | Compliance | Bajo |
| A4 | **Sitemap incompleto** — faltan /vida, /mascotas, /viaje | `app/sitemap.ts` | Alto SEO | Bajo |
| A5 | **Canonicals heredados del layout** | Todas las páginas | Alto SEO | Medio |

### B. ALTO IMPACTO / BAJO ESFUERZO 🟡

| # | Problema | Impacto | Esfuerzo |
|---|----------|---------|----------|
| B1 | Unificar WhatsApp de Sebastián a 34603448765 o documentar diferencia | Bajo |
| B2 | Añadir Extranjeros y Garantías al menú principal | Bajo |
| B3 | Noindex a `/landing/asesoria-gratuita` y `/landing/autonomos` | Bajo |
| B4 | Eliminar imágenes de productos retirados (electrodomesticos, negocio, proteccion-juridica) | Bajo |
| B5 | Renombrar imágenes con timestamps | Bajo |
| B6 | Añadir DGSFP de Sebastián a SchemaPersons | Bajo |

### C. MEJORAS DE CONVERSIÓN 🟢

| # | Problema | Impacto | Esfuerzo |
|---|----------|---------|----------|
| C1 | Unificar formularios (LeadForm único configurable) | Alto | Alto |
| C2 | Añadir captcha/honeypot a formularios | Medio | Medio |
| C3 | Añadir checkbox RGPD a LeadForm | Alto (legal) | Bajo |
| C4 | Añadir evento `phone_click` al tracking | Medio | Bajo |
| C5 | Añadir `AggregateRating` Schema a `/opiniones` | Medio | Medio |

### D. MEJORAS SEO 🟢

| # | Problema | Impacto | Esfuerzo |
|---|----------|---------|----------|
| D1 | Añadir hreflang a `/seguros/health-insurance-foreigners-spain` | Medio | Bajo |
| D2 | Redirigir `/seguros/salud-dental` → `/seguros/dental` si es redundante | Medio | Bajo |
| D3 | Interlinking sistemático blog → páginas comerciales | Alto | Medio |
| D4 | Categorizar blog | Medio | Medio |

### E. LIMPIEZA TÉCNICA 🔵

| # | Problema | Impacto | Esfuerzo |
|---|----------|---------|----------|
| E1 | Consolidar sistemas de diseño (globals.css vs Tailwind landings) | Alto | Alto |
| E2 | Eliminar librerías redundantes (gsap, react-spring, embla) | Medio | Alto |
| E3 | Migrar landings a clases globales | Medio | Alto |
| E4 | Verificar y eliminar componentes huérfanos | Bajo | Medio |
| E5 | Renombrar `acreditacion-sebastian-asisa.png` | Compliance | Bajo |

### F. BACKLOG ESTRATÉGICO ⚪

| # | Iniciativa | Prioridad |
|---|-----------|-----------|
| F1 | Rediseñar `/seguros/mascotas` y `/seguros/viaje` al nivel de `/extranjeros` | P3 |
| F2 | Crear `/estudiantes` como sub-landing de extranjeros | P3 |
| F3 | Crear `/empresas` para B2B | P4 |
| F4 | Implementar A/B testing en landings principales | P4 |

---

## 15. ROADMAP RECOMENDADO

### Fase 1: Estabilización (Semanas 1-2) 🔴
1. Unificar ruta autónomos: redirect 301 desde `/landing/autonomos` y `/para/autonomos` → `/autonomos`
2. Mover Meta Pixel ID a variable de entorno
3. Renombrar `acreditacion-sebastian-asisa.png` → `acreditacion-sebastian-dgsfp.png`
4. Completar sitemap con `/seguros/vida`, `/seguros/mascotas`, `/seguros/viaje`, `/zonas`
5. Corregir canonicals en todas las páginas
6. Añadir DGSFP Sebastián a SchemaPersons

### Fase 2: Conversión (Semanas 2-3) 🟡
1. Unificar formularios en un solo LeadForm configurable
2. Añadir checkbox RGPD y honeypot
3. Añadir tracking de phone clicks
4. Añadir Extranjeros y Garantías al menú principal

### Fase 3: SEO (Semanas 3-4) 🟢
1. Configurar hreflang para página en inglés
2. Interlinking blog → comerciales
3. Categorizar blog
4. Schema AggregateRating en /opiniones

### Fase 4: Diseño (Semanas 4-6) 🔵
1. Unificar sistema de diseño (migrar landings a clases globales)
2. Eliminar librerías redundantes
3. Limpiar assets huérfanos

### Fase 5: Crecimiento (Semanas 6-8) ⚪
1. Rediseñar páginas con nota < 7
2. Crear /estudiantes
3. A/B testing

---

## 16. PREGUNTAS ABIERTAS PARA EL USUARIO

1. **WhatsApp de Sebastián**: ¿Es correcto el número 34689791380 o debe unificarse con 34603448765?
2. **DGSFP de Sebastián**: ¿En qué página o componente debe aparecer? No está en el código actual.
3. **`/landing/asesoria-gratuita`**: ¿Es una landing de campaña activa? ¿Debe redirigirse a contacto o mantenerse como noindex?
4. **`/seguros/salud-dental`**: ¿Es diferente de `/seguros/dental`? ¿Debe redirigirse?
5. **`react-spring` + `gsap` + `framer-motion`**: ¿Hay alguna animación específica que requiera mantener las 3 librerías? ¿Podemos consolidar en framer-motion?
6. **Certificados en `/public/images/premium/`**: ¿Contienen datos reales? ¿Deben estar públicos?
7. **`npm run build`**: No se pudo ejecutar por timeout. ¿Pasa el build actualmente sin errores?
8. **Páginas `/para/`**: ¿Son necesarias como páginas independientes o pueden redirigir a las páginas de producto correspondientes?
9. **`/seguros/accidentes-decesos`**: ¿Es un pack temporal o permanente? El nombre es extraño para SEO.
10. **Componentes `whatsapp-button.tsx` y `whatsapp-link.tsx`**: ¿Son redundantes? ¿Podemos unificar?

---

## 17. COMANDOS DE VALIDACIÓN (FASE 16)

### Git
```
Branch: main
HEAD: 554905e fix: actualizar enlace de Instagram a segurosvalentin
Working tree: limpio (por verificar)
```

### Build
No se pudo ejecutar `npm run build` por timeout. **Pendiente de verificación**.

### Recomendación
Ejecutar manualmente y reportar:
```bash
npm run build
npm run lint  # si se configura
```

---

**Fin del informe. Versión 1.0 — Octubre 2026**
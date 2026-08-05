# Valentín Protección Integral

Landing en **Next.js + App Router + Tailwind** preparada para una fase 1 simple:

- landing estática
- CTA a WhatsApp
- formulario que hace `POST` directo al webhook de **n8n**
- copy prudente basado en tus JSON
- páginas legales placeholder
- checklist de despliegue para Cloudflare

## 1) Variables de entorno

Copia `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Configura:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_URL`
- `NEXT_PUBLIC_LEAD_ENDPOINT`
- `NEXT_PUBLIC_LEAD_SECRET`

## 2) Desarrollo local

```bash
npm install
npm run dev
```

## 3) Build de producción

```bash
npm run build
```

El proyecto usa `output: "export"` en `next.config.ts`, así que el build genera una carpeta `out/` apta para **Cloudflare Pages**.

## Estructura

- `app/page.tsx`: landing principal
- `components/lead-form.tsx`: formulario y envío a n8n
- `lib/site-data.ts`: productos, FAQs, disclaimers y datos renderizados
- `n8n/lead-intake-workflow.json`: blueprint del workflow
- `DEPLOY-CLOUDFLARE.md`: checklist de despliegue

## Nota importante sobre seguridad en fase 1

El header `X-Lead-Secret` desde navegador sirve como filtro **ligero**, no como secreto real, porque el cliente puede inspeccionar el código o la petición.

Para la fase 2, la arquitectura más sólida es:

`Landing -> API propia -> n8n`

Ahí sí puedes tener:

- validación real del lado servidor
- rate limiting
- deduplicación
- almacenamiento persistente
- secretos privados
- observabilidad limpia

## Qué falta para dejarlo de producción total

- textos legales finales
- logo definitivo
- dominio y DNS conectados
- credenciales reales de n8n
- almacenamiento persistente para leads
- sistema anti-spam más fuerte como Turnstile o API intermedia
# Pruebas seguras de leads

Ejecuta `npm run test:leads`. El comando fuerza entorno de test y todos los
envíos se capturan con un transporte SMTP instrumentado; no abre conexiones
SMTP reales. Las peticiones a `/api/leads` y `/api/professional-referral` desde
`localhost` o `127.0.0.1` devuelven `503`, `delivered: false` y el modo
`local-delivery-blocked` por defecto. Solo `ALLOW_LOCAL_LEAD_DELIVERY=true`
autoriza deliberadamente entrega real local. No uses esa variable en CI.

## Entrega SMTP por entorno (Vercel)

El envío real de correo depende de `VERCEL_ENV`, que Vercel define
automáticamente en cada despliegue:

- **`production`** — comportamiento normal: si hay configuración SMTP válida,
  el correo se entrega.
- **`preview`** — bloqueado por defecto (las URLs de Preview Deployments son
  públicas/compartidas). Devuelve `503`, `delivered: false`,
  `mode: "preview-delivery-blocked"`. Solo se permite si
  `ALLOW_PREVIEW_LEAD_DELIVERY=true` está definido para ese entorno concreto.
- **`development`** (`vercel dev`) — mismo bloqueo que `preview`, con el mismo
  mecanismo de excepción.
- **localhost / `127.0.0.1`** — sigue bloqueado por defecto por la regla
  existente (`local-delivery-blocked`), independientemente de
  `ALLOW_PREVIEW_LEAD_DELIVERY`.

Cuando el envío está bloqueado, la respuesta nunca simula éxito y no se
registran los datos personales completos del lead, solo el modo de bloqueo.

Variables relacionadas (ver `.env.example`):

- `ALLOW_LOCAL_LEAD_DELIVERY` — autoriza entrega real desde `localhost`/tests.
- `ALLOW_PREVIEW_LEAD_DELIVERY` — autoriza entrega real en `preview` o
  `development` de Vercel. No debe activarse a nivel de proyecto, solo para
  una comprobación puntual y deliberada.

## Deploy Hook de Vercel (`.github/workflows/weekly-rebuild.yml`)

El workflow de rebuild semanal dispara un [Deploy Hook de
Vercel](https://vercel.com/docs/deployments/deploy-hooks) mediante `curl`. La
URL del hook **nunca debe escribirse literalmente** en el workflow ni en
ningún otro archivo del repositorio:

- Debe guardarse como GitHub Secret con el nombre exacto
  `VERCEL_DEPLOY_HOOK_URL` (Settings → Secrets and variables → Actions).
- El workflow la referencia como `${{ secrets.VERCEL_DEPLOY_HOOK_URL }}` y
  falla explícitamente si el secret no está configurado, sin imprimir su
  valor.
- Si un hook llegó a commitearse alguna vez (aunque después se borre del
  archivo), esa URL sigue siendo válida y explotable mientras exista en el
  historial de git — **hay que eliminarlo o regenerarlo manualmente en
  Vercel** (Project Settings → Git → Deploy Hooks) y crear uno nuevo antes de
  guardarlo como secret. Borrar la línea del workflow no revoca el hook
  antiguo por sí solo.

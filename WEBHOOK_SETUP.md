# Webhook WhatsApp — Configuración

## Ruta pública final

```
https://valentinproteccionintegral.com/api/wa/inbound
```

## Variable de entorno necesaria

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `BACKEND_URL` | URL del backend FastAPI en Linux | `http://192.168.1.Y:8000` |

Añadir en **Vercel → Project Settings → Environment Variables** para producción.

## Test local

```bash
# Verificación del webhook (GET)
curl "https://valentinproteccionintegral.com/api/wa/inbound?hub.mode=subscribe&hub.verify_token=agente_seguros&hub.challenge=123"

# Debería responder: 123
```

## Configuración en Meta Business

1. Ir a **Meta Business Suite → WhatsApp → Configuración → Webhook**
2. **Callback URL:** `https://valentinproteccionintegral.com/api/wa/inbound`
3. **Verify Token:** `agente_seguros`
4. Suscribirse a eventos: `messages`, `message_deliveries`, `message_reads`

## Arquitectura

```
Meta (WhatsApp Cloud API)
    │
    ▼
https://valentinproteccionintegral.com/api/wa/inbound  (Next.js en Vercel)
    │
    │ proxy (reenvío GET/POST)
    ▼
http://LINUX_IP:8000/wa/inbound  (FastAPI backend)
    │
    ▼
PostgreSQL/pgvector + DeepSeek API
```

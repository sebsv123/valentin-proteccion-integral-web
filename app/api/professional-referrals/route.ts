import { NextResponse } from 'next/server';
import { z } from 'zod';
import { site } from '@/lib/products';

const referralSchema = z.object({
  professionalName: z.string().trim().min(2).max(120),
  organization: z.string().trim().min(2).max(160),
  professionalEmail: z.string().trim().email().max(180),
  clientName: z.string().trim().min(2).max(120),
  clientContact: z.string().trim().min(6).max(120),
  procedureType: z.string().trim().min(2).max(120),
  clientAuthorization: z.literal(true),
  sensitiveNotice: z.literal(true),
  website: z.string().trim().max(200).optional(),
});

const ERROR_MESSAGE = 'No hemos podido enviar la derivación. Puedes intentarlo de nuevo o consultarnos por WhatsApp.';

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin) return true;

  const requestOrigin = new URL(request.url).origin;
  const productionOrigin = site.domain.replace(/\/$/, '');

  return origin === requestOrigin || origin === productionOrigin;
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ ok: false, message: 'Origen no permitido.' }, { status: 403 });
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: 'Solicitud no válida.' }, { status: 400 });
  }

  const parsed = referralSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: 'Revisa los campos obligatorios.' }, { status: 422 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  const leadSecret = process.env.LEAD_WEBHOOK_SECRET;

  if (!webhookUrl || !leadSecret) {
    return NextResponse.json({ ok: false, message: ERROR_MESSAGE }, { status: 503 });
  }

  const {
    professionalName,
    organization,
    professionalEmail,
    clientName,
    clientContact,
    procedureType,
    clientAuthorization,
    sensitiveNotice,
  } = parsed.data;

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Lead-Secret': leadSecret,
      },
      body: JSON.stringify({
        professionalName,
        organization,
        professionalEmail,
        clientName,
        clientContact,
        procedureType,
        clientAuthorization,
        sensitiveNotice,
        origin: '/extranjeros',
        leadType: 'professional_referral',
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, message: ERROR_MESSAGE }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: ERROR_MESSAGE }, { status: 502 });
  }
}

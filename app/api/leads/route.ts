import { NextResponse } from "next/server";
import { LeadEmailBlockedError, LeadEmailConfigError, LeadEmailDeliveryError, sendLeadEmail } from "@/lib/server/send-lead-email";
import { leadEmailSchema } from "@/lib/server/lead-email-schemas";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Payload inválido." }, { status: 400 });
  }

  const parsed = leadEmailSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Payload inválido." }, { status: 400 });
  }

  try {
    const result = await sendLeadEmail(parsed.data, { requestHost: request.headers.get("host") });
    return NextResponse.json({ success: true, messageId: result.messageId });
  } catch (error) {
    if (error instanceof LeadEmailBlockedError) {
      return NextResponse.json(
        { error: "Entrega SMTP local bloqueada.", delivered: false, mode: error.mode },
        { status: 503 }
      );
    }
    if (error instanceof LeadEmailConfigError) {
      return NextResponse.json({ error: "Entrega no configurada." }, { status: 503 });
    }

    if (error instanceof LeadEmailDeliveryError) {
      return NextResponse.json({ error: "No se ha podido entregar el formulario." }, { status: 502 });
    }

    return NextResponse.json({ error: "Error interno." }, { status: 500 });
  }
}

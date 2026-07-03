import { NextResponse } from "next/server";
import { professionalReferralSchema, professionalReferralToLeadEmail } from "@/lib/server/lead-email-schemas";
import { LeadEmailBlockedError, LeadEmailConfigError, LeadEmailDeliveryError, sendLeadEmail } from "@/lib/server/send-lead-email";

/**
 * API route for professional referral form submissions.
 *
 * Since the /extranjeros page is force-static, this route handles
 * the form POST. It must not return success until a real delivery provider
 * has accepted the message.
 */

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Payload inválido." }, { status: 400 });
  }

  const parsed = professionalReferralSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Payload inválido." }, { status: 400 });
  }

  try {
    const result = await sendLeadEmail(professionalReferralToLeadEmail(parsed.data), {
      requestHost: request.headers.get("host"),
    });
    return NextResponse.json({ success: true, messageId: result.messageId });
  } catch (error) {
    if (error instanceof LeadEmailBlockedError) {
      const message =
        error.mode === "preview-delivery-blocked"
          ? "Entrega SMTP bloqueada en este entorno de vista previa."
          : "Entrega SMTP local bloqueada.";
      return NextResponse.json({ error: message, delivered: false, mode: error.mode }, { status: 503 });
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

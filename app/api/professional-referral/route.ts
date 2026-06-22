import { NextRequest, NextResponse } from "next/server";

/**
 * API route for professional referral form submissions.
 *
 * Since the /extranjeros page is force-static, this route handles
 * the form POST. It must not return success until a real delivery provider
 * has accepted the message.
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      nombreProfesional,
      empresa,
      correo,
      nombreCliente,
      contactoCliente,
      tipoTramite,
    } = body;

    // Server-side validation
    const missing: string[] = [];
    if (!nombreProfesional?.trim()) missing.push("nombreProfesional");
    if (!empresa?.trim()) missing.push("empresa");
    if (!correo?.trim()) missing.push("correo");
    if (!nombreCliente?.trim()) missing.push("nombreCliente");
    if (!contactoCliente?.trim()) missing.push("contactoCliente");
    if (!tipoTramite?.trim()) missing.push("tipoTramite");

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Campos requeridos faltantes: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      return NextResponse.json(
        { error: "Formato de correo no válido." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error:
          "Entrega no configurada. Escríbenos por WhatsApp o a contacto@valentinproteccionintegral.com.",
      },
      { status: 503 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}

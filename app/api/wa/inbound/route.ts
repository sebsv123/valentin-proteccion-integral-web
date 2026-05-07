import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";
const TIMEOUT_MS = 15_000;

/**
 * GET /api/wa/inbound
 *
 * Meta webhook verification. Forwards query params to the backend.
 * The backend responds with hub.challenge if hub.verify_token matches.
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams.toString();
    const targetUrl = `${BACKEND_URL}/wa/inbound${searchParams ? `?${searchParams}` : ""}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const response = await fetch(targetUrl, {
      method: "GET",
      signal: controller.signal,
      headers: {
        "Accept": "text/plain, */*",
      },
    });

    clearTimeout(timeoutId);

    const text = await response.text();

    return new NextResponse(text, {
      status: response.status,
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "text/plain",
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[WEBHOOK_PROXY_GET]", message);

    if (error instanceof DOMException && error.name === "AbortError") {
      return new NextResponse("Backend timeout", { status: 504 });
    }

    return new NextResponse("Bad gateway", { status: 502 });
  }
}

/**
 * POST /api/wa/inbound
 *
 * Forwards incoming WhatsApp messages to the backend.
 * Preserves Content-Type and body.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const contentType = request.headers.get("Content-Type") || "application/json";

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const response = await fetch(`${BACKEND_URL}/wa/inbound`, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": contentType,
        "Accept": "application/json, text/plain, */*",
      },
      body: body || undefined,
    });

    clearTimeout(timeoutId);

    const responseText = await response.text();

    const resHeaders: Record<string, string> = {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    };

    const responseContentType = response.headers.get("Content-Type");
    if (responseContentType) {
      resHeaders["Content-Type"] = responseContentType;
    }

    if (responseText) {
      return new NextResponse(responseText, {
        status: response.status,
        headers: resHeaders,
      });
    }

    return new NextResponse(null, { status: response.status, headers: resHeaders });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[WEBHOOK_PROXY_POST]", message);

    if (error instanceof DOMException && error.name === "AbortError") {
      return NextResponse.json({ error: "Backend timeout" }, { status: 504 });
    }

    return NextResponse.json({ error: "Bad gateway" }, { status: 502 });
  }
}

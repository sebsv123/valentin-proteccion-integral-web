import "server-only";

import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import type { LeadEmailPayload } from "./lead-email-schemas";

type MailInfo = {
  accepted?: Array<string | { address?: string }>;
  rejected?: Array<string | { address?: string }>;
  messageId?: string;
};

type MailTransport = {
  sendMail: (options: SMTPTransport.Options) => Promise<MailInfo>;
};

type SendLeadEmailOptions = {
  env?: NodeJS.ProcessEnv;
  transport?: MailTransport;
};

export type SendLeadEmailResult = {
  messageId: string;
  accepted: string[];
};

export class LeadEmailConfigError extends Error {
  constructor() {
    super("Lead email delivery is not configured.");
    this.name = "LeadEmailConfigError";
  }
}

export class LeadEmailDeliveryError extends Error {
  constructor() {
    super("Lead email delivery failed.");
    this.name = "LeadEmailDeliveryError";
  }
}

const DEFAULT_FROM_EMAIL = "contacto@valentinproteccionintegral.com";
const DEFAULT_FROM_NAME = "Valentín Protección Integral";

function normalizeAddress(address: string | { address?: string }) {
  return typeof address === "string" ? address.toLowerCase() : (address.address || "").toLowerCase();
}

function hasSmtpConfig(env: NodeJS.ProcessEnv) {
  return Boolean(
    env.SMTP_HOST &&
      env.SMTP_PORT &&
      env.SMTP_SECURE &&
      env.SMTP_USER &&
      env.SMTP_APP_PASSWORD &&
      env.CONTACT_LEADS_EMAIL
  );
}

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatRows(payload: LeadEmailPayload) {
  const rows: Array<[string, string]> = [
    ["Origen", payload.source],
    ["Nombre", payload.name],
    ["Teléfono", payload.phone || "No indicado"],
    ["Email", payload.email || "No indicado"],
    ["Interés", payload.interest],
    ["Mensaje", payload.message || "No indicado"],
    ["URL", payload.pageUrl || "No indicada"],
    ["Referrer", payload.referrer || "No indicado"],
  ];

  for (const [key, value] of Object.entries(payload.metadata || {})) {
    rows.push([key, value]);
  }

  for (const [key, value] of Object.entries(payload.utm || {})) {
    rows.push([`UTM ${key}`, value]);
  }

  return rows;
}

function buildText(payload: LeadEmailPayload) {
  return formatRows(payload)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

function buildHtml(payload: LeadEmailPayload) {
  const rows = formatRows(payload)
    .map(
      ([label, value]) => `
        <tr>
          <th align="left" style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#123b68;">${escapeHtml(label)}</th>
          <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${escapeHtml(value).replace(/\n/g, "<br />")}</td>
        </tr>`
    )
    .join("");

  return `
    <!doctype html>
    <html lang="es">
      <body style="margin:0;padding:24px;background:#f8fafc;color:#0f172a;font-family:Arial,sans-serif;">
        <main style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:18px;border:1px solid #e5e7eb;overflow:hidden;">
          <header style="padding:24px;background:#123b68;color:#ffffff;">
            <h1 style="margin:0;font-size:22px;">Nueva consulta web</h1>
            <p style="margin:8px 0 0;font-size:14px;">Valentín Protección Integral</p>
          </header>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tbody>${rows}</tbody>
          </table>
        </main>
      </body>
    </html>`;
}

function createTransport(env: NodeJS.ProcessEnv): MailTransport {
  return nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: Number(env.SMTP_PORT),
    secure: env.SMTP_SECURE === "true",
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_APP_PASSWORD,
    },
  });
}

export async function sendLeadEmail(
  payload: LeadEmailPayload,
  options: SendLeadEmailOptions = {}
): Promise<SendLeadEmailResult> {
  const env = options.env || process.env;

  if (!hasSmtpConfig(env)) {
    throw new LeadEmailConfigError();
  }

  const to = env.CONTACT_LEADS_EMAIL as string;
  const fromEmail = env.SMTP_USER || DEFAULT_FROM_EMAIL;
  const from = `${DEFAULT_FROM_NAME} <${fromEmail}>`;
  const subject = payload.subject || `Nueva consulta web VPI: ${payload.interest}`;
  const transport = options.transport || createTransport(env);

  let info: MailInfo;
  try {
    info = await transport.sendMail({
      from,
      to,
      replyTo: payload.email || undefined,
      subject,
      text: buildText(payload),
      html: buildHtml(payload),
    });
  } catch {
    throw new LeadEmailDeliveryError();
  }

  const accepted = (info.accepted || []).map(normalizeAddress).filter(Boolean);
  if (!accepted.includes(to.toLowerCase())) {
    throw new LeadEmailDeliveryError();
  }

  return {
    messageId: info.messageId || "",
    accepted,
  };
}

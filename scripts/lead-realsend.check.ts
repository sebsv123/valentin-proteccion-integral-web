import { sendLeadEmail } from "../lib/server/send-lead-email.ts";
import { leadEmailSchema } from "../lib/server/lead-email-schemas.ts";

// Entorno SMTP sintético: ejercemos TODO el pipeline real (validación →
// buildText/buildHtml → destinatario fijo → replyTo) SIN abrir conexión SMTP ni
// entregar un lead falso al buzón real de producción. El transporte queda
// instrumentado para capturar exactamente lo que se enviaría.
const env = {
  SMTP_HOST: "smtp.example.test",
  SMTP_PORT: "465",
  SMTP_SECURE: "true",
  SMTP_USER: "contacto@valentinproteccionintegral.com",
  SMTP_APP_PASSWORD: "synthetic",
  CONTACT_LEADS_EMAIL: "contacto@valentinproteccionintegral.com",
} as NodeJS.ProcessEnv;

// Payload EXACTO que compone el formulario de /extranjeros/alquileres,
// incluyendo un intento de inyección HTML en comentarios y zona.
const metadata: Record<string, string> = {
  "Perfil de vivienda": "Estudiante internacional",
  "Ciudad destino": "Madrid",
  "Contacto preferido": "Email",
  Amueblado: "Amueblado",
  "¿Necesita seguro?": "Sí, también seguro",
  "Fecha de llegada": "sept. 2026",
  "Duración prevista": "curso académico",
  "Presupuesto mensual": "500–700 €",
  "Nº de personas": "2",
  "Zona preferida": "Chamberí <b>test</b>",
  "Universidad / trabajo": "UCM",
};
const comments = 'Necesito wifi. <script>alert("xss")</script> & "comillas" \'simples\'';
const message = Object.entries(metadata)
  .map(([k, v]) => `${k}: ${v}`)
  .concat([`Comentarios: ${comments}`])
  .join("\n");

const payload = {
  source: "alquileres-extranjeros",
  name: 'Ana <img src=x onerror="alert(1)">',
  phone: "",
  email: "ana@example.test",
  interest: "Alquileres / vivienda en Madrid — Estudiante internacional",
  message,
  metadata,
  consent: true,
  website: "",
  subject: "Solicitud de vivienda (Madrid) — Estudiante internacional",
  pageUrl: "https://valentinproteccionintegral.com/extranjeros/alquileres",
  referrer: "",
  utm: { utm_source: "instagram", utm_campaign: "vivienda-madrid" },
};

const parsed = leadEmailSchema.safeParse(payload);
if (!parsed.success) {
  console.error("❌ El payload de alquileres NO valida:", parsed.error.flatten());
  process.exit(1);
}
console.log("✔ Payload de alquileres válido contra leadEmailSchema.");

let captured: { text?: string; html?: string; to?: string; replyTo?: string; subject?: string } = {};
const transport = {
  async sendMail(options: Record<string, unknown>) {
    captured = options as typeof captured;
    return {
      accepted: ["contacto@valentinproteccionintegral.com"],
      rejected: [],
      messageId: "<synthetic-render-check@vpi>",
    };
  },
};

const result = await sendLeadEmail(parsed.data, { env, transport });

const html = captured.html || "";
const text = captured.text || "";

const checks: Array<[string, boolean]> = [
  ["Destinatario fijo = buzón de leads", captured.to === "contacto@valentinproteccionintegral.com"],
  ["replyTo = email del solicitante", captured.replyTo === "ana@example.test"],
  ["Asunto estructurado presente", captured.subject === payload.subject],
  ["messageId devuelto (no simula éxito ciego)", result.messageId === "<synthetic-render-check@vpi>"],
  ["Sin 'undefined' en HTML", !/undefined/.test(html)],
  ["Sin 'null' en HTML", !/\bnull\b/.test(html)],
  ["Sin '[object Object]' en HTML", !/\[object Object\]/.test(html)],
  ["Teléfono ausente → 'No indicado'", /No indicado/.test(html)],
  ["<script> NEUTRALIZADO (escapado)", html.includes("&lt;script&gt;") && !/<script>/i.test(html)],
  ["onerror NO ejecutable (comillas escapadas)", !/onerror="/.test(html)],
  ["Zona con <b> escapada", html.includes("Chamberí &lt;b&gt;test&lt;/b&gt;")],
  ["Presupuesto legible", html.includes("500–700 €") && text.includes("500–700 €")],
  ["Fecha legible", text.includes("Fecha de llegada: sept. 2026")],
  ["Zona en texto", text.includes("Zona preferida: Chamberí")],
  ["Amueblado legible", text.includes("Amueblado: Amueblado")],
  ["Comentarios presentes y escapados en texto", text.includes("Comentarios: Necesito wifi")],
];

let allOk = true;
console.log("\n── Verificación de render del email ──");
for (const [label, pass] of checks) {
  console.log(`${pass ? "✔" : "❌"} ${label}`);
  if (!pass) allOk = false;
}

console.log("\n── Representación ANONIMIZADA del email (texto plano) ──");
console.log(
  text
    .replace(/ana@example\.test/g, "[email-solicitante]")
    .replace(/Ana [^\n]*/g, "[nombre-solicitante]")
);

console.log("\nResultado:", allOk ? "✅ TODO OK" : "❌ HAY FALLOS");
process.exit(allOk ? 0 : 1);

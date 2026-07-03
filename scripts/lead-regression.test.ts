import assert from "node:assert/strict";
import test from "node:test";
import { leadEmailSchema } from "../lib/server/lead-email-schemas.ts";

// Contrato del endpoint /api/leads: leadEmailSchema es la frontera real de
// validación en servidor. Todos los formularios (alquileres, lead-form,
// dental-lead-form, landing/asesoria-gratuita) publican contra este esquema.
//
// Regla de canal en servidor (refine): se acepta si hay teléfono con longitud
// >= 6 O un email presente. El honeypot `website` debe ir vacío.

const base = {
  source: "alquileres-extranjeros",
  name: "Persona Test",
  interest: "Alquileres / vivienda en Madrid — Estudiante internacional",
  message: "Perfil de vivienda: Estudiante internacional\nCiudad destino: Madrid",
  consent: true as const,
};

const ok = (payload: Record<string, unknown>) => leadEmailSchema.safeParse(payload).success;

// A. Alquileres + WhatsApp + teléfono válido → aceptar
test("A. WhatsApp + teléfono válido → acepta", () => {
  assert.equal(ok({ ...base, phone: "603448765", email: "" }), true);
});

// B. Alquileres + llamada + teléfono válido → aceptar
test("B. Llamada + teléfono válido → acepta", () => {
  assert.equal(ok({ ...base, phone: "603448765", email: "" }), true);
});

// C. Alquileres + WhatsApp sin teléfono (ni email) → rechazar
test("C. WhatsApp sin teléfono ni email → rechaza", () => {
  assert.equal(ok({ ...base, phone: "", email: "" }), false);
});

// D. Alquileres + email + email válido y sin teléfono → aceptar
test("D. Email válido sin teléfono → acepta", () => {
  assert.equal(ok({ ...base, phone: "", email: "persona@example.test" }), true);
});

// E. Alquileres + email sin email (ni teléfono) → rechazar
test("E. Canal email pero sin email ni teléfono → rechaza", () => {
  assert.equal(ok({ ...base, phone: "", email: "" }), false);
});

// F. Formulario antiguo con teléfono y sin contactPreference → sigue aceptando
test("F. Payload antiguo con teléfono, sin contactPreference → acepta", () => {
  const legacy = {
    source: "lead-form",
    name: "Cliente Salud",
    phone: "603448765",
    interest: "salud",
    message: "Detalle útil",
    consent: true,
    website: "",
    pageUrl: "https://valentinproteccionintegral.com/",
    referrer: "",
    utm: { utm_source: "test" },
  };
  assert.equal(ok(legacy), true);
});

// G. Formulario antiguo con email y sin teléfono → contrato NO empeora.
// Nota documentada: antes phone era obligatorio, por lo que este payload
// habría sido rechazado. Ahora se acepta (contrato AMPLIADO, no roto). Ningún
// formulario histórico envía email sin teléfono, así que no cambia el
// comportamiento real de ninguno. Todo payload antes válido sigue siendo válido.
test("G. Email sin teléfono → acepta (ampliación de contrato, documentada)", () => {
  assert.equal(ok({ ...base, phone: "", email: "persona@example.test" }), true);
});

// H. Sin teléfono ni email → rechazar
test("H. Sin teléfono ni email → rechaza", () => {
  assert.equal(ok({ ...base, phone: "", email: "" }), false);
});

// I. Honeypot relleno → rechazar
test("I. Honeypot `website` relleno → rechaza", () => {
  assert.equal(ok({ ...base, phone: "603448765", website: "bot-value" }), false);
});

// J.1 Metadata excesiva (valor > 500 chars) → rechaza
test("J.1 Metadata con valor excesivo → rechaza", () => {
  assert.equal(ok({ ...base, phone: "603448765", metadata: { Zona: "x".repeat(501) } }), false);
});

// J.2 Metadata con clave excesiva (> 80 chars) → rechaza
test("J.2 Metadata con clave excesiva → rechaza", () => {
  assert.equal(ok({ ...base, phone: "603448765", metadata: { ["k".repeat(81)]: "v" } }), false);
});

// J.3 Propiedades top-level desconocidas → se sanean (se descartan), acepta
test("J.3 Campos top-level desconocidos → se descartan (saneado)", () => {
  const parsed = leadEmailSchema.safeParse({
    ...base,
    phone: "603448765",
    unexpectedField: "algo",
    admin: true,
  });
  assert.equal(parsed.success, true);
  if (parsed.success) {
    assert.equal("unexpectedField" in parsed.data, false);
    assert.equal("admin" in parsed.data, false);
  }
});

// Extra: teléfono demasiado corto (<6) sin email → rechaza (coherencia de canal)
test("Extra. Teléfono corto (<6) sin email → rechaza", () => {
  assert.equal(ok({ ...base, phone: "123", email: "" }), false);
});

// Extra: metadata estructurada válida de alquileres → acepta y se conserva
test("Extra. Metadata de alquileres válida → acepta y conserva campos", () => {
  const parsed = leadEmailSchema.safeParse({
    ...base,
    phone: "603448765",
    metadata: {
      "Perfil de vivienda": "Estudiante internacional",
      "Ciudad destino": "Madrid",
      "Presupuesto mensual": "500–700 €",
      "Zona preferida": "Chamberí",
    },
  });
  assert.equal(parsed.success, true);
  if (parsed.success) {
    assert.equal(parsed.data.metadata["Zona preferida"], "Chamberí");
  }
});

import assert from "node:assert/strict";
import test from "node:test";
import { leadEmailSchema } from "../lib/server/lead-email-schemas.ts";
import { LeadEmailBlockedError, LeadEmailConfigError, LeadEmailDeliveryError, sendLeadEmail } from "../lib/server/send-lead-email.ts";

const env = {
  NODE_ENV: "development",
  SMTP_HOST: "smtp.example.test",
  SMTP_PORT: "465",
  SMTP_SECURE: "true",
  SMTP_USER: "contacto@valentinproteccionintegral.com",
  SMTP_APP_PASSWORD: "test-password",
  CONTACT_LEADS_EMAIL: "contacto@valentinproteccionintegral.com",
} as NodeJS.ProcessEnv;

const validPayload = {
  source: "test",
  name: "Persona Test",
  phone: "600000000",
  email: "persona@example.test",
  interest: "salud",
  message: "Consulta de prueba",
  consent: true,
  website: "",
  pageUrl: "https://example.test/contacto",
  referrer: "",
  utm: { utm_source: "test" },
};

test("valid lead payload passes validation", () => {
  const parsed = leadEmailSchema.safeParse(validPayload);
  assert.equal(parsed.success, true);
});

test("invalid lead payload is rejected", () => {
  const parsed = leadEmailSchema.safeParse({ ...validPayload, name: "" });
  assert.equal(parsed.success, false);
});

test("honeypot payload is rejected", () => {
  const parsed = leadEmailSchema.safeParse({ ...validPayload, website: "bot-value" });
  assert.equal(parsed.success, false);
});

test("missing SMTP configuration throws config error", async () => {
  await assert.rejects(
    () => sendLeadEmail(leadEmailSchema.parse(validPayload), { env: {} as NodeJS.ProcessEnv }),
    LeadEmailConfigError
  );
});

test("real SMTP is blocked for localhost by default", async () => {
  await assert.rejects(
    () => sendLeadEmail(leadEmailSchema.parse(validPayload), { env, requestHost: "localhost:3000" }),
    LeadEmailBlockedError
  );
});

test("real SMTP is blocked in test mode even for the production inbox", async () => {
  await assert.rejects(
    () => sendLeadEmail(leadEmailSchema.parse(validPayload), {
      env: { ...env, NODE_ENV: "test" },
      requestHost: "example.test",
    }),
    LeadEmailBlockedError
  );
});

test("Vercel preview delivery is blocked by default", async () => {
  const previewEnv = { ...env, VERCEL_ENV: "preview", ALLOW_PREVIEW_LEAD_DELIVERY: undefined } as NodeJS.ProcessEnv;

  await assert.rejects(
    () => sendLeadEmail(leadEmailSchema.parse(validPayload), { env: previewEnv, requestHost: "my-branch.vercel.app" }),
    (error: unknown) => {
      assert.ok(error instanceof LeadEmailBlockedError);
      assert.equal(error.mode, "preview-delivery-blocked");
      return true;
    }
  );
});

test("Vercel preview delivery is allowed with explicit authorization via instrumented transport", async () => {
  const previewEnv = {
    ...env,
    VERCEL_ENV: "preview",
    ALLOW_PREVIEW_LEAD_DELIVERY: "true",
  } as NodeJS.ProcessEnv;

  const transport = {
    async sendMail() {
      return {
        accepted: ["contacto@valentinproteccionintegral.com"],
        rejected: [],
        messageId: "preview-message-id",
      };
    },
  };

  const result = await sendLeadEmail(leadEmailSchema.parse(validPayload), {
    env: previewEnv,
    requestHost: "my-branch.vercel.app",
    transport,
  });

  assert.equal(result.messageId, "preview-message-id");
});

test("Vercel preview authorization actually lifts the guard (no transport, no network)", async () => {
  // No SMTP config and no injected transport: if the preview guard were still
  // blocking, this would reject with LeadEmailBlockedError. Getting past it to
  // LeadEmailConfigError proves ALLOW_PREVIEW_LEAD_DELIVERY=true genuinely
  // disables the guard, without ever calling nodemailer.createTransport.
  await assert.rejects(
    () =>
      sendLeadEmail(leadEmailSchema.parse(validPayload), {
        env: { NODE_ENV: "development", VERCEL_ENV: "preview", ALLOW_PREVIEW_LEAD_DELIVERY: "true" } as NodeJS.ProcessEnv,
        requestHost: "my-branch.vercel.app",
      }),
    LeadEmailConfigError
  );
});

test("Vercel development environment is blocked by default like preview", async () => {
  const devEnv = { ...env, VERCEL_ENV: "development", ALLOW_PREVIEW_LEAD_DELIVERY: undefined } as NodeJS.ProcessEnv;

  await assert.rejects(
    () => sendLeadEmail(leadEmailSchema.parse(validPayload), { env: devEnv, requestHost: "example.test" }),
    (error: unknown) => {
      assert.ok(error instanceof LeadEmailBlockedError);
      assert.equal(error.mode, "preview-delivery-blocked");
      return true;
    }
  );
});

test("Vercel production environment keeps existing (unblocked) behavior", async () => {
  const prodEnv = { ...env, VERCEL_ENV: "production" } as NodeJS.ProcessEnv;

  const transport = {
    async sendMail() {
      return {
        accepted: ["contacto@valentinproteccionintegral.com"],
        rejected: [],
        messageId: "prod-message-id",
      };
    },
  };

  const result = await sendLeadEmail(leadEmailSchema.parse(validPayload), {
    env: prodEnv,
    requestHost: "valentinproteccionintegral.com",
    transport,
  });

  assert.equal(result.messageId, "prod-message-id");
});

test("Vercel production is not gated by the preview guard (no transport, no network)", async () => {
  // No SMTP config and no injected transport, with VERCEL_ENV=production and
  // ALLOW_PREVIEW_LEAD_DELIVERY unset: if production were subject to the
  // preview guard this would reject with LeadEmailBlockedError. Getting past
  // it to LeadEmailConfigError proves production is exempt from that guard.
  await assert.rejects(
    () =>
      sendLeadEmail(leadEmailSchema.parse(validPayload), {
        env: { NODE_ENV: "production", VERCEL_ENV: "production" } as NodeJS.ProcessEnv,
        requestHost: "valentinproteccionintegral.com",
      }),
    LeadEmailConfigError
  );
});

test("localhost stays blocked by default even with ALLOW_PREVIEW_LEAD_DELIVERY=true", async () => {
  const localEnv = { ...env, ALLOW_PREVIEW_LEAD_DELIVERY: "true" } as NodeJS.ProcessEnv;

  await assert.rejects(
    () => sendLeadEmail(leadEmailSchema.parse(validPayload), { env: localEnv, requestHost: "localhost:3000" }),
    (error: unknown) => {
      assert.ok(error instanceof LeadEmailBlockedError);
      assert.equal(error.mode, "local-delivery-blocked");
      return true;
    }
  );
});

test("SMTP errors are mapped to delivery error", async () => {
  const transport = {
    async sendMail() {
      throw new Error("SMTP rejected");
    },
  };

  await assert.rejects(
    () => sendLeadEmail(leadEmailSchema.parse(validPayload), { env, transport }),
    LeadEmailDeliveryError
  );
});

test("delivery succeeds only when fixed recipient is accepted and replyTo is user email", async () => {
  let mailOptions: unknown;
  const transport = {
    async sendMail(options: unknown) {
      mailOptions = options;
      return {
        accepted: ["contacto@valentinproteccionintegral.com"],
        rejected: [],
        messageId: "mock-message-id",
      };
    },
  };

  const result = await sendLeadEmail(leadEmailSchema.parse(validPayload), { env, transport });

  assert.equal(result.messageId, "mock-message-id");
  assert.deepEqual(result.accepted, ["contacto@valentinproteccionintegral.com"]);
  assert.equal((mailOptions as { to: string }).to, "contacto@valentinproteccionintegral.com");
  assert.equal((mailOptions as { replyTo: string }).replyTo, "persona@example.test");
});

test("rejected fixed recipient fails delivery", async () => {
  const transport = {
    async sendMail() {
      return {
        accepted: ["other@example.test"],
        rejected: ["contacto@valentinproteccionintegral.com"],
        messageId: "mock-message-id",
      };
    },
  };

  await assert.rejects(
    () => sendLeadEmail(leadEmailSchema.parse(validPayload), { env, transport }),
    LeadEmailDeliveryError
  );
});

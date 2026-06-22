"use client";

import { useEffect, useState } from "react";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24320.79618946965!2d-3.892!3d40.407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189ae3e2492e3%3A0x6e9e5e3b0c8e0c0a!2sBoadilla%20del%20Monte%2C%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses";

function hasCookieConsent() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem("cookie-consent") === "accepted";
}

export function CookieAwareMap() {
  const [canLoadMap, setCanLoadMap] = useState(false);

  useEffect(() => {
    const refreshConsent = () => setCanLoadMap(hasCookieConsent());

    refreshConsent();
    window.addEventListener("storage", refreshConsent);
    window.addEventListener("cookie-consent-updated", refreshConsent);

    return () => {
      window.removeEventListener("storage", refreshConsent);
      window.removeEventListener("cookie-consent-updated", refreshConsent);
    };
  }, []);

  if (!canLoadMap) {
    return (
      <div className="flex h-[200px] flex-col items-center justify-center gap-3 bg-[var(--bg-soft)] p-4 text-center text-sm text-[var(--muted)]">
        <p>El mapa interactivo de Google Maps se carga solo si aceptas cookies no necesarias.</p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Boadilla%20del%20Monte%2C%20Madrid"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[var(--blue)] underline underline-offset-4"
        >
          Abrir ubicación en Google Maps
        </a>
      </div>
    );
  }

  return (
    <iframe
      src={MAP_SRC}
      width="100%"
      height="200"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Ubicación en Boadilla del Monte, Madrid"
    />
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asesoría de Seguros Gratuita en Madrid · Sin compromiso | Valentín Protección Integral",
  description: "En 15 minutos sabes qué seguro necesitas y cuánto cuesta. Asesor independiente en Madrid. Sin presión, sin comparadores, sin coste.",
  robots: { index: false, follow: false },
};

export default function AsesoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

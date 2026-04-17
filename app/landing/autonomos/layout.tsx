import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Seguro Médico para Autónomos en Madrid · Dedúcete hasta 500€ | Valentín",
  description: "Asesoría gratuita para autónomos en Madrid. Descubre cuánto puedes ahorrar con tu seguro médico y cómo deducirte hasta 500€ en el IRPF. Sin compromiso.",
  robots: { index: false, follow: false },
};

export default function LandingAutonomosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

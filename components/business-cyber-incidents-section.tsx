import {
  Bug,
  DatabaseZap,
  FileLock2,
  Landmark,
  MailWarning,
  ServerOff,
} from "lucide-react";
import Image from "next/image";
import styles from "./business-cyber-incidents-section.module.css";

const chapters = [
  [
    "01",
    "BLOQUEO DE LA ACTIVIDAD",
    "Cuando los sistemas dejan de responder",
    [
      [
        "Ransomware",
        "Secuestro o cifrado de información que impide utilizar sistemas, dispositivos o archivos.",
        FileLock2,
      ],
      [
        "Interrupción de servicios",
        "Caída o bloqueo de webs, servidores y herramientas necesarias para trabajar o vender.",
        ServerOff,
      ],
    ],
  ],
  [
    "02",
    "ENGAÑO Y MOVIMIENTO DE DINERO",
    "Una instrucción aparentemente normal puede haber cambiado",
    [
      [
        "Phishing y suplantación",
        "Comunicaciones fraudulentas destinadas a obtener credenciales o provocar una acción perjudicial.",
        MailWarning,
      ],
      [
        "Fraude por transferencia",
        "Modificación o falsificación de instrucciones de pago mediante engaño o acceso no autorizado.",
        Landmark,
      ],
    ],
  ],
  [
    "03",
    "ACCESO Y EXPOSICIÓN DE INFORMACIÓN",
    "La puerta de entrada también puede estar en una cuenta",
    [
      [
        "Malware y accesos no autorizados",
        "Software malicioso o entrada ilegítima en sistemas, cuentas y dispositivos.",
        Bug,
      ],
      [
        "Brecha de datos",
        "Pérdida, alteración, exposición o acceso no autorizado a información personal o empresarial.",
        DatabaseZap,
      ],
    ],
  ],
] as const;

export function BusinessCyberIncidentsSection() {
  return (
    <section className={styles.section} aria-labelledby="cyber-incidents-title">
      <div className={styles.header}>
        <p className="kicker">CÓMO PUEDE EMPEZAR EL INCIDENTE</p>
        <h2 id="cyber-incidents-title">
          El ataque puede entrar por un sistema, un correo o una decisión
          equivocada
        </h2>
        <p>
          Las vulnerabilidades técnicas son solo una vía. La suplantación de
          identidad, una transferencia manipulada o un archivo aparentemente
          legítimo también pueden comprometer la actividad.
        </p>
      </div>
      <div className={styles.chapters}>
        {chapters.map(([number, label, title, items]) => (
          <article
            className={`${styles.chapter} ${styles[`chapter${number}`]}`}
            key={number}
          >
            <div className={styles.chapterHead}>
              <span>{number}</span>
              <div>
                <p>{label}</p>
                <h3>{title}</h3>
              </div>
            </div>
            <ChapterVisual number={number} />
            <div className={styles.incidents}>
              {items.map(([incident, text, Icon]) => (
                <div className={styles.incident} key={incident}>
                  <Icon aria-hidden="true" />
                  <div>
                    <h4>{incident}</h4>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const incidentArtwork = {
  "01": {
    src: "/images/ciberseguridad/ciberseguridad-ransomware-interrupcion-servicios.webp",
    width: 1136,
    height: 351,
    alt: "Ilustración de un ciberincidente que bloquea sistemas y servicios de una empresa",
  },
  "02": {
    src: "/images/ciberseguridad/ciberseguridad-phishing-fraude-transferencia.webp",
    width: 1200,
    height: 278,
    alt: "Ilustración de una instrucción de pago alterada mediante phishing o suplantación",
  },
  "03": {
    src: "/images/ciberseguridad/ciberseguridad-acceso-brecha-datos.webp",
    width: 1200,
    height: 318,
    alt: "Ilustración de un acceso no autorizado que compromete sistemas y datos empresariales",
  },
} as const;

function ChapterVisual({ number }: { number: keyof typeof incidentArtwork }) {
  const artwork = incidentArtwork[number];
  return (
    <div className={styles.chapterVisual}>
      <Image
        className={styles.incidentArtworkImage}
        src={artwork.src}
        alt={artwork.alt}
        width={artwork.width}
        height={artwork.height}
        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 42vw, 430px"
      />
    </div>
  );
}

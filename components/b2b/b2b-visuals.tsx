import { ArrowUpRight, Globe2, HeartPulse, MessageCircle, ShieldCheck, UsersRound } from 'lucide-react';
import styles from './b2b-pages.module.css';

export function B2BHeroIllustration() {
  return (
    <svg viewBox="0 0 520 420" role="img" aria-label="Composición ilustrada VPI con personas y una interfaz de salud">
      <defs>
        <linearGradient id="vpi-card" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#e8f6f1" /></linearGradient>
      </defs>
      <path d="M74 329c36-82 102-113 193-105 81 7 142 42 181 105" fill="none" stroke="#cae6e1" strokeWidth="5" strokeLinecap="round" />
      <path d="M119 109c50-46 111-54 167-24 44 24 74 75 74 128H118c-12-38-9-75 1-104Z" fill="#f7dfbf" opacity=".7" />
      <rect x="191" y="76" width="196" height="143" rx="19" fill="url(#vpi-card)" stroke="#a9d6d0" strokeWidth="2" />
      <rect x="213" y="98" width="63" height="8" rx="4" fill="#188e89" opacity=".45" />
      <rect x="213" y="116" width="132" height="7" rx="3.5" fill="#cddde0" />
      <rect x="213" y="143" width="76" height="47" rx="11" fill="#eaf4fb" />
      <path d="M223 167h14l7-14 11 26 8-17h15" fill="none" stroke="#188e89" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="165" cy="180" r="33" fill="#efbb8e" />
      <path d="M134 175c4-33 58-38 67 0-13-7-19-20-21-28-10 13-24 23-46 28Z" fill="#102d4d" />
      <path d="M119 320c3-69 22-105 47-105 29 0 52 33 57 105" fill="#188e89" />
      <path d="M161 212h25l8 27-17 21-18-21Z" fill="#fff4e8" />
      <path d="M146 259c21 13 46 14 66 0" fill="none" stroke="#f7dfbf" strokeWidth="7" strokeLinecap="round" />
      <circle cx="356" cy="229" r="28" fill="#b7dcd8" />
      <path d="M329 319c4-55 17-80 35-80 23 0 40 25 45 80" fill="#ee761c" />
      <path d="M334 223c5-32 49-37 59-2-10-4-18-12-21-20-8 12-20 19-38 22Z" fill="#102d4d" />
      <circle cx="348" cy="230" r="3" fill="#102d4d" /><circle cx="365" cy="230" r="3" fill="#102d4d" />
      <path d="M349 241c5 4 10 4 15 0" fill="none" stroke="#102d4d" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M80 337h352" stroke="#102d4d" strokeOpacity=".14" strokeWidth="3" strokeLinecap="round" />
      <circle cx="111" cy="129" r="7" fill="#188e89" /><circle cx="415" cy="105" r="7" fill="#ee761c" />
      <path d="M111 129l-26-20M415 105l27-21" stroke="#102d4d" strokeOpacity=".22" strokeWidth="2" />
    </svg>
  );
}

export function InternationalRouteIllustration() {
  return (
    <svg viewBox="0 0 560 310" role="img" aria-label="Mapa ilustrado de rutas de movilidad internacional">
      <path d="M56 201c40-42 70-80 130-86 45-4 67 34 116 30 51-4 71-68 128-64 43 2 58 30 73 70" fill="none" stroke="#b8d9df" strokeWidth="2" strokeDasharray="8 8" />
      <path d="M73 203c73 14 113 32 190 18 57-11 107-28 185-16" fill="none" stroke="#188e89" strokeWidth="2" strokeDasharray="6 8" />
      <circle cx="56" cy="201" r="10" fill="#ee761c" /><circle cx="186" cy="145" r="10" fill="#188e89" /><circle cx="300" cy="145" r="10" fill="#188e89" /><circle cx="430" cy="81" r="10" fill="#102d4d" /><circle cx="503" cy="151" r="10" fill="#ee761c" />
      <g fill="#fff" stroke="#102d4d" strokeOpacity=".12">
        <rect x="27" y="230" width="104" height="42" rx="12" /><rect x="163" y="81" width="112" height="42" rx="12" /><rect x="388" y="20" width="112" height="42" rx="12" />
      </g>
      <g fill="#102d4d" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700"><text x="47" y="256">España</text><text x="181" y="107">Viajes</text><text x="407" y="46">Equipo global</text></g>
      <path d="M282 203c13-27 31-37 54-39 13 25 6 51-9 67-17 16-34 14-45-28Z" fill="#d9ece8" />
      <path d="M302 209c21-9 32-21 37-38" fill="none" stroke="#188e89" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function B2BIcon({ type }: { type: 'health' | 'digital' | 'people' | 'international' }) {
  const icon = { health: <HeartPulse size={20} aria-hidden="true" />, digital: <ShieldCheck size={20} aria-hidden="true" />, people: <UsersRound size={20} aria-hidden="true" />, international: <Globe2 size={20} aria-hidden="true" /> }[type];
  return <span className={styles.bentoIcon}>{icon}</span>;
}

export function ArrowLink({ children, href = '#propuesta' }: { children: React.ReactNode; href?: string }) {
  return <a className={styles.textButton} href={href}>{children}<ArrowUpRight size={16} aria-hidden="true" /></a>;
}

export function HelpBadge() {
  return <span aria-hidden="true"><MessageCircle size={16} /></span>;
}

/**
 * Skyline abstracto y decorativo de Madrid, dibujado como SVG propio.
 * Formas simples e inspiradas (no reproduce una ilustración protegida ni
 * edificios con detalle). Pensado para el borde inferior del hero.
 */
export function MadridSkyline({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 220"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* Capa lejana, tenue */}
      <g opacity="0.35" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <path d="M0 200 V150 H70 V175 H150 V120 H210 V170 H300 V140 H360 V200" />
        <path d="M420 200 V130 H470 V160 H540 V110 H590 V200" />
        <path d="M980 200 V150 H1040 V125 H1090 V165 H1160 V135 H1220 V200" />
        <path d="M1250 200 V145 H1320 V170 H1380 V120 H1440 V200" />
      </g>

      {/* Capa cercana, marcada */}
      <g stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" opacity="0.85">
        {/* Torre con antena (guiño a las Cuatro Torres) */}
        <path d="M120 220 V96 H170 V220" />
        <line x1="145" y1="96" x2="145" y2="66" />
        {/* Edificio escalonado */}
        <path d="M210 220 V140 H250 V112 H290 V150 H330 V220" />
        {/* Bloque con ventanas insinuadas */}
        <path d="M380 220 V120 H450 V220" />
        <line x1="398" y1="140" x2="432" y2="140" />
        <line x1="398" y1="164" x2="432" y2="164" />
        <line x1="398" y1="188" x2="432" y2="188" />
        {/* Cúpula sencilla (guiño a Metrópolis) */}
        <path d="M520 220 V150 h60 V220" />
        <path d="M520 150 q30 -34 60 0" />
        <line x1="550" y1="116" x2="550" y2="150" />
        {/* Torres gemelas */}
        <path d="M640 220 V104 H676 V220" />
        <path d="M690 220 V104 H726 V220" />
        {/* Edificio ancho */}
        <path d="M770 220 V132 H860 V220" />
        {/* Torre alta con remate */}
        <path d="M910 220 V88 H952 V220" />
        <path d="M910 88 l21 -22 l21 22" />
        {/* Escalonado derecho */}
        <path d="M1000 220 V150 H1040 V120 H1090 V158 H1130 V220" />
        {/* Torre con antena */}
        <path d="M1190 220 V100 H1236 V220" />
        <line x1="1213" y1="100" x2="1213" y2="72" />
        {/* Bloque final */}
        <path d="M1290 220 V128 H1370 V220" />
        <line x1="1308" y1="150" x2="1352" y2="150" />
        <line x1="1308" y1="176" x2="1352" y2="176" />
      </g>
    </svg>
  );
}

export default MadridSkyline;

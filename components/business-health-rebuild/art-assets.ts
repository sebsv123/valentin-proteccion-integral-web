/** Integration contract. V5 illustrations supplied by the user for local integration.
 * Pending exports are specified in docs/salud-pymes-rebuild/art-direction/.
 * No missing URLs or low-quality substitutes are rendered.
 */
export type CoverageMode = 'ambulatoria' | 'completa' | 'reembolso';
export type StudyMoment = 'alternativas' | 'ordenar' | 'decidir';
export type Artwork = {
  id: string;
  desktop: { src: string; width: number; height: number };
  mobile?: { src: string; width: number; height: number };
  alt: string;
  status: 'experimental-v4' | 'provided-v5' | 'approved';
};
const supplied = (id: string, file: string, alt: string, width = 1448, height = 1086): Artwork => ({
  id, desktop: { src: `/brand/valentin/salud-v5/${file}.webp`, width, height },
  alt, status: 'provided-v5',
});
export const healthArtwork = {
  hero: { ...supplied('hero', 'hero-welcome', 'Valentín da la bienvenida en una oficina con documentación de estudio', 1672, 941), mobile: { src: '/brand/valentin/salud-v5/hero-welcome-mobile.webp', width: 900, height: 900 } },
  coverage: {
    ambulatoria: supplied('coverage-ambulatoria', 'coverage-ambulatoria', 'Ilustración conceptual de Valentín conversando con una médica'),
    completa: supplied('coverage-completa', 'coverage-completa', 'Ilustración conceptual de Valentín en una habitación hospitalaria'),
    reembolso: supplied('coverage-reembolso', 'coverage-reembolso', 'Valentín explica un documento de gastos a una persona; ilustración conceptual'),
  } satisfies Record<CoverageMode, Artwork>,
  study: {
    alternatives: supplied('study-alternatives', 'study-alternatives', 'Valentín reflexiona entre varios documentos de alternativas'),
    analysis: supplied('study-analysis', 'study-analysis', 'Valentín revisa gráficos y documentos con una lupa'),
    clarity: supplied('study-clarity', 'study-clarity', 'Valentín presenta una lista de elementos revisados'),
  },
  contribution: supplied('contribution-guide', 'contribution-guide', 'Valentín presenta el simulador; recorte ilustrativo sin cifras ni gráfico financiero', 540, 707),
};
export const studyArtworkForMoment = {
  alternativas: 'alternatives', ordenar: 'analysis', decidir: 'clarity',
} as const satisfies Record<StudyMoment, keyof typeof healthArtwork.study>;

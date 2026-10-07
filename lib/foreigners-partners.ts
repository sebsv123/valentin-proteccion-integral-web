export type ForeignersPartnerLogo = {
  name: string;
  logo: string;
  alt: string;
  surface?: 'light' | 'dark';
  visualScale?: 'large' | 'standard' | 'compact';
};

export const foreignersPartnerLogos: ForeignersPartnerLogo[] = [
  { name: 'Blueprint Spain', logo: '/partners/blueprint-spain.png', alt: 'Blueprint Spain', visualScale: 'large' },
  { name: 'Kors Academy', logo: '/partners/kors-academy.jpg', alt: 'Kors Academy', visualScale: 'compact' },
  { name: 'Student Pro Plus', logo: '/partners/student-pro-plus.png', alt: 'Student Pro Plus', surface: 'dark', visualScale: 'compact' },
  { name: 'VIP Global Perú', logo: '/partners/vip-global-peru.png', alt: 'VIP Global Perú', visualScale: 'standard' },
  { name: 'Plan B Immigration', logo: '/partners/plan-b-immigration.png', alt: 'Plan B Immigration', visualScale: 'large' },
  { name: 'Wejha', logo: '/partners/wejha.png', alt: 'Wejha', visualScale: 'standard' },
  { name: 'Esperon', logo: '/partners/esperon.webp', alt: 'Esperon', visualScale: 'standard' },
  { name: 'Nomadesco', logo: '/partners/nomadesco.png', alt: 'Nomadesco', visualScale: 'standard' },
  { name: 'Aara Consultancy', logo: '/partners/aara-consultancy.webp', alt: 'Aara Consultancy', visualScale: 'standard' },
  { name: 'Relocation Centers', logo: '/partners/relocation-centers-lockup.png', alt: 'Relocation Centers', visualScale: 'standard' },
  { name: 'Experta Travel', logo: '/partners/experta-travel.png', alt: 'Experta Travel / Asesoría Experta', visualScale: 'standard' },
];

// lib/pexels.ts - Pexels API integration for blog images

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

interface PexelsPhoto {
  id: number;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
  };
}

interface PexelsResponse {
  photos: PexelsPhoto[];
}

// Mapeo de slugs a términos de búsqueda optimizados
const slugToQuery: Record<string, string> = {
  'mejor-seguro-medico-calidad-precio-espana': 'doctor consultation healthcare spain',
  'seguro-de-vida-riesgo-que-es': 'family protection life insurance',
  'seguros-salud-cubren-recien-nacidos': 'newborn baby hospital',
  'seguro-medico-asistencia-en-viaje-que-cubre': 'travel adventure airport',
  'fiarse-opiniones-para-elegir-seguro': 'review trust customer feedback',
  'incluir-personas-poliza-medica': 'family health insurance meeting',
  'elegir-seguro-medico-precios-coberturas-2026': 'health insurance medical consultation',
  'como-saber-seguro-tiene-contratado': 'insurance policy document',
  'seguro-viaje-que-cubre-gastos-medicos-repatriacion-perdida-maletas': 'travel luggage airport',
  'seguro-de-vida-riesgo-que-es-cuanto-cuesta-cuando-contratarlo': 'family protection parents children',
  'tipos-de-seguro-de-vida-cual-elegir-2026': 'life insurance family protection',
  'mediador-seguros-asesor-intermediario-diferencias': 'insurance advisor meeting',
  'como-elegir-seguro-medico-privado-madrid': 'doctor medical consultation madrid',
  'mejor-seguro-medico-privado-madrid-comparativa': 'private healthcare madrid hospital',
};

/**
 * Obtiene una imagen de Pexels basada en el slug o título del artículo
 * @param query - Término de búsqueda o slug del post
 * @returns URL de la imagen en formato large2x (1200x630 aprox)
 */
export async function getPexelsImage(query: string): Promise<string> {
  if (!PEXELS_API_KEY) {
    console.warn('PEXELS_API_KEY not set, using default image');
    return '/images/blog/default.jpg';
  }

  // Usar el mapeo si existe, o el query directamente
  const searchTerm = slugToQuery[query] || query;

  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchTerm)}&per_page=1&orientation=landscape`,
      {
        headers: { Authorization: PEXELS_API_KEY },
        next: { revalidate: 86400 }, // Cache por 24 horas
      }
    );

    if (!res.ok) {
      console.error('Pexels API error:', res.status, res.statusText);
      return '/images/blog/default.jpg';
    }

    const data: PexelsResponse = await res.json();
    return data.photos?.[0]?.src?.large2x || '/images/blog/default.jpg';
  } catch (error) {
    console.error('Error fetching Pexels image:', error);
    return '/images/blog/default.jpg';
  }
}

/**
 * Verifica si una imagen es local (empieza con /images/)
 * @param imagePath - Ruta de la imagen
 * @returns true si es local
 */
export function isLocalImage(imagePath: string): boolean {
  return imagePath.startsWith('/images/');
}

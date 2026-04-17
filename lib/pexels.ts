// lib/pexels.ts - Pexels API integration for blog images

const PEXELS_API_KEY = '3AQ8sttJh513w5Dyjz4Ij0cahKmYefSghoX1jnO0Eosv0HLbgQZW0oW1';

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

// Mapeo de slugs a términos de búsqueda optimizados para Pexels
// TODOS los posts del blog deben tener su query específica
const slugToQuery: Record<string, string> = {
  // Posts de salud
  'mejor-seguro-medico-calidad-precio-espana': 'doctor consultation healthcare medical',
  'seguro-medico-privado-madrid': 'private healthcare doctor madrid',
  'mejor-seguro-salud-madrid-2026': 'health insurance hospital madrid',
  'guia-seguro-salud-espana-2026': 'medical health insurance spain',
  'cuanto-cuesta-seguro-salud-madrid': 'healthcare cost medical price',
  'seguros-salud-cubren-recien-nacidos': 'newborn baby hospital pediatric',
  'incluir-personas-poliza-medica': 'family health insurance together',
  
  // Posts de vida y protección
  'seguro-de-vida-riesgo-que-es': 'life insurance family protection',
  'tipos-de-seguros-de-vida': 'life insurance family security',
  'seguro-vida-esencial-familia': 'family protection parents children',
  'seguro-vida-hipoteca-obligatorio': 'mortgage family home protection',
  
  // Posts de viajes
  'seguro-medico-asistencia-en-viaje-que-cubre': 'travel medical insurance airport',
  
  // Posts de mascotas
  'seguros-mascotas-2026-vale-la-pena': 'pet insurance dog cat veterinary',
  'seguro-perros-madrid-ley-bienestar-2026': 'dog pet park madrid',
  'seguro-perro-obligatorio-madrid': 'dog walking park responsible owner',
  
  // Posts de asesoramiento/comparadores
  'fiarse-opiniones-para-elegir-seguro': 'customer review feedback trust',
  'ventajas-mediador-de-seguros': 'insurance advisor consultation office',
  'asesor-seguros-vs-comparador-online': 'insurance advisor vs computer',
  
  // Posts de pólizas/jurídico
  'donde-consultar-que-incluye-mi-poliza': 'insurance policy document contract',
  
  // Posts locales
  'seguros-boadilla-del-monte': 'boadilla del monte madrid suburb family',
  
  // Post dental
  'seguro-dental-familias-madrid': 'dental care family dentist madrid',

  // PRODUCTOS DE SEGUROS - Slugs de productos para uso en páginas de seguros
  // Salud y especialidades médicas
  'salud': 'doctor consultation healthcare medical hospital',
  'salud-individual': 'private healthcare doctor consultation',
  'salud-dental': 'dental care dentist teeth cleaning',
  'salud-extranjeros': 'international medical travel healthcare',
  'vida': 'family protection life insurance parents children',
  'mascotas': 'happy pets dog cat veterinary care',
  'dental': 'dental care family dentist teeth whitening',
  'accidentes': 'accident protection safety insurance',
  'decesos': 'funeral flowers memorial service peaceful',
  'viaje': 'travel adventure airport luggage tourist',
  'hogar': 'modern home living room family house',
  'electrodomesticos': 'home appliances kitchen refrigerator washing machine',
  'proteccion-juridica': 'legal advice lawyer consultation office',
  'negocio': 'small business shop storefront commerce',
  'empresa': 'business office company professional workspace',
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

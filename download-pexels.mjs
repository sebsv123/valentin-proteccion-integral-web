import sharp from 'sharp';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

// Create pexels directory
const pexelsDir = './public/images/pexels';
await mkdir(pexelsDir, { recursive: true });

// Pexels image IDs to download (extracted from URLs)
const imagesToDownload = [
  {
    id: '3875141',
    filename: 'familia-feliz-pexels.webp',
    width: 1200,
    alt: 'Familia feliz en casa',
  },
  {
    id: '7653088',
    filename: 'salud-bienestar-pexels.webp',
    width: 1200,
    alt: 'Consulta médica familiar',
  },
  {
    id: '5998706',
    filename: 'seguro-vida-familia-pexels.webp',
    width: 1200,
    alt: 'Familia protegida en casa',
  },
  {
    id: '4545207',
    filename: 'mascota-familia-pexels.webp',
    width: 1200,
    alt: 'Familia con mascota',
  },
  {
    id: '6627574',
    filename: 'dental-salud-pexels.webp',
    width: 800,
    height: 1000,
    alt: 'Salud dental sonrisa',
  },
  {
    id: '10041230',
    filename: 'autonomo-trabajo-pexels.webp',
    width: 1200,
    alt: 'Autónomo trabajando',
  },
  {
    id: '7414274',
    filename: 'negocio-oficina-pexels.webp',
    width: 1200,
    alt: 'Pequeño negocio oficina',
  },
  {
    id: '4173222',
    filename: 'seguro-viaje-pexels.webp',
    width: 1200,
    alt: 'Familia viaje aeropuerto',
  },
  {
    id: '22065470',
    filename: 'madrid-ciudad-pexels.webp',
    width: 1200,
    alt: 'Madrid ciudad urbano',
  },
  {
    id: '7562185',
    filename: 'cliente-satisfecho-pexels.webp',
    width: 800,
    height: 1000,
    alt: 'Cliente satisfecho retrato',
  },
];

// Pexels API key from env
const PEXELS_API_KEY = process.env.PEXELS_API_KEY || '';

async function downloadAndOptimize(image) {
  try {
    console.log(`Processing: ${image.filename}...`);
    
    // First try to fetch via API to get the best URL
    let imageUrl;
    
    if (PEXELS_API_KEY) {
      try {
        const res = await fetch(
          `https://api.pexels.com/v1/photos/${image.id}`,
          { headers: { Authorization: PEXELS_API_KEY } }
        );
        if (res.ok) {
          const data = await res.json();
          imageUrl = data.src?.large2x || data.src?.large;
        }
      } catch (e) {
        console.log(`API fetch failed for ${image.id}, using direct URL`);
      }
    }
    
    // Fallback to direct CDN URL
    if (!imageUrl) {
      imageUrl = `https://images.pexels.com/photos/${image.id}/pexels-photo-${image.id}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`;
    }
    
    // Download image
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to download: ${response.status}`);
    }
    
    const buffer = Buffer.from(await response.arrayBuffer());
    console.log(`  Downloaded: ${(buffer.length / 1024).toFixed(1)}KB`);
    
    // Process with sharp
    let sharpInstance = sharp(buffer);
    
    // Resize maintaining aspect ratio
    if (image.width && image.height) {
      sharpInstance = sharpInstance.resize(image.width, image.height, { 
        fit: 'cover',
        withoutEnlargement: true 
      });
    } else if (image.width) {
      sharpInstance = sharpInstance.resize(image.width, null, { 
        withoutEnlargement: true 
      });
    }
    
    // Convert to WebP with quality optimization (target < 120KB)
    const webpBuffer = await sharpInstance
      .webp({ quality: 80, effort: 6 })
      .toBuffer();
    
    // If still too large, reduce quality
    let finalBuffer = webpBuffer;
    let quality = 80;
    while (finalBuffer.length > 120 * 1024 && quality > 50) {
      quality -= 10;
      finalBuffer = await sharpInstance
        .webp({ quality, effort: 6 })
        .toBuffer();
    }
    
    // Save file
    const outputPath = path.join(pexelsDir, image.filename);
    await writeFile(outputPath, finalBuffer);
    
    console.log(`  Saved: ${image.filename} (${(finalBuffer.length / 1024).toFixed(1)}KB, quality: ${quality}%)`);
    
    return {
      filename: image.filename,
      path: `/images/pexels/${image.filename}`,
      size: finalBuffer.length,
      width: image.width,
      height: image.height,
      alt: image.alt,
    };
    
  } catch (error) {
    console.error(`  Error processing ${image.filename}:`, error.message);
    return null;
  }
}

// Process all images
console.log('=== Downloading Pexels Images ===\n');

const results = [];
for (const image of imagesToDownload) {
  const result = await downloadAndOptimize(image);
  if (result) results.push(result);
  console.log('');
}

console.log('=== Summary ===');
console.log(`Successfully processed: ${results.length}/${imagesToDownload.length} images`);
console.log('\nImages saved to /public/images/pexels/:');
results.forEach(r => {
  console.log(`  - ${r.filename} (${(r.size / 1024).toFixed(1)}KB)`);
});

console.log('\n=== Update your components with these paths ===');
results.forEach(r => {
  console.log(`  ${r.path}`);
});

process.exit(0);

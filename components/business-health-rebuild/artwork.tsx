import Image, { getImageProps } from 'next/image';
import type { Artwork } from './art-assets';

/** Art-directed mobile source, optimized by Next; live content stays outside the bitmap. */
export function SceneArtwork({ asset, className, sizes, priority = false, fill = false, decorative = false }: {
  asset: Artwork; className?: string; sizes: string; priority?: boolean; fill?: boolean; decorative?: boolean;
}) {
  const image = <Image className={className} src={asset.desktop.src} alt={decorative ? '' : asset.alt}
    {...(fill ? { fill: true } : { width: asset.desktop.width, height: asset.desktop.height })}
    priority={priority && !asset.mobile} loading={priority ? 'eager' : undefined}
    fetchPriority={priority ? 'high' : undefined} sizes={sizes} data-art-slot={asset.id} data-art-status={asset.status} />;
  if (!asset.mobile) return image;
  const mobile = getImageProps({ src: asset.mobile.src, alt: '', width: asset.mobile.width, height: asset.mobile.height, sizes }).props;
  return <picture style={{ display: 'contents' }}><source media="(max-width: 800px)" srcSet={mobile.srcSet} sizes={sizes} width={asset.mobile.width} height={asset.mobile.height} />{image}</picture>;
}

import Image from 'next/image';

export function HeroImage() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Desktop image - higher quality */}
      <Image
        src="/images/premium/hero-family-opt.webp"
        alt="Familia protegida por Valentín Protección Integral"
        fill
        priority
        fetchPriority="high"
        quality={60}
        className="object-cover object-center hidden sm:block"
        sizes="(max-width: 1024px) 55vw, 700px"
      />
      {/* Mobile image - optimized size and quality */}
      <Image
        src="/images/premium/hero-family-opt.webp"
        alt="Familia protegida por Valentín Protección Integral"
        fill
        priority
        fetchPriority="high"
        quality={50}
        className="object-cover object-center sm:hidden"
        sizes="100vw"
      />
    </div>
  );
}

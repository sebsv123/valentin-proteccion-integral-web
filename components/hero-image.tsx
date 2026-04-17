import Image from 'next/image';

export function HeroImage() {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/premium/hero-family-opt.webp"
        alt="Familia protegida por Valentín Protección Integral"
        fill
        priority
        fetchPriority="high"
        quality={60}
        className="object-cover object-center"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 700px"
      />
    </div>
  );
}

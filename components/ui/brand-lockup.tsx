import Image from 'next/image';
import Link from 'next/link';

type BrandLockupProps = {
  variant?: 'light' | 'dark';
  size?: 'compact' | 'default';
  showDescriptor?: boolean;
  className?: string;
  priority?: boolean;
  href?: string;
};

export function BrandLockup({
  variant = 'light',
  size = 'default',
  className = '',
  priority = false,
  href = '/',
}: BrandLockupProps) {
  const compact = size === 'compact';

  return (
    <Link
      href={href}
      aria-label="Valentín Protección Integral"
      className={`inline-flex w-fit max-w-full shrink-0 items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${className}`}
    >
      <Image
        src={variant === 'light' ? '/brand/vpi/logo-horizontal-light.png' : '/brand/vpi/logo-horizontal.png'}
        alt="Valentín Protección Integral"
        width={2508}
        height={627}
        sizes={compact ? '(max-width: 359px) 200px, (max-width: 1279px) 240px, 270px' : '(max-width: 767px) 280px, 320px'}
        className={`block h-auto ${compact ? 'w-[220px] max-[359px]:w-[200px] sm:w-[250px] 2xl:w-[270px]' : 'w-[300px] max-w-full'}`}
        priority={priority}
      />
    </Link>
  );
}

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
        src={variant === 'light' ? '/brand/vpi/logo-horizontal-light-trim.png' : '/brand/vpi/logo-horizontal-trim.png'}
        alt="Valentín Protección Integral"
        width={2229}
        height={174}
        sizes={compact ? '(max-width: 639px) calc(100vw - 208px), (max-width: 1023px) calc(50vw - 100px), 416px' : '(max-width: 767px) 280px, 320px'}
        className={`block h-auto ${compact ? 'w-[max(7.5rem,calc(100vw-13rem))] max-[639px]:max-w-[220px] min-[640px]:w-[clamp(13.75rem,calc(50vw-100px),26rem)]' : 'w-[300px] max-w-full'}`}
        priority={priority}
      />
    </Link>
  );
}

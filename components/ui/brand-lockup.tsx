import Image from 'next/image';
import Link from 'next/link';

type BrandLockupProps = {
  variant?: 'light' | 'dark';
  size?: 'compact' | 'default';
  showDescriptor?: boolean;
  className?: string;
  priority?: boolean;
};

export function BrandLockup({
  variant = 'light',
  size = 'default',
  showDescriptor = true,
  className = '',
  priority = false,
}: BrandLockupProps) {
  const compact = size === 'compact';
  const primaryColor = variant === 'light' ? 'text-white' : 'text-[var(--blue-deep)]';
  const secondaryColor = variant === 'light' ? 'text-white/85' : 'text-[var(--blue-deep)]/75';

  return (
    <Link
      href="/"
      aria-label="Valentín Protección Integral — Inicio"
      className={`inline-flex shrink-0 items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${compact ? 'gap-2.5' : 'gap-3'} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`relative shrink-0 ${compact ? 'h-9 w-[42px] max-[349px]:h-8 max-[349px]:w-[37px]' : 'h-11 w-[51px]'}`}
      >
        <Image
          src="/brand/isotipo-valentin.png"
          alt=""
          fill
          sizes={compact ? '42px' : '51px'}
          className="object-contain"
          priority={priority}
        />
      </span>
      <span className="flex min-w-0 flex-col items-start leading-none">
        <span
          className={`font-heading font-bold tracking-[-0.025em] ${primaryColor} ${compact ? 'text-[20px] max-[349px]:text-[19px]' : 'text-[23px]'}`}
        >
          Valentín
        </span>
        {showDescriptor ? (
          <span
            className={`mt-1 whitespace-nowrap font-semibold tracking-[0.025em] ${secondaryColor} ${compact ? 'text-[10px] max-[349px]:hidden' : 'text-[11px]'}`}
          >
            Protección Integral
          </span>
        ) : null}
      </span>
    </Link>
  );
}

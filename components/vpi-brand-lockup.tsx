"use client";

import Image from 'next/image';
import Link from 'next/link';

type VpiBrandLockupProps = {
  href: string;
  size?: 'header' | 'footer';
  priority?: boolean;
};

export function VpiBrandLockup({ href, size = 'header', priority = false }: VpiBrandLockupProps) {
  const isHeader = size === 'header';

  return (
    <Link
      href={href}
      aria-label="Valentín Protección Integral"
      data-brand-lockup={size}
      className={`inline-flex ${isHeader ? '' : 'w-fit max-w-full '}shrink-0 items-center gap-2 rounded-md text-[#0b2e6b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current sm:gap-2.5`}
    >
      <Image
        src="/brand/vpi/VPI_G2_symbol_master.svg"
        alt=""
        width={64}
        height={40}
        priority={priority}
        className="h-9 w-[58px] object-contain sm:h-10 sm:w-16"
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-heading text-[19px] font-bold tracking-[-0.025em] sm:text-[21px]">
          Valentín
        </span>
        <span className="mt-1 whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.12em] sm:text-[9px]">
          Protección Integral
        </span>
      </span>
    </Link>
  );
}

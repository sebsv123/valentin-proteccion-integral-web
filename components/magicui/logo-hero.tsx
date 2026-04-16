"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export default function LogoHero({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 flex items-center justify-center", className)}>
      <div
        className="relative w-[95%] max-w-[720px] aspect-[16/7]"
        style={{
          animation: "logo3d 5s ease-in-out infinite",
          filter: "drop-shadow(0 32px 48px rgba(0,51,102,0.28)) drop-shadow(0 8px 16px rgba(0,51,102,0.15))",
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src="/brand/logo-valentin.jpg"
          alt="Valentín Protección Integral"
          fill
          className="object-contain rounded-2xl"
          priority
        />
      </div>
    </div>
  );
}

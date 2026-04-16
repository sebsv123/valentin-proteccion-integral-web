"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const pointerDown = useRef<number | null>(null);
  const pointerOffset = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onResize = () => {
      widthRef.current = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const w = widthRef.current;
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: w * 2,
      height: w * 2,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 0.4,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [1, 1, 1],
      markers: [
        { location: [40.4168, -3.7038], size: 0.1 },
        { location: [41.3851, 2.1734], size: 0.07 },
        { location: [51.5074, -0.1278], size: 0.07 },
        { location: [48.8566, 2.3522], size: 0.06 },
        { location: [52.52, 13.405], size: 0.06 },
        { location: [41.9028, 12.4964], size: 0.05 },
        { location: [40.7128, -74.006], size: 0.05 },
      ],
    });

    let rafId: number;
    const animate = () => {
      if (pointerDown.current === null) {
        phiRef.current += 0.005;
      }
      const w = widthRef.current;
      globe.update({
        phi: phiRef.current + pointerOffset.current,
        width: w * 2,
        height: w * 2,
      });
      rafId = requestAnimationFrame(animate);
    };

    setTimeout(() => {
      if (canvas) canvas.style.opacity = "1";
    });
    animate();

    return () => {
      globe.destroy();
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-500"
        style={{ cursor: "grab" }}
        onPointerDown={(e) => {
          pointerDown.current = e.clientX;
          (e.target as HTMLElement).style.cursor = "grabbing";
        }}
        onPointerUp={(e) => {
          pointerDown.current = null;
          (e.target as HTMLElement).style.cursor = "grab";
        }}
        onPointerOut={(e) => {
          pointerDown.current = null;
          (e.target as HTMLElement).style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerDown.current !== null) {
            const delta = e.clientX - pointerDown.current;
            pointerOffset.current = delta / 200;
          }
        }}
        onTouchMove={(e) => {
          if (e.touches[0] && pointerDown.current !== null) {
            const delta = e.touches[0].clientX - pointerDown.current;
            pointerOffset.current = delta / 200;
          }
        }}
      />
    </div>
  );
}

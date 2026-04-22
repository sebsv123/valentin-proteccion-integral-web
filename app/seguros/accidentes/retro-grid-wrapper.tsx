"use client";
import dynamic from "next/dynamic";
export const RetroGridWrapper = dynamic(
  () => import("@/components/magicui/retro-grid"),
  { ssr: false, loading: () => <div className="absolute inset-0 z-0" /> }
);

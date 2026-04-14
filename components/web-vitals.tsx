"use client";

import { useEffect } from "react";
import { onLCP, onINP, onCLS, onFCP, onTTFB } from "web-vitals";
import { track } from "@vercel/analytics";

export function WebVitals() {
  useEffect(() => {
    const send = (metric: { name: string; value: number; rating: string }) => {
      track('WebVital', {
        name: metric.name,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        rating: metric.rating,
      });
    };
    onLCP(send);
    onINP(send);
    onCLS(send);
    onFCP(send);
    onTTFB(send);
  }, []);

  return null;
}

"use client";

import { useScrollFX } from "@/hooks/useScrollFX";

export function ScrollFXProvider({ intensity = 10 }: { intensity?: number }) {
  useScrollFX(intensity);
  return null;
}

"use client";

import type { MouseEvent } from "react";

export function setCardPointer<T extends HTMLElement>(e: MouseEvent<T>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

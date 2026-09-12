"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  reverse?: boolean;
}

/**
 * Traveling border light — Magic UI / 21st.dev style.
 * Parent must be `relative overflow-hidden` with a small padding ring
 * so the spinning conic gradient shows only on the border.
 */
export function BorderBeam({
  className,
  duration = 5,
  colorFrom = "#f8f5ee",
  colorTo = "#a98345",
  reverse = false,
}: BorderBeamProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[200%] will-change-transform",
        reverse ? "animate-border-beam-reverse" : "animate-border-beam",
        className,
      )}
      style={{
        animationDuration: `${duration}s`,
        background: `conic-gradient(from 0deg, transparent 0 52%, ${colorTo} 62%, ${colorFrom} 72%, ${colorTo} 82%, transparent 90% 100%)`,
      }}
    />
  );
}

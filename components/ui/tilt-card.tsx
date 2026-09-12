"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees */
  maxTilt?: number;
  /** Soft gold spotlight that follows the pointer */
  glare?: boolean;
  /** Architectural column silhouette for Why Renil pillars */
  variant?: "card" | "pillar";
};

/**
 * Pointer-driven 3D tilt card (21st.dev / Motion-style).
 * Brand-tuned gold glare for Renil ivory surfaces.
 */
export function TiltCard({
  children,
  className,
  maxTilt = 9,
  glare = true,
  variant = "card",
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const spring = { stiffness: 280, damping: 26, mass: 0.55 };
  const rotateX = useSpring(useMotionValue(0), spring);
  const rotateY = useSpring(useMotionValue(0), spring);
  const scale = useSpring(useMotionValue(1), spring);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useSpring(useMotionValue(0), {
    stiffness: 200,
    damping: 28,
  });

  const glareBg = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, rgba(185,154,104,0.28), transparent 55%)`;

  const onMove = (e: React.PointerEvent) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    rotateX.set(-(y - 0.5) * 2 * maxTilt);
    rotateY.set((x - 0.5) * 2 * maxTilt);
    glareX.set(x * 100);
    glareY.set(y * 100);
  };

  const onEnter = () => {
    if (reduceMotion) return;
    scale.set(1.02);
    glareOpacity.set(1);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    glareOpacity.set(0);
    glareX.set(50);
    glareY.set(50);
  };

  const isPillar = variant === "pillar";

  return (
    <div className="[perspective:1100px]">
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerEnter={onEnter}
        onPointerLeave={onLeave}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative will-change-transform",
          isPillar
            ? "rounded-none border-0 bg-transparent shadow-none hover:shadow-none hover:border-transparent"
            : "rounded-3xl border border-[#a98345]/25 bg-[#f8f5ee] shadow-[0_18px_40px_-28px_rgba(34,32,29,0.45)] hover:border-[#a98345]/55 hover:shadow-[0_28px_60px_-28px_rgba(169,131,69,0.45)]",
          !isPillar && "shadow-[0_18px_40px_-28px_rgba(34,32,29,0.45)]",
          "transition-[border-color,box-shadow] duration-300",
          className,
        )}
      >
        {!isPillar ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/40"
            style={{ transform: "translateZ(1px)" }}
          />
        ) : null}

        {glare && !reduceMotion ? (
          <motion.div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0 mix-blend-soft-light",
              isPillar ? "rounded-[2rem]" : "rounded-[inherit]",
            )}
            style={{
              background: glareBg,
              opacity: glareOpacity,
              transform: "translateZ(2px)",
            }}
          />
        ) : null}

        <div className="relative h-full" style={{ transform: "translateZ(24px)" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}

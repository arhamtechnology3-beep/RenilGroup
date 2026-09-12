"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";

interface ArchFrameProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  border?: boolean;
  /** Magic UI / 21st.dev traveling border beam */
  beam?: boolean;
}

export function ArchFrame({
  children,
  className,
  glow = true,
  border = true,
  beam = false,
}: ArchFrameProps) {
  return (
    <div
      className={cn(
        "group/arch relative overflow-hidden arch-mask transition-all duration-500",
        // Padding ring is required for the beam to remain visible around the photo
        beam ? "p-[3px]" : border && "border border-[#a98345]/35",
        !beam && glow && "arch-glow",
        beam && "bg-[#a98345]/35",
        className,
      )}
    >
      {beam ? (
        <>
          {/* Base gold rim so the border never looks empty */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#d8c7ad]/50 via-[#a98345]/35 to-[#8e6d3e]/45"
          />
          <BorderBeam colorFrom="#fffdf9" colorTo="#a98345" duration={4.5} />
          <BorderBeam
            colorFrom="#b99a68"
            colorTo="#8e6d3e"
            duration={6}
            reverse
            className="opacity-80"
          />
        </>
      ) : null}

      {/* Top Arch Ambient Highlight */}
      <div
        className="pointer-events-none absolute -top-12 left-1/2 z-[2] h-24 w-48 -translate-x-1/2 rounded-full bg-[#b99a68]/20 blur-2xl transition-opacity duration-500 group-hover/arch:opacity-100"
        aria-hidden="true"
      />

      <div
        className={cn(
          "relative z-[1] h-full w-full overflow-hidden arch-mask bg-[#161513]",
          glow && beam && "arch-glow",
        )}
      >
        {children}
      </div>
    </div>
  );
}

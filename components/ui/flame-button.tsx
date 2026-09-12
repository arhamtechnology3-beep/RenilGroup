"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FlameButtonProps {
  children?: React.ReactNode;
  text?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

/**
 * FlameButton component based on @ayushmxxn/components/flame-button from 21st.dev
 * Features cursor-reactive flame flare, edge radiance, and crystal-clear text contrast.
 */
export function FlameButton({
  children,
  text,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  showArrow = false,
  type = "button",
  disabled = false,
}: FlameButtonProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [width, setWidth] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [displayOpacity, setDisplayOpacity] = useState(0);
  const targetOpacityRef = useRef(0);

  const handleMouseEnter = () => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      rectRef.current = rect;
      setWidth(rect.width);
    }
    setIsHovering(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = rectRef.current;
    if (rect) {
      setMouseX(e.clientX - rect.left);
    }
  };

  const safeMouseX = mouseX ?? width / 2;
  const normX = width ? safeMouseX / width : 0.5;
  const isRightSide = normX >= 0.5;
  const edgeProximity = Math.pow(Math.min(1, Math.abs(normX - 0.5) * 2), 1.6);
  const targetOpacity = isHovering ? Math.max(0.4, edgeProximity) : 0;

  useEffect(() => {
    targetOpacityRef.current = targetOpacity;
  }, [targetOpacity]);

  useEffect(() => {
    let rafId: number | null = null;

    const tick = () => {
      setDisplayOpacity((prev) => {
        const target = targetOpacityRef.current;
        const diff = target - prev;
        if (Math.abs(diff) < 0.002) {
          rafId = null;
          return target;
        }
        rafId = requestAnimationFrame(tick);
        return prev + diff * 0.15;
      });
    };

    if (Math.abs(targetOpacity - displayOpacity) > 0.002 && rafId === null) {
      rafId = requestAnimationFrame(tick);
    }

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [targetOpacity, displayOpacity]);

  const edgePercent = isRightSide ? 85 : 15;

  // Serenity UI Flame colors adapted to luxury warm amber/gold fire
  const hot = "255, 214, 130";
  const core = "255, 106, 45";
  const edge = "255, 45, 85";

  // Sizes
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 sm:py-3 text-sm",
    lg: "px-8 py-3.5 sm:py-4 text-base",
  };

  // Base button styles matching each variant
  const variantStyles: Record<
    "primary" | "secondary" | "outline" | "dark",
    {
      buttonClass: string;
      textClass: string;
      hoverTextClass?: string;
    }
  > = {
    primary: {
      buttonClass:
        "bg-gradient-to-r from-[#a98345] via-[#b99a68] to-[#8e6d3e] border border-amber-300/40 shadow-[0_4px_20px_rgba(169,131,69,0.35)]",
      textClass: "text-[#2a1705] font-semibold drop-shadow-sm",
    },
    secondary: {
      buttonClass:
        "bg-[#1c1a17] border border-[#a98345]/30 hover:border-[#b99a68]/70 shadow-[0_4px_18px_rgba(0,0,0,0.5)]",
      textClass: "text-[#fffdf9] font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",
    },
    outline: {
      buttonClass:
        "border border-[#a98345]/60 bg-[#161513]/80 hover:border-[#a98345] shadow-[0_4px_16px_rgba(0,0,0,0.4)]",
      textClass: "text-[#f3ece0] font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",
    },
    dark: {
      buttonClass:
        "border border-[#d8c7ad]/20 bg-[#22201d] hover:border-[#b99a68]/60 shadow-[0_4px_20px_rgba(0,0,0,0.6)]",
      textClass: "text-[#f8f5ee] font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",
    },
  };

  const currentVariant = variantStyles[variant];

  const buttonContent = (
    <>
      {/* Dynamic Cursor Flame Glow Flare Following Mouse Inside Button */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-full"
        style={{
          opacity: isHovering ? 0.75 : 0,
          transition: "opacity 180ms ease-out",
        }}
        aria-hidden="true"
      >
        <div
          className="absolute rounded-full"
          style={{
            width: 130,
            height: 130,
            left: safeMouseX - 65,
            top: "50%",
            transform: "translateY(-50%)",
            background: `radial-gradient(50% 50% at 50% 50%, rgba(${hot}, 0.8) 0%, rgba(${core}, 0.6) 35%, rgba(${edge}, 0.25) 60%, transparent 85%)`,
            filter: "blur(4px)",
          }}
        />
      </div>

      {/* Button Text & Icon - Always on top (z-20) with high contrast */}
      <span
        className={cn(
          "relative z-20 flex items-center justify-center gap-2 tracking-wide select-none transition-colors duration-200",
          currentVariant.textClass
        )}
      >
        {children ?? text}
        {showArrow && (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
    </>
  );

  const buttonClasses = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-sans transition-all duration-300",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2",
    "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
    sizeClasses[size],
    currentVariant.buttonClass,
    className
  );

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovering(false)}
      className="relative inline-block select-none isolate group/flame"
    >
      {/* Outer Flame Glow (cursor-directed reactive radiance surrounding the button) */}
      <div
        className="pointer-events-none absolute -inset-1.5 z-0 transition-opacity duration-200"
        style={{
          borderRadius: 9999,
          background: `radial-gradient(ellipse 55% 95% at ${edgePercent}% 50%,
            rgba(${hot}, 1) 0%,
            rgba(${core}, 0.9) 30%,
            rgba(${edge}, 0.55) 55%,
            rgba(${edge}, 0.12) 75%,
            transparent 85%)`,
          filter: "blur(8px) saturate(1.5)",
          opacity: displayOpacity,
        }}
        aria-hidden="true"
      />

      {/* Actual Clickable Target: Link or Button */}
      {href ? (
        <Link href={href} className={buttonClasses}>
          {buttonContent}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={buttonClasses}
        >
          {buttonContent}
        </button>
      )}
    </div>
  );
}

export default FlameButton;

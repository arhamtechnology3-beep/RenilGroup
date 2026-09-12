"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InteractiveHoverButtonProps {
  children?: React.ReactNode;
  text?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "outlineInverse" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

/**
 * Interactive Hover Button — adapted from Magic UI / Dillion Verma (21st.dev)
 * Dot expands on hover while label slides and an arrow enters.
 */
export function InteractiveHoverButton({
  children,
  text,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  showArrow = true,
  type = "button",
  disabled = false,
}: InteractiveHoverButtonProps) {
  const label = children ?? text ?? "Button";

  const sizeClasses = {
    sm: "px-5 py-2 text-xs",
    md: "px-6 py-2.5 sm:py-3 text-sm",
    lg: "px-8 py-3.5 sm:py-4 text-base",
  };

  const variants: Record<
    NonNullable<InteractiveHoverButtonProps["variant"]>,
    string
  > = {
    primary:
      "border-[#22201d]/15 bg-[#fffdf9] text-[#22201d] hover:border-[#22201d]/40 " +
      "[&_.ihb-dot]:bg-[#22201d] [&_.ihb-hover]:text-[#fffdf9]",
    secondary:
      "border-[#a98345]/40 bg-[#201e1a] text-[#fffdf9] hover:border-[#b99a68] " +
      "[&_.ihb-dot]:bg-[#b99a68] [&_.ihb-hover]:text-[#201e1a]",
    // Light surfaces (about/founder/business pages)
    outline:
      "border-[#a98345]/45 bg-[#fffdf9] text-[#22201d] hover:border-[#8e6d3e] " +
      "[&_.ihb-dot]:bg-[#8e6d3e] [&_.ihb-hover]:text-[#fffdf9]",
    // Dark heroes / final CTA
    outlineInverse:
      "border-[#d8c7ad]/45 bg-transparent text-[#fffdf9] hover:border-[#d8c7ad] " +
      "[&_.ihb-dot]:bg-[#d8c7ad] [&_.ihb-hover]:text-[#201e1a]",
    dark:
      "border-[#a98345]/30 bg-[#22201d] text-[#f8f5ee] hover:border-[#b99a68] " +
      "[&_.ihb-dot]:bg-[#a98345] [&_.ihb-hover]:text-[#22201d]",
  };

  const classes = cn(
    "group relative inline-flex w-auto cursor-pointer overflow-hidden rounded-full border",
    "text-center font-sans font-semibold tracking-wide",
    "transition-[border-color,box-shadow] duration-300",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a98345] focus-visible:ring-offset-2",
    "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
    sizeClasses[size],
    variants[variant],
    className,
  );

  const content = (
    <>
      {/* Idle state */}
      <div className="relative z-10 flex items-center justify-center gap-2">
        <span className="ihb-dot h-2 w-2 shrink-0 rounded-full transition-all duration-300 group-hover:scale-[100.8]" />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {label}
        </span>
      </div>

      {/* Hover state */}
      <div className="ihb-hover absolute inset-0 z-20 flex items-center justify-center gap-2 translate-x-12 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{label}</span>
        {showArrow && <ArrowRight className="h-4 w-4 shrink-0" />}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}

export default InteractiveHoverButton;

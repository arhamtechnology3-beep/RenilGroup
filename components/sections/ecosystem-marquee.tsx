"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Handshake,
  Layers,
  Rocket,
  Truck,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

type MarqueeItem = {
  label: string;
  href: string;
  icon?: LucideIcon;
  accent?: boolean;
};

/** Ecosystem / verticals strip */
const rowPrimary: MarqueeItem[] = [
  { label: "Renil Ventures", icon: Rocket, href: "/businesses/ventures" },
  {
    label: "Renil Developments",
    icon: Building2,
    href: "/businesses/developments",
  },
  {
    label: "Renil Hospitality",
    icon: UtensilsCrossed,
    href: "/businesses/hospitality",
  },
  { label: "Renil Logistics", icon: Truck, href: "/businesses/logistics" },
  { label: "We Grow Together", accent: true, href: "/about" },
  {
    label: "Strategic Partnerships",
    icon: Handshake,
    href: "/submit-your-business",
  },
  {
    label: "Cross-Business Synergy",
    icon: Layers,
    href: "/businesses",
  },
];

/** Values & operating principles strip */
const rowSecondary: MarqueeItem[] = [
  { label: "Entrepreneurial Mindset", href: "/#why-renil" },
  { label: "Long-Term Thinking", href: "/#why-renil" },
  { label: "Multi-Business Perspective", href: "/#why-renil" },
  { label: "Building businesses. Creating value.", href: "/about" },
  { label: "Founder-Led Leadership", href: "/founder" },
  { label: "Sustainable Enterprise Value", href: "/story" },
  { label: "Operational Acumen", href: "/businesses" },
];

function MarqueeChip({
  item,
  tone = "light",
}: {
  item: MarqueeItem;
  tone?: "light" | "dark";
}) {
  const Icon = item.icon;
  const isDark = tone === "dark";

  return (
    <Link
      href={item.href}
      className={cn(
        "inline-flex shrink-0 items-center gap-2.5 rounded-full border px-4 py-2.5 sm:px-5 sm:py-3 transition-colors",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a98345]",
        isDark
          ? item.accent
            ? "border-[#a98345]/50 bg-[#a98345]/15 text-[#d8c7ad] hover:bg-[#a98345]/25"
            : "border-[#d8c7ad]/20 bg-white/[0.04] text-[#f8f5ee] hover:border-[#b99a68]/50 hover:bg-white/[0.08]"
          : item.accent
            ? "border-[#a98345]/40 bg-[#a98345]/10 text-[#8e6d3e] hover:bg-[#a98345]/20"
            : "border-[#a98345]/20 bg-[#fffdf9] text-[#22201d] hover:border-[#a98345]/45",
      )}
    >
      {Icon ? (
        <Icon
          className={cn(
            "h-3.5 w-3.5 shrink-0",
            isDark ? "text-[#b99a68]" : "text-[#a98345]",
          )}
          strokeWidth={1.5}
          aria-hidden
        />
      ) : (
        <span
          className={cn(
            "h-1.5 w-1.5 shrink-0 rounded-full",
            isDark ? "bg-[#b99a68]" : "bg-[#a98345]",
          )}
          aria-hidden
        />
      )}
      <span
        className={cn(
          "whitespace-nowrap text-xs sm:text-sm tracking-wide",
          item.accent
            ? "font-semibold uppercase tracking-[0.14em]"
            : "font-medium",
        )}
      >
        {item.label}
      </span>
    </Link>
  );
}

function MarqueeWord({
  item,
  tone = "light",
}: {
  item: MarqueeItem;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div className="inline-flex shrink-0 items-center gap-4 sm:gap-6">
      <Link
        href={item.href}
        className={cn(
          "whitespace-nowrap font-serif text-lg sm:text-xl md:text-2xl tracking-tight transition-colors",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a98345] rounded-sm",
          isDark
            ? "text-[#f8f5ee]/90 hover:text-[#b99a68]"
            : "text-[#22201d]/85 hover:text-[#8e6d3e]",
          item.accent &&
            (isDark ? "italic text-[#b99a68]" : "italic text-[#8e6d3e]"),
        )}
      >
        {item.label}
      </Link>
      <span
        aria-hidden
        className={cn(
          "h-1 w-1 rounded-full sm:h-1.5 sm:w-1.5",
          isDark ? "bg-[#a98345]/70" : "bg-[#a98345]/55",
        )}
      />
    </div>
  );
}

/**
 * Dual-row ecosystem marquee — Magic UI / 21st.dev pattern,
 * tuned to Renil Groups verticals and principles.
 */
export function EcosystemMarquee() {
  return (
    <section
      aria-label="Renil Groups ecosystem"
      className="relative overflow-hidden border-y border-[#a98345]/15 bg-[#201e1a] py-8 sm:py-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(169,131,69,0.12),transparent_55%)]"
      />

      <div className="relative mb-5 sm:mb-6 px-4 text-center">
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-semibold text-[#b99a68]">
          The Renil ecosystem
        </p>
      </div>

      {/* Row 1 — verticals & partnership chips */}
      <div className="relative z-[1]">
        <Marquee pauseOnHover className="[--duration:45s] [--gap:0.85rem] py-0">
          {rowPrimary.map((item) => (
            <MarqueeChip key={item.label} item={item} tone="dark" />
          ))}
        </Marquee>
      </div>

      {/* Row 2 — values as serif words, reverse */}
      <div className="relative z-[1] mt-3 sm:mt-4">
        <Marquee
          reverse
          pauseOnHover
          className="[--duration:55s] [--gap:0.5rem] py-0"
        >
          {rowSecondary.map((item) => (
            <MarqueeWord key={item.label} item={item} tone="dark" />
          ))}
        </Marquee>
      </div>

      {/* Edge fades — Magic UI / 21st.dev signature */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-[#201e1a] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-[#201e1a] to-transparent"
      />
    </section>
  );
}

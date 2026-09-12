"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-index";
import { TiltCard } from "@/components/ui/tilt-card";
import { cn } from "@/lib/utils";

const marble =
  "bg-[linear-gradient(160deg,#ffffff_0%,#f7f3ec_38%,#efe8dc_72%,#f8f5ee_100%)]";

type PillarIconProps = { className?: string };

/** Needle/rose only — no outer ring (avoids double-circle inside the medallion). */
function CompassNeedleIcon({ className }: PillarIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="m16.24 7.76-1.8 5.41a2 2 0 0 1-1.27 1.27l-5.41 1.8 1.8-5.41a2 2 0 0 1 1.27-1.27z" />
      <circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Org-chart: one node above two — matches the marble reference. */
function OrgChartIcon({ className }: PillarIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="9" y="2.5" width="6" height="5" rx="1" />
      <rect x="2.5" y="16.5" width="6" height="5" rx="1" />
      <rect x="15.5" y="16.5" width="6" height="5" rx="1" />
      <path d="M12 7.5v3.25" />
      <path d="M5.5 16.5v-2.75a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2.75" />
    </svg>
  );
}

function HourglassIcon({ className }: PillarIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M6 3.5h12" />
      <path d="M6 20.5h12" />
      <path d="M16.5 20.5v-3.1a1.75 1.75 0 0 0-.5-1.22L12 12l-4 4.18a1.75 1.75 0 0 0-.5 1.22v3.1" />
      <path d="M7.5 3.5v3.1a1.75 1.75 0 0 0 .5 1.22L12 12l4-4.18a1.75 1.75 0 0 0 .5-1.22v-3.1" />
    </svg>
  );
}

export function WhyRenil() {
  const pillars = [
    {
      icon: CompassNeedleIcon,
      title: "Entrepreneurial Mindset",
      tagline: "Grounded & Agile",
      points: [
        "Built from experience and continuous learning",
        "Focused on practical, real-world opportunities",
        "Comfortable with building from the ground up",
      ],
    },
    {
      icon: OrgChartIcon,
      title: "Multi-Business Perspective",
      tagline: "Ecosystem Synergy",
      points: [
        "Cross-industry exposure across multiple verticals",
        "Ability to evaluate opportunities from holistic angles",
        "Direct potential for cross-business collaboration",
      ],
    },
    {
      icon: HourglassIcon,
      title: "Long-Term Thinking",
      tagline: "Generational Value",
      points: [
        "Unwavering focus on sustainable enterprise value",
        "Forging relationships far beyond a single deal",
        "Relentless execution and growth after the decision",
      ],
    },
  ];

  return (
    <section
      id="why-renil"
      className="relative overflow-hidden border-t border-[#a98345]/15 py-24 lg:py-32"
    >
      {/* Brand atmosphere — atrium wash + ivory/champagne gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/about-intro-atrium.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_35%] scale-105 opacity-[0.22]"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf9]/94 via-[#f8f5ee]/88 to-[#ebe4d6]/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(169,131,69,0.14),transparent_52%),radial-gradient(ellipse_at_12%_70%,rgba(185,154,104,0.1),transparent_42%),radial-gradient(ellipse_at_88%_55%,rgba(34,32,29,0.05),transparent_45%)]" />
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Soft marble floor plane under pillars */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#d8c7ad]/35 via-[#e8e0d2]/20 to-transparent" />
        {/* Gold construction hairlines */}
        <div className="absolute left-[8%] top-24 hidden h-[55%] w-px bg-gradient-to-b from-transparent via-[#a98345]/25 to-transparent lg:block" />
        <div className="absolute right-[8%] top-32 hidden h-[50%] w-px bg-gradient-to-b from-transparent via-[#a98345]/20 to-transparent lg:block" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="05"
          eyebrow="Why Renil"
          align="center"
          className="max-w-2xl mx-auto mb-16 sm:mb-20"
          title={
            <>
              More than capital. <br />
              <span className="italic text-[#8e6d3e]">A platform for growth.</span>
            </>
          }
          description="The group positions itself as an authentic business partner — bringing operational acumen, governance, and long-term strategic alignment."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 items-end">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            const index = `0${idx + 1}`;
            return (
              <div
                key={p.title}
                className="relative mx-auto w-full max-w-[300px] pt-10"
              >
                <TiltCard
                  variant="pillar"
                  maxTilt={6}
                  className="flex w-full flex-col"
                >
                  {/* CAPITAL — flared crown + centered medallion */}
                  <div className="relative px-3 pt-12">
                    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center">
                      <div className="pointer-events-auto flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full border-2 border-[#a98345] bg-[#201e1a] text-[#b99a68] shadow-[0_14px_30px_-10px_rgba(32,30,26,0.55)]">
                        <Icon className="mx-auto block h-7 w-7 shrink-0" />
                      </div>
                    </div>
                    <div
                      className={cn(
                        "relative mx-auto h-7 w-[92%] rounded-t-[1.25rem]",
                        marble,
                        "border border-b-0 border-[#d8c7ad]/80",
                        "shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]",
                      )}
                    >
                      <div
                        aria-hidden
                        className="absolute inset-x-3 bottom-0 h-[2px] bg-gradient-to-r from-[#8e6d3e] via-[#d8c7ad] to-[#a98345]"
                      />
                    </div>
                    <div
                      className={cn(
                        "relative mx-auto -mt-px h-4 w-[84%]",
                        marble,
                        "border-x border-[#d8c7ad]/70",
                      )}
                    />
                  </div>

                  {/* SHAFT — cylindrical marble column */}
                  <div
                    className={cn(
                      "relative mx-auto flex w-[78%] flex-1 flex-col items-center px-4 pb-8 pt-5 text-center",
                      marble,
                      "border-x border-[#d8c7ad]/75",
                      "shadow-[inset_8px_0_18px_-12px_rgba(34,32,29,0.12),inset_-8px_0_18px_-12px_rgba(255,255,255,0.85)]",
                      "min-h-[280px] sm:min-h-[300px]",
                    )}
                  >
                    {/* Gold band under capital */}
                    <div
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#8e6d3e] via-[#d8c7ad] to-[#a98345]"
                    />
                    {/* Soft marble veins */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-[0.12]"
                      style={{
                        backgroundImage:
                          "radial-gradient(ellipse at 30% 20%, rgba(116,109,99,0.35), transparent 45%), radial-gradient(ellipse at 70% 70%, rgba(169,131,69,0.2), transparent 40%)",
                      }}
                    />

                    <p className="relative text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a98345]">
                      {p.tagline}
                    </p>
                    <h3 className="relative mt-2 font-serif text-[1.35rem] sm:text-[1.5rem] leading-snug text-[#22201d]">
                      {p.title}
                    </h3>

                    <ul className="relative mx-auto mt-5 w-fit max-w-full space-y-3 text-left">
                      {p.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-[12px] sm:text-[13px] leading-snug text-[#3a3530]"
                        >
                          <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#a98345] text-white">
                            <Check className="h-2 w-2" strokeWidth={3} />
                          </span>
                          <span className="min-w-0 flex-1">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Gold band above base */}
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-[#8e6d3e] via-[#d8c7ad] to-[#a98345]"
                    />
                  </div>

                  {/* BASE — wider marble plinth */}
                  <div className="relative px-2 pb-1 pt-0">
                    <div
                      className={cn(
                        "relative mx-auto h-3 w-[88%] rounded-b-sm",
                        marble,
                        "border-x border-b border-[#d8c7ad]/80",
                      )}
                    />
                    <div
                      className={cn(
                        "relative mx-auto mt-0 flex w-full items-center justify-between gap-3 rounded-md px-5 py-4",
                        marble,
                        "border border-[#d8c7ad]/90",
                        "shadow-[0_16px_28px_-18px_rgba(34,32,29,0.45),inset_0_1px_0_rgba(255,255,255,0.95)]",
                      )}
                    >
                      <div className="min-w-0">
                        <p className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#8e6d3e]">
                          Pillar
                        </p>
                        <p className="mt-0.5 font-serif text-sm text-[#22201d]">
                          Foundation stone
                        </p>
                      </div>
                      <span
                        aria-hidden
                        className="h-8 w-px shrink-0 bg-[#a98345]/45"
                      />
                      <span className="font-serif text-3xl sm:text-4xl leading-none text-[#a98345]">
                        {index}
                      </span>
                    </div>
                    {/* Gold toe band */}
                    <div
                      aria-hidden
                      className="mx-auto h-[3px] w-full rounded-b-md bg-gradient-to-r from-[#8e6d3e] via-[#d8c7ad] to-[#a98345]"
                    />
                  </div>
                </TiltCard>

                {/* Floor reflection / contact shadow */}
                <div
                  aria-hidden
                  className="mx-auto mt-2 h-3 w-[85%] rounded-[100%] bg-[#22201d]/12 blur-[8px]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { SectionHeader } from "@/components/ui/section-index";
import { testimonials, type Testimonial } from "@/content/testimonials";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

const rowA = testimonials.filter((_, i) => i % 2 === 0);
const rowB = testimonials.filter((_, i) => i % 2 === 1);

function avatarTone(vertical: Testimonial["vertical"]) {
  switch (vertical) {
    case "Ventures":
      return "bg-[#201e1a] text-[#d8c7ad]";
    case "Developments":
      return "bg-[#8e6d3e] text-[#fffdf9]";
    case "Hospitality":
      return "bg-[#a98345] text-[#fffdf9]";
    case "Logistics":
      return "bg-[#746d63] text-[#fffdf9]";
    default:
      return "bg-[#b99a68] text-[#201e1a]";
  }
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure
      className={cn(
        "relative w-[300px] sm:w-[340px] shrink-0 overflow-hidden rounded-2xl border p-5 sm:p-6",
        "border-[#a98345]/20 bg-[#fffdf9]",
        "shadow-[0_12px_40px_-28px_rgba(34,32,29,0.35)]",
        "transition-colors duration-300 hover:border-[#a98345]/50",
      )}
    >
      <Quote
        className="absolute top-4 right-4 h-7 w-7 text-[#a98345]/25"
        strokeWidth={1.25}
        aria-hidden
      />

      <div className="mb-4 flex items-center gap-3">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold tracking-wide",
            avatarTone(t.vertical),
          )}
          aria-hidden
        >
          {t.initials}
        </div>
        <div className="min-w-0">
          <figcaption className="truncate text-sm font-semibold text-[#22201d]">
            {t.name}
          </figcaption>
          <p className="truncate text-[11px] text-[#746d63]">
            {t.role} · {t.location}
          </p>
        </div>
      </div>

      <blockquote className="text-sm leading-relaxed text-[#746d63]">
        “{t.quote}”
      </blockquote>

      <div className="mt-4 flex items-center justify-between border-t border-[#a98345]/15 pt-3">
        <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-[#a98345]">
          {t.vertical}
        </span>
        <span className="text-[10px] text-[#9b9184]">Partner voice</span>
      </div>
    </figure>
  );
}

/**
 * Homepage trust section — dual-row marquee inspired by Magic UI / 21st.dev
 * “Testimonials with Marquee” patterns.
 */
export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32 section-bg-ivory"
      aria-labelledby="testimonials-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(169,131,69,0.06),_transparent_60%)]"
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <SectionHeader
          index="07"
          eyebrow="Trust & Voices"
          align="center"
          className="max-w-2xl mx-auto"
          titleId="testimonials-heading"
          title={
            <>
              Build the work.{" "}
              <span className="italic text-[#8e6d3e]">Build the trust.</span>
            </>
          }
          description="Voices from founders, operators, and partners across ventures, developments, hospitality, and logistics — reflecting how Renil Groups shows up when vision meets disciplined execution."
        />
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
        <Marquee pauseOnHover className="[--duration:80s] [--gap:1.25rem]">
          {rowA.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="[--duration:90s] [--gap:1.25rem]"
        >
          {rowB.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </Marquee>

        {/* Edge fades matching section ivory */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 lg:w-32 bg-gradient-to-r from-[#f8f5ee] to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 lg:w-32 bg-gradient-to-l from-[#f8f5ee] to-transparent"
        />
      </div>

      <p className="relative mt-10 text-center text-[11px] text-[#9b9184] max-w-lg mx-auto px-4 leading-relaxed">
        Representative partner perspectives aligned to Renil Groups’ ecosystem
        themes. Engagements remain subject to evaluation and mutual fit.
      </p>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FeatureSteps } from "@/components/ui/feature-steps";
import { SectionIndex } from "@/components/ui/section-index";
import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    step: "01",
    title: "Founder-led vision",
    content: "Direct accountability from leadership to every enterprise.",
    image: "/images/pillar-founder-vision-v3.png",
  },
  {
    step: "02",
    title: "Long-term value",
    content: "Building enduring assets over short-term exits.",
    image: "/images/pillar-long-term-value.png",
  },
  {
    step: "03",
    title: "Cross-business leverage",
    content: "Collaboration that compounds across the ecosystem.",
    image: "/images/pillar-cross-business.png",
  },
  {
    step: "04",
    title: "Ground-up execution",
    content: "Disciplined delivery from first step to scale.",
    image: "/images/pillar-ground-up.png",
  },
];

const sectors = [
  { label: "Ventures", href: "/businesses/ventures" },
  { label: "Developments", href: "/businesses/developments" },
  { label: "Hospitality", href: "/businesses/hospitality" },
  { label: "Logistics", href: "/businesses/logistics" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Intro() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? undefined
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section
      id="intro-section"
      className="relative py-24 sm:py-28 lg:py-36 section-bg-ivory overflow-hidden"
    >
      {/* Atmosphere — linen grain + gold wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_12%,_rgba(169,131,69,0.09),_transparent_42%),radial-gradient(ellipse_at_88%_78%,_rgba(34,32,29,0.045),_transparent_48%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#a98345]/40 to-transparent"
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-center">
          {/* Visual — architectural plane, not a marketing card */}
          <motion.div
            className="lg:col-span-5 relative"
            {...(fadeUp(0) ?? {})}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Offset gold construction lines */}
              <div
                aria-hidden
                className="absolute -left-3 sm:-left-5 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[#a98345]/55 to-transparent"
              />
              <div
                aria-hidden
                className="absolute -left-3 sm:-left-5 top-8 h-px w-10 sm:w-14 bg-[#a98345]/55"
              />
              <div
                aria-hidden
                className="absolute -right-4 sm:-right-6 -bottom-4 sm:-bottom-6 h-28 w-28 sm:h-36 sm:w-36 border border-[#a98345]/20 rounded-[1.5rem] -z-10"
              />

              <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem] bg-[#201e1a]">
                <Image
                  src="/images/about-intro-atrium.png"
                  alt="Renil Groups atrium — vision matched with architectural execution"
                  fill
                  className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 460px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161513]/55 via-transparent to-[#161513]/20" />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#a98345]/25 rounded-[inherit]" />

                {/* Engraved caption — not a floating badge */}
                <div className="absolute left-0 right-0 bottom-0 p-5 sm:p-6">
                  <div className="flex items-end justify-between gap-4 border-t border-white/20 pt-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#d8c7ad]/80">
                        Since inception
                      </p>
                      <p className="mt-1 font-serif text-sm sm:text-base italic text-[#fffdf9]/95">
                        Architecture of opportunity
                      </p>
                    </div>
                    <SectionIndex index="01" variant="caption" tone="dark" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Editorial */}
          <div className="lg:col-span-7 relative lg:pl-4 xl:pl-8">
            <SectionIndex
              index="01"
              className="-right-1 sm:-right-3 -top-6 sm:-top-10 lg:-top-12"
            />

            <motion.div {...(fadeUp(0.05) ?? {})}>
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-[#a98345]" />
                <span className="section-eyebrow">01 / About Renil Groups</span>
              </div>
            </motion.div>

            <motion.h2
              id="floater-gate"
              className="heading-2 text-[#22201d] max-w-xl scroll-mt-28"
              {...(fadeUp(0.12) ?? {})}
            >
              One vision.
              <br />
              <span className="italic text-[#8e6d3e]">
                Multiple avenues for growth.
              </span>
            </motion.h2>

            <motion.p
              className="mt-6 section-body max-w-xl"
              {...(fadeUp(0.18) ?? {})}
            >
              Renil Groups is built around the belief that opportunity becomes
              valuable when vision is matched with execution. Led by CEO Swapnil
              Shinde, the group operates across venture capital, property
              developments, hospitality, and logistics — an interconnected
              ecosystem rather than a single track.
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              className="relative mt-8 max-w-lg border-l-2 border-[#a98345]/50 pl-5 sm:pl-6"
              {...(fadeUp(0.24) ?? {})}
            >
              <p className="font-serif text-xl sm:text-2xl italic leading-snug text-[#22201d]">
                “Opportunity becomes valuable when vision is matched with
                execution.”
              </p>
              <footer className="mt-3 text-[10px] uppercase tracking-[0.22em] font-semibold text-[#b99a68]">
                Group Philosophy
              </footer>
            </motion.blockquote>

            {/* Sector rail — typographic, not pills */}
            <motion.div
              className="mt-9 flex flex-wrap items-center gap-x-1 gap-y-2"
              {...(fadeUp(0.3) ?? {})}
            >
              {sectors.map((sector, i) => (
                <React.Fragment key={sector.label}>
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="mx-2 sm:mx-3 text-[#a98345]/40 select-none"
                    >
                      ·
                    </span>
                  )}
                  <Link
                    href={sector.href}
                    className="group/sec text-[11px] uppercase tracking-[0.18em] font-semibold text-[#8e6d3e] transition-colors hover:text-[#22201d]"
                  >
                    <span className="relative">
                      {sector.label}
                      <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#a98345] transition-transform duration-300 group-hover/sec:scale-x-100" />
                    </span>
                  </Link>
                </React.Fragment>
              ))}
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-5"
              {...(fadeUp(0.36) ?? {})}
            >
              <ShimmerButton href="/about" variant="secondary" size="md" showArrow>
                Discover Renil Groups
              </ShimmerButton>
              <Link
                href="/story"
                className="group/story inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#8e6d3e] hover:text-[#22201d] transition-colors"
              >
                Read Our Story
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/story:translate-x-0.5 group-hover/story:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Principles — Feature Steps */}
        <div className="mt-24 sm:mt-28 lg:mt-32 pt-16 sm:pt-20 border-t border-[#a98345]/15 relative">
          <SectionIndex
            index="01"
            className="right-0 -top-2 opacity-60"
          />
          <motion.div
            className="mb-10 sm:mb-12 max-w-2xl relative"
            {...(fadeUp(0) ?? {})}
          >
            <span className="section-eyebrow text-[#8e6d3e]">
              How Renil Compounds
            </span>
            <h3 className="mt-3 heading-2 text-[#22201d]">
              Principles that{" "}
              <span className="italic text-[#8e6d3e]">guide every vertical.</span>
            </h3>
          </motion.div>

          <FeatureSteps
            features={pillars}
            autoPlayInterval={4500}
            imageHeightClassName="h-[260px] sm:h-[360px] lg:h-[460px]"
          />
        </div>
      </div>
    </section>
  );
}

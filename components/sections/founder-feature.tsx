"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArchFrame } from "@/components/ui/arch-frame";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SectionIndex } from "@/components/ui/section-index";
import { founderProfile } from "@/content/founder";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export function FounderFeature() {
  return (
    <section className="relative py-24 lg:py-32 section-bg-dark overflow-hidden">
      <div
        className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#b99a68]/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Portrait + Border Beam */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-sm sm:max-w-md group/photo pb-10">
              <ArchFrame
                beam
                className="w-full aspect-[3/4] shadow-2xl bg-[#161513] border-[#a98345]/50 transition-transform duration-700 group-hover/photo:-translate-y-1"
              >
                <Image
                  src={founderProfile.image}
                  alt={founderProfile.imageAlt}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover/photo:scale-105"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </ArchFrame>

              <div className="absolute -bottom-6 left-1/2 z-10 w-11/12 -translate-x-1/2 rounded-2xl border border-[#a98345]/40 bg-[#28251f]/95 p-4 shadow-2xl backdrop-blur-md transition-all duration-500 group-hover/photo:border-[#b99a68]/70 group-hover/photo:shadow-[0_20px_50px_-20px_rgba(185,154,104,0.35)]">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-left min-w-0">
                    <p className="font-serif text-lg sm:text-xl font-medium tracking-wide text-[#fffdf9] truncate">
                      {founderProfile.name}
                    </p>
                    <p className="mt-0.5 text-xs uppercase tracking-widest text-[#b99a68]">
                      {founderProfile.role}
                    </p>
                  </div>
                  <SectionIndex index="03" variant="caption" tone="dark" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial + hover interactions */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 relative">
            <SectionIndex
              index="03"
              tone="dark"
              className="-right-1 sm:-right-3 -top-6 sm:-top-10 lg:-top-12 text-white/[0.08]"
            />

            <div className="relative inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#a98345] transition-all duration-500 group-hover:w-12" />
              <span className="section-eyebrow text-[#b99a68]">
                03 / Leadership & Vision
              </span>
            </div>

            <h2 className="sr-only">Leadership & Vision</h2>

            <div className="group/quote relative rounded-2xl border border-transparent p-1 transition-colors duration-500 hover:border-[#a98345]/25">
              <span className="pointer-events-none absolute -top-8 -left-2 select-none font-serif text-6xl text-[#a98345]/20 transition-colors duration-500 group-hover/quote:text-[#a98345]/45">
                “
              </span>
              <blockquote className="heading-2 text-[#fffdf9] transition-colors duration-500 group-hover/quote:text-[#fffdf9]">
                {founderProfile.quote}
              </blockquote>
              <span
                aria-hidden
                className="mt-4 block h-px w-16 bg-[#a98345]/40 transition-all duration-500 group-hover/quote:w-28 group-hover/quote:bg-[#b99a68]"
              />
            </div>

            <p className="pt-2 text-sm sm:text-base leading-relaxed text-[#d8c7ad]/90 transition-colors duration-300 hover:text-[#d8c7ad]">
              Swapnil Shinde leads Renil Groups with an entrepreneurial outlook
              shaped by the journey from starting at the ground level to building a
              growing business ecosystem. His focus is on identifying
              opportunities, creating strong partnerships, and continuing to build
              businesses with purpose.
            </p>

            <div className="grid grid-cols-1 gap-3 border-t border-[#d8c7ad]/15 pt-4 sm:grid-cols-3 sm:gap-3">
              {founderProfile.principles.map((p) => (
                <div
                  key={p.title}
                  className={cn(
                    "group/card relative space-y-2 rounded-xl border border-[#d8c7ad]/10 bg-white/[0.02] p-4",
                    "transition-all duration-400",
                    "hover:-translate-y-1 hover:border-[#a98345]/45 hover:bg-[#a98345]/10",
                    "hover:shadow-[0_16px_40px_-24px_rgba(185,154,104,0.55)]",
                  )}
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full bg-[#a98345]/0 transition-all duration-400 group-hover/card:bg-[#b99a68]"
                  />
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#b99a68] transition-colors group-hover/card:text-[#d8c7ad]">
                    {p.title}
                  </span>
                  <p className="text-xs leading-relaxed text-[#d8c7ad]/70 transition-colors group-hover/card:text-[#d8c7ad]/95">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <ShimmerButton href="/founder" variant="primary" size="md" showArrow>
                Meet the Founder
              </ShimmerButton>
              <Link
                href="/about"
                className="group/link inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#d8c7ad] transition-colors hover:text-white"
              >
                About Our Group
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

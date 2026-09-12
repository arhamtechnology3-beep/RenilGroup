"use client";

import React from "react";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  ArrowRight,
  Sprout,
  Hammer,
  Layers,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-index";

type Milestone = {
  step: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  icon: LucideIcon;
};

const milestones: Milestone[] = [
  {
    step: "01",
    title: "The Beginning",
    tagline: "Ground level ambition",
    description:
      "A journey that started from the ground level, with limited resources but a clear desire to build something of his own.",
    points: [
      "Limited resources, clear intent",
      "Hands-on learning from day one",
      "Ambition rooted in real work",
    ],
    icon: Sprout,
  },
  {
    step: "02",
    title: "The Build",
    tagline: "Disciplined foundation",
    description:
      "Step by step, experience, relationships and business opportunities became the foundation for a larger vision.",
    points: [
      "Trust built through delivery",
      "Relationships as capital",
      "Discipline before scale",
    ],
    icon: Hammer,
  },
  {
    step: "03",
    title: "The Expansion",
    tagline: "Multidisciplinary growth",
    description:
      "The focus grew beyond a single activity into a wider business ecosystem spanning multiple verticals.",
    points: [
      "Multi-vertical ecosystem",
      "Synergy across businesses",
      "Operational depth at scale",
    ],
    icon: Layers,
  },
  {
    step: "04",
    title: "The Next Chapter",
    tagline: "Platforms for collective growth",
    description:
      "Today, Renil Groups continues to build, explore opportunities and create platforms for others to grow.",
    points: [
      "Platforms for partners",
      "Opportunities under evaluation",
      "Growth that compounds together",
    ],
    icon: Rocket,
  },
];

export function StoryTimeline() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32 section-bg-ivory">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(169,131,69,0.08),_transparent_55%)]"
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="04"
          eyebrow="Our Story"
          align="center"
          className="max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          title={
            <>
              From starting small to{" "}
              <span className="italic text-[#8e6d3e]">building an ecosystem.</span>
            </>
          }
          description="The Renil story is a testament to persistence, ambition, and disciplined continuous execution."
        />

        <div className="hidden lg:block mb-10">
          <div className="relative grid grid-cols-4 gap-6">
            <div
              aria-hidden
              className="absolute top-1/2 left-[12.5%] right-[12.5%] h-px -translate-y-1/2 bg-[#a98345]/30"
            />
            {milestones.map((m) => (
              <div key={m.step} className="relative flex justify-center">
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#a98345]/40 bg-[#fffdf9] shadow-[0_0_0_4px_#f8f5ee]">
                  <span className="font-serif text-sm text-[#8e6d3e]">
                    {m.step.replace(/^0/, "")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visible brand-gold border beam (padding-ring technique) */}
        <div className="relative">
          <div
            aria-hidden
            className="md:hidden absolute left-[1.15rem] top-4 bottom-4 w-px bg-[#a98345]/25"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.step}
                  className={cn(
                    "group/beam relative h-full overflow-hidden rounded-2xl p-[3px]",
                    "bg-gradient-to-br from-[#d8c7ad]/70 via-[#a98345]/45 to-[#8e6d3e]/55",
                    "transition-transform duration-300 hover:-translate-y-1",
                    "shadow-[0_12px_36px_-24px_rgba(169,131,69,0.55)]",
                  )}
                >
                  <BorderBeam
                    colorFrom="#fffdf9"
                    colorTo="#a98345"
                    duration={3.8 + idx * 0.35}
                  />
                  <BorderBeam
                    colorFrom="#d8c7ad"
                    colorTo="#8e6d3e"
                    duration={5.2 + idx * 0.3}
                    reverse
                    className="opacity-95"
                  />

                  <article
                    className={cn(
                      "group relative z-[1] flex h-full flex-col rounded-[13px] bg-[#fffdf9] p-6 sm:p-7",
                      "md:pl-6 pl-14",
                    )}
                  >
                    <div className="md:hidden absolute left-3 top-6 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-[#a98345]/45 bg-[#fffdf9]">
                      <span className="font-serif text-[11px] text-[#8e6d3e]">
                        {m.step.replace(/^0/, "")}
                      </span>
                    </div>

                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#a98345]/25 bg-[#f8f5ee] text-[#8e6d3e] transition-colors duration-300 group-hover:border-[#a98345]/50 group-hover:bg-[#a98345]/10">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <span className="hidden md:block font-serif text-2xl font-light text-[#a98345]/45 group-hover:text-[#a98345] transition-colors">
                        {m.step}
                      </span>
                    </div>

                    <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-[#a98345] mb-1.5">
                      {m.tagline}
                    </p>
                    <h3 className="heading-3 text-[#22201d] mb-2.5">{m.title}</h3>
                    <p className="text-sm text-[#746d63] leading-relaxed mb-5">
                      {m.description}
                    </p>

                    <ul className="mt-auto space-y-2.5">
                      {m.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm text-[#746d63]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a98345]/70" />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-[#a98345]/15 flex items-center justify-between text-xs text-[#a98345]">
                      <span className="font-medium tracking-wide">
                        Milestone {String(idx + 1).padStart(2, "0")}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto">
          <p className="font-serif text-base sm:text-lg italic text-[#22201d] leading-relaxed">
            “The goal is not simply to grow bigger — it is to build better,
            create value and keep moving forward.”
          </p>
          <div className="mt-5">
            <Link
              href="/story"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#8e6d3e] hover:text-[#22201d] transition-colors"
            >
              Explore The Full Timeline & Archive
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

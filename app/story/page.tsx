import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/content/seo";
import { ArchFrame } from "@/components/ui/arch-frame";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata = constructMetadata({
  title: "Our Story | Renil Groups",
  description:
    "The persistence, ambition and continuous growth journey behind the Renil Groups ecosystem.",
  canonical: "/story",
});

export default function StoryPage() {
  const milestones = [
    {
      step: "01",
      title: "The Beginning",
      tagline: "Grounded Ambition",
      narrative:
        "A journey that started from the ground level, with limited resources but a clear desire to build something of his own. In the early days, every decision required resilience, practical resourcefulness, and a commitment to learning every aspect of business operations directly.",
      takeaway: "Foundation built on persistence and hands-on execution.",
    },
    {
      step: "02",
      title: "The Build",
      tagline: "Disciplined Foundation",
      narrative:
        "Step by step, experience, relationships and business opportunities became the foundation for a larger vision. Integrity in commercial commitments fostered deep trust with partners, suppliers, and collaborators, paving the way for larger ventures.",
      takeaway: "Earning commercial trust one milestone at a time.",
    },
    {
      step: "03",
      title: "The Expansion",
      tagline: "Multidisciplinary Growth",
      narrative:
        "The focus grew beyond a single activity into a wider business ecosystem spanning multiple verticals. By identifying synergies between property development, operational logistics, hospitality experiences, and growth capital, the Renil group structure was formed.",
      takeaway: "Transforming single operations into an interconnected ecosystem.",
    },
    {
      step: "04",
      title: "The Next Chapter",
      tagline: "Platforms for Collective Growth",
      narrative:
        "Today, Renil Groups continues to build, explore opportunities and create platforms for others to grow. With Renil Ventures actively evaluating new partnerships and developments breaking ground, the group moves forward with clarity and ambition.",
      takeaway: "Building better, creating enduring value, and growing together.",
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="relative py-20 lg:py-28 bg-[#f8f5ee] border-b border-[#a98345]/15">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Story" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-[#a98345]" />
              <span className="section-eyebrow">
                Milestones & Evolution
              </span>
            </div>
            <h1 className="heading-1 text-[#22201d] mb-6">
              From starting small to <br />
              <span className="italic text-[#8e6d3e]">
                building an ecosystem.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#746d63] leading-relaxed">
              The Renil story is a story of persistence, ambition, and
              continuous growth. The goal is not simply to grow bigger — it is to
              build better, create value, and keep moving forward.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Milestone Cards */}
      <section className="py-20 lg:py-28 bg-[#fffdf9]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-[#a98345]/15 pb-16 last:border-0"
              >
                {/* Index / Header */}
                <div className="lg:col-span-4 space-y-2">
                  <span className="font-serif text-5xl lg:text-6xl font-light text-[#8e6d3e]">
                    {m.step}
                  </span>
                  <p className="text-xs uppercase tracking-widest text-[#a98345] font-bold">
                    {m.tagline}
                  </p>
                  <h2 className="heading-2 text-[#22201d]">
                    {m.title}
                  </h2>
                </div>

                {/* Narrative & Takeaway */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-base text-[#746d63] leading-relaxed">
                    {m.narrative}
                  </p>
                  <div className="rounded-2xl border border-[#a98345]/25 bg-[#f8f5ee] p-4 text-xs font-medium text-[#22201d] flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#a98345] shrink-0" />
                    <span>{m.takeaway}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Founder Quote Feature */}
          <div className="mt-16 rounded-3xl bg-[#201e1a] text-[#fffdf9] p-8 sm:p-12 border border-[#a98345]/30 flex flex-col md:flex-row items-center gap-8 shadow-xl">
            <div className="relative h-28 w-28 shrink-0 arch-mask overflow-hidden border border-[#a98345]/50 bg-[#161513]">
              <Image
                src="/images/founder.jpeg"
                alt="Swapnil Shinde"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <p className="font-serif text-xl sm:text-2xl text-[#d8c7ad] italic">
                “Growth is not only about what we build for ourselves. It is also
                about the opportunities we create for others.”
              </p>
              <p className="text-xs uppercase tracking-widest text-[#b99a68] font-bold">
                Swapnil Shinde — Founder / CEO, Renil Groups
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}

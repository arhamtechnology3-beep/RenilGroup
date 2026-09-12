import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/content/seo";
import { ArchFrame } from "@/components/ui/arch-frame";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CheckCircle2, Target, Compass, Sparkles } from "lucide-react";

export const metadata = constructMetadata({
  title: "About Renil Groups | Entrepreneurial Business Ecosystem",
  description:
    "Learn about Renil Groups, a founder-led business group focused on ventures, developments, hospitality and logistics.",
  canonical: "/about",
});

export default function AboutPage() {
  const pillars = [
    {
      icon: Target,
      title: "Who We Are",
      text: "Renil Groups is a diversified business group led by CEO Swapnil Shinde, bringing together ventures, developments, hospitality and logistics under a common entrepreneurial vision.",
    },
    {
      icon: Compass,
      title: "What We Believe",
      text: "We believe in identifying potential, building relationships, taking thoughtful decisions and creating long-term value through disciplined execution.",
    },
    {
      icon: Sparkles,
      title: "How We Grow",
      text: "Each vertical has its own purpose, while the group provides a wider platform for ideas, projects, partnerships and new opportunities.",
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Editorial Header */}
      <section className="relative py-20 lg:py-28 bg-[#f8f5ee] border-b border-[#a98345]/15">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-[#a98345]" />
              <span className="section-eyebrow">
                Corporate Overview
              </span>
            </div>
            <h1 className="heading-1 text-[#22201d] mb-6">
              One vision. <br />
              <span className="italic text-[#8e6d3e]">
                Multiple avenues for growth.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#746d63] leading-relaxed">
              Renil Groups is built around the belief that opportunity becomes
              valuable when vision is matched with execution. A corporate home
              designed for long-term value and mutual growth.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Visuals Section */}
      <section className="py-20 lg:py-28 bg-[#fffdf9]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg pb-14">
                <ArchFrame className="w-full aspect-[4/3] shadow-2xl bg-[#201e1a]">
                  <Image
                    src="/images/office-lounge.jpg"
                    alt="Renil Corporate Executive Lounge"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </ArchFrame>
                <div className="absolute bottom-0 right-0 left-0 sm:left-auto sm:-bottom-2 sm:right-0 bg-[#201e1a] text-[#fffdf9] border border-[#a98345]/40 rounded-2xl p-4 shadow-xl max-w-xs mx-auto sm:mx-0">
                  <p className="text-xs uppercase tracking-widest text-[#b99a68] font-semibold">
                    Core Vision
                  </p>
                  <p className="font-serif text-sm italic mt-1 text-[#d8c7ad]">
                    “To build a business ecosystem where people, ideas and
                    opportunities can grow together.”
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#a98345] font-bold">
                The Foundation
              </span>
              <h2 className="heading-2 text-[#22201d]">
                Building businesses with purpose and disciplined patience.
              </h2>
              <p className="text-sm sm:text-base text-[#746d63] leading-relaxed">
                Founded with an entrepreneurial mindset, Renil Groups has evolved
                from ground-level operations into an ecosystem of four distinct
                verticals. Each business operates with autonomous operational
                leadership while leveraging the group’s shared strategic acumen,
                governance, and capital network.
              </p>
              <p className="text-sm sm:text-base text-[#746d63] leading-relaxed">
                We believe sustainable enterprise value is created when decisions
                are driven by long-term commitment rather than short-term market
                whims.
              </p>

              <div className="pt-2">
                <ShimmerButton
                  href="/businesses"
                  variant="primary"
                  size="md"
                  showArrow
                >
                  Explore Our 4 Verticals
                </ShimmerButton>
              </div>
            </div>
          </div>

          {/* Three Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f8f5ee] border border-[#a98345]/20 rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-2xl bg-[#201e1a] text-[#b99a68] flex items-center justify-center mb-6 shadow">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="heading-3 text-[#22201d] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#746d63] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}

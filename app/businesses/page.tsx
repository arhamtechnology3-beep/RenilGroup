import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/content/seo";
import { businessVerticals } from "@/content/businesses";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata = constructMetadata({
  title: "Our Businesses | Renil Groups",
  description:
    "Explore the diversified business verticals of Renil Groups: Ventures, Developments, Hospitality, and Logistics.",
  canonical: "/businesses",
});

export default function BusinessesPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="relative py-20 lg:py-28 bg-[#f8f5ee] border-b border-[#a98345]/15">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Businesses" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-[#a98345]" />
              <span className="section-eyebrow">
                Diversified Portfolio
              </span>
            </div>
            <h1 className="heading-1 text-[#22201d] mb-6">
              Four verticals. <br />
              <span className="italic text-[#8e6d3e]">
                One unified group vision.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#746d63] leading-relaxed">
              The Renil Groups ecosystem is designed to explore, build, and grow
              opportunities across complementary business areas. Each company
              operates with clear domain focus and shared group principles.
            </p>
          </div>
        </div>
      </section>

      {/* Verticals Showcase */}
      <section className="py-20 lg:py-28 bg-[#fffdf9]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {businessVerticals.map((b, idx) => (
            <div
              key={b.id}
              className="rounded-3xl border border-[#a98345]/20 bg-[#f8f5ee] p-8 sm:p-12 transition-all duration-300 hover:shadow-2xl hover:border-[#a98345]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Side Info */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl font-light text-[#8e6d3e]">
                      {b.index}
                    </span>
                    <span className="rounded-full border border-[#a98345]/30 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-wider text-[#8e6d3e] font-semibold">
                      {b.badge}
                    </span>
                  </div>

                  <h2 className="heading-2 text-[#22201d]">
                    {b.legalEntity}
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-[#8e6d3e] font-semibold">
                    “{b.tagline}”
                  </p>
                  <p className="text-sm sm:text-base text-[#746d63] leading-relaxed">
                    {b.shortDescription}
                  </p>
                  <p className="text-sm text-[#746d63] leading-relaxed">
                    {b.heroCopy}
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <ShimmerButton
                      href={b.href}
                      variant="primary"
                      size="md"
                      showArrow
                      className="w-full sm:w-auto"
                    >
                      Explore {b.name}
                    </ShimmerButton>
                  </div>
                </div>

                {/* Right Side: Focus Areas & Strategic Pillars */}
                <div className="lg:col-span-6 bg-[#fffdf9] rounded-2xl border border-[#a98345]/20 p-6 sm:p-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg text-[#22201d] mb-3">
                      Focus Areas & Capabilities
                    </h3>
                    <ul className="space-y-2">
                      {b.focusAreas.map((f, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-[#746d63]"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#a98345]" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-[#a98345]/15 pt-5">
                    <h4 className="text-xs uppercase tracking-wider text-[#a98345] font-bold mb-3">
                      Strategic Focus
                    </h4>
                    <div className="space-y-3">
                      {b.keyHighlights.map((k, kIdx) => (
                        <div key={kIdx} className="text-xs">
                          <strong className="text-[#22201d] block font-medium">
                            {k.title}
                          </strong>
                          <span className="text-[#746d63]">{k.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}

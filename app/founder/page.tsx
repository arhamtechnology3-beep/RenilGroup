import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/content/seo";
import { founderProfile } from "@/content/founder";
import { ArchFrame } from "@/components/ui/arch-frame";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FinalCta } from "@/components/sections/final-cta";
import { CeoMessageCard } from "@/components/sections/ceo-message-card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { ShieldCheck, Compass, Lightbulb, ArrowUpRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "Swapnil Shinde | Founder of Renil Groups",
  description:
    "Learn about Swapnil Shinde, Founder and Chief Executive Officer of Renil Groups.",
  canonical: "/founder",
  ogImage: "/images/founder.jpeg",
});

export default function FounderPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Swapnil Shinde",
    jobTitle: "Founder / Chief Executive Officer",
    worksFor: {
      "@type": "Organization",
      name: "Renil Groups",
    },
    image: "https://renilgroups.com/images/founder.jpeg",
    description:
      "Founder and Chief Executive Officer of Renil Groups, guiding the group's vision across ventures, developments, hospitality, and logistics.",
  };

  return (
    <div className="pt-24 min-h-screen">
      <JsonLd data={personJsonLd} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-[#f8f5ee] border-b border-[#a98345]/15">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Founder" },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Founder Portrait — name plate sits below the photo (no text overlap) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <ArchFrame className="w-full aspect-[3/4] shadow-2xl bg-[#161513] border-[#a98345]/40">
                  <Image
                    src={founderProfile.image}
                    alt={founderProfile.imageAlt}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </ArchFrame>
                <div className="relative z-10 mx-auto mt-4 w-full rounded-2xl border border-[#a98345]/40 bg-[#201e1a] px-4 py-3.5 text-center shadow-xl sm:w-11/12 sm:-mt-0">
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-[#b99a68]">
                    Leadership
                  </span>
                  <p className="font-serif text-lg font-medium text-white">
                    Swapnil Shinde
                  </p>
                  <p className="text-xs text-[#d8c7ad]/70">
                    Founder / Chief Executive Officer
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Bio & Vision */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-8 bg-[#a98345]" />
                <span className="section-eyebrow">
                  FOUNDER & CEO
                </span>
              </div>

              <h1 className="heading-1 text-[#22201d]">
                Swapnil Shinde
              </h1>

              <CeoMessageCard quote={founderProfile.quote} />

              <div className="space-y-4 text-sm sm:text-base text-[#746d63] leading-relaxed">
                {founderProfile.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <ShimmerButton
                  href="/submit-your-business"
                  variant="primary"
                  size="md"
                  showArrow
                >
                  Present Your Business
                </ShimmerButton>
                <ShimmerButton href="/contact" variant="outline" size="md">
                  Contact Office
                </ShimmerButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="py-20 lg:py-28 bg-[#fffdf9]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="section-eyebrow block mb-2">
              Guiding Ethos
            </span>
            <h2 className="heading-2 text-[#22201d]">
              Leadership Principles
            </h2>
            <p className="mt-3 text-sm text-[#746d63]">
              The core principles driving decision-making across the Renil
              ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founderProfile.principles.map((principle, idx) => (
              <div
                key={idx}
                className="bg-[#f8f5ee] border border-[#a98345]/20 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:border-[#a98345]"
              >
                <span className="font-serif text-3xl font-light text-[#8e6d3e] block mb-4">
                  0{idx + 1}
                </span>
                <h3 className="heading-3 text-[#22201d] mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm text-[#746d63] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* Group Ecosystem Connection */}
          <div className="mt-16 rounded-3xl bg-[#f8f5ee] border border-[#a98345]/20 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="heading-3 text-[#22201d] mb-1">
                Explore The Group Verticals
              </h3>
              <p className="text-xs sm:text-sm text-[#746d63]">
                Discover how founder-led vision translates into action across
                Ventures, Developments, Hospitality, and Logistics.
              </p>
            </div>
            <ShimmerButton href="/businesses" variant="secondary" size="md" showArrow>
              View Our Businesses
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}

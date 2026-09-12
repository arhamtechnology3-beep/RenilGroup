import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/content/seo";
import { ArchFrame } from "@/components/ui/arch-frame";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { HeartHandshake, Sparkles, Coffee, ShieldCheck } from "lucide-react";

export const metadata = constructMetadata({
  title: "Renil Hospitality | Creating Experiences with Long-Term Value",
  description:
    "A dedicated vertical for hospitality opportunities, partnerships and future ventures built around quality, service and long-term potential.",
  canonical: "/businesses/hospitality",
});

export default function HospitalityPage() {
  const pillars = [
    {
      title: "The Idea",
      subtitle: "Beyond the physical space",
      description:
        "Hospitality is about more than a place. It is about experience, service, consistency and the ability to create lasting customer relationships.",
      icon: HeartHandshake,
    },
    {
      title: "The Direction",
      subtitle: "Concept meets execution",
      description:
        "Renil Hospitality explores and develops opportunities that combine thoughtful concepts with strong operations and commercial discipline.",
      icon: Coffee,
    },
    {
      title: "The Future",
      subtitle: "Sustainable destination growth",
      description:
        "As the vertical grows, the platform expands with individual properties, experiences, projects, partnerships and portfolio stories.",
      icon: Sparkles,
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-[#f8f5ee] border-b border-[#a98345]/15">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Businesses", href: "/businesses" },
              { label: "Hospitality" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-[#a98345]" />
              <span className="section-eyebrow">
                Renil Hospitality Pvt. Ltd.
              </span>
            </div>
            <h1 className="heading-1 text-[#22201d] mb-6">
              Creating experiences with <br />
              <span className="italic text-[#8e6d3e]">
                long-term value.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#746d63] leading-relaxed">
              A dedicated vertical for hospitality opportunities, curated
              partnerships, and future ventures built around quality, exceptional
              service, and lasting customer relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Architecture */}
      <section className="py-20 lg:py-28 bg-[#fffdf9]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
            {/* Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <ArchFrame className="w-full max-w-md aspect-[4/5] shadow-2xl bg-[#201e1a]">
                <Image
                  src="/images/office-lounge.jpg"
                  alt="Renil Hospitality Design Aesthetic"
                  fill
                  className="object-cover"
                />
              </ArchFrame>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#a98345] font-bold">
                Hospitality Ethos
              </span>
              <h2 className="heading-2 text-[#22201d]">
                Where thoughtful concepts meet commercial discipline.
              </h2>
              <p className="text-sm sm:text-base text-[#746d63] leading-relaxed">
                Hospitality at Renil Groups is guided by the understanding that a
                memorable venue is only as strong as the operational discipline
                behind it. We seek to develop destinations that deliver consistent
                delight while maintaining robust commercial fundamentals.
              </p>
              <p className="text-sm sm:text-base text-[#746d63] leading-relaxed">
                Whether through boutique hospitality projects, dining ventures,
                or strategic lifestyle collaborations, our horizon is defined by
                generational longevity.
              </p>

              <div className="pt-4">
                <ShimmerButton
                  href="/contact?type=general"
                  variant="primary"
                  size="md"
                  showArrow
                  className="w-full sm:w-auto"
                >
                  Explore Hospitality Partnerships
                </ShimmerButton>
              </div>
            </div>
          </div>

          {/* Three Themes from Slide 12 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f8f5ee] border border-[#a98345]/20 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-2xl bg-[#201e1a] text-[#b99a68] flex items-center justify-center mb-6 shadow">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#8e6d3e] font-semibold block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="heading-3 text-[#22201d] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#746d63] leading-relaxed">
                    {item.description}
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

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/content/seo";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Network, Truck, TrendingUp, CheckCircle2 } from "lucide-react";

export const metadata = constructMetadata({
  title: "Renil Logistics | Keeping Business Moving",
  description:
    "A logistics-focused vertical designed to explore opportunities around movement, connectivity and operational support.",
  canonical: "/businesses/logistics",
});

export default function LogisticsPage() {
  const pillars = [
    {
      title: "CONNECT",
      tagline: "Network Integration",
      description:
        "Connecting businesses, people and operational networks across key commercial hubs.",
      icon: Network,
    },
    {
      title: "MOVE",
      tagline: "Reliable Transit",
      description:
        "Supporting the movement of goods and ongoing business activity with dependable operations.",
      icon: Truck,
    },
    {
      title: "GROW",
      tagline: "Scalable Infrastructure",
      description:
        "Building logistics-oriented opportunities with a resilient long-term commercial outlook.",
      icon: TrendingUp,
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
              { label: "Logistics" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-[#a98345]" />
              <span className="section-eyebrow">
                Renil Logistics Pvt. Ltd.
              </span>
            </div>
            <h1 className="heading-1 text-[#22201d] mb-6">
              Keeping business <br />
              <span className="italic text-[#8e6d3e]">moving forward.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#746d63] leading-relaxed">
              A logistics-focused vertical designed to explore opportunities around
              movement, connectivity, and operational support across key supply
              chains and enterprise networks.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Vision & Pillars */}
      <section className="py-20 lg:py-28 bg-[#fffdf9]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="section-eyebrow block mb-2">
              Three Operational Pillars
            </span>
            <h2 className="heading-2 text-[#22201d]">
              Connect. Move. Grow.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#746d63] leading-relaxed">
              Positioned as a growth-oriented business vertical within the wider
              Renil ecosystem — focused on solutions that enable trade and
              commerce.
            </p>
          </div>

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
                    {item.tagline}
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

          {/* Operational Support Inquiries */}
          <div className="mt-16 rounded-3xl bg-[#201e1a] text-[#fffdf9] p-8 sm:p-12 border border-[#a98345]/30 text-center max-w-3xl mx-auto shadow-xl">
            <h3 className="heading-2 text-white mb-4">
              Explore Logistics Collaborations
            </h3>
            <p className="text-sm text-[#d8c7ad]/80 mb-8 max-w-xl mx-auto">
              Connect with our operational strategy team to explore logistics
              partnerships, distribution synergies, and supply network
              opportunities.
            </p>
            <ShimmerButton
              href="/contact?type=general"
              variant="primary"
              size="lg"
              showArrow
            >
              Connect With Logistics Team
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}

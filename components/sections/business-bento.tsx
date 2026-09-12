"use client";

import React from "react";
import Link from "next/link";
import { TrendingUp, Building2, Utensils, Truck, ArrowUpRight } from "lucide-react";
import { ExpandingCards, CardItem } from "@/components/ui/expanding-cards";
import { SectionHeader } from "@/components/ui/section-index";

const verticalCards: CardItem[] = [
  {
    id: "ventures",
    title: "Renil Ventures",
    description:
      "Investment opportunities, business evaluation, strategic partnerships and growth-focused backing for high-potential founders.",
    imgSrc: "/images/vertical-ventures.png",
    icon: <TrendingUp size={28} />,
    linkHref: "/businesses/ventures",
  },
  {
    id: "developments",
    title: "Renil Developments",
    description:
      "Real estate development, construction, project execution and the creation of long-term asset value across modern spaces.",
    imgSrc: "/images/vertical-developments.png",
    icon: <Building2 size={28} />,
    linkHref: "/businesses/developments",
  },
  {
    id: "hospitality",
    title: "Renil Hospitality",
    description:
      "Curated hospitality concepts, dining destinations, and lifestyle ventures built around consistent service and commercial discipline.",
    imgSrc: "/images/vertical-hospitality.png",
    icon: <Utensils size={28} />,
    linkHref: "/businesses/hospitality",
  },
  {
    id: "logistics",
    title: "Renil Logistics",
    description:
      "Logistics-focused solutions and operational support connecting hubs, moving freight, and driving commerce forward.",
    imgSrc: "/images/vertical-logistics.png",
    icon: <Truck size={28} />,
    linkHref: "/businesses/logistics",
  },
];

export function BusinessBento() {
  return (
    <section className="relative py-24 lg:py-32 section-bg-warm border-y border-[#a98345]/15">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="02"
          eyebrow="Our Businesses"
          align="center"
          className="max-w-2xl mx-auto mb-16"
          title={
            <>
              Four verticals. <br className="sm:hidden" />
              <span className="italic text-[#8e6d3e]">One group vision.</span>
            </>
          }
          description="The Renil Groups ecosystem is strategically organized into four autonomous yet mutually reinforcing verticals. Hover or click on a card to explore each business domain."
        />

        {/* 21st.dev Expanding Cards Component Integration */}
        <div className="flex justify-center w-full">
          <ExpandingCards items={verticalCards} defaultActiveIndex={0} />
        </div>

        {/* Bottom Quick Links */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 border-t border-[#a98345]/15 pt-8 text-xs">
          <span className="text-[#a98345] uppercase tracking-widest font-semibold">
            Explore Details:
          </span>
          <Link
            href="/businesses/ventures"
            className="text-[#746d63] hover:text-[#22201d] transition-colors inline-flex items-center gap-1 font-medium"
          >
            <span>Renil Ventures</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#a98345]" />
          </Link>
          <span>•</span>
          <Link
            href="/businesses/developments"
            className="text-[#746d63] hover:text-[#22201d] transition-colors inline-flex items-center gap-1 font-medium"
          >
            <span>Renil Developments</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#a98345]" />
          </Link>
          <span>•</span>
          <Link
            href="/businesses/hospitality"
            className="text-[#746d63] hover:text-[#22201d] transition-colors inline-flex items-center gap-1 font-medium"
          >
            <span>Renil Hospitality</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#a98345]" />
          </Link>
          <span>•</span>
          <Link
            href="/businesses/logistics"
            className="text-[#746d63] hover:text-[#22201d] transition-colors inline-flex items-center gap-1 font-medium"
          >
            <span>Renil Logistics</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#a98345]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

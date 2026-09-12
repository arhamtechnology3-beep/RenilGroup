import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/content/seo";
import { ArchFrame } from "@/components/ui/arch-frame";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Building, ShieldCheck, CheckCircle2, Ruler, Award } from "lucide-react";

export const metadata = constructMetadata({
  title: "Renil Developments | Creating Spaces. Building Value.",
  description:
    "Renil Developments Pvt. Ltd. represents the group’s development and construction-focused vertical.",
  canonical: "/businesses/developments",
});

export default function DevelopmentsPage() {
  const featuredProjects = [
    {
      title: "Renil Corporate Suite & Lounge",
      location: "Corporate Headquarters",
      type: "Executive Architectural Interior & Commercial Suite",
      status: "Completed",
      role: "Turnkey Design & Interior Execution",
      image: "/images/office-brand-wall.jpg",
      verified: true,
      highlights: [
        "Signature architectural arch brand wall with custom golden backlighting",
        "Curated executive lounge featuring bespoke acoustic fluted panelling",
        "High-performance acoustic glass conference partitions",
      ],
    },
    {
      title: "Executive Collaborative Lounge",
      location: "Corporate Suite",
      type: "Commercial Hospitality & Workspace",
      status: "Completed",
      role: "Architectural Interior & Spatial Design",
      image: "/images/office-lounge.jpg",
      verified: true,
      highlights: [
        "Continuous warm cove architectural illumination",
        "Sculpted banquette seating with acoustic dampening",
        "Integrated modern conference technology infrastructure",
      ],
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
              { label: "Developments" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-[#a98345]" />
              <span className="section-eyebrow">
                Renil Developments Pvt. Ltd.
              </span>
            </div>
            <h1 className="heading-1 text-[#22201d] mb-6">
              Creating spaces. <br />
              <span className="italic text-[#8e6d3e]">Building value.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#746d63] leading-relaxed">
              Renil Developments Pvt. Ltd. represents the group’s development
              and construction-focused vertical. We combine architectural
              excellence, disciplined engineering, and long-term asset value
              creation across commercial and residential projects.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-20 lg:py-28 bg-[#fffdf9]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="section-eyebrow block mb-2">
              Portfolio Standards
            </span>
            <h2 className="heading-2 text-[#22201d]">
              Featured Projects & Executions
            </h2>
            <p className="mt-3 text-sm text-[#746d63]">
              Presenting verified developments demonstrating our craftsmanship,
              finishes, and spatial engineering.
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((p, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#f8f5ee] rounded-3xl border border-[#a98345]/20 p-6 sm:p-10 shadow-sm"
              >
                {/* Visual */}
                <div className="lg:col-span-6">
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-[#a98345]/30">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[#201e1a]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold text-[#d8c7ad] border border-white/10 flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3 text-[#b99a68]" />
                      Verified
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[#a98345]/15 px-3 py-0.5 text-[10px] uppercase font-semibold text-[#8e6d3e]">
                      {p.status}
                    </span>
                    <span className="text-xs text-[#746d63]">• {p.location}</span>
                  </div>

                  <h3 className="heading-3 text-[#22201d]">
                    {p.title}
                  </h3>

                  <div className="space-y-2 text-xs sm:text-sm text-[#746d63]">
                    <p>
                      <strong className="text-[#22201d]">Type: </strong> {p.type}
                    </p>
                    <p>
                      <strong className="text-[#22201d]">Role: </strong> {p.role}
                    </p>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs uppercase tracking-wider font-bold text-[#8e6d3e] mb-2">
                      Key Highlights:
                    </p>
                    <ul className="space-y-2">
                      {p.highlights.map((h, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-[#746d63]"
                        >
                          <CheckCircle2 className="h-4 w-4 text-[#a98345] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Inquiries CTA */}
          <div className="mt-16 text-center">
            <ShimmerButton
              href="/contact?type=project"
              variant="primary"
              size="lg"
              showArrow
            >
              Discuss a Development Opportunity
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}

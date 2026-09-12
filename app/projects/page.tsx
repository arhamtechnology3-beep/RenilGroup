"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects, ProjectItem } from "@/content/projects";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ShieldCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Works" },
    { id: "developments", label: "Developments" },
    { id: "ventures", label: "Ventures" },
    { id: "hospitality", label: "Hospitality" },
    { id: "logistics", label: "Logistics" },
  ];

  const filtered =
    selectedFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === selectedFilter);

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="relative py-20 lg:py-28 bg-[#f8f5ee] border-b border-[#a98345]/15">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Projects" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-[#a98345]" />
              <span className="section-eyebrow">
                Corporate Portfolio
              </span>
            </div>
            <h1 className="heading-1 text-[#22201d] mb-6">
              Show the work. <br />
              <span className="italic text-[#8e6d3e]">
                Let the work build trust.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#746d63] leading-relaxed">
              A visual portfolio page that grows as Renil Groups adds projects,
              strategic investments, hospitality destinations, and logistics
              partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Portfolio Showcase */}
      <section className="py-20 lg:py-28 bg-[#fffdf9]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-[#a98345]/15 pb-4">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                  selectedFilter === tab.id
                    ? "bg-[#201e1a] text-[#fffdf9] shadow-md"
                    : "bg-[#f8f5ee] text-[#746d63] hover:bg-[#a98345]/10 hover:text-[#22201d]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Masonry/Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#f8f5ee] border border-[#a98345]/20 rounded-3xl overflow-hidden shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-[#a98345] hover:-translate-y-1 flex flex-col"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#201e1a]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] uppercase tracking-wider font-medium text-white">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    {item.verified ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#a98345] px-2.5 py-0.5 text-[9px] uppercase tracking-wider font-bold text-white shadow-sm">
                        <ShieldCheck className="h-3 w-3" />
                        Verified
                      </span>
                    ) : (
                      <span className="rounded-full bg-black/50 backdrop-blur-sm border border-white/10 px-2.5 py-0.5 text-[9px] uppercase tracking-wider text-[#d8c7ad]">
                        Spec Concept
                      </span>
                    )}
                  </div>

                  {item.status && (
                    <div className="absolute bottom-3 left-4 z-10 text-xs text-[#d8c7ad] font-light">
                      {item.status} {item.location && `• ${item.location}`}
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="heading-3 text-[#22201d] group-hover:text-[#8e6d3e] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#746d63] leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.highlights && (
                      <div className="space-y-1.5 mb-4">
                        {item.highlights.map((h, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-center gap-2 text-[11px] text-[#746d63]"
                          >
                            <span className="h-1 w-1 rounded-full bg-[#a98345]" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#a98345]/15 flex items-center justify-between text-xs text-[#8e6d3e]">
                    <span className="font-semibold">
                      {item.role || "Ecosystem Program"}
                    </span>
                    <span className="text-[11px] text-[#746d63]">
                      Renil Groups
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Submission Banner */}
          <div className="mt-16 text-center rounded-3xl bg-[#f8f5ee] border border-[#a98345]/25 p-8 sm:p-12">
            <h3 className="heading-3 text-[#22201d] mb-2">
              Have a Project or Opportunity to Propose?
            </h3>
            <p className="text-xs sm:text-sm text-[#746d63] max-w-xl mx-auto mb-6">
              Renil Groups welcomes collaborations across development, ventures,
              hospitality, and supply network projects.
            </p>
            <ShimmerButton
              href="/submit-your-business"
              variant="primary"
              size="md"
              showArrow
            >
              Submit Your Proposal
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}

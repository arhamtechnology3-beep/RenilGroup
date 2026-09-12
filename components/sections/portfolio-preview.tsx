"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects, ProjectItem } from "@/content/projects";
import { ArrowUpRight, CheckCircle, ShieldCheck } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SectionHeader } from "@/components/ui/section-index";

export function PortfolioPreview() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Works" },
    { id: "developments", label: "Developments" },
    { id: "ventures", label: "Ventures" },
    { id: "hospitality", label: "Hospitality" },
    { id: "logistics", label: "Logistics" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

  return (
    <section className="relative py-24 lg:py-32 section-bg-warm">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            index="08"
            eyebrow="Portfolio"
            className="max-w-xl"
            title={
              <>
                Show the work. <br />
                <span className="italic text-[#8e6d3e]">
                  Let the work build trust.
                </span>
              </>
            }
          />

          <p className="section-body max-w-md md:pb-1">
            A growing portfolio across built spaces, strategic partnerships, and
            operational initiatives. Each entry reflects our focus on quality and
            long-term value.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-[#a98345]/15 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                activeFilter === cat.id
                  ? "bg-[#201e1a] text-[#fffdf9] shadow-md"
                  : "bg-white/70 text-[#746d63] hover:bg-[#a98345]/10 hover:text-[#22201d]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#fffdf9] border border-[#a98345]/20 rounded-3xl overflow-hidden shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-[#a98345] hover:-translate-y-1 flex flex-col"
            >
              {/* Image Container with Arch Cutout Top */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#201e1a]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Top Badge: Category */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] uppercase tracking-wider font-medium text-white">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Top Badge: Verification per spec */}
                <div className="absolute top-4 right-4 z-10">
                  {project.verified ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#a98345]/90 px-2.5 py-0.5 text-[9px] uppercase tracking-wider font-bold text-white shadow-sm">
                      <ShieldCheck className="h-3 w-3" />
                      Verified
                    </span>
                  ) : (
                    <span className="rounded-full bg-black/50 backdrop-blur-sm border border-white/10 px-2.5 py-0.5 text-[9px] uppercase tracking-wider text-[#d8c7ad]">
                      Concept Spec
                    </span>
                  )}
                </div>

                {/* Bottom Status inside Image */}
                {project.status && (
                  <div className="absolute bottom-3 left-4 z-10 text-xs text-[#d8c7ad] font-light">
                    {project.status} {project.location && `• ${project.location}`}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="heading-3 text-[#22201d] group-hover:text-[#8e6d3e] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#746d63] leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="space-y-1.5 mb-4">
                      {project.highlights.slice(0, 2).map((h, hIdx) => (
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

                <div className="pt-4 border-t border-[#a98345]/15 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#8e6d3e]">
                    {project.role || "Ecosystem Initiative"}
                  </span>
                  <Link
                    href={`/projects`}
                    className="rounded-full border border-[#a98345]/30 p-2 text-[#22201d] transition-all duration-300 group-hover:bg-[#a98345] group-hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-14 text-center">
          <ShimmerButton href="/projects" variant="secondary" size="md" showArrow>
            Explore Complete Portfolio Directory
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}

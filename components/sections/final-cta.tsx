import React from "react";
import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SectionIndex } from "@/components/ui/section-index";
import { siteConfig } from "@/content/site";

type FinalCtaProps = {
  /** Homepage section motif only — watermark + “09 /” eyebrow */
  showIndex?: boolean;
};

export function FinalCta({ showIndex = false }: FinalCtaProps) {
  return (
    <section className="relative py-24 lg:py-32 section-bg-ivory overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#201e1a] text-[#fffdf9] p-8 sm:p-14 lg:p-20 shadow-2xl border border-[#a98345]/30">
          {showIndex ? (
            <SectionIndex
              index="09"
              tone="dark"
              className="right-6 top-4 sm:right-10 sm:top-6 text-white/[0.06]"
            />
          ) : null}

          {/* Subtle Arch Glow Background */}
          <div
            className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#b99a68]/15 rounded-full blur-[90px]"
            aria-hidden="true"
          />

          {/* Background Decorative Arch Outline */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-[600px] h-[600px] arch-mask border-2 border-white" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Crest Mark */}
            <div className="relative h-12 w-12 mx-auto mb-6">
              <Image
                src="/logo/renil-crest-v2.png"
                alt="Renil Logo Crest"
                fill
                className="object-contain brightness-125"
              />
            </div>

            <div className="inline-flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#a98345]" />
              <span className="section-eyebrow text-[#b99a68]">
                {showIndex ? "09 / We Grow Together" : "We Grow Together"}
              </span>
              <span className="h-px w-8 bg-[#a98345]" />
            </div>

            <h2 className="heading-2 text-[#fffdf9] mb-6">
              Let’s build together.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#d8c7ad]/90 leading-relaxed font-light max-w-2xl mx-auto mb-10">
              Whether you have a business opportunity, a project, a partnership
              proposal or a question about Renil Groups — we would like to hear
              from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <ShimmerButton
                href="/submit-your-business"
                variant="primary"
                size="lg"
                showArrow
                className="w-full sm:w-auto"
              >
                Present Your Business
              </ShimmerButton>

              <ShimmerButton
                href="/contact"
                variant="outlineInverse"
                size="lg"
                className="w-full sm:w-auto"
              >
                Contact Renil Groups
              </ShimmerButton>
            </div>

            <p className="mt-8 text-xs text-[#d8c7ad]/60 italic">
              {siteConfig.disclaimers.investment}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

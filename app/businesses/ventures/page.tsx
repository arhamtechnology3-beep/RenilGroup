import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/content/seo";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { siteConfig } from "@/content/site";
import {
  TrendingUp,
  Users,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Renil Ventures | Investment & Strategic Partnerships",
  description:
    "The investment and strategic partnership arm of Renil Groups. Exploring opportunities with entrepreneurs and business leaders.",
  canonical: "/businesses/ventures",
});

export default function RenilVenturesPage() {
  const lookForCriteria = [
    {
      category: "Business Potential",
      icon: TrendingUp,
      items: [
        "Clear problem definition and meaningful market solution",
        "Defined customer segment or large addressable opportunity",
        "Practical, understandable, and sustainable business model",
        "Clear potential to scale or expand systematically",
      ],
    },
    {
      category: "People & Execution",
      icon: Users,
      items: [
        "Committed, high-integrity founders and management",
        "Demonstrated ability to execute the strategic plan",
        "Deep ground-level understanding of the business mechanics",
        "Openness to transparent partnership and governance accountability",
      ],
    },
    {
      category: "Opportunity Fit",
      icon: ShieldCheck,
      items: [
        "Strategic alignment with Renil's ecosystem interests",
        "Potential for sustainable long-term value creation",
        "Commercially sensible valuation and unit economics",
        "Substantial room for mutual, meaningful collaboration",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      name: "Submit",
      description:
        "Tell us about your business, idea, project, team, and investment or partnership requirement via our dedicated intake portal.",
    },
    {
      step: "02",
      name: "Review",
      description:
        "Our investment and leadership team conducts an internal assessment considering opportunity fit, market viability, and alignment.",
    },
    {
      step: "03",
      name: "Discuss",
      description:
        "Selected opportunities move into exploratory discussions with the core team to understand operational nuances.",
    },
    {
      step: "04",
      name: "Evaluate",
      description:
        "Commercial, legal, financial, and operational aspects are evaluated through structured due diligence.",
    },
    {
      step: "05",
      name: "Decide",
      description:
        "Potential investment or strategic partnership structure is finalized where appropriate with mutual agreement.",
    },
    {
      step: "06",
      name: "Build",
      description:
        "Where a partnership is forged, our collective resources focus on disciplined execution, scaling, and growth.",
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-[#201e1a] text-[#fffdf9] border-b border-[#a98345]/20 overflow-hidden">
        <div
          className="pointer-events-none absolute -top-24 right-1/4 w-[500px] h-[500px] bg-[#b99a68]/15 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: "Home", href: "/" },
              { label: "Businesses", href: "/businesses" },
              { label: "Ventures" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-[#b99a68]" />
              <span className="section-eyebrow text-[#b99a68]">
                Renil Ventures Pvt. Ltd.
              </span>
            </div>
            <h1 className="heading-1 text-white mb-6">
              Have a vision? <br />
              <span className="italic text-[#d8c7ad]">
                Let’s build it together.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#d8c7ad]/90 leading-relaxed mb-6 font-light">
              The investment and strategic partnership arm of Renil Groups. We are
              open to hearing from entrepreneurs, business owners, and project
              leaders who believe they have a strong opportunity worth exploring.
            </p>
            <p className="text-xs text-[#b99a68] mb-8 font-medium">
              Potential pathways: Growth Investment • Strategic Partnership •
              Business Collaboration • Operational Support
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <ShimmerButton
                href="/submit-your-business"
                variant="primary"
                size="lg"
                showArrow
              >
                Present Your Business
              </ShimmerButton>
              <ShimmerButton
                href="#process"
                variant="dark"
                size="lg"
              >
                View Partnership Process
              </ShimmerButton>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Disclaimer Box */}
      <section className="bg-[#161513] border-b border-white/5 py-4">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 text-xs text-[#d8c7ad]/70">
          <AlertCircle className="h-4 w-4 text-[#b99a68] shrink-0" />
          <span>
            {siteConfig.disclaimers.investment}
          </span>
        </div>
      </section>

      {/* What We Look For Section */}
      <section id="what-we-look-for" className="py-20 lg:py-28 bg-[#fffdf9]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="section-eyebrow block mb-2">
              Evaluation Framework
            </span>
            <h2 className="heading-2 text-[#22201d]">
              What We Look For
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#746d63] leading-relaxed">
              We are interested in understanding the opportunity, the people behind
              it, and the potential to create sustainable long-term value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lookForCriteria.map((crit, idx) => {
              const Icon = crit.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#a98345]/20 bg-[#f8f5ee] p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#a98345]"
                >
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-[#201e1a] text-[#b99a68] flex items-center justify-center mb-6 shadow">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="heading-3 text-[#22201d] mb-4">
                      {crit.category}
                    </h3>
                    <ul className="space-y-3">
                      {crit.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#746d63]"
                        >
                          <CheckCircle2 className="h-4 w-4 text-[#a98345] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#a98345]/15 text-[10px] uppercase tracking-widest text-[#8e6d3e] font-semibold">
                    Assessment Criterion 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center text-xs text-[#746d63] italic">
            * Note: No single factor guarantees investment. Every opportunity is
            evaluated on its own merits.
          </div>
        </div>
      </section>

      {/* 6-Step Process Section */}
      <section id="process" className="py-20 lg:py-28 bg-[#f8f5ee] border-t border-[#a98345]/15">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="section-eyebrow block mb-2">
              From Submission To Potential Partnership
            </span>
            <h2 className="heading-2 text-[#22201d]">
              Our Process
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#746d63] leading-relaxed">
              A clear, professional, and respectful process for entrepreneurs,
              founders, and business owners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl border border-[#a98345]/20 bg-[#fffdf9] p-7 transition-all duration-300 hover:shadow-lg hover:border-[#a98345]"
              >
                <span className="font-serif text-4xl font-light text-[#8e6d3e] block mb-3">
                  {step.step}
                </span>
                <h3 className="heading-3 text-[#22201d] mb-2">
                  {step.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#746d63] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Submission Action Card */}
          <div className="mt-16 rounded-3xl bg-[#201e1a] text-[#fffdf9] p-8 sm:p-12 border border-[#a98345]/30 text-center max-w-3xl mx-auto shadow-2xl">
            <span className="section-eyebrow font-bold block mb-2 text-[#b99a68]">
              Ready to present?
            </span>
            <h3 className="heading-2 text-white mb-4">
              Your next chapter could start here.
            </h3>
            <p className="text-sm text-[#d8c7ad]/80 mb-8 max-w-xl mx-auto">
              Our intake portal is designed to make it simple for founders to
              provide the core parameters of their opportunity.
            </p>
            <ShimmerButton
              href="/submit-your-business"
              variant="primary"
              size="lg"
              showArrow
            >
              Submit Your Business Proposal
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}

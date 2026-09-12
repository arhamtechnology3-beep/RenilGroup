import React from "react";
import { constructMetadata } from "@/content/seo";
import { BusinessSubmissionForm } from "@/components/forms/business-submission-form";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ShieldCheck, HelpCircle } from "lucide-react";

export const metadata = constructMetadata({
  title: "Submit Your Business | Renil Ventures",
  description:
    "A dedicated portal for entrepreneurs, founders and business owners to present investment and strategic partnership opportunities to Renil Groups.",
  canonical: "/submit-your-business",
});

export default function SubmitYourBusinessPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#f8f5ee]">
      {/* Header */}
      <section className="py-16 lg:py-20 border-b border-[#a98345]/15">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Businesses", href: "/businesses" },
              { label: "Ventures", href: "/businesses/ventures" },
              { label: "Submit Your Business" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-[#a98345]" />
              <span className="section-eyebrow">
                Renil Ventures Intake
              </span>
            </div>
            <h1 className="heading-1 text-[#22201d] mb-6">
              Your next chapter <br />
              <span className="italic text-[#8e6d3e]">could start here.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#746d63] leading-relaxed">
              A dedicated portal for entrepreneurs, founders, and business owners
              to introduce their vision, team, and partnership needs to Renil
              Groups.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Body */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BusinessSubmissionForm />

          {/* Submission Guidelines Note */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#746d63]">
            <div className="rounded-2xl border border-[#a98345]/20 bg-[#fffdf9] p-5">
              <div className="flex items-center gap-2 text-[#22201d] font-semibold mb-2">
                <ShieldCheck className="h-4 w-4 text-[#a98345]" />
                <span>Confidentiality Guaranteed</span>
              </div>
              <p className="leading-relaxed">
                All business summaries, pitch decks, and financial metrics
                submitted are treated strictly as confidential and reviewed solely
                by internal investment members.
              </p>
            </div>

            <div className="rounded-2xl border border-[#a98345]/20 bg-[#fffdf9] p-5">
              <div className="flex items-center gap-2 text-[#22201d] font-semibold mb-2">
                <HelpCircle className="h-4 w-4 text-[#a98345]" />
                <span>Review Timelines</span>
              </div>
              <p className="leading-relaxed">
                Initial evaluation typically completes within 10 to 14 business
                days. Only shortlisted opportunities aligned with current
                strategic focus will receive an invitation for discussion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

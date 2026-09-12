import React from "react";
import { constructMetadata } from "@/content/seo";
import { siteConfig } from "@/content/site";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata = constructMetadata({
  title: "Privacy Policy | Renil Groups",
  description:
    "Privacy Policy and data governance practices for Renil Groups and its associated verticals.",
  canonical: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#f8f5ee]">
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Privacy Policy" },
            ]}
          />
          <div className="bg-[#fffdf9] border border-[#a98345]/20 rounded-3xl p-8 sm:p-14 shadow-sm space-y-8">
          <div className="border-b border-[#a98345]/15 pb-6">
            <span className="text-xs uppercase tracking-widest text-[#a98345] font-bold block mb-2">
              Legal & Compliance
            </span>
            <h1 className="heading-1 text-[#22201d]">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#746d63] mt-2">
              Last updated: September 2026
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#746d63] leading-relaxed">
            <h2 className="heading-3 text-[#22201d]">
              1. Information We Collect
            </h2>
            <p>
              When you submit proposals, inquiries, or reach out through our
              digital touchpoints, Renil Groups collects information you provide
              directly, including your name, corporate email address, phone number,
              organization name, and pitch presentations.
            </p>

            <h2 className="heading-3 text-[#22201d]">
              2. How We Use Submitted Information
            </h2>
            <p>
              Information received via the &quot;Submit Your Business&quot; or
              corporate contact channels is reviewed exclusively by internal
              decision-makers and assessment teams for evaluating strategic fit,
              investment suitability, and commercial alignment.
            </p>

            <h2 className="heading-3 text-[#22201d]">
              3. Confidentiality & Non-Disclosure
            </h2>
            <p>
              We treat all business concepts, financial materials, and intellectual
              proposals with commercial confidentiality. Information submitted is
              never sold, leased, or publicly displayed on external directories.
            </p>

            <h2 className="heading-3 text-[#22201d]">
              4. Contact Regarding Privacy
            </h2>
            <p>
              For inquiries regarding data retention or correction, please contact
              our corporate office at{" "}
              <strong className="text-[#22201d]">{siteConfig.contact.email}</strong>.
            </p>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

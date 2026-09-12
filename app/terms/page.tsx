import React from "react";
import { constructMetadata } from "@/content/seo";
import { siteConfig } from "@/content/site";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata = constructMetadata({
  title: "Terms & Disclaimers | Renil Groups",
  description:
    "Terms of use, submission conditions, and investment disclaimers for Renil Groups.",
  canonical: "/terms",
});

export default function TermsPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#f8f5ee]">
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Terms & Disclaimers" },
            ]}
          />
          <div className="bg-[#fffdf9] border border-[#a98345]/20 rounded-3xl p-8 sm:p-14 shadow-sm space-y-8">
          <div className="border-b border-[#a98345]/15 pb-6">
            <span className="text-xs uppercase tracking-widest text-[#a98345] font-bold block mb-2">
              Legal & Disclaimers
            </span>
            <h1 className="heading-1 text-[#22201d]">
              Terms & Conditions
            </h1>
            <p className="text-xs text-[#746d63] mt-2">
              Last updated: September 2026
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#746d63] leading-relaxed">
            <div className="rounded-2xl border-l-4 border-[#a98345] bg-[#f8f5ee] p-5">
              <h2 className="heading-3 text-[#22201d] font-bold mb-1">
                Mandatory Investment & Submission Disclaimer
              </h2>
              <p className="text-xs text-[#746d63] leading-relaxed">
                {siteConfig.disclaimers.investment}{" "}
                {siteConfig.disclaimers.submission}
              </p>
            </div>

            <h2 className="heading-3 text-[#22201d]">
              1. Platform Purpose & Scope
            </h2>
            <p>
              This digital platform serves as a corporate portfolio and intake
              portal for Renil Groups Pvt. Ltd. and its affiliated operating
              verticals (Renil Ventures, Renil Developments, Renil Hospitality, and
              Renil Logistics).
            </p>

            <h2 className="heading-3 text-[#22201d]">
              2. Opportunity Submissions
            </h2>
            <p>
              Submitting a deck, project inquiry, or business overview does not
              constitute an offer of partnership, equity investment, debt
              financing, or binding contractual agreement. Renil Groups reserves
              full discretion in deciding whether to engage or proceed with any
              opportunity.
            </p>

            <h2 className="heading-3 text-[#22201d]">
              3. Accuracy of Information
            </h2>
            <p>
              While we strive to ensure that all corporate information presented
              is accurate and reflective of group vision, content is provided for
              informational and contextual evaluation purposes only.
            </p>

            <h2 className="heading-3 text-[#22201d]">
              4. Contact
            </h2>
            <p>
              For legal or formal corporate inquiries, contact{" "}
              <strong className="text-[#22201d]">{siteConfig.contact.email}</strong>.
            </p>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

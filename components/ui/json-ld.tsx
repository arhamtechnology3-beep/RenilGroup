import React from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Renil Groups",
  legalName: "Renil Groups Pvt. Ltd.",
  url: "https://renilgroups.com",
  logo: "https://renilgroups.com/logo/renil-crest-v2.png",
  founder: {
    "@type": "Person",
    name: "Swapnil Shinde",
    jobTitle: "Founder & Chief Executive Officer",
  },
  slogan: "Building businesses. Creating value.",
  description:
    "A diversified corporate ecosystem bringing together investment opportunities, real estate development, hospitality, and logistics under one entrepreneurial vision.",
  department: [
    {
      "@type": "Organization",
      name: "Renil Ventures Pvt. Ltd.",
      description: "Investment and strategic partnership arm of Renil Groups.",
    },
    {
      "@type": "Organization",
      name: "Renil Developments Pvt. Ltd.",
      description: "Real estate development and construction-focused vertical.",
    },
    {
      "@type": "Organization",
      name: "Renil Hospitality Pvt. Ltd.",
      description: "Hospitality opportunities, dining and lifestyle ventures.",
    },
    {
      "@type": "Organization",
      name: "Renil Logistics Pvt. Ltd.",
      description: "Logistics and operational supply network solutions.",
    },
  ],
};

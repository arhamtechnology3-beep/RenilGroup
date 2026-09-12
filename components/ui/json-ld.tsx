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
  url: "https://renilgroup.arhamtechnology.com",
  logo: "https://renilgroup.arhamtechnology.com/logo/renil-crest-v2.png",
  image: "https://renilgroup.arhamtechnology.com/images/og-renil-groups.jpg",
  founder: {
    "@type": "Person",
    name: "Swapnil Shinde",
    jobTitle: "Founder & Chief Executive Officer",
  },
  slogan: "Building businesses. Creating value.",
  description:
    "At Renil Groups, we invest, develop, create and connect across multiple avenues to build a better tomorrow — spanning Ventures, Developments, Hospitality, and Logistics.",
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

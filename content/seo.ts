import { Metadata } from "next";

export const defaultSeo = {
  siteName: "Renil Groups",
  titleTemplate: "%s | Renil Groups",
  defaultTitle: "Renil Groups | Building Businesses. Creating Value.",
  defaultDescription:
    "A growing corporate business group with an entrepreneurial mindset — bringing together ventures, developments, hospitality and logistics under one vision.",
  siteUrl: "https://renilgroups.com",
  keywords: [
    "Renil Groups",
    "Renil Ventures",
    "Renil Developments",
    "Renil Hospitality",
    "Renil Logistics",
    "Swapnil Shinde",
    "Entrepreneurial Business Ecosystem",
    "Corporate Investment Platform",
    "Real Estate Developments",
  ],
};

export function constructMetadata({
  title,
  description,
  canonical,
  ogImage = "/images/office-brand-wall.jpg",
}: {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}): Metadata {
  const fullTitle = title.includes("Renil Groups")
    ? title
    : `${title} | Renil Groups`;
  const url = canonical
    ? `${defaultSeo.siteUrl}${canonical}`
    : defaultSeo.siteUrl;

  return {
    title: fullTitle,
    description,
    keywords: defaultSeo.keywords,
    authors: [{ name: "Renil Groups" }, { name: "Swapnil Shinde" }],
    creator: "Renil Groups",
    metadataBase: new URL(defaultSeo.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: defaultSeo.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Renil Groups — Building businesses. Creating value.",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

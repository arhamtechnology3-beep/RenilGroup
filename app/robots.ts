import { MetadataRoute } from "next";
import { defaultSeo } from "@/content/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${defaultSeo.siteUrl}/sitemap.xml`,
  };
}

import { MetadataRoute } from "next";
import { defaultSeo } from "@/content/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = defaultSeo.siteUrl;

  const routes = [
    "",
    "/about",
    "/story",
    "/founder",
    "/businesses",
    "/businesses/ventures",
    "/businesses/developments",
    "/businesses/hospitality",
    "/businesses/logistics",
    "/projects",
    "/submit-your-business",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/businesses") ? 0.9 : 0.8,
  }));
}

import type { MetadataRoute } from "next";

const siteUrl = "https://wild-moon-ranch--bradhylton.replit.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/the-cabin", "/julian-ca", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

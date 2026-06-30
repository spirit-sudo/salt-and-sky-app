import type { MetadataRoute } from "next";

const siteUrl = "https://wild-moon-ranch--bradhylton.replit.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

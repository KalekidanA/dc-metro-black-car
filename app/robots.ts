import type { MetadataRoute } from "next";
import { tenant } from "@/config/tenant";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${tenant.site.domain}/sitemap.xml`,
  };
}

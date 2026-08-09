import type { MetadataRoute } from "next";
import { tenant } from "@/config/tenant";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${tenant.site.domain}/sitemap.xml`,
  };
}

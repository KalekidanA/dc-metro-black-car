import type { MetadataRoute } from "next";
import { tenant } from "@/config/tenant";

export const dynamic = "force-static";

const STATIC_PATHS = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/airport-transfers", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/airport-transfers/reagan-dca", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/airport-transfers/dulles-iad", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/airport-transfers/bwi", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/corporate-executive-travel", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/hourly-as-directed", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/event-transportation", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/service-area", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return STATIC_PATHS.map((entry) => ({
    url: `${tenant.site.domain}${entry.path}`,
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}

import type { Metadata } from "next";
import { tenant } from "@/config/tenant";

/**
 * Builds page metadata with sane defaults (OG/Twitter cards, canonical URL)
 * so every page only has to supply title/description/path.
 */
export function buildMetadata({
  title,
  description,
  path,
  noIndex,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${tenant.site.domain}${path}`;
  const fullTitle = title.includes(tenant.businessName)
    ? title
    : `${title} | ${tenant.businessName}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: tenant.businessName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${tenant.site.domain}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: tenant.businessName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${tenant.site.domain}/og-image.jpg`],
    },
  };
}

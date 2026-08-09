import { tenant } from "@/config/tenant";

/**
 * JSON-LD builders. All business identity flows from config/tenant.ts so
 * structured data stays correct automatically when a tenant is swapped.
 */

const areaServed = [
  { "@type": "City", name: "Washington, DC" },
  ...tenant.serviceArea.extendedRegion.map((r) => ({ "@type": "City", name: r })),
];

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LimousineService",
    "@id": `${tenant.site.domain}/#business`,
    name: tenant.businessName,
    alternateName: tenant.shortName,
    description: tenant.tagline,
    url: tenant.site.domain,
    telephone: tenant.phone.number,
    email: tenant.email,
    priceRange: tenant.site.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: tenant.address.city,
      addressRegion: tenant.address.state,
      postalCode: tenant.address.postalCode,
      addressCountry: tenant.address.country,
    },
    areaServed,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: String(tenant.reviews.length),
      // NOTE: placeholder rating data — replace with real aggregate values
      // once verified reviews are collected (see config/tenant.ts).
    },
    sameAs: Object.values(tenant.social).filter(Boolean),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@type": "LimousineService",
      name: tenant.businessName,
      telephone: tenant.phone.number,
    },
    areaServed,
  };
}

/** Renders a <script type="application/ld+json"> tag. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

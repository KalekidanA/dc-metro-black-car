import type { Metadata } from "next";
import { tenant } from "@/config/tenant";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CallToAction } from "@/components/CallToAction";

const PATH = "/about";

export const metadata: Metadata = buildMetadata({
  title: "About Us — Licensed DC & Virginia Black Car Operator",
  description: `Meet the operator behind ${tenant.businessName}: ${tenant.operator.yearsExperience}+ years of professional driving experience in Washington, DC and Northern Virginia, licensed and insured.`,
  path: PATH,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: tenant.site.domain },
          { name: "About", url: `${tenant.site.domain}${PATH}` },
        ])}
      />
      <Breadcrumbs items={[{ name: "About", href: PATH }]} />

      <PageHero
        eyebrow="About Us"
        title="A Licensed DC & Virginia Operator, Not an App"
        description="Every ride with us is driven by a background-checked professional, licensed in both DC and Virginia, who has spent years learning this region's streets, traffic patterns, and airport procedures."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          <ImagePlaceholder label="Driver/operator professional portrait" aspect="aspect-square" />
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Our Story</h2>
            <p className="mt-4 text-black/70">{tenant.operator.bio}</p>
            <p className="mt-4 text-black/70">
              {tenant.businessName} was built on a simple observation: DC clients value
              predictability more than almost anything else in their transportation.
              Hearing schedules, flight windows, and client meetings don&apos;t move —
              so the car service around them shouldn&apos;t be a variable either. That
              means one driver you can reach directly, one vehicle maintained to a
              consistent standard, and bookings confirmed by a person, not an algorithm.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Licensing &amp; Compliance
          </h2>
          <p className="max-w-2xl text-ivory/70">{tenant.legal.dfhvStatement}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {tenant.operator.licenses.map((license) => (
              <div key={license.jurisdiction} className="rounded-sm border border-white/10 bg-black/30 p-6">
                <h3 className="font-semibold text-gold">{license.jurisdiction}</h3>
                <p className="mt-2 text-sm text-ivory/75">{license.licenseType}</p>
                <p className="mt-3 text-xs text-ivory/50">License Number: {license.numberPlaceholder}</p>
              </div>
            ))}
            <div className="rounded-sm border border-white/10 bg-black/30 p-6">
              <h3 className="font-semibold text-gold">Insurance</h3>
              <p className="mt-2 text-sm text-ivory/75">{tenant.operator.insuranceStatement}</p>
            </div>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {tenant.operator.credentials.map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm text-ivory/80">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 shrink-0 text-gold"
                >
                  <path d="m4 10 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-ivory/40">{tenant.legal.disclaimer}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Prearranged, not on-demand
          </h2>
          <p className="mt-4 text-black/70">
            It&apos;s worth being precise about what this service is: a prearranged
            black car / limousine-style service, licensed in DC and Virginia. That means
            rides are scheduled in advance — by phone or through our contact form —
            rather than hailed on the street or dispatched through an on-demand
            rideshare app. That distinction is the basis for the reliability we build
            the whole business around.
          </p>
        </div>
      </section>

      <section className="bg-black text-ivory">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Ready to book?
          </h2>
          <CallToAction className="mt-8" align="center" />
        </div>
      </section>
    </>
  );
}

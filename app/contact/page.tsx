import type { Metadata } from "next";
import { tenant } from "@/config/tenant";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { PhoneLink } from "@/components/PhoneLink";

const PATH = "/contact";

export const metadata: Metadata = buildMetadata({
  title: "Contact / Book Now — Reserve Your Ride",
  description: `Book a ride with ${tenant.businessName}. Call ${tenant.phone.display} or submit a reservation request with your pickup, drop-off, and travel details.`,
  path: PATH,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: tenant.site.domain },
          { name: "Contact / Book Now", url: `${tenant.site.domain}${PATH}` },
        ])}
      />
      <Breadcrumbs items={[{ name: "Contact / Book Now", href: PATH }]} />

      <PageHero
        eyebrow="Book Your Ride"
        title="Contact &amp; Book Now"
        description="Call for the fastest response, especially for same-day bookings, or submit a reservation request below and we'll confirm directly."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold">Prefer to call?</h2>
            <p className="mt-3 text-black/70">
              For same-day or time-sensitive bookings, calling directly is fastest.
            </p>
            <PhoneLink className="mt-4 inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-gold-light" />

            <div className="mt-10 border-t border-black/10 pt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-black/60">
                Email
              </h3>
              <a href={`mailto:${tenant.email}`} className="mt-2 block text-sm text-gold hover:underline">
                {tenant.email}
              </a>
            </div>

            <div className="mt-8 border-t border-black/10 pt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-black/60">
                Service Area
              </h3>
              <p className="mt-2 text-sm text-black/70">{tenant.serviceArea.summary}</p>
            </div>

            <div className="mt-8 border-t border-black/10 pt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-black/60">
                Licensed &amp; Insured
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-black/70">
                {tenant.operator.credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl font-semibold">Request a Reservation</h2>
            <p className="mt-3 text-black/70">
              Fields marked * are required. We&apos;ll confirm your booking by phone or
              email shortly after you submit.
            </p>
            <div className="mt-6 rounded-sm border border-black/10 bg-ivory p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

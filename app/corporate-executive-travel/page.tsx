import type { Metadata } from "next";
import { tenant } from "@/config/tenant";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, serviceSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { TrustBadges } from "@/components/TrustBadges";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CallToAction } from "@/components/CallToAction";

const PATH = "/corporate-executive-travel";

export const metadata: Metadata = buildMetadata({
  title: "Corporate Car Service Washington DC — Executive & Diplomatic Travel",
  description:
    "Professional corporate car service in Washington, DC for business travelers, recurring corporate accounts, and embassy/diplomatic travel. Licensed, insured, discreet.",
  path: PATH,
});

const FAQS = [
  {
    question: "Do you offer accounts for companies with recurring travel needs?",
    answer:
      "Yes. Businesses, law firms, government contractors, and embassies that book regularly can set up a standing arrangement for recurring transportation — contact us to discuss your organization's needs.",
  },
  {
    question: "Can you handle embassy or diplomatic transportation?",
    answer:
      "Yes, we regularly provide discreet, professional transportation for embassy staff and diplomatic visitors, including familiarity with protocol around embassy row and secure-building pickup/drop-off procedures.",
  },
  {
    question: "Is the vehicle suitable for client-facing business travel?",
    answer:
      "Yes — our fleet consists of black, late-model executive sedans and SUVs maintained to a professional, client-ready standard, driven by a uniformed, background-checked operator.",
  },
  {
    question: "Can you accommodate confidential or sensitive meetings?",
    answer:
      "Yes. Discretion is standard practice — pickup locations, meeting details, and passenger information are handled confidentially, and drivers do not discuss client business.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Corporate & Executive Car Service",
          description:
            "Prearranged executive car service for business travelers, corporate accounts, and diplomatic travel in Washington, DC.",
          url: `${tenant.site.domain}${PATH}`,
        })}
      />
      <JsonLd data={faqSchema(FAQS)} />
      <Breadcrumbs items={[{ name: "Corporate & Executive Travel", href: PATH }]} />

      <PageHero
        eyebrow="For Business Travelers & Organizations"
        title="Corporate Car Service in Washington, DC"
        description="Punctual, discreet, professional transportation for executives, business travelers, and organizations that need transportation they can build a schedule around — not wait on."
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-black/70">
            Washington runs on schedules — hearing times, client meetings, embassy
            functions, flight windows. Rideshare apps introduce variables you can&apos;t
            control: surge pricing during rush hour, a different driver and vehicle every
            time, cancellations at the worst moment. Corporate car service removes those
            variables. You book once, with a known driver and a known vehicle, and the
            plan holds.
          </p>
          <p className="mt-4 text-black/70">
            {tenant.businessName} works with individual business travelers as well as
            firms, agencies, and embassies that need standing transportation
            arrangements. Every driver is {tenant.operator.licenseType.toLowerCase()},
            insured, and background-checked, and every vehicle is a black, late-model
            sedan or SUV suitable for client-facing travel.
          </p>
        </div>
      </section>

      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Who we work with
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Business Travelers",
                body: "Point-to-point airport, hotel, and meeting transportation for individual executives and consultants.",
              },
              {
                title: "Recurring Corporate Accounts",
                body: "Standing arrangements for companies that book transportation regularly — consistent billing, consistent service.",
              },
              {
                title: "Embassies & Diplomatic Travel",
                body: "Discreet, protocol-aware transportation for embassy staff and visiting diplomatic delegations.",
              },
              {
                title: "Law Firms & Government Contractors",
                body: "Reliable transportation for client meetings, depositions, and government-site visits across the District.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-sm border border-white/10 bg-black/30 p-6">
                <h3 className="font-semibold text-gold">{c.title}</h3>
                <p className="mt-2 text-sm text-ivory/75">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <ImagePlaceholder label="Executive stepping into black sedan outside office building" />
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              What&apos;s included
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-black/70">
              <li>&bull; Direct, confirmed booking — no algorithmic dispatch or driver swaps</li>
              <li>&bull; Flight and meeting-time tracking for pickup accuracy</li>
              <li>&bull; Uniformed, background-checked, professional driver</li>
              <li>&bull; Black, late-model executive sedan or SUV</li>
              <li>&bull; Confidential handling of pickup details and passenger information</li>
              <li>&bull; Flexible multi-stop itineraries for a full day of meetings (see our{" "}
                <a href="/hourly-as-directed" className="text-gold hover:underline">
                  hourly / as-directed service
                </a>)
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Corporate travel FAQs
          </h2>
          <FAQAccordion items={FAQS} className="mt-8" />
        </div>
      </section>

      <section className="bg-black text-ivory">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Set up your corporate travel
          </h2>
          <p className="mt-4 text-ivory/70">
            Call to discuss a recurring account, or request a one-time reservation.
          </p>
          <CallToAction className="mt-8" align="center" />
        </div>
      </section>
    </>
  );
}

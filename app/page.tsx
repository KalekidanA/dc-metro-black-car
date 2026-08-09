import type { Metadata } from "next";
import Link from "next/link";
import { tenant } from "@/config/tenant";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, faqSchema } from "@/lib/schema";
import { CallToAction } from "@/components/CallToAction";
import { TrustBadges } from "@/components/TrustBadges";
import { Testimonials } from "@/components/Testimonials";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PhoneLink } from "@/components/PhoneLink";

export const metadata: Metadata = buildMetadata({
  title: `${tenant.tagline} | Airport, Corporate & Hourly Car Service`,
  description: `${tenant.businessName} provides prearranged black car service in Washington, DC and Northern Virginia — airport transfers to DCA & IAD, corporate travel, hourly charters, and event transportation. Licensed, insured, background-checked.`,
  path: "/",
});

const SERVICES = [
  {
    href: "/airport-transfers",
    title: "Airport Transfers",
    description:
      "Flight-tracked pickups and drop-offs at Reagan National (DCA) and Dulles (IAD) — meet-and-greet service with real-time delay monitoring.",
  },
  {
    href: "/corporate-executive-travel",
    title: "Corporate & Executive Travel",
    description:
      "Reliable transportation for business travelers, recurring corporate accounts, and diplomatic or embassy travel across the District.",
  },
  {
    href: "/hourly-as-directed",
    title: "Hourly / As-Directed",
    description:
      "Book the vehicle and driver by the hour for multi-stop meetings, client visits, or a flexible day of point-to-point travel.",
  },
  {
    href: "/event-transportation",
    title: "Event Transportation",
    description:
      "Weddings, galas, and special occasions — punctual, professional transportation that keeps your day on schedule.",
  },
];

const HOME_FAQS = [
  {
    question: "Is this a taxi or rideshare app?",
    answer:
      "No. Capitol Black Car Service is a prearranged, licensed black car service — every ride is scheduled in advance by phone or through our contact form, not hailed on the street or dispatched through an on-demand app. This is a licensed black car / limousine model, built for reliability and professionalism.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We're based in Washington, DC and serve the entire District plus nearby Northern Virginia, including Arlington, Alexandria, Tysons, and McLean. We're licensed for DC and Virginia only — Maryland is not currently served. See our full service area page for a neighborhood-by-neighborhood breakdown.",
  },
  {
    question: "Which airports do you cover?",
    answer:
      "Reagan National (DCA) and Dulles International (IAD). We track your flight and adjust pickup timing automatically for delays.",
  },
  {
    question: "How much does it cost?",
    answer: `We bill hourly: $${tenant.fleet.vehicleTypes[0].hourlyRate}/hr for our ${tenant.fleet.vehicleTypes[0].name} (up to ${tenant.fleet.vehicleTypes[0].capacity} passengers) and $${tenant.fleet.vehicleTypes[1].hourlyRate}/hr for our ${tenant.fleet.vehicleTypes[1].name} (up to ${tenant.fleet.vehicleTypes[1].capacity} passengers). Call for a quote on your specific trip.`,
  },
  {
    question: "How do I book?",
    answer: `Call us directly at ${tenant.phone.display} or submit a reservation request through our contact form with your pickup/drop-off details, date, and time. We confirm every booking directly with you.`,
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />

      {/* Hero */}
      <section className="relative bg-black text-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Washington, DC &middot; Northern Virginia &middot; DCA &middot; IAD
            </p>
            <h1 className="font-display mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {tenant.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ivory/75">
              Prearranged, professional transportation for airport transfers, corporate
              travel, and special occasions — licensed, insured, and driven by a
              background-checked DC &amp; Virginia operator who knows this region.
            </p>
            <CallToAction className="mt-8" />
            <p className="mt-6 text-xs uppercase tracking-wide text-ivory/50">
              {tenant.operator.credentials.slice(0, 3).join(" · ")}
            </p>
          </div>
          <ImagePlaceholder
            label="Executive black sedan, DC monument backdrop"
            aspect="aspect-[4/3]"
            className="border-white/15 bg-charcoal text-ivory [&_svg]:text-ivory/30 [&_span]:text-ivory/40"
          />
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      {/* Service overview */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Services
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
              Black car service built around how Washington actually moves
            </h2>
            <p className="mt-4 text-black/70">
              From a 5 a.m. Dulles departure to a multi-stop day of Hill meetings, every
              trip is scheduled in advance and confirmed directly with your driver — no
              surge pricing, no surprise substitutions.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col rounded-sm border border-black/10 bg-ivory p-6 transition hover:border-gold hover:shadow-md"
              >
                <h3 className="font-display text-lg font-semibold text-black group-hover:text-gold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-black/65">{service.description}</p>
                <span className="mt-4 text-sm font-semibold text-gold">Learn more &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-black text-ivory">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Pricing
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
              Simple, transparent hourly rates
            </h2>
            <p className="mt-4 text-ivory/70">
              No surge pricing, no hidden fees — just a flat hourly rate by vehicle
              type. Call for a quote on your specific trip.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {tenant.fleet.vehicleTypes.map((vehicle) => (
              <div
                key={vehicle.name}
                className="rounded-sm border border-white/10 bg-charcoal p-8"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold">{vehicle.name}</h3>
                  <p className="font-display text-3xl font-semibold text-gold">
                    ${vehicle.hourlyRate}
                    <span className="text-sm font-sans font-normal text-ivory/50">/hr</span>
                  </p>
                </div>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-ivory/50">
                  Up to {vehicle.capacity} passengers
                </p>
                <p className="mt-3 text-sm text-ivory/70">{vehicle.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-ivory/40">{tenant.legal.disclaimer}</p>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Service Area
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
              Covering Washington, DC &amp; Northern Virginia
            </h2>
            <p className="mt-4 text-ivory/70">{tenant.serviceArea.summary}</p>
            <Link
              href="/service-area"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light"
            >
              View full service area &rarr;
            </Link>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ivory/60">
              DC Neighborhoods
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-ivory/80 sm:grid-cols-3">
              {tenant.serviceArea.neighborhoods.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-ivory/60">
              Also Serving
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-ivory/80 sm:grid-cols-3">
              {tenant.serviceArea.extendedRegion.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About / driver credibility */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <ImagePlaceholder label="Driver / operator portrait" aspect="aspect-square" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Who You&apos;re Riding With
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
              A licensed DC &amp; Virginia operator, not a rotating cast of app drivers
            </h2>
            <p className="mt-4 text-black/70">{tenant.operator.bio}</p>
            <ul className="mt-6 space-y-2 text-sm text-black/70">
              {tenant.operator.credentials.map((c) => (
                <li key={c} className="flex items-center gap-2">
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
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-black"
            >
              Read the full story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Client Feedback
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
              What riders say
            </h2>
          </div>
          <Testimonials className="mt-10" />
        </div>
      </section>

      {/* FAQ preview */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">FAQ</p>
            <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
              Common questions
            </h2>
          </div>
          <FAQAccordion items={HOME_FAQS} className="mt-8" />
          <Link
            href="/faq"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-black"
          >
            View all FAQs &rarr;
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-ivory">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Ready to book your ride?
          </h2>
          <p className="mt-4 text-ivory/70">
            Call now or send a reservation request — we confirm every booking directly,
            no app required.
          </p>
          <CallToAction className="mt-8" align="center" />
          <p className="mt-6 text-sm text-ivory/50">
            Prefer to call? <PhoneLink className="font-semibold text-gold hover:text-gold-light" />
          </p>
        </div>
      </section>
    </>
  );
}

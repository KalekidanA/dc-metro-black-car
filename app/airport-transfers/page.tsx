import type { Metadata } from "next";
import Link from "next/link";
import { tenant } from "@/config/tenant";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, serviceSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { TrustBadges } from "@/components/TrustBadges";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CallToAction } from "@/components/CallToAction";

const PATH = "/airport-transfers";

export const metadata: Metadata = buildMetadata({
  title: "DC Airport Transfers — DCA, Dulles (IAD) & BWI Black Car Service",
  description:
    "Licensed black car airport transfers in Washington, DC. Flight-tracked pickups at Reagan National (DCA), Dulles (IAD), and BWI with meet-and-greet service and flat, quoted rates.",
  path: PATH,
});

const AIRPORT_FAQS = [
  {
    question: "Do you track my flight?",
    answer:
      "Yes. Every airport pickup is matched to your flight number and monitored for delays or early arrivals, so your driver adjusts pickup timing automatically — you won't be charged extra for a late flight.",
  },
  {
    question: "Where do you meet me at arrivals?",
    answer:
      "For a meet-and-greet pickup, your driver waits at baggage claim or a pre-arranged curbside spot with a name sign. Exact meeting points vary slightly by terminal and are confirmed when you book.",
  },
  {
    question: "How early should I book an airport transfer?",
    answer:
      "We recommend booking at least 24 hours in advance to guarantee availability, especially for early-morning departures. Same-day requests are accommodated when possible — call to check availability.",
  },
  {
    question: "What if my flight is delayed or cancelled?",
    answer:
      "We monitor your flight status directly, so delays are handled automatically at no extra charge. If your flight is cancelled, call or text us as soon as you know and we'll rebook your pickup time at no penalty.",
  },
];

export default function AirportTransfersPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Airport Transfer Black Car Service",
          description:
            "Prearranged black car transfers to and from DCA, IAD, and BWI airports serving Washington, DC.",
          url: `${tenant.site.domain}${PATH}`,
        })}
      />
      <JsonLd data={faqSchema(AIRPORT_FAQS)} />
      <Breadcrumbs items={[{ name: "Airport Transfers", href: PATH }]} />

      <PageHero
        eyebrow="Highest-Demand Service"
        title="DC Airport Black Car Transfers — DCA, Dulles & BWI"
        description="Flight-tracked, meet-and-greet transportation to and from all three Washington-area airports. Book once, and your driver handles the rest — no app, no surge pricing, no guessing where to meet."
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Choose your airport
          </h2>
          <p className="mt-4 max-w-2xl text-black/70">
            Each airport has its own terminal layout, curbside rules, and typical drive
            times from DC. Pick your airport below for specifics on pickup points and
            travel times from popular DC neighborhoods.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <AirportCard
              code="DCA"
              name="Reagan National"
              slug="reagan-dca"
              blurb="Closest airport to Downtown DC — typically a 10–20 minute ride from most central neighborhoods."
            />
            <AirportCard
              code="IAD"
              name="Dulles International"
              slug="dulles-iad"
              blurb="The primary hub for international and many long-haul domestic flights — roughly 45 minutes to an hour from DC depending on traffic."
            />
            <AirportCard
              code="BWI"
              name="BWI Marshall"
              slug="bwi"
              blurb="Serves DC, Baltimore, and Northern Maryland — about 45 minutes to an hour from central DC."
            />
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              How airport pickups work
            </h2>
            <ol className="mt-6 space-y-5 text-sm text-ivory/80">
              <li className="flex gap-3">
                <span className="font-display text-gold">01</span>
                <span>
                  <strong className="text-ivory">Book with your flight number.</strong> Give
                  us your flight number and terminal when you reserve — we track it from
                  there.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-gold">02</span>
                <span>
                  <strong className="text-ivory">We adjust for delays automatically.</strong>{" "}
                  Landed early or late, your pickup time shifts with you at no extra
                  charge.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-gold">03</span>
                <span>
                  <strong className="text-ivory">Meet your driver curbside or at baggage claim.</strong>{" "}
                  Exact meeting point is confirmed by text before you land.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-gold">04</span>
                <span>
                  <strong className="text-ivory">Direct to your destination.</strong> No
                  shared rides, no additional stops unless you request them.
                </span>
              </li>
            </ol>
          </div>
          <ImagePlaceholder
            label="Driver greeting client at airport arrivals"
            className="border-white/15 bg-black text-ivory [&_svg]:text-ivory/30 [&_span]:text-ivory/40"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Airport transfer FAQs
          </h2>
          <FAQAccordion items={AIRPORT_FAQS} className="mt-8" />
        </div>
      </section>

      <section className="bg-black text-ivory">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Book your airport transfer
          </h2>
          <p className="mt-4 text-ivory/70">
            Call now for same-day availability, or request a reservation online.
          </p>
          <CallToAction className="mt-8" align="center" />
        </div>
      </section>
    </>
  );
}

function AirportCard({
  code,
  name,
  slug,
  blurb,
}: {
  code: string;
  name: string;
  slug: string;
  blurb: string;
}) {
  return (
    <Link
      href={`/airport-transfers/${slug}`}
      className="group flex flex-col rounded-sm border border-black/10 bg-ivory p-6 transition hover:border-gold hover:shadow-md"
    >
      <span className="font-display text-3xl font-semibold text-gold">{code}</span>
      <h3 className="mt-1 text-lg font-semibold text-black group-hover:text-gold">{name}</h3>
      <p className="mt-2 text-sm text-black/65">{blurb}</p>
      <span className="mt-4 text-sm font-semibold text-gold">
        {code} transfer details &rarr;
      </span>
    </Link>
  );
}

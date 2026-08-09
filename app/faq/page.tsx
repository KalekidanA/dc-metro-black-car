import type { Metadata } from "next";
import { tenant } from "@/config/tenant";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import { CallToAction } from "@/components/CallToAction";

const PATH = "/faq";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description: `Pricing, service area, licensing, and booking policies for ${tenant.businessName}, a prearranged black car service in Washington, DC.`,
  path: PATH,
});

const FAQ_GROUPS: { heading: string; items: FAQItem[] }[] = [
  {
    heading: "Pricing & Booking",
    items: [
      {
        question: "How is pricing structured?",
        answer:
          "Airport transfers and point-to-point trips are typically quoted as a flat rate based on pickup and drop-off locations. Hourly / as-directed bookings are billed by the hour with a minimum booking period. Call or request a reservation for a specific quote — we confirm pricing before your trip, not after.",
      },
      {
        question: "Do prices change based on demand or time of day?",
        answer:
          "No surge pricing. Rates are set in advance for your booking and confirmed at the time you reserve, regardless of demand, weather, or time of day.",
      },
      {
        question: "How far in advance do I need to book?",
        answer:
          "We recommend at least 24 hours' notice to guarantee availability, especially for early-morning airport departures or weekend event dates. Same-day requests are accommodated when possible — call to check.",
      },
      {
        question: "Do you charge for wait time?",
        answer:
          "A reasonable grace period is included with every pickup (longer for international airport arrivals to account for customs). Extended wait time beyond that may incur an additional charge, confirmed with you in advance.",
      },
      {
        question: "What forms of payment do you accept?",
        answer:
          "Payment details are confirmed at the time of booking. Contact us directly for current accepted payment methods.",
      },
    ],
  },
  {
    heading: "Service Area & Availability",
    items: [
      {
        question: "What areas do you serve?",
        answer:
          "All of Washington, DC, plus nearby Northern Virginia (Arlington, Alexandria, Tysons, McLean) and suburban Maryland (Bethesda, Silver Spring, National Harbor). See our full service area page for neighborhood-level detail.",
      },
      {
        question: "Which airports do you serve?",
        answer:
          "Reagan National (DCA), Dulles International (IAD), and BWI Marshall — all three DC-area airports, with flight tracking included on every airport booking.",
      },
      {
        question: "Are you available 24/7?",
        answer:
          "We accommodate early-morning and late-night bookings, including pre-dawn airport departures and late arrivals. Call to confirm availability for your specific date and time.",
      },
    ],
  },
  {
    heading: "Licensing & Safety",
    items: [
      {
        question: "Are you licensed and insured?",
        answer: tenant.operator.insuranceStatement,
      },
      {
        question: "Is this a taxi or rideshare service?",
        answer: tenant.legal.dfhvStatement,
      },
      {
        question: "Is the driver background-checked?",
        answer:
          "Yes. Every driver operating under Capitol Black Car Service is background-checked and licensed by the DC Department of For-Hire Vehicles (DFHV) as a black car / luxury sedan operator.",
      },
    ],
  },
  {
    heading: "Cancellations & Changes",
    items: [
      {
        question: "What is your cancellation policy?",
        answer:
          "We ask for as much notice as possible if you need to cancel or reschedule — ideally several hours before pickup for point-to-point trips, and 24 hours for hourly or event bookings. Late cancellations or no-shows may be subject to a fee, which we'll confirm at the time of booking.",
      },
      {
        question: "Can I change my pickup time after booking?",
        answer:
          "Yes — call or email as soon as you know your schedule has changed and we'll do our best to accommodate the new time. For flight-tracked airport bookings, delays are handled automatically.",
      },
      {
        question: "What happens if my flight is delayed?",
        answer:
          "We track your flight and adjust your pickup time automatically at no extra charge for standard delays. If your flight is cancelled or changes significantly, contact us as soon as possible to rebook.",
      },
    ],
  },
];

const FLAT_FAQS = FAQ_GROUPS.flatMap((g) => g.items);

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema(FLAT_FAQS)} />
      <Breadcrumbs items={[{ name: "FAQ", href: PATH }]} />

      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Everything you need to know before booking"
        description="Pricing, service area, licensing, and policies — straight answers before you book."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          {FAQ_GROUPS.map((group) => (
            <div key={group.heading} className="mb-12 last:mb-0">
              <h2 className="font-display text-2xl font-semibold text-black">
                {group.heading}
              </h2>
              <FAQAccordion items={group.items} className="mt-4" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-ivory">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Still have questions?
          </h2>
          <p className="mt-4 text-ivory/70">Call us directly — we&apos;re happy to help.</p>
          <CallToAction className="mt-8" align="center" />
        </div>
      </section>
    </>
  );
}

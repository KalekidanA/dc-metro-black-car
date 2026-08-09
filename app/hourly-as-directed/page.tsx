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

const PATH = "/hourly-as-directed";

export const metadata: Metadata = buildMetadata({
  title: "Hourly Car Service Washington DC — As-Directed & Multi-Stop Charters",
  description: `Book a black car and driver by the hour in Washington, DC and Northern Virginia. $${tenant.fleet.vehicleTypes[0].hourlyRate}/hr sedan, $${tenant.fleet.vehicleTypes[1].hourlyRate}/hr SUV. Ideal for multi-stop meetings, client visits, and flexible point-to-point days.`,
  path: PATH,
});

const FAQS = [
  {
    question: "How does hourly / as-directed billing work?",
    answer: `You reserve the vehicle and driver for a block of time, billed hourly: $${tenant.fleet.vehicleTypes[0].hourlyRate}/hr for the ${tenant.fleet.vehicleTypes[0].name} (up to ${tenant.fleet.vehicleTypes[0].capacity} passengers) or $${tenant.fleet.vehicleTypes[1].hourlyRate}/hr for the ${tenant.fleet.vehicleTypes[1].name} (up to ${tenant.fleet.vehicleTypes[1].capacity} passengers). A minimum booking period applies. Your driver stays with you and the vehicle for the full reservation.`,
  },
  {
    question: "What's the minimum booking time?",
    answer:
      "Hourly bookings typically require a minimum reservation window; call us with your planned itinerary and we'll confirm the exact minimum for your date.",
  },
  {
    question: "Can I make stops that weren't planned when I booked?",
    answer:
      "Yes — that's the point of as-directed service. Your driver follows your itinerary in real time, including unplanned stops, within your reserved time block.",
  },
  {
    question: "Is hourly service available for out-of-town visitors?",
    answer:
      "Yes, hourly service is popular with visiting clients, conference attendees, and out-of-town guests who want a full day (or half-day) of DC covered without managing individual rides.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Hourly / As-Directed Car Service",
          description:
            "Hourly black car and driver bookings for multi-stop, point-to-point travel in Washington, DC.",
          url: `${tenant.site.domain}${PATH}`,
        })}
      />
      <JsonLd data={faqSchema(FAQS)} />
      <Breadcrumbs items={[{ name: "Hourly / As-Directed", href: PATH }]} />

      <PageHero
        eyebrow="Book by the Hour"
        title="Hourly &amp; As-Directed Car Service in DC"
        description="Reserve a vehicle and driver for a block of time and go wherever your day takes you — multiple meetings, unplanned stops, or a flexible itinerary without booking a new ride each time."
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-black/70">
            Some days don&apos;t fit a single point-to-point ride. A morning of Hill
            meetings that runs long, a client visit that adds an unplanned lunch stop, a
            full day of house-hunting across three neighborhoods — as-directed service
            means your driver and vehicle are reserved for the block of time you need,
            and the itinerary can flex as your day does.
          </p>
          <p className="mt-4 text-black/70">
            You set the pace. The driver waits between stops, adjusts to schedule
            changes in real time, and keeps the same vehicle with you throughout your
            reservation — no re-booking, no waiting for a new driver to arrive.
          </p>
        </div>
      </section>

      <section className="bg-black text-ivory">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Hourly rates
          </h2>
          <p className="mt-4 max-w-2xl text-ivory/70">
            Billed from pickup to drop-off, with a minimum booking period confirmed
            when you reserve. No surge pricing — the rate you&apos;re quoted is the
            rate you pay.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {tenant.fleet.vehicleTypes.map((vehicle) => (
              <div key={vehicle.name} className="rounded-sm border border-white/10 bg-charcoal p-8">
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
        </div>
      </section>

      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Common uses for hourly service
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Multi-Stop Meeting Days", body: "Back-to-back client or agency meetings across different parts of the city." },
              { title: "Visiting Clients & Guests", body: "A full day covered for out-of-town visitors without booking individual rides." },
              { title: "Roadshows & Site Visits", body: "Multiple location visits on a defined schedule with waiting time built in." },
              { title: "Shopping & Personal Errands", body: "A driver on standby for a flexible afternoon of stops." },
              { title: "Conference & Event Days", body: "Coverage between venue, hotel, and dinner without re-booking each leg." },
              { title: "House Hunting / Property Tours", body: "Multiple stops across neighborhoods with wait time between viewings." },
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
          <ImagePlaceholder label="Car waiting curbside during a multi-stop itinerary" />
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">How to book</h2>
            <ol className="mt-6 space-y-4 text-sm text-black/70">
              <li>
                <strong className="text-black">1. Call or submit a reservation request</strong>{" "}
                with your planned date, start time, and general itinerary.
              </li>
              <li>
                <strong className="text-black">2. We confirm your time block</strong> and
                any minimum-hour requirements for that date.
              </li>
              <li>
                <strong className="text-black">3. Your driver arrives on time</strong> and
                stays with you for the full reservation, adjusting stops as needed.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Hourly service FAQs
          </h2>
          <FAQAccordion items={FAQS} className="mt-8" />
        </div>
      </section>

      <section className="bg-black text-ivory">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Reserve your hourly booking
          </h2>
          <p className="mt-4 text-ivory/70">
            Call with your itinerary and we&apos;ll confirm pricing and availability.
          </p>
          <CallToAction className="mt-8" align="center" />
        </div>
      </section>
    </>
  );
}

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

const PATH = "/event-transportation";

export const metadata: Metadata = buildMetadata({
  title: "Event & Wedding Car Service Washington DC — Special Occasion Transportation",
  description:
    "Black car service for weddings and special events in Washington, DC. Punctual, professional transportation that keeps your event schedule on track.",
  path: PATH,
});

const FAQS = [
  {
    question: "Do you provide wedding transportation?",
    answer:
      "Yes — black car service for the couple, wedding party transport between venues, or transportation for out-of-town guests. Tell us your timeline and we'll build a schedule around it.",
  },
  {
    question: "How far in advance should I book for a wedding or event?",
    answer:
      "We recommend booking special-event transportation as soon as your date and venues are set — ideally several weeks out — since weekend dates fill first.",
  },
  {
    question: "Can you coordinate multiple pickup times for an event?",
    answer:
      "Yes, for events with multiple legs (ceremony to reception, hotel to venue, etc.) we build a coordinated schedule in advance so every pickup happens on time without you managing it day-of.",
  },
  {
    question: "Do you serve venues outside DC proper?",
    answer:
      "Yes, we cover event venues throughout DC as well as nearby Northern Virginia and Maryland — see our service area page for the full coverage list.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Event & Wedding Transportation",
          description:
            "Black car service for weddings and special events in Washington, DC.",
          url: `${tenant.site.domain}${PATH}`,
        })}
      />
      <JsonLd data={faqSchema(FAQS)} />
      <Breadcrumbs items={[{ name: "Event Transportation", href: PATH }]} />

      <PageHero
        eyebrow="Weddings & Special Occasions"
        title="Event Transportation in Washington, DC"
        description="On a day where timing matters more than any other, a professional driver who knows your schedule keeps things moving — from getting-ready photos to the last guest home safe."
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-black/70">
            Weddings and milestone events run on a schedule built weeks in advance — and
            transportation is one of the few pieces that can quietly derail the whole
            day if it&apos;s left to chance. A black car reserved specifically for your
            event means a driver who already knows your pickup times, your venues, and
            your route, arriving early and staying flexible if the schedule shifts.
          </p>
          <p className="mt-4 text-black/70">
            We work with couples directly on wedding-day transportation, and with event
            planners and hosts on guest transportation for galas, fundraisers, and
            private parties across DC.
          </p>
        </div>
      </section>

      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Event transportation we provide
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Wedding Day Transport", body: "Couple and wedding party transportation between getting-ready locations, ceremony, and reception." },
              { title: "Guest Shuttling", body: "Coordinated pickup times for out-of-town guests between hotels and venues." },
              { title: "Galas & Fundraisers", body: "Professional arrival and departure transportation for hosts, honorees, and VIP guests." },
              { title: "Private Parties", body: "Point-to-point or as-directed service for milestone birthdays, anniversaries, and private celebrations." },
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
          <ImagePlaceholder label="Black car outside wedding venue" />
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Planning your event transportation
            </h2>
            <p className="mt-4 text-black/70">
              Share your event date, venue(s), and a rough timeline — we&apos;ll map out
              pickup times and confirm the schedule with you before the day arrives. For
              multi-stop or multi-vehicle needs, this often pairs with our{" "}
              <a href="/hourly-as-directed" className="text-gold hover:underline">
                hourly / as-directed service
              </a>{" "}
              so the vehicle stays with your event start to finish.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Event transportation FAQs
          </h2>
          <FAQAccordion items={FAQS} className="mt-8" />
        </div>
      </section>

      <section className="bg-black text-ivory">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Reserve transportation for your event
          </h2>
          <p className="mt-4 text-ivory/70">
            Tell us your date and venue and we&apos;ll build your schedule.
          </p>
          <CallToAction className="mt-8" align="center" />
        </div>
      </section>
    </>
  );
}

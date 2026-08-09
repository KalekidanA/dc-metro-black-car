import type { Metadata } from "next";
import Link from "next/link";
import { tenant } from "@/config/tenant";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { CallToAction } from "@/components/CallToAction";

const PATH = "/service-area";

export const metadata: Metadata = buildMetadata({
  title: "Service Area — Black Car Service Across Washington, DC & Northern Virginia",
  description:
    "Capitol Black Car Service covers all of Washington, DC plus Northern Virginia — Georgetown, Capitol Hill, Arlington, Alexandria, Tysons, McLean, and more. Licensed for DC and Virginia only.",
  path: PATH,
});

const DC_AREAS = [
  {
    name: "Georgetown",
    detail:
      "Narrow, cobblestone streets and limited parking make Georgetown one of the toughest DC neighborhoods to navigate — and one where a driver who knows the back routes around M Street and Wisconsin Avenue traffic saves real time. Common for embassy events, dinner reservations, and Georgetown University visits.",
  },
  {
    name: "Capitol Hill",
    detail:
      "Home to the Capitol complex, House and Senate office buildings, and the Supreme Court. We regularly handle transportation for hearing schedules, staff travel, and visiting officials who need predictable timing around Hill security and street closures.",
  },
  {
    name: "Downtown / Penn Quarter",
    detail:
      "DC's business and convention core — hotels, the Walter E. Washington Convention Center, and major law and lobbying firms. High-frequency pickup zone for corporate and conference travel.",
  },
  {
    name: "Dupont Circle",
    detail:
      "A dense residential and embassy district with excellent restaurant and hotel density — popular for both business and social bookings.",
  },
  {
    name: "Foggy Bottom",
    detail:
      "Home to George Washington University, the State Department, and the World Bank/IMF complex — frequent pickups tied to conferences and institutional travel.",
  },
  {
    name: "The Wharf",
    detail:
      "DC's redeveloped waterfront district along the Southwest Washington Channel — restaurants, concert venues, and event spaces make this a common evening and event pickup point.",
  },
  {
    name: "Navy Yard",
    detail:
      "Nationals Park and the surrounding riverfront district draw heavy game-day and event traffic; we plan routes around stadium closures on game nights.",
  },
  {
    name: "Logan Circle",
    detail:
      "A walkable residential neighborhood with a strong restaurant scene, close to both Downtown and the U Street corridor.",
  },
  {
    name: "Adams Morgan",
    detail:
      "One of DC's dining and nightlife hubs — narrow streets and weekend congestion make prearranged pickup a smoother option than a street hail.",
  },
  {
    name: "Cleveland Park",
    detail:
      "A quieter, residential Upper Northwest neighborhood near the National Zoo — common for airport transfers to and from family homes.",
  },
  {
    name: "NoMa",
    detail:
      "The fast-growing district north of Union Station, close to Amtrak and MARC/VRE rail connections — frequently paired with train-to-car transfers.",
  },
  {
    name: "U Street Corridor",
    detail:
      "A historic entertainment district with music venues and restaurants — a frequent evening and event pickup zone.",
  },
];

const EXTENDED_AREAS = [
  {
    name: "Arlington, VA",
    detail:
      "Crystal City, Rosslyn, and the Pentagon complex sit just across the river — a short ride from DCA and a common destination for government and corporate travel.",
  },
  {
    name: "Alexandria, VA",
    detail:
      "Old Town Alexandria's historic district and waterfront draw both business and leisure bookings, with easy access via the GW Parkway.",
  },
  {
    name: "Tysons, VA",
    detail:
      "A major corporate hub in Fairfax County — close to Dulles and home to numerous headquarters offices requiring reliable executive transportation.",
  },
  {
    name: "McLean, VA",
    detail:
      "An affluent Northern Virginia community with easy access to both Dulles and Downtown DC.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: tenant.site.domain },
          { name: "Service Area", url: `${tenant.site.domain}${PATH}` },
        ])}
      />
      <Breadcrumbs items={[{ name: "Service Area", href: PATH }]} />

      <PageHero
        eyebrow="Where We Drive"
        title="Serving All of Washington, DC &amp; Northern Virginia"
        description={tenant.serviceArea.summary}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Washington, DC neighborhoods
          </h2>
          <p className="mt-4 max-w-2xl text-black/70">
            We drive every part of the District daily. Below are the neighborhoods we
            serve most often, with the local detail that actually affects pickup
            timing and routing.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DC_AREAS.map((area) => (
              <div key={area.name} className="rounded-sm border border-black/10 bg-ivory p-6">
                <h3 className="font-display text-lg font-semibold">{area.name}</h3>
                <p className="mt-2 text-sm text-black/65">{area.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Northern Virginia
          </h2>
          <p className="mt-4 max-w-2xl text-ivory/70">
            Our service extends beyond the District into Northern Virginia, where many
            clients live and work. We&apos;re licensed to operate in DC and Virginia
            only — Maryland pickups and drop-offs are not currently available.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXTENDED_AREAS.map((area) => (
              <div key={area.name} className="rounded-sm border border-white/10 bg-black/30 p-6">
                <h3 className="font-semibold text-gold">{area.name}</h3>
                <p className="mt-2 text-sm text-ivory/75">{area.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Airport coverage
          </h2>
          <p className="mt-4 text-black/70">
            Both DC-area airports are covered as part of our standard service area —
            see our{" "}
            <Link href="/airport-transfers" className="text-gold hover:underline">
              airport transfers page
            </Link>{" "}
            for airport-specific drive times and pickup details.
          </p>
          <ul className="mt-4 space-y-1 text-sm text-black/70">
            {tenant.serviceArea.airports.map((a) => (
              <li key={a.code}>
                <strong>{a.code}</strong> — {a.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-black text-ivory">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Don&apos;t see your area listed?
          </h2>
          <p className="mt-4 text-ivory/70">
            Call to confirm coverage — we frequently accommodate pickups just outside
            our primary zones.
          </p>
          <CallToAction className="mt-8" align="center" />
        </div>
      </section>
    </>
  );
}

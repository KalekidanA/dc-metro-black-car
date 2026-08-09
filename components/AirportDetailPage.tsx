import { tenant } from "@/config/tenant";
import { JsonLd, serviceSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { TrustBadges } from "@/components/TrustBadges";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CallToAction } from "@/components/CallToAction";

export type AirportDetailData = {
  code: string;
  name: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  intro: string[];
  terminalNotes: { title: string; body: string }[];
  driveTimes: { destination: string; time: string }[];
  faqs: FAQItem[];
};

export function AirportDetailPage({ data }: { data: AirportDetailData }) {
  const path = `/airport-transfers/${data.slug}`;

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${data.code} Airport Black Car Transfer`,
          description: data.metaDescription,
          url: `${tenant.site.domain}${path}`,
        })}
      />
      <JsonLd data={faqSchema(data.faqs)} />
      <Breadcrumbs
        items={[
          { name: "Airport Transfers", href: "/airport-transfers" },
          { name: data.code, href: path },
        ]}
      />

      <PageHero
        eyebrow={`${data.code} · ${data.name}`}
        title={`${data.code} Black Car Service — ${data.name}`}
        description={data.heroDescription}
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          {data.intro.map((p, i) => (
            <p key={i} className="mt-4 text-black/70 first:mt-0">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Terminal &amp; pickup notes
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {data.terminalNotes.map((note) => (
              <div key={note.title} className="rounded-sm border border-white/10 bg-black/30 p-6">
                <h3 className="font-semibold text-gold">{note.title}</h3>
                <p className="mt-2 text-sm text-ivory/75">{note.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Typical drive times from {data.code}
              </h2>
              <p className="mt-4 text-black/70">
                Estimates below assume normal traffic conditions. Your driver monitors
                live traffic and adjusts routing to keep you on schedule.
              </p>
              <table className="mt-6 w-full text-sm">
                <tbody>
                  {data.driveTimes.map((d) => (
                    <tr key={d.destination} className="border-b border-black/10">
                      <td className="py-3 pr-4 font-medium text-black">{d.destination}</td>
                      <td className="py-3 text-right text-black/60">{d.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ImagePlaceholder label={`Black sedan at ${data.code} arrivals curb`} />
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {data.code} transfer FAQs
          </h2>
          <FAQAccordion items={data.faqs} className="mt-8" />
        </div>
      </section>

      <section className="bg-black text-ivory">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Book your {data.code} transfer
          </h2>
          <p className="mt-4 text-ivory/70">
            Reserve now for guaranteed availability, or call for same-day pickups.
          </p>
          <CallToAction className="mt-8" align="center" />
        </div>
      </section>
    </>
  );
}

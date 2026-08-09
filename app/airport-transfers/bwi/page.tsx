import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { AirportDetailPage, type AirportDetailData } from "@/components/AirportDetailPage";

const PATH = "/airport-transfers/bwi";

const data: AirportDetailData = {
  code: "BWI",
  name: "Baltimore/Washington International Thurgood Marshall Airport",
  slug: "bwi",
  metaTitle: "BWI Airport Black Car Service — Baltimore/Washington Transfers | DC",
  metaDescription:
    "Black car service to and from BWI Marshall Airport. Comfortable, flight-tracked transfers between BWI and Washington, DC for business and leisure travelers.",
  heroDescription:
    "BWI often has better fares and more nonstop options than DCA or Dulles — the tradeoff is distance from DC. A prearranged black car turns that tradeoff into a non-issue.",
  intro: [
    "BWI sits roughly halfway between Washington and Baltimore, about 30 miles north of Downtown DC via the BW Parkway or I-95. Travelers frequently choose BWI for its flight selection and pricing, then need a comfortable, predictable way to close the gap to DC — that's the trip we run most often to and from this airport.",
    "Because BWI draws from both the Baltimore and DC markets, ground transportation options at the curb can be crowded and confusing for first-time visitors. A driver with your name on a sign, tracking your flight, removes the guesswork.",
  ],
  terminalNotes: [
    {
      title: "Single terminal, multiple piers",
      body: "BWI operates as one terminal with connected piers (A through E). We confirm your specific arrival pier once your flight lands and meet you at the nearest ground transportation curb or inside baggage claim.",
    },
    {
      title: "Peak travel periods",
      body: "BWI sees heavy leisure travel volume around holidays and weekends. We build extra time into pickups during these windows to account for terminal congestion and I-95 traffic.",
    },
  ],
  driveTimes: [
    { destination: "Downtown / Penn Quarter", time: "~45–60 min" },
    { destination: "Capitol Hill", time: "~45–55 min" },
    { destination: "Silver Spring, MD", time: "~35–45 min" },
    { destination: "Bethesda, MD", time: "~40–50 min" },
    { destination: "Georgetown", time: "~50–65 min" },
    { destination: "Arlington, VA", time: "~50–65 min" },
  ],
  faqs: [
    {
      question: "Is BWI or DCA closer to Washington, DC?",
      answer:
        "DCA is closer — BWI is roughly 30 miles from Downtown DC versus DCA's 4–5 miles. Many travelers still choose BWI for better fares or nonstop routes and use a prearranged car service to cover the extra distance comfortably.",
    },
    {
      question: "How long is the drive from BWI to DC?",
      answer:
        "Typically 45–60 minutes via I-95 and the BW Parkway, depending on traffic and time of day. We monitor conditions on both routes and choose whichever is faster at the time of your pickup.",
    },
    {
      question: "Do you serve BWI for both DC and Baltimore-area trips?",
      answer:
        "Our primary service area is Washington, DC and the immediate DC-metro suburbs. Ask when booking if your pickup or drop-off falls outside that range.",
    },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: PATH,
});

export default function Page() {
  return <AirportDetailPage data={data} />;
}

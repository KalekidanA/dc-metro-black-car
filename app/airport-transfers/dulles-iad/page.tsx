import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { AirportDetailPage, type AirportDetailData } from "@/components/AirportDetailPage";

const PATH = "/airport-transfers/dulles-iad";

const data: AirportDetailData = {
  code: "IAD",
  name: "Washington Dulles International Airport",
  slug: "dulles-iad",
  metaTitle: "Dulles Airport Black Car Service — IAD Transfers | Washington, DC",
  metaDescription:
    "Black car service to and from Dulles International Airport (IAD). Reliable transfers for international arrivals, early departures, and long-haul flights to and from Washington, DC.",
  heroDescription:
    "Dulles handles most of the region's international and long-haul flights — and sits far enough from the city that a dependable, prearranged pickup matters more here than anywhere else in the DC market.",
  intro: [
    "IAD is roughly 25 miles west of Downtown DC, out past the Dulles Toll Road, which makes it the longest and most traffic-sensitive of the three area airports. For international arrivals in particular, customs and baggage claim timing is unpredictable — your flight is tracked from wheels-down, not from a fixed clock time, so a long customs line never turns into a missed pickup.",
    "We also handle a steady volume of early-morning Dulles departures for business travelers catching 6 a.m. transatlantic flights, which means being ready well before dawn and knowing which departure curb to use for each terminal.",
  ],
  terminalNotes: [
    {
      title: "Main Terminal & Concourses",
      body: "Dulles uses an AeroTrain / shuttle system between the main terminal and concourses. For international arrivals, we meet you after customs and baggage claim at the designated ground transportation curb.",
    },
    {
      title: "Early departures",
      body: "For flights before 7 a.m., we build in extra buffer for Dulles Toll Road conditions and TSA PreCheck vs. standard security lines — tell us your TSA status when booking so we can time pickup precisely.",
    },
  ],
  driveTimes: [
    { destination: "Downtown / Penn Quarter", time: "~45–60 min" },
    { destination: "Georgetown", time: "~40–55 min" },
    { destination: "Tysons, VA", time: "~20–25 min" },
    { destination: "McLean, VA", time: "~20–30 min" },
    { destination: "Capitol Hill", time: "~50–65 min" },
    { destination: "Arlington, VA", time: "~35–45 min" },
  ],
  faqs: [
    {
      question: "How long does it take to get from Dulles to DC?",
      answer:
        "Plan on 45–60 minutes from Dulles (IAD) to Downtown DC under normal traffic, longer during weekday rush hour on the Dulles Toll Road and I-66. We factor current traffic into your pickup timing.",
    },
    {
      question: "Do you track international flight customs time?",
      answer:
        "Yes. For international arrivals, we track your flight's landing time and build in typical customs and immigration processing time rather than expecting you curbside the moment you land.",
    },
    {
      question: "Do you offer early-morning Dulles departure pickups?",
      answer:
        "Yes, early-morning departures — including pre-dawn pickups for international flights — are one of our most common Dulles bookings. Reserve in advance to guarantee a driver.",
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

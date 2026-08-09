import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { AirportDetailPage, type AirportDetailData } from "@/components/AirportDetailPage";

const PATH = "/airport-transfers/reagan-dca";

const data: AirportDetailData = {
  code: "DCA",
  name: "Ronald Reagan Washington National Airport",
  slug: "reagan-dca",
  metaTitle: "DCA Black Car Service — Reagan National Airport Transfers | Washington, DC",
  metaDescription:
    "Black car service to and from Reagan National Airport (DCA). Flight-tracked, meet-and-greet pickups to Georgetown, Capitol Hill, Downtown DC, and beyond.",
  heroDescription:
    "Reagan National is the closest airport to Downtown DC, which makes it the most time-sensitive one to get right — a black car waiting curbside beats circling for a rideshare pickup every time.",
  intro: [
    "DCA sits just across the Potomac from the District, which means drive times into the city are short — but the airport's compact terminals and tightly controlled curbside pickup zones can make ground transportation confusing if you don't know the layout. We do this run daily.",
    "Whether you're headed to a Capitol Hill hearing straight off the jet bridge or arriving for a Georgetown dinner reservation, your reservation includes flight tracking, so a delayed inbound flight doesn't cost you your pickup slot.",
  ],
  terminalNotes: [
    {
      title: "Terminal 1 & Terminal 2",
      body: "DCA consolidated to two terminals. Your driver confirms your exact terminal and gate area by text once your flight is in the air, and meets you at the designated commercial curb or inside baggage claim for meet-and-greet service.",
    },
    {
      title: "Departures",
      body: "For outbound trips, we recommend a pickup 2 hours before domestic departure to comfortably clear TSA — DCA security lines can back up during Monday morning and Thursday evening congressional travel peaks.",
    },
  ],
  driveTimes: [
    { destination: "Capitol Hill", time: "~10–15 min" },
    { destination: "Downtown / Penn Quarter", time: "~15–20 min" },
    { destination: "Georgetown", time: "~20–25 min" },
    { destination: "Dupont Circle", time: "~15–20 min" },
    { destination: "The Wharf / Navy Yard", time: "~10–15 min" },
    { destination: "Arlington, VA", time: "~10–15 min" },
  ],
  faqs: [
    {
      question: "How far is DCA from Downtown DC?",
      answer:
        "Reagan National is about 4–5 miles from Downtown DC, typically a 15–20 minute drive depending on time of day and Potomac-crossing traffic.",
    },
    {
      question: "Can you pick me up curbside at DCA?",
      answer:
        "Yes. For most reservations we meet you at the designated curbside pickup zone with a name sign; for meet-and-greet service inside baggage claim, let us know when booking.",
    },
    {
      question: "Do you serve congressional and government travel to DCA?",
      answer:
        "Yes, we regularly handle transfers for Hill staff, government contractors, and visiting officials who need predictable, professional transportation on tight hearing or vote schedules.",
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

/**
 * ============================================================================
 * TENANT CONFIG — the single source of truth for whichever operator is
 * currently "renting" this site.
 * ============================================================================
 *
 * WHY THIS FILE EXISTS
 * This is a rank-and-rent website: the domain, content, and SEO equity are a
 * long-term asset owned independently of whoever is currently fulfilling
 * rides. Every page in this project imports business identity (name, phone,
 * email, bio, service area, etc.) from THIS FILE ONLY — never hardcoded in a
 * page or component. That means swapping the site from one black car
 * operator to another is a one-file edit and a redeploy, not a content
 * rewrite.
 *
 * HOW TO SWAP TENANTS
 * 1. Edit the values below (name, phone, email, bio, credentials, etc).
 * 2. Replace image placeholders in /public/images (see comments at each
 *    field for the expected filenames).
 * 3. Update `reviews` with the new tenant's real testimonials, or leave the
 *    clearly-marked placeholders until real reviews are collected.
 * 4. Commit and redeploy (`vercel --prod` or push to your connected repo).
 * 5. Nothing else needs to change — every page, the JSON-LD structured data,
 *    metadata, and the sticky call button all read from this object.
 *
 * CALL TRACKING (e.g. CallRail)
 * `phone.number` and `phone.display` are the values rendered everywhere.
 * When you're ready to add call tracking, replace these two values with the
 * tracking number CallRail (or similar) issues you — the rest of the site
 * (tel: links, JSON-LD, sticky button) updates automatically because it all
 * flows through `tenant.phone`. If your provider needs a JS swap snippet
 * instead of a static number, that snippet can be dropped into
 * `app/layout.tsx` where the GA4 placeholder script lives, without touching
 * any page content.
 *
 * BOOKING METHOD
 * `booking.onlineBookingUrl` is left `null` for now. When an online booking
 * tool is added later, set it to that URL and any component that checks for
 * it (see components/BookNowButton.tsx) will automatically show a "Book
 * Online" option alongside call/contact-form.
 * ============================================================================
 */

export type Review = {
  /** Mark real reviews as isPlaceholder: false once collected. */
  isPlaceholder: boolean;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  source?: string;
};

export type Tenant = {
  /** Legal / DBA business name shown in headers, footer, and schema. */
  businessName: string;
  /** Short name used in tight spaces (mobile nav, sticky button). */
  shortName: string;
  tagline: string;

  phone: {
    /** E.164 format, used for tel: links and JSON-LD. Swap for a CallRail number later. */
    number: string;
    /** Human-formatted display version. */
    display: string;
  };

  email: string;

  address: {
    /** Car services are mobile-only; no public storefront. Used for schema "areaServed" + NAP consistency with Google Business Profile. */
    city: string;
    state: string;
    /** Keep in sync with the Google Business Profile service-area setting. */
    postalCode: string;
    country: string;
  };

  serviceArea: {
    summary: string;
    airports: { code: string; name: string; slug: string }[];
    primaryRegion: string;
    neighborhoods: string[];
    extendedRegion: string[];
  };

  operator: {
    bio: string;
    yearsExperience: number;
    /** One entry per licensing jurisdiction the operator is authorized in. */
    licenses: { jurisdiction: string; licenseType: string; numberPlaceholder: string }[];
    insuranceStatement: string;
    credentials: string[];
  };

  booking: {
    phoneCallLabel: string;
    contactFormLabel: string;
    /** Set to a URL once an online booking tool is live; null = show phone + form only. */
    onlineBookingUrl: string | null;
    leadEmailTo: string;
    /**
     * GitHub Pages hosts this site as static files with no server, so the
     * contact form can't POST to an API route. Set this to a Formspree
     * endpoint (https://formspree.io/f/xxxxxxxx) once you've created a
     * free Formspree form pointed at leadEmailTo, and submissions will
     * post there directly. Until then (null), the form falls back to
     * opening a prefilled mailto: link — no signup required, but less
     * seamless than a real form POST.
     */
    leadFormEndpoint: string | null;
  };

  fleet: {
    vehicleTypes: {
      name: string;
      capacity: number;
      hourlyRate: number;
      description: string;
      imagePlaceholder: string;
    }[];
  };

  reviews: Review[];

  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    googleBusinessProfileUrl?: string;
  };

  legal: {
    dfhvStatement: string;
    disclaimer: string;
  };

  site: {
    domain: string;
    /** Used for JSON-LD priceRange; kept in sync with fleet.vehicleTypes hourly rates. */
    priceRange: string;
    /** GA4 Measurement ID placeholder — drop in your own, e.g. "G-XXXXXXXXXX". Leave null to disable. */
    gaMeasurementId: string | null;
  };
};

export const tenant: Tenant = {
  businessName: "Capitol Black Car Service",
  shortName: "Capitol Black Car",
  tagline: "Reliable Black Car Service in Washington, DC",

  phone: {
    number: "+12025550142",
    display: "(202) 555-0142",
  },

  email: "bookings@capitolblackcar.com",

  address: {
    city: "Washington",
    state: "DC",
    postalCode: "20001",
    country: "US",
  },

  serviceArea: {
    summary:
      "Prearranged black car service throughout Washington, DC and Northern Virginia, with same-day airport transfers to Reagan National (DCA) and Dulles (IAD). Licensed for DC and Virginia only — Maryland service is not currently offered.",
    airports: [
      { code: "DCA", name: "Ronald Reagan Washington National Airport", slug: "reagan-dca" },
      { code: "IAD", name: "Washington Dulles International Airport", slug: "dulles-iad" },
    ],
    primaryRegion: "Washington, DC",
    neighborhoods: [
      "Georgetown",
      "Capitol Hill",
      "Downtown / Penn Quarter",
      "Dupont Circle",
      "Foggy Bottom",
      "The Wharf",
      "Navy Yard",
      "Logan Circle",
      "Adams Morgan",
      "Cleveland Park",
      "NoMa",
      "U Street Corridor",
    ],
    extendedRegion: ["Arlington, VA", "Alexandria, VA", "Tysons, VA", "McLean, VA"],
  },

  operator: {
    bio:
      "I've driven professionally in the Washington, DC and Northern Virginia market for over six years, including as a top-rated Uber Black driver, and I built Capitol Black Car Service to give clients the reliability of a prearranged, professional car service without the unpredictability of app-dispatched rides. I know DC and Northern Virginia traffic patterns, embassy and government building access procedures, and the fastest routes to Reagan National and Dulles at any hour.",
    yearsExperience: 6,
    licenses: [
      {
        jurisdiction: "Washington, DC",
        licenseType: "DFHV-licensed Black Car / Luxury Sedan Operator",
        numberPlaceholder: "[DC DFHV LICENSE # — add before launch]",
      },
      {
        jurisdiction: "Virginia",
        licenseType: "Virginia-licensed for-hire vehicle operator",
        numberPlaceholder: "[VA LICENSE # — add before launch]",
      },
    ],
    insuranceStatement:
      "Fully licensed and commercially insured in accordance with DC Department of For-Hire Vehicles (DFHV) and Virginia for-hire vehicle requirements for prearranged luxury sedan service.",
    credentials: [
      "Licensed in DC & Virginia",
      "Commercially insured vehicle",
      "Background-checked driver",
      "Defensive driving trained",
      "6+ years professional driving experience in the DC metro area",
    ],
  },

  booking: {
    phoneCallLabel: "Call to Book",
    contactFormLabel: "Request a Reservation",
    onlineBookingUrl: null,
    leadEmailTo: "bookings@capitolblackcar.com",
    leadFormEndpoint: null,
  },

  fleet: {
    vehicleTypes: [
      {
        name: "Black Car",
        capacity: 4,
        hourlyRate: 80,
        description:
          "Black, late-model executive sedan seating up to 4 passengers — the standard for airport runs and business travel.",
        imagePlaceholder: "/images/fleet/executive-sedan-placeholder.jpg",
      },
      {
        name: "Black SUV",
        capacity: 6,
        hourlyRate: 110,
        description:
          "Black SUV seating up to 6 passengers with extra luggage capacity — built for group airport transfers, hourly charters, and events.",
        imagePlaceholder: "/images/fleet/luxury-suv-placeholder.jpg",
      },
    ],
  },

  reviews: [
    {
      isPlaceholder: true,
      author: "Placeholder — Client Name",
      rating: 5,
      text: "PLACEHOLDER TESTIMONIAL — replace with a real client review before launch. Example tone: \"Driver was waiting curbside at Dulles, tracked my flight delay, and had cold water ready. Smoothest airport pickup I've had in DC.\"",
      source: "Google (placeholder)",
    },
    {
      isPlaceholder: true,
      author: "Placeholder — Client Name",
      rating: 5,
      text: "PLACEHOLDER TESTIMONIAL — replace with a real client review before launch. Example tone: \"Use this service for every client visit now — always on time, always professional, car is spotless.\"",
      source: "Google (placeholder)",
    },
    {
      isPlaceholder: true,
      author: "Placeholder — Client Name",
      rating: 5,
      text: "PLACEHOLDER TESTIMONIAL — replace with a real client review before launch. Example tone: \"Booked for a wedding party shuttle and communication leading up to the day was excellent.\"",
      source: "Google (placeholder)",
    },
  ],

  social: {
    googleBusinessProfileUrl: undefined,
  },

  legal: {
    dfhvStatement:
      "Capitol Black Car Service operates as a prearranged, licensed black car / limousine-style service — regulated by the DC Department of For-Hire Vehicles (DFHV) for DC-based trips, and separately licensed to operate in Virginia. This is not a taxi or street-hail service and does not use app-based on-demand dispatch — all rides are scheduled in advance by phone or online request. Service is currently limited to DC and Virginia; Maryland is not served.",
    disclaimer:
      "License numbers and insurance certificate details will be added prior to public launch. Hourly rates are billed from pickup to drop-off with a minimum booking period confirmed at the time of reservation.",
  },

  site: {
    // GitHub Pages project site — update if a custom domain is attached later.
    domain: "https://kalekidana.github.io/dc-metro-black-car",
    priceRange: "$80-$110/hr",
    gaMeasurementId: null,
  },
};

export default tenant;

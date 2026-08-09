import Link from "next/link";
import { tenant } from "@/config/tenant";
import { PhoneLink } from "./PhoneLink";

const SERVICE_LINKS = [
  { href: "/airport-transfers", label: "Airport Transfers" },
  { href: "/corporate-executive-travel", label: "Corporate & Executive Travel" },
  { href: "/hourly-as-directed", label: "Hourly / As-Directed" },
  { href: "/event-transportation", label: "Event Transportation" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/service-area", label: "Service Area" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact / Book Now" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <span className="font-display text-xl font-semibold">{tenant.businessName}</span>
          <p className="mt-3 text-sm text-ivory/70">{tenant.serviceArea.summary}</p>
          <p className="mt-4 text-sm">
            <PhoneLink className="font-semibold text-gold hover:text-gold-light" />
          </p>
          <p className="mt-1 text-sm text-ivory/70">
            <a href={`mailto:${tenant.email}`} className="hover:text-gold">
              {tenant.email}
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-ivory/70">
            {SERVICE_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-ivory/70">
            {COMPANY_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
            Licensed &amp; Insured
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ivory/70">
            {tenant.operator.credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {tenant.businessName}. All rights reserved.
          </p>
          <p>{tenant.legal.dfhvStatement}</p>
        </div>
      </div>
    </footer>
  );
}

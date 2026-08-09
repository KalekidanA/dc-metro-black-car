import Link from "next/link";
import { tenant } from "@/config/tenant";
import { PhoneLink } from "./PhoneLink";

const NAV_LINKS = [
  { href: "/airport-transfers", label: "Airport Transfers" },
  { href: "/corporate-executive-travel", label: "Corporate Travel" },
  { href: "/hourly-as-directed", label: "Hourly Service" },
  { href: "/event-transportation", label: "Events" },
  { href: "/service-area", label: "Service Area" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-black text-ivory">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-col leading-tight shrink-0">
          <span className="font-display text-lg font-semibold tracking-wide sm:text-xl">
            {tenant.businessName}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold">
            Washington, DC
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ivory/80 transition hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <PhoneLink className="hidden sm:inline-flex items-center gap-2 rounded-sm border border-gold px-4 py-2 text-sm font-semibold text-gold transition hover:bg-gold hover:text-black">
            {tenant.phone.display}
          </PhoneLink>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm bg-gold px-4 py-2 text-sm font-semibold text-black transition hover:bg-gold-light"
          >
            Book Now
          </Link>
        </div>
      </div>
      <MobileNav />
    </header>
  );
}

function MobileNav() {
  return (
    <div className="lg:hidden border-t border-white/10 bg-black">
      <nav
        className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-4 py-2 text-xs uppercase tracking-wide text-ivory/70 sm:px-6"
        aria-label="Primary"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 transition hover:text-gold"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

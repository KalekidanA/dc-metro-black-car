import Link from "next/link";
import { tenant } from "@/config/tenant";
import { PhoneLink } from "./PhoneLink";

/** Primary dual CTA — call now / request reservation — used across pages. */
export function CallToAction({
  className = "",
  align = "left",
}: {
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-3 ${
        align === "center" ? "items-center justify-center" : "items-start"
      } ${className}`}
    >
      <PhoneLink className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-gold-light w-full sm:w-auto">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <path
            d="M3 5a2 2 0 0 1 2-2h2.28a1 1 0 0 1 .97.76l.86 3.45a1 1 0 0 1-.5 1.11L6.9 9.5a12.05 12.05 0 0 0 5.6 5.6l1.18-1.71a1 1 0 0 1 1.11-.5l3.45.86a1 1 0 0 1 .76.97V17a2 2 0 0 1-2 2h-1C10.16 19 3 11.84 3 3.99V5Z"
            fill="currentColor"
          />
        </svg>
        {tenant.booking.phoneCallLabel}: {tenant.phone.display}
      </PhoneLink>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center gap-2 rounded-sm border border-ivory/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ivory transition hover:border-gold hover:text-gold w-full sm:w-auto"
      >
        {tenant.booking.contactFormLabel}
      </Link>
    </div>
  );
}

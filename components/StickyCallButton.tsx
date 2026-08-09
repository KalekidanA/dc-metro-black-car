import { tenant } from "@/config/tenant";
import { PhoneLink } from "./PhoneLink";

/** Sticky click-to-call bar, visible on mobile viewports only, on every page. */
export function StickyCallButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/40 bg-black/95 backdrop-blur px-4 py-3 sm:hidden">
      <PhoneLink className="flex w-full items-center justify-center gap-2 rounded-sm bg-gold py-3 text-sm font-semibold uppercase tracking-wide text-black">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <path
            d="M3 5a2 2 0 0 1 2-2h2.28a1 1 0 0 1 .97.76l.86 3.45a1 1 0 0 1-.5 1.11L6.9 9.5a12.05 12.05 0 0 0 5.6 5.6l1.18-1.71a1 1 0 0 1 1.11-.5l3.45.86a1 1 0 0 1 .76.97V17a2 2 0 0 1-2 2h-1C10.16 19 3 11.84 3 3.99V5Z"
            fill="currentColor"
          />
        </svg>
        Call Now: {tenant.phone.display}
      </PhoneLink>
    </div>
  );
}

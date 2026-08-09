import { tenant } from "@/config/tenant";

/**
 * Single choke point for every clickable phone number on the site.
 * Swapping in a CallRail (or similar) tracking number means editing
 * `tenant.phone` in config/tenant.ts — this component (and every caller)
 * updates automatically.
 */
export function PhoneLink({
  className,
  children,
  ariaLabel,
}: {
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href={`tel:${tenant.phone.number}`}
      className={className}
      aria-label={ariaLabel ?? `Call ${tenant.businessName} at ${tenant.phone.display}`}
    >
      {children ?? tenant.phone.display}
    </a>
  );
}

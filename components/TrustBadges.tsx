import { tenant } from "@/config/tenant";

const ICONS: Record<string, string> = {
  license: "M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z",
  shield: "M12 2 4 5v6c0 5 3.4 8.9 8 11 4.6-2.1 8-6 8-11V5l-8-3Z",
  check: "m5 13 4 4L19 7",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-16v6l4 2",
};

const BADGES = [
  { icon: "license", label: "DFHV-Licensed Operator" },
  { icon: "shield", label: "Commercially Insured" },
  { icon: "check", label: "Background-Checked Driver" },
  { icon: "clock", label: "On-Time, Every Time" },
];

export function TrustBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 gap-4 sm:grid-cols-4 ${className}`}>
      {BADGES.map((b) => (
        <div
          key={b.label}
          className="flex flex-col items-center gap-2 rounded-sm border border-white/10 bg-charcoal px-3 py-5 text-center"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-7 w-7 text-gold"
          >
            <path d={ICONS[b.icon]} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xs font-medium uppercase tracking-wide text-ivory/80">
            {b.label}
          </span>
        </div>
      ))}
      <p className="sr-only">{tenant.operator.insuranceStatement}</p>
    </div>
  );
}

/**
 * Visually clear stand-in for real fleet/vehicle photography. Replace the
 * parent usage with next/image once real photos are available — search the
 * codebase for ImagePlaceholder to find every spot that needs a real photo.
 */
export function ImagePlaceholder({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder image: ${label}`}
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-black/20 bg-charcoal-light/5 px-4 text-center ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        className="h-8 w-8 text-black/30"
      >
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <circle cx="8.5" cy="10" r="1.5" />
        <path d="m3 16 5-4 4 3 4-5 5 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[11px] font-medium uppercase tracking-wide text-black/40">
        Photo placeholder — {label}
      </span>
    </div>
  );
}

import { tenant } from "@/config/tenant";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-gold" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid gap-6 sm:grid-cols-3">
        {tenant.reviews.map((review, i) => (
          <figure
            key={i}
            className="flex flex-col gap-3 rounded-sm border border-black/10 bg-white p-6 shadow-sm"
          >
            <Stars rating={review.rating} />
            <blockquote className="text-sm leading-relaxed text-black/80">
              &ldquo;{review.text}&rdquo;
            </blockquote>
            <figcaption className="mt-auto text-xs font-semibold uppercase tracking-wide text-black/50">
              {review.author}
              {review.source ? ` · ${review.source}` : ""}
              {review.isPlaceholder && (
                <span className="ml-2 rounded-sm bg-gold/20 px-1.5 py-0.5 text-[10px] font-semibold text-gold-light normal-case tracking-normal text-black/60">
                  Placeholder
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

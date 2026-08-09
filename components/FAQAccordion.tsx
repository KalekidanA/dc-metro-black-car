export type FAQItem = { question: string; answer: string };

/** Pure HTML <details>/<summary> accordion — no client JS needed, fully crawlable. */
export function FAQAccordion({ items, className = "" }: { items: FAQItem[]; className?: string }) {
  return (
    <div className={`divide-y divide-black/10 ${className}`}>
      {items.map((item) => (
        <details key={item.question} className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-black marker:content-none">
            <span>{item.question}</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5 shrink-0 text-gold transition-transform group-open:rotate-45"
            >
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-black/70">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

import { CallToAction } from "./CallToAction";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-black text-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-ivory/75 sm:text-lg">{description}</p>
        <CallToAction className="mt-8" />
        {children}
      </div>
    </section>
  );
}

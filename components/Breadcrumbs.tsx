import Link from "next/link";
import { tenant } from "@/config/tenant";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  const full = [{ name: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-black/5">
      <JsonLd
        data={breadcrumbSchema(full.map((i) => ({ name: i.name, url: `${tenant.site.domain}${i.href}` })))}
      />
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 text-xs text-black/50 sm:px-6 lg:px-8">
        {full.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === full.length - 1 ? (
              <span className="text-black/80">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-gold">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

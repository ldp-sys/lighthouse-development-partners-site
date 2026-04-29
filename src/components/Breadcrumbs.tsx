import Link from "next/link";
import type { NavItem } from "@/data/site";

export function Breadcrumbs({ items }: { items: NavItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-slate">
        <li>
          <Link
            className="font-semibold text-harbor hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            href="/"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li className="flex items-center gap-2" key={item.href}>
            <span aria-hidden>/</span>
            {index === items.length - 1 ? (
              <span aria-current="page" className="text-charcoal">
                {item.label}
              </span>
            ) : (
              <Link
                className="font-semibold text-harbor hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                href={item.href}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

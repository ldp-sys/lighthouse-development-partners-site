import type { Stat } from "@/data/site";
import { cn } from "@/lib/utils";

type StatCardProps = {
  stat: Stat;
  className?: string;
};

export function StatCard({ stat, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-border bg-warm p-5 shadow-line",
        className
      )}
    >
      <div className="font-serif text-3xl font-semibold leading-none text-navy">
        {stat.value}
      </div>
      <div className="mt-2 text-sm font-semibold text-charcoal">{stat.label}</div>
      {stat.description ? (
        <p className="mt-2 text-sm leading-6 text-slate">{stat.description}</p>
      ) : null}
      {stat.isPlaceholder ? (
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
          Pending confirmation
        </p>
      ) : null}
    </div>
  );
}

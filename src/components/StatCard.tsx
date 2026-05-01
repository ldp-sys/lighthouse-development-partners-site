import type { Stat } from "@/data/site";
import { cn } from "@/lib/utils";

type StatCardProps = {
  stat: Stat;
  className?: string;
  compact?: boolean;
};

export function StatCard({ stat, className, compact = false }: StatCardProps) {
  const shouldKeepValueOnOneLine = stat.value.includes("%");

  return (
    <div
      className={cn(
        "rounded-card border border-border bg-warm shadow-line",
        compact ? "p-4" : "p-5",
        className
      )}
    >
      <div
        className={cn(
          "font-sans font-bold leading-tight text-navy",
          compact ? "text-xl" : "text-2xl",
          !compact &&
            shouldKeepValueOnOneLine &&
            "whitespace-nowrap text-[1.7rem] sm:text-3xl md:text-2xl"
        )}
      >
        {stat.value}
      </div>
      <div
        className={cn(
          "font-semibold text-charcoal",
          compact ? "mt-1 text-[13px] leading-5" : "mt-2 text-sm"
        )}
      >
        {stat.label}
      </div>
      {stat.description ? (
        <p
          className={cn(
            "text-sm text-slate",
            compact ? "mt-1 leading-5" : "mt-2 leading-6"
          )}
        >
          {stat.description}
        </p>
      ) : null}
    </div>
  );
}

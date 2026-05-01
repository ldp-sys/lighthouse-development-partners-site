import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  tone = "default",
  className
}: {
  children: ReactNode;
  tone?: "default" | "inverse";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-3 text-xs font-bold uppercase tracking-[0.16em]",
        tone === "inverse" ? "text-white" : "text-harbor",
        className
      )}
    >
      {children}
    </p>
  );
}

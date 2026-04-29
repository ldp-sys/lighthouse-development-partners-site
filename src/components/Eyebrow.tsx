import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("mb-3 text-xs font-bold uppercase tracking-[0.16em] text-harbor", className)}>
      {children}
    </p>
  );
}

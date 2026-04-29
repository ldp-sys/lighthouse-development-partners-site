import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-border bg-white/78 p-6 shadow-line backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}

import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-teal">
      {children}
    </p>
  );
}

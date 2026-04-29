import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
  external?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  href,
  variant = "primary",
  className,
  external,
  type = "button",
  ...buttonProps
}: ButtonProps) {
  const styles = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-card border px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
    variant === "primary" &&
      "border-gold bg-gold text-navy hover:border-warm hover:bg-warm",
    variant === "secondary" &&
      "border-harbor/20 bg-warm text-navy hover:border-teal hover:text-teal",
    variant === "ghost" &&
      "border-transparent bg-transparent text-harbor hover:border-border hover:bg-warm",
    variant === "light" &&
      "border-white/25 bg-white/10 text-white hover:border-white/70 hover:bg-white/20",
    className
  );

  if (href) {
    const isExternal = external || href.startsWith("http");
    if (isExternal) {
      return (
        <a className={styles} href={href} rel="noreferrer" target="_blank">
          {children}
        </a>
      );
    }

    return (
      <Link className={styles} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} type={type} {...buttonProps}>
      {children}
    </button>
  );
}

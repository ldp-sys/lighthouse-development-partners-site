import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "var(--color-navy)",
        harbor: "var(--color-harbor)",
        teal: "var(--color-teal)",
        gold: "var(--color-gold)",
        sand: "var(--color-sand)",
        warm: "var(--color-warm)",
        slate: "var(--color-slate)",
        charcoal: "var(--color-charcoal)",
        border: "var(--color-border)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)"
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"]
      },
      boxShadow: {
        soft: "0 18px 55px rgb(14 27 42 / 0.12)",
        line: "inset 0 0 0 1px rgb(216 211 199 / 0.82)"
      },
      borderRadius: {
        card: "8px"
      }
    }
  },
  plugins: []
};

export default config;

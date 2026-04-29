import type { Metadata } from "next";
import { LegalPageShell } from "@/components/LegalPageShell";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility",
  description: site.legalPages.accessibility.description,
  path: "/accessibility"
});

export default function AccessibilityPage() {
  return <LegalPageShell page={site.legalPages.accessibility} />;
}

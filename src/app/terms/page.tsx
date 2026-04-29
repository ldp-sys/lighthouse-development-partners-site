import type { Metadata } from "next";
import { LegalPageShell } from "@/components/LegalPageShell";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: site.legalPages.terms.description,
  path: "/terms"
});

export default function TermsPage() {
  return <LegalPageShell page={site.legalPages.terms} />;
}

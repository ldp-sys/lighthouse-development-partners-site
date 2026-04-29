import type { Metadata } from "next";
import { LegalPageShell } from "@/components/LegalPageShell";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: site.legalPages.privacy.description,
  path: "/privacy"
});

export default function PrivacyPage() {
  return <LegalPageShell page={site.legalPages.privacy} />;
}

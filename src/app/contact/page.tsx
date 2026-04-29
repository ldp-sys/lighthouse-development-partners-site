import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Eyebrow } from "@/components/Eyebrow";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: site.contactPage.hero.description,
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <Hero
        description={site.contactPage.hero.description}
        eyebrow={site.contactPage.hero.eyebrow}
        title={site.contactPage.hero.title}
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="rounded-card border border-border bg-white p-6 shadow-line">
            <Eyebrow>Headquarters</Eyebrow>
            <h2 className="font-serif text-3xl font-semibold text-navy">
              {site.company.name}
            </h2>
            <address className="mt-4 not-italic text-base leading-8 text-slate">
              {site.company.address.street}
              <br />
              {site.company.address.city}, {site.company.address.region}{" "}
              {site.company.address.postalCode}
            </address>
            <p className="mt-5 text-sm leading-7 text-slate">
              Email:{" "}
              <a
                className="font-semibold text-charcoal hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                href={`mailto:${site.company.email}`}
              >
                {site.company.email}
              </a>
            </p>
          </div>
          <ContactForm inquiryTypes={site.contactPage.inquiryTypes} />
        </div>
      </Section>
    </>
  );
}

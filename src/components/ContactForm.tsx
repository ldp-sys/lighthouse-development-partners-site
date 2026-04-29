"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { site } from "@/data/site";

type ContactFormProps = {
  inquiryTypes: string[];
};

type FormState = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  inquiryType: "General",
  message: ""
};

function initialInquiryType(inquiryTypes: string[]) {
  if (typeof window === "undefined") {
    return initialState.inquiryType;
  }

  const inquiry = new URLSearchParams(window.location.search).get("inquiry");
  if (!inquiry) {
    return initialState.inquiryType;
  }

  const normalized = inquiry.toLowerCase();
  return (
    inquiryTypes.find((type) => type.toLowerCase().includes(normalized)) ||
    initialState.inquiryType
  );
}

export function ContactForm({ inquiryTypes }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(() => ({
    ...initialState,
    inquiryType: initialInquiryType(inquiryTypes)
  }));
  const [submitted, setSubmitted] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `Website inquiry - ${form.inquiryType || "General"}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Organization: ${form.organization}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "Not provided"}`,
        `Inquiry type: ${form.inquiryType}`,
        "",
        form.message
      ].join("\n")
    );

    return `mailto:${site.company.email}?subject=${subject}&body=${body}`;
  }, [form]);

  function updateField(name: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <form
      className="rounded-card border border-border bg-white p-6 shadow-line"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Name
          <input
            className="min-h-12 rounded-card border border-border bg-warm px-3 text-base font-normal text-navy outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
            name="name"
            onChange={(event) => updateField("name", event.target.value)}
            required
            value={form.name}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Organization
          <input
            className="min-h-12 rounded-card border border-border bg-warm px-3 text-base font-normal text-navy outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
            name="organization"
            onChange={(event) => updateField("organization", event.target.value)}
            required
            value={form.organization}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Email
          <input
            className="min-h-12 rounded-card border border-border bg-warm px-3 text-base font-normal text-navy outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
            name="email"
            onChange={(event) => updateField("email", event.target.value)}
            required
            type="email"
            value={form.email}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Phone optional
          <input
            className="min-h-12 rounded-card border border-border bg-warm px-3 text-base font-normal text-navy outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
            name="phone"
            onChange={(event) => updateField("phone", event.target.value)}
            type="tel"
            value={form.phone}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal sm:col-span-2">
          Inquiry type
          <select
            className="min-h-12 rounded-card border border-border bg-warm px-3 text-base font-normal text-navy outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
            name="inquiryType"
            onChange={(event) => updateField("inquiryType", event.target.value)}
            value={form.inquiryType}
          >
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal sm:col-span-2">
          Message
          <textarea
            className="min-h-36 rounded-card border border-border bg-warm px-3 py-3 text-base font-normal text-navy outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
            name="message"
            onChange={(event) => updateField("message", event.target.value)}
            required
            value={form.message}
          />
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit">Prepare Email Inquiry</Button>
        {submitted ? (
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-card border border-harbor/20 bg-warm px-5 py-2.5 text-sm font-semibold text-navy hover:border-teal hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            href={mailtoHref}
          >
            Open email draft
          </a>
        ) : null}
      </div>
      {submitted ? (
        <p className="mt-4 text-sm leading-6 text-slate">
          Your message has been prepared as an email draft. This static website
          does not store or transmit form submissions.
        </p>
      ) : null}
      {site.company.emailIsPlaceholder ? (
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
          TODO: Confirm official contact email before launch.
        </p>
      ) : null}
    </form>
  );
}

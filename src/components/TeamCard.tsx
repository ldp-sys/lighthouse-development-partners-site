"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { TeamMember } from "@/data/site";
import { assetPath } from "@/lib/utils";

export function TeamCard({ member }: { member: TeamMember }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="grid h-full overflow-hidden rounded-card border border-border bg-white shadow-line">
        <div className="relative aspect-[4/5] bg-sand">
          <Image
            alt={member.imageAlt}
            className="h-full w-full object-cover object-top"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            src={assetPath(member.image)}
          />
        </div>
        <div className="p-6">
          <div className="h-1 w-14 bg-gold" aria-hidden />
          <h2 className="mt-6 font-serif text-3xl font-semibold text-navy">
            {member.name}
          </h2>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-harbor">
            {member.role}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate">{member.summary}</p>
          <button
            className="mt-6 inline-flex items-center text-sm font-bold text-harbor hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            onClick={() => setOpen(true)}
            type="button"
          >
            Read more
          </button>
        </div>
      </article>

      {open ? (
        <div
          aria-labelledby={`${member.name.replace(/\s+/g, "-").toLowerCase()}-title`}
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/72 px-4 py-6 backdrop-blur-sm"
          role="dialog"
        >
          <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-card bg-white shadow-soft">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="relative min-h-[340px] bg-sand">
                <Image
                  alt={member.imageAlt}
                  className="h-full w-full object-cover object-top"
                  fill
                  sizes="(min-width: 1024px) 34rem, 100vw"
                  src={assetPath(member.image)}
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-harbor">
                      {member.role}
                    </p>
                    <h3
                      className="mt-2 font-serif text-4xl font-semibold leading-tight text-navy"
                      id={`${member.name.replace(/\s+/g, "-").toLowerCase()}-title`}
                    >
                      {member.name}
                    </h3>
                  </div>
                  <button
                    aria-label={`Close ${member.name} bio`}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-card border border-border text-navy hover:bg-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    onClick={() => setOpen(false)}
                    type="button"
                  >
                    <X aria-hidden className="h-5 w-5" />
                  </button>
                </div>
                <p className="mt-6 text-base leading-8 text-slate">{member.bio}</p>
                <ul className="mt-6 grid gap-3 border-t border-border pt-6">
                  {member.credentials.map((item) => (
                    <li className="text-sm leading-6 text-charcoal" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

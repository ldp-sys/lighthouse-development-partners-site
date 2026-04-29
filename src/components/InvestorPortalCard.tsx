import { ExternalLink } from "lucide-react";
import { Button } from "@/components/Button";
import { site } from "@/data/site";

export function InvestorPortalCard() {
  return (
    <div className="rounded-card border border-border bg-white p-6 shadow-line">
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Username
          <input
            className="min-h-12 cursor-not-allowed rounded-card border border-border bg-sand px-3 text-base text-slate"
            disabled
            placeholder="Portal credentials are not collected here"
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Password
          <input
            className="min-h-12 cursor-not-allowed rounded-card border border-border bg-sand px-3 text-base text-slate"
            disabled
            placeholder="Do not enter passwords on this page"
            type="password"
          />
        </label>
      </div>
      <div className="mt-6">
        <Button external href={site.company.investorPortalUrl}>
          Open Existing Portal
          <ExternalLink aria-hidden className="h-4 w-4" />
        </Button>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate">
        {site.investorPortalPage.securityNote}
      </p>
      {site.company.investorPortalUrlIsPlaceholder ? (
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
          TODO: Confirm final investor portal destination.
        </p>
      ) : null}
    </div>
  );
}

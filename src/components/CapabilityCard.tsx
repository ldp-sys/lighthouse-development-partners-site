import type { Capability } from "@/data/site";
import { Card } from "@/components/Card";
import { Icon } from "@/components/Icon";

export function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <Card className="h-full">
      <div className="flex h-11 w-11 items-center justify-center rounded-card bg-teal/10 text-teal">
        <Icon aria-hidden className="h-5 w-5" name={capability.icon} />
      </div>
      <h3 className="mt-5 font-serif text-2xl font-semibold text-navy">
        {capability.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate">{capability.description}</p>
    </Card>
  );
}

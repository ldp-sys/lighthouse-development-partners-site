import type { ProcessStep as ProcessStepType } from "@/data/site";

type ProcessStepProps = {
  step: ProcessStepType;
  index: number;
};

export function ProcessStep({ step, index }: ProcessStepProps) {
  return (
    <li className="relative rounded-card border border-border bg-white p-5 shadow-line">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-card bg-navy text-sm font-bold text-white">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="font-serif text-2xl font-semibold text-navy">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate">{step.description}</p>
        </div>
      </div>
    </li>
  );
}

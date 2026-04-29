import type { ProcessStep as ProcessStepType } from "@/data/site";
import { ProcessStep } from "@/components/ProcessStep";

export function Timeline({ steps }: { steps: ProcessStepType[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {steps.map((step, index) => (
        <ProcessStep index={index} key={step.title} step={step} />
      ))}
    </ol>
  );
}

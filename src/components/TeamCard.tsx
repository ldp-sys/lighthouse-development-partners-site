import type { TeamMember } from "@/data/site";
import { Card } from "@/components/Card";

export function TeamCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <Card className="h-full">
      <div className="flex h-16 w-16 items-center justify-center rounded-card bg-harbor font-serif text-2xl font-semibold text-white">
        {initials}
      </div>
      <h2 className="mt-5 font-serif text-3xl font-semibold text-navy">
        {member.name}
      </h2>
      <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-teal">
        {member.role}
      </p>
      <p className="mt-4 text-sm leading-7 text-slate">{member.bio}</p>
      {member.isPlaceholder ? (
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
          Approved bio pending
        </p>
      ) : null}
    </Card>
  );
}

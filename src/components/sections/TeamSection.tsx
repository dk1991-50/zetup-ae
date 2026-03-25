import { cn } from "@/lib/utils";
import { TEAM } from "@/lib/constants";

interface TeamSectionProps {
  className?: string;
}

export function TeamSection({ className }: TeamSectionProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-10 md:grid-cols-2", className)}>
      {TEAM.map((member) => (
        <div
          key={member.name}
          className="group rounded-2xl border border-mist bg-white p-8 transition-shadow hover:shadow-lg"
        >
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-start gap-6">
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="h-28 w-28 shrink-0 rounded-2xl object-cover shadow-sm"
            />
            <div>
              <h3 className="font-display text-xl font-bold text-fjord-900">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-sage-600 font-display">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 font-body">
                {member.bio}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

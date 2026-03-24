import { cn } from "@/lib/utils";
import { TEAM } from "@/lib/constants";

interface TeamSectionProps {
  className?: string;
}

export function TeamSection({ className }: TeamSectionProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-12 md:grid-cols-2", className)}>
      {TEAM.map((member) => (
        <div
          key={member.name}
          className="flex flex-col items-center text-center md:items-start md:text-start"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-fjord-100 text-fjord-700">
            <span className="font-display text-2xl font-bold">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <h3 className="mt-4 font-display text-xl font-bold text-fjord-900">
            {member.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-sage-600 font-display">
            {member.role}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 font-body">
            {member.bio}
          </p>
        </div>
      ))}
    </div>
  );
}

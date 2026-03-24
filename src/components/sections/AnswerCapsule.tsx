import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface AnswerCapsuleProps {
  children: ReactNode;
  className?: string;
}

export function AnswerCapsule({ children, className }: AnswerCapsuleProps) {
  return (
    <div
      className={cn(
        "border-s-[3px] border-sage-400 bg-sage-50 px-5 py-4 rounded-e-lg",
        className,
      )}
    >
      <Badge
        variant="sage"
        className="mb-2 uppercase tracking-wider text-[10px]"
      >
        Quick Answer
      </Badge>
      <div className="text-sm leading-relaxed text-slate-700 font-body">
        {children}
      </div>
    </div>
  );
}

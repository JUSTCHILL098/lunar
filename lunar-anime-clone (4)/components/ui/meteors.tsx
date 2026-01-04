"use client";

import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors = ({ number = 80, className }: MeteorsProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {Array.from({ length: number }).map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 6;
        const duration = Math.random() * 6 + 6;

        return (
          <span
            key={i}
            className="
              absolute
              h-px
              w-[120px]
              rotate-[45deg]
              animate-meteor
              bg-gradient-to-r
              from-transparent
              via-zinc-400
              to-zinc-200
            "
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
};

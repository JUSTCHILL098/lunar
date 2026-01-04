"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors = ({ number = 80, className }: MeteorsProps) => {
  const meteors = new Array(number).fill(null);

  return (
    <>
      {/* inline animation – no css file */}
      <style jsx>{`
        @keyframes meteor {
          0% {
            transform: rotate(215deg) translateX(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: rotate(215deg) translateX(-1200px);
            opacity: 0;
          }
        }
      `}</style>

      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className
        )}
      >
        {meteors.map((_, idx) => {
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const delay = Math.random() * 8;
          const duration = Math.random() * 4 + 6;

          return (
            <span
              key={idx}
              className="
                absolute
                h-[1px]
                w-[120px]
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-white/70
                to-white
              "
              style={{
                top: `${top}%`,
                left: `${left}%`,
                animation: `meteor ${duration}s linear infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>
    </>
  );
};

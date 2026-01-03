"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  angle?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  className?: string;
}

export const Meteors = ({
  number = 12,
  angle = 215,
  minDelay = 0,
  maxDelay = 2,
  minDuration = 6,
  maxDuration = 14,
  className,
}: MeteorsProps) => {
  const [meteors, setMeteors] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const styles = Array.from({ length: number }).map(() => {
      const size = Math.floor(Math.random() * 3) + 2; // 2–4px pixel snow

      return {
        "--angle": `${angle}deg`,
        left: Math.random() * window.innerWidth + "px",
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${
          Math.random() * (maxDelay - minDelay) + minDelay
        }s`,
        animationDuration: `${
          Math.random() * (maxDuration - minDuration) + minDuration
        }s`,
      } as React.CSSProperties;
    });

    setMeteors(styles);
  }, [number, angle, minDelay, maxDelay, minDuration, maxDuration]);

  return (
    <>
      {/* INLINE STYLES – NO CSS FILE */}
      <style jsx>{`
        @keyframes meteor-snow {
          from {
            transform: translate3d(0, 0, 0)
              rotate(var(--angle));
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          to {
            transform: translate3d(-140vw, 140vh, 0)
              rotate(var(--angle));
            opacity: 0.85;
          }
        }
      `}</style>

      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className
        )}
      >
        {meteors.map((style, i) => (
          <span
            key={i}
            style={style}
            className="absolute top-0 bg-white/70 shadow-[0_0_6px_rgba(255,255,255,0.25)] animate-[meteor-snow_linear_infinite]"
          >
            {/* Pixel trail (very subtle) */}
            <span className="absolute left-full top-1/2 h-px w-6 -translate-y-1/2 bg-gradient-to-r from-white/40 to-transparent" />
          </span>
        ))}
      </div>
    </>
  );
};

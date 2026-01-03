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
  number = 90,          // 🔥 MORE PARTICLES
  angle = 135,          // ↘️ LEFT-TOP → BOTTOM-RIGHT
  minDelay = 0,
  maxDelay = 2,
  minDuration = 8,
  maxDuration = 18,
  className,
}: MeteorsProps) => {
  const [meteors, setMeteors] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const styles = Array.from({ length: number }).map(() => {
      const size = Math.floor(Math.random() * 3) + 3; // ⬛ 3–5px squares

      return {
        "--angle": `${angle}deg`,
        left: Math.random() * window.innerWidth + "px",
        top: Math.random() * -window.innerHeight + "px",
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
      {/* INLINE KEYFRAMES — NO CSS FILE */}
      <style jsx>{`
        @keyframes pixel-meteor-snow {
          from {
            transform: translate3d(0, 0, 0) rotate(var(--angle));
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          to {
            transform: translate3d(160vw, 160vh, 0) rotate(var(--angle));
            opacity: 0.9;
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
            className="
              absolute
              bg-white
              opacity-80
              shadow-[0_0_0_1px_rgba(255,255,255,0.25)]
              animate-[pixel-meteor-snow_linear_infinite]
            "
          />
        ))}
      </div>
    </>
  );
};

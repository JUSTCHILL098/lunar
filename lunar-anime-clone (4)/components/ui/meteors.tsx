"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors = ({
  number = 450, // ❄️ VERY DENSE
  className,
}: MeteorsProps) => {
  const [pixels, setPixels] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const generated = Array.from({ length: number }).map(() => {
      const size = Math.floor(Math.random() * 2) + 3; // ⬛ 3–4px

      return {
        left: Math.random() * width + "px",
        top: Math.random() * height + "px",
        width: size + "px",
        height: size + "px",
        animationDelay: `${Math.random() * -20}s`,
        animationDuration: `${Math.random() * 10 + 12}s`,
      } as React.CSSProperties;
    });

    setPixels(generated);
  }, [number]);

  return (
    <>
      {/* INLINE KEYFRAMES — NO CSS FILE */}
      <style jsx>{`
        @keyframes pixel-snow {
          from {
            transform: translate3d(0, 0, 0);
            opacity: 0.6;
          }
          to {
            transform: translate3d(120px, 120vh, 0);
            opacity: 1;
          }
        }
      `}</style>

      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-20 overflow-hidden",
          className
        )}
      >
        {pixels.map((style, i) => (
          <span
            key={i}
            style={style}
            className="
              absolute
              bg-white
              opacity-70
              animate-[pixel-snow_linear_infinite]
            "
          />
        ))}
      </div>
    </>
  );
};

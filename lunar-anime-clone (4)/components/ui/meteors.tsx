"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  className?: string;
}

export const Meteors = ({ className }: MeteorsProps) => {
  const [pixels, setPixels] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SIZE = 10;       // ⬛ BIG SQUARES
    const GAP = 14;        // spacing
    const cols = Math.ceil(window.innerWidth / GAP) + 6;
    const rows = Math.ceil(window.innerHeight / GAP) + 6;

    const generated: React.CSSProperties[] = [];

    for (let y = -5; y < rows; y++) {
      for (let x = -5; x < cols; x++) {
        generated.push({
          left: `${x * GAP}px`,
          top: `${y * GAP}px`,
          width: `${SIZE}px`,
          height: `${SIZE}px`,
          animationDelay: `${Math.random() * -30}s`,
          animationDuration: `${Math.random() * 6 + 10}s`,
        });
      }
    }

    setPixels(generated);
  }, []);

  return (
    <>
      {/* INLINE KEYFRAMES — NO GLOBAL CSS */}
      <style jsx>{`
        @keyframes pixel-snow-diagonal {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(160px, 160vh, 0);
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
              opacity-80
              animate-[pixel-snow-diagonal_linear_infinite]
            "
          />
        ))}
      </div>
    </>
  );
};

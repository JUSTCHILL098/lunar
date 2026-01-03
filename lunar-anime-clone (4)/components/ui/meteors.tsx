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

    const SIZE = 4;        // 🟦 normal pixel size
    const GAP = 22;        // 🌬️ less dense, breathable
    const cols = Math.ceil(window.innerWidth / GAP) + 4;
    const rows = Math.ceil(window.innerHeight / GAP) + 4;

    const shades = [
      "rgba(255,255,255,0.35)",
      "rgba(220,220,220,0.3)",
      "rgba(200,200,200,0.25)",
      "rgba(180,180,180,0.2)",
    ];

    const generated: React.CSSProperties[] = [];

    for (let y = -4; y < rows; y++) {
      for (let x = -4; x < cols; x++) {
        generated.push({
          left: `${x * GAP}px`,
          top: `${y * GAP}px`,
          width: `${SIZE}px`,
          height: `${SIZE}px`,
          backgroundColor: shades[Math.floor(Math.random() * shades.length)],
          animationDelay: `${Math.random() * -40}s`,
          animationDuration: `${Math.random() * 20 + 30}s`, // 🐢 slow & smooth
        });
      }
    }

    setPixels(generated);
  }, []);

  return (
    <>
      {/* Inline animation – NO CSS FILE */}
      <style jsx>{`
        @keyframes pixel-snow {
          0% {
            transform: translate3d(0, 0, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translate3d(120px, 120vh, 0);
            opacity: 0.15;
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
              rounded-[1px]
              blur-[0.3px]
              animate-[pixel-snow_linear_infinite]
            "
          />
        ))}
      </div>
    </>
  );
};

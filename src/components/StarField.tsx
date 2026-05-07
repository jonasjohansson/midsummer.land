"use client";

import { useState, useEffect, useRef } from "react";

const COUNTS: Record<string, number> = { low: 60, medium: 150, high: 250 };

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  dur: number;
  type: string;
  hue: string;
  depth: number;
}

export default function StarField({ density = "medium" }: { density?: string }) {
  const [scroll, setScroll] = useState(0);
  const [stars, setStars] = useState<Star[]>([]);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const n = COUNTS[density] ?? 70;
    setStars(
      Array.from({ length: n }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 8 + Math.random() * 18,
        delay: Math.random() * 6,
        dur: 3 + Math.random() * 4,
        type: Math.random() > 0.7 ? "sparkle" : Math.random() > 0.5 ? "small" : "dot",
        hue: Math.random() > 0.5 ? "coral" : "gold",
        depth: 0.15 + Math.random() * 0.25,
      })),
    );
  }, [density]);

  useEffect(() => {
    const onScroll = () => setScroll(Math.max(0, window.scrollY));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="stars" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className={`star star-${s.type} star-${s.hue}`}
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size + "px",
            height: s.size + "px",
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
            "--py": `${-scroll * s.depth}px`,
          } as React.CSSProperties}
        >
          {s.type === "sparkle" && (
            <svg viewBox="0 0 24 24" className="star-svg">
              <defs>
                <radialGradient id={`g-${s.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={s.hue === "coral" ? "#ffd9b8" : "#ffe9b8"} stopOpacity="1"/>
                  <stop offset="40%" stopColor={s.hue === "coral" ? "#e89567" : "#d4a857"} stopOpacity="0.6"/>
                  <stop offset="100%" stopColor={s.hue === "coral" ? "#d97587" : "#d4a857"} stopOpacity="0"/>
                </radialGradient>
              </defs>
              <circle cx="12" cy="12" r="10" fill={`url(#g-${s.id})`} opacity="0.5"/>
              <path
                d="M12 0 L13.4 10.6 L24 12 L13.4 13.4 L12 24 L10.6 13.4 L0 12 L10.6 10.6 Z"
                fill={s.hue === "coral" ? "#e89567" : "#d4a857"}
              />
              <path
                d="M12 4 L12.7 11.3 L20 12 L12.7 12.7 L12 20 L11.3 12.7 L4 12 L11.3 11.3 Z"
                fill={s.hue === "coral" ? "#ffb088" : "#ffd49a"}
                opacity="0.9"
              />
            </svg>
          )}
          {s.type === "small" && (
            <svg viewBox="0 0 24 24" className="star-svg">
              <path
                d="M12 2 L13 11 L22 12 L13 13 L12 22 L11 13 L2 12 L11 11 Z"
                fill={s.hue === "coral" ? "#e89567" : "#d4a857"}
                opacity="0.85"
              />
            </svg>
          )}
        </span>
      ))}
    </div>
  );
}

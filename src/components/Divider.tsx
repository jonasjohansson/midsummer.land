"use client";

export default function Divider({ variant = "star" }: { variant?: "star" | "line" | "moon" }) {
  if (variant === "line") {
    return <div className="div-line" />;
  }
  if (variant === "moon") {
    return (
      <svg className="div-svg" viewBox="0 0 200 16" aria-hidden="true">
        <line x1="0" y1="8" x2="86" y2="8" stroke="currentColor" strokeWidth="0.6"/>
        <g transform="rotate(-20, 100, 8)">
          <circle cx="100" cy="8" r="7" fill="currentColor"/>
          <circle cx="103" cy="7" r="5" fill="#1e1d3c"/>
        </g>
        <line x1="114" y1="8" x2="200" y2="8" stroke="currentColor" strokeWidth="0.6"/>
      </svg>
    );
  }
  return (
    <svg className="div-svg" viewBox="0 0 200 16" aria-hidden="true">
      <line x1="0" y1="8" x2="86" y2="8" stroke="currentColor" strokeWidth="0.6"/>
      <path d="M100 0 L102 7 L109 8 L102 9 L100 16 L98 9 L91 8 L98 7 Z" fill="currentColor"/>
      <line x1="114" y1="8" x2="200" y2="8" stroke="currentColor" strokeWidth="0.6"/>
    </svg>
  );
}

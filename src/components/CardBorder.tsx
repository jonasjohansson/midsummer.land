"use client";

import Divider from "./Divider";

interface CardBorderProps {
  children: React.ReactNode;
  numeral?: string;
  title?: string;
  subtitle?: string;
  accent?: string;
}

export default function CardBorder({ children, numeral, title, subtitle, accent = "#d4a857" }: CardBorderProps) {
  return (
    <div className="card-border" style={{ "--accent": accent } as React.CSSProperties}>
      <svg className="card-corner tl" viewBox="0 0 60 60" aria-hidden="true">
        <path d="M2 2 L58 2 M2 2 L2 58" stroke={accent} strokeWidth="1" fill="none"/>
        <path d="M6 6 L54 6 M6 6 L6 54" stroke={accent} strokeWidth="0.5" fill="none" opacity="0.6"/>
        <circle cx="10" cy="10" r="1.5" fill={accent}/>
        <path d="M14 10 L26 10 M10 14 L10 26" stroke={accent} strokeWidth="0.5"/>
        <path d="M18 10 L20 8 L22 10 L20 12 Z" fill={accent} opacity="0.7"/>
        <path d="M10 18 L12 16 L14 18 L12 20 Z" fill={accent} opacity="0.7"/>
      </svg>
      <svg className="card-corner tr" viewBox="0 0 60 60" aria-hidden="true">
        <path d="M58 2 L2 2 M58 2 L58 58" stroke={accent} strokeWidth="1" fill="none"/>
        <path d="M54 6 L6 6 M54 6 L54 54" stroke={accent} strokeWidth="0.5" fill="none" opacity="0.6"/>
        <circle cx="50" cy="10" r="1.5" fill={accent}/>
        <path d="M46 10 L34 10 M50 14 L50 26" stroke={accent} strokeWidth="0.5"/>
        <path d="M42 10 L40 8 L38 10 L40 12 Z" fill={accent} opacity="0.7"/>
        <path d="M50 18 L48 16 L46 18 L48 20 Z" fill={accent} opacity="0.7"/>
      </svg>
      <svg className="card-corner bl" viewBox="0 0 60 60" aria-hidden="true">
        <path d="M2 58 L58 58 M2 58 L2 2" stroke={accent} strokeWidth="1" fill="none"/>
        <path d="M6 54 L54 54 M6 54 L6 6" stroke={accent} strokeWidth="0.5" fill="none" opacity="0.6"/>
        <circle cx="10" cy="50" r="1.5" fill={accent}/>
      </svg>
      <svg className="card-corner br" viewBox="0 0 60 60" aria-hidden="true">
        <path d="M58 58 L2 58 M58 58 L58 2" stroke={accent} strokeWidth="1" fill="none"/>
        <path d="M54 54 L6 54 M54 54 L54 6" stroke={accent} strokeWidth="0.5" fill="none" opacity="0.6"/>
        <circle cx="50" cy="50" r="1.5" fill={accent}/>
      </svg>

      {(numeral || title) && (
        <div className="card-head">
          {numeral && <div className="card-numeral">{numeral}</div>}
          <Divider />
          {title && <h2 className="card-title">{title}</h2>}
          {subtitle && <p className="card-sub">{subtitle}</p>}
        </div>
      )}
      <div className="card-body">{children}</div>
    </div>
  );
}

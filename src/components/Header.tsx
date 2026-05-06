"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => setScroll(Math.max(0, window.scrollY));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="hero">
      <div className="hero-img-wrap">
        <picture>
          <source media="(max-width: 720px)" srcSet="/assets/header-banner-mobile.jpg" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/header-banner.jpg"
            alt="Bangers' Arcana — sun and moon at twilight"
            className="hero-img"
            style={{
              transform: `translateY(${scroll * 0.08}px)`,
            }}
          />
        </picture>
        <p className="hero-eyebrow" style={{ transform: `translate(-50%, ${scroll * -0.12}px)` }}>
          <span>Midsummerland</span>
          <span>presents</span>
        </p>
        <div className="hero-text" style={{ transform: `translate(-50%, calc(-50% + ${scroll * -0.18}px))`, top: "50%" }}>
          <h1 className="hero-title">
            <span className="hero-title-1">Bangers&apos;</span>
            <span className="hero-title-2">Arcana</span>
          </h1>
          <div className="hero-rule">
            <svg viewBox="0 0 200 16" aria-hidden="true">
              <line x1="0" y1="8" x2="86" y2="8" stroke="currentColor" strokeWidth="0.6"/>
              <path d="M100 0 L102 7 L109 8 L102 9 L100 16 L98 9 L91 8 L98 7 Z" fill="currentColor"/>
              <line x1="114" y1="8" x2="200" y2="8" stroke="currentColor" strokeWidth="0.6"/>
            </svg>
          </div>
          <p className="hero-sub">A dream drawn by fate</p>
          <div className="hero-details">
            <p>19 — 21 June 2026</p>
            <p>Vibäck, Nyköping</p>
          </div>
        </div>
      </div>
    </header>
  );
}

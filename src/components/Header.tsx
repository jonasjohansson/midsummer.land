"use client";

import { useState, useEffect } from "react";
import AudioToggle from "./AudioToggle";

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
          <source
            media="(max-width: 720px)"
            srcSet="/assets/header-banner-mobile.jpg"
          />
          {}
          <img
            src="/assets/header-banner.jpg"
            alt="Bangers' Arcana, sun and moon at twilight"
            className="hero-img"
            style={{
              transform: `translateY(${scroll * 0.08}px)`,
            }}
          />
        </picture>
        <p
          className="hero-eyebrow"
          style={{ transform: `translate(-50%, ${scroll * -0.12}px)` }}
        >
          <span>Midsummerland</span>
          <span className="hero-presents">
            <svg className="hero-flair" viewBox="0 0 60 12" aria-hidden="true">
              <line x1="0" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="0.6" />
              <path d="M24 6 L27 3 L30 6 L27 9 Z" fill="none" stroke="currentColor" strokeWidth="0.6" />
              <circle cx="27" cy="6" r="1.2" fill="currentColor" />
              <line x1="34" y1="6" x2="42" y2="6" stroke="currentColor" strokeWidth="0.6" />
              <circle cx="46" cy="6" r="1.5" fill="currentColor" />
              <line x1="50" y1="6" x2="60" y2="6" stroke="currentColor" strokeWidth="0.6" />
            </svg>
            presents
            <svg className="hero-flair" viewBox="0 0 60 12" aria-hidden="true">
              <line x1="0" y1="6" x2="10" y2="6" stroke="currentColor" strokeWidth="0.6" />
              <circle cx="14" cy="6" r="1.5" fill="currentColor" />
              <line x1="18" y1="6" x2="26" y2="6" stroke="currentColor" strokeWidth="0.6" />
              <path d="M30 6 L33 3 L36 6 L33 9 Z" fill="none" stroke="currentColor" strokeWidth="0.6" />
              <circle cx="33" cy="6" r="1.2" fill="currentColor" />
              <line x1="40" y1="6" x2="60" y2="6" stroke="currentColor" strokeWidth="0.6" />
            </svg>
          </span>
        </p>
        <div
          className="hero-text"
          style={{
            transform: `translate(-50%, calc(-50% + ${scroll * -0.18}px))`,
            top: "50%",
          }}
        >
          <h1 className="hero-title">
            <span className="hero-title-1">The</span>
            <span className="hero-title-2">Arcana</span>
          </h1>
          <div className="hero-rule">
            <svg viewBox="0 0 200 16" aria-hidden="true">
              <line
                x1="0"
                y1="8"
                x2="86"
                y2="8"
                stroke="currentColor"
                strokeWidth="0.6"
              />
              <path
                d="M100 0 L102 7 L109 8 L102 9 L100 16 L98 9 L91 8 L98 7 Z"
                fill="currentColor"
              />
              <line
                x1="114"
                y1="8"
                x2="200"
                y2="8"
                stroke="currentColor"
                strokeWidth="0.6"
              />
            </svg>
          </div>
          <p className="hero-sub">A dream drawn by fate</p>
          <div className="hero-details">
            <p>19 to 21 June 2026</p>
            <p>Vibäck, Nyköping</p>
          </div>
          <a
            className="hero-cta"
            href="https://forms.gle/rsygitJ4sSk2fLrV6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>RSVP to the Arcana</span>
            <svg viewBox="0 0 24 12" aria-hidden="true" className="hero-cta-flair">
              <line x1="0" y1="6" x2="14" y2="6" stroke="currentColor" strokeWidth="0.8"/>
              <path d="M14 6 L20 2 L20 10 Z" fill="currentColor"/>
            </svg>
          </a>
          <AudioToggle />
        </div>
      </div>
    </header>
  );
}

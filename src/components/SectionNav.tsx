"use client";

import { useEffect, useState } from "react";

const SECTIONS: { href: string; numeral: string; label: string }[] = [
  { href: "#the-arcana", numeral: "✦", label: "Arcana" },
  { href: "#the-offering", numeral: "I", label: "Offering" },
  { href: "#the-masquerade", numeral: "II", label: "Masquerade" },
  { href: "#the-traveller", numeral: "III", label: "Traveller" },
  { href: "#the-feast", numeral: "IV", label: "Feast" },
  { href: "#the-coin", numeral: "V", label: "Coin" },
  { href: "#the-satchel", numeral: "✦", label: "Satchel" },
];

interface SectionNavProps {
  rsvpUrl: string;
}

export default function SectionNav({ rsvpUrl }: SectionNavProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`section-nav ${visible ? "section-nav-visible" : ""}`} aria-hidden={!visible}>
      <div className="section-nav-inner">
        <nav className="section-nav-list-wrap" aria-label="Sections">
          <ul className="section-nav-list">
            {SECTIONS.map((s) => (
              <li key={s.href}>
                <a href={s.href}>
                  <span className="section-nav-numeral">{s.numeral}</span>
                  <span className="section-nav-label">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="section-nav-rsvp"
          href={rsvpUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          RSVP
          <svg viewBox="0 0 24 12" aria-hidden="true" className="section-nav-rsvp-flair">
            <line x1="0" y1="6" x2="14" y2="6" stroke="currentColor" strokeWidth="0.8"/>
            <path d="M14 2 L20 6 L14 10 Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

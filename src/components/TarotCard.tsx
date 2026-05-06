"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface TarotCardProps {
  numeral: string;
  name: string;
  slotId: string;
  hint: string;
  image?: string;
}

export default function TarotCard({ numeral, name, slotId, hint, image }: TarotCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const idleRot = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    timeRef.current = Math.random() * 1000;
  }, []);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const animate = (time: number) => {
      const t = time * 0.001;
      const base = timeRef.current;
      idleRot.current = {
        x: Math.sin(t * 0.7 + base) * 4 + Math.sin(t * 1.3 + base * 2) * 2,
        y: Math.cos(t * 0.5 + base) * 5 + Math.cos(t * 1.1 + base * 3) * 2,
      };
      if (!hovering && innerRef.current) {
        innerRef.current.style.transform =
          `rotateX(${idleRot.current.x}deg) rotateY(${idleRot.current.y}deg)`;
      }
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [visible, hovering]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const el = cardRef.current;
    const inner = innerRef.current;
    const shine = shineRef.current;
    if (!el || !inner) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotY = (x - 0.5) * 30;
    const rotX = (0.5 - y) * 30;
    inner.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    if (shine) {
      shine.style.opacity = "1";
      shine.style.background =
        `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,240,200,0.35) 0%, rgba(255,220,160,0.15) 30%, transparent 70%)`;
    }
  }, []);

  const enterTimer = useRef<ReturnType<typeof setTimeout>>();

  const onMouseEnter = useCallback(() => {
    setHovering(true);
    const inner = innerRef.current;
    if (inner) inner.style.transition = "transform 0.4s cubic-bezier(0.2, 0.6, 0.3, 1)";
    clearTimeout(enterTimer.current);
    enterTimer.current = setTimeout(() => {
      if (innerRef.current) innerRef.current.style.transition = "none";
    }, 400);
  }, []);

  const onMouseLeave = useCallback(() => {
    const inner = innerRef.current;
    const shine = shineRef.current;
    if (inner) {
      inner.style.transition = "transform 0.8s cubic-bezier(0.2, 0.6, 0.3, 1)";
      inner.style.transform =
        `rotateX(${idleRot.current.x}deg) rotateY(${idleRot.current.y}deg)`;
    }
    if (shine) shine.style.opacity = "0";
    setTimeout(() => setHovering(false), 800);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tarot-card ${visible ? "tarot-visible" : ""}`}
      data-slot={slotId}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        ref={innerRef}
        className={`tarot-card-inner ${image ? "tarot-card-has-image" : ""}`}
      >
        {image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={image} alt={name} className="tarot-card-image" />
        ) : (
          <>
            <div className="tarot-numeral">{numeral}</div>
            <div className="tarot-art">
              <svg viewBox="0 0 100 140" preserveAspectRatio="none" className="tarot-art-svg" aria-hidden="true">
                <defs>
                  <pattern id={`stripes-${slotId}`} patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" strokeWidth="0.4" opacity="0.4"/>
                  </pattern>
                </defs>
                <rect width="100" height="140" fill={`url(#stripes-${slotId})`} />
              </svg>
              <div className="tarot-art-label">
                <div className="tarot-art-label-tag">image slot</div>
                <div className="tarot-art-label-hint">{hint}</div>
              </div>
            </div>
            <div className="tarot-name">{name}</div>
          </>
        )}
        <div ref={shineRef} className="tarot-shine" />
      </div>
    </div>
  );
}

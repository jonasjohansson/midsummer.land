"use client";

import { useEffect, useRef, useCallback, useState } from "react";

interface InspirationCarouselProps {
  images: { src: string; alt: string }[];
}

export default function InspirationCarousel({ images }: InspirationCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef(0);
  const frameRef = useRef<number>(0);
  const pausedUntilRef = useRef(0);
  const draggingRef = useRef(false);
  const dragMovedRef = useRef(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });
  const tapTargetRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const doubled = [...images, ...images];

  const wrapScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const halfWidth = track.scrollWidth / 2;
    if (halfWidth === 0) return;
    if (scrollPosRef.current >= halfWidth) scrollPosRef.current -= halfWidth;
    if (scrollPosRef.current < 0) scrollPosRef.current += halfWidth;
  }, []);

  const animate = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    if (!draggingRef.current && Date.now() >= pausedUntilRef.current) {
      scrollPosRef.current += 0.3;
      wrapScroll();
      track.scrollLeft = scrollPosRef.current;
    }

    frameRef.current = requestAnimationFrame(animate);
  }, [wrapScroll]);

  useEffect(() => {
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [animate]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      scrollPosRef.current += e.deltaX;
      wrapScroll();
      track.scrollLeft = scrollPosRef.current;
      pausedUntilRef.current = Date.now() + 3000;
    };

    track.addEventListener("wheel", onWheel, { passive: false });
    return () => track.removeEventListener("wheel", onWheel);
  }, [wrapScroll]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleClickOutside = (e: PointerEvent) => {
      const track = trackRef.current;
      if (!track || !track.contains(e.target as Node)) {
        setActiveIndex(null);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, [activeIndex]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    draggingRef.current = true;
    dragMovedRef.current = false;
    dragStartRef.current = { x: e.clientX, scrollLeft: scrollPosRef.current };
    tapTargetRef.current = e.target as HTMLElement;
    pausedUntilRef.current = Date.now() + 60000;
    trackRef.current?.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const dx = dragStartRef.current.x - e.clientX;
    if (Math.abs(dx) > 5) dragMovedRef.current = true;
    scrollPosRef.current = dragStartRef.current.scrollLeft + dx;
    wrapScroll();
    if (trackRef.current) trackRef.current.scrollLeft = scrollPosRef.current;
  }, [wrapScroll]);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    draggingRef.current = false;
    pausedUntilRef.current = Date.now() + 3000;

    if (!dragMovedRef.current) {
      const item = tapTargetRef.current?.closest(".inspiration-item");
      if (item) {
        const idx = Number(item.getAttribute("data-index"));
        if (!isNaN(idx)) {
          setActiveIndex((prev) => (prev === idx ? null : idx));
        }
      } else {
        setActiveIndex(null);
      }
    }
  }, []);

  if (images.length === 0) return null;

  return (
    <div className="inspiration-carousel">
      <div
        ref={trackRef}
        className="inspiration-track"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {doubled.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className={`inspiration-item ${activeIndex === i ? "is-active" : ""}`}
            data-index={i}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              className="inspiration-img"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.5;
    const onEnded = () => setPlaying(false);
    a.addEventListener("ended", onEnded);
    return () => a.removeEventListener("ended", onEnded);
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/arcana-theme.mp3" loop preload="none" />
      <button
        type="button"
        className={`audio-link ${playing ? "is-playing" : ""}`}
        onClick={toggle}
        aria-label={playing ? "Pause the theme" : "Play the theme"}
      >
        <span className="audio-link-bars" aria-hidden="true">
          <span /><span /><span /><span />
        </span>
        <span className="audio-link-label">{playing ? "Pause the theme" : "Play the theme"}</span>
      </button>
    </>
  );
}

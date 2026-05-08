"use client";

interface TarotCardProps {
  numeral: string;
  name: string;
  slotId: string;
  hint: string;
  image?: string;
}

export default function TarotCard({ numeral, name, slotId, hint, image }: TarotCardProps) {
  return (
    <div
      className={`tarot-card ${image ? "tarot-card-with-image" : ""}`}
      data-slot={slotId}
    >
      <div className={`tarot-card-inner ${image ? "tarot-card-has-image" : ""}`}>
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
      </div>
    </div>
  );
}

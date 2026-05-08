"use client";

import CardBorder from "./CardBorder";
import TarotCard from "./TarotCard";

interface TarotProps {
  numeral: string;
  name: string;
  slotId: string;
  hint: string;
  image?: string;
}

interface CardSectionProps {
  id?: string;
  numeral?: string;
  title: string;
  subtitle?: string;
  tarot?: TarotProps;
  children: React.ReactNode;
  reverse?: boolean;
  wide?: boolean;
  frameless?: boolean;
  divider?: "star" | "line" | "moon";
}

export default function CardSection({ id, numeral, title, subtitle, tarot, children, reverse, wide, frameless, divider }: CardSectionProps) {
  return (
    <section id={id} className={`section ${reverse ? "section-reverse" : ""} ${wide ? "section-wide" : ""} ${frameless ? "section-frameless" : ""}`}>
      <CardBorder numeral={numeral} title={title} subtitle={subtitle} divider={divider}>
        {tarot ? (
          <div className="section-grid">
            <div className="section-tarot">
              <TarotCard {...tarot} />
            </div>
            <div className="section-prose">{children}</div>
          </div>
        ) : (
          <div className="section-prose">{children}</div>
        )}
      </CardBorder>
    </section>
  );
}

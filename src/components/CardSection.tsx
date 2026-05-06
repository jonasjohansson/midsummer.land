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
  numeral: string;
  title: string;
  subtitle: string;
  tarot?: TarotProps;
  children: React.ReactNode;
  reverse?: boolean;
}

export default function CardSection({ numeral, title, subtitle, tarot, children, reverse }: CardSectionProps) {
  return (
    <section className={`section ${reverse ? "section-reverse" : ""}`}>
      <CardBorder numeral={numeral} title={title} subtitle={subtitle}>
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

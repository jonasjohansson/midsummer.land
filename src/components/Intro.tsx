"use client";

import Divider from "./Divider";

export default function Intro() {
  return (
    <section className="intro">
      <p className="intro-lead">
        On the <span className="gold">19th of June</span>, a portal opens to a liminal space, accessible only to those willing to step through.
      </p>
      <p className="intro-lead">And you have been summoned.</p>
      <p className="intro-questions">
        What will you see in the signs dancing through the fields?<br/>
        What will the symbols reveal?
      </p>
      <Divider />
      <p className="intro-call">This midsummer, the veil will slip and the deck will open.</p>
      <p>
        The land transforms into a living tarot of flowers, friends, and fate.
        You are invited to step into <span className="gold">The Arcana</span>.
        Dress as the card you wish to draw. Sing in symbols. Dance into the dream.
      </p>
      <p className="intro-coda">For one weekend, the ordinary world fades as we step into a dream drawn by fate.</p>
    </section>
  );
}

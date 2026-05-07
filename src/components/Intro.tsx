"use client";

import Divider from "./Divider";

export default function Intro() {
  return (
    <section className="intro">
      <p className="intro-lead">
        On the 19th of June, a portal opens to a liminal space, accessible only to those willing to step through.
      </p>
      <p className="intro-lead">And you have been summoned.</p>
      <p>
        At the summer solstice, as the past softens into dream and the present rises to meet us,
        we gather at the threshold between worlds, poised before the many futures waiting within reach.
      </p>
      <p className="intro-questions">
        What will you see in the signs dancing through the fields?<br/>
        What will you make of the knowledge unearthed?<br/>
        What will the symbols reveal?
      </p>
      <p>But tread carefully: the meaning you make is the destiny you choose.</p>
      <Divider />
      <p className="intro-call">This midsummer, the veil will slip and the deck will open.</p>
      <p>
        As the land transforms into a living tarot of flowers, friends and fate, you are invited to step
        into Bangers&apos; Arcana. Dress as the card you wish to draw, or breathe life into the archetype
        you desire to embody. Sing in symbols, dance into the dream, and move as the myth you are.
      </p>
      <ul className="intro-list">
        <li>Search for omens among the oracles.</li>
        <li>Seek wisdom from wandering sages.</li>
        <li>Read the riddles etched into your heart, for there lies the answer.</li>
      </ul>
      <p className="intro-coda">For one weekend, the ordinary world fades as we step into a dream drawn by fate.</p>
    </section>
  );
}

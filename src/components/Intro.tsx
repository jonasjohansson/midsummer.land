"use client";

import Divider from "./Divider";

export default function Intro() {
  return (
    <section className="intro">
      <p className="intro-stamp">A personal invitation</p>
      <p className="intro-lead">
        On the <span className="gold">19th of June</span>, a portal opens to a liminal space, accessible only to those willing to step through. And you have been summoned.
      </p>

      <Divider />

      <p>
        A midsummer weekend at <a className="inline-link gold" href="https://viback10.se/" target="_blank" rel="noopener noreferrer">Vibäck</a>, by the water south of Nyköping. Three days of cooking, swimming, dancing, performances, and collective magic, with each of us joining a team and bringing something to the feast, the bar, or the stage.
      </p>
    </section>
  );
}

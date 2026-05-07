"use client";

import { useState, useEffect } from "react";
import StarField from "@/components/StarField";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import CardSection from "@/components/CardSection";
import Form from "@/components/Form";
import Divider from "@/components/Divider";

export default function Home() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => setScroll(Math.max(0, window.scrollY));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="parchment-rough">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" seed="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <StarField density="medium" />
      <Header />

      <div className="scroll-arrow" aria-hidden="true" style={{ opacity: Math.max(0, 0.6 - scroll * 0.004) }}>
        <svg viewBox="0 0 60 80" className="scroll-arrow-svg">
          <path d="M30 2 L31.2 6.5 L36 8 L31.2 9.5 L30 14 L28.8 9.5 L24 8 L28.8 6.5 Z" fill="currentColor" opacity="0.8" />
          <line x1="30" y1="18" x2="30" y2="52" stroke="currentColor" strokeWidth="0.8" />
          <path d="M30 58 L34 50 L30 53 L26 50 Z" fill="currentColor" />
        </svg>
      </div>

      <main className="main" style={{ marginTop: `${-2 - Math.min(scroll * 0.12, 140)}px` }}>
        <div className="main-inner">
          <Intro />

          <CardSection
            title="The Arcana"
            subtitle="The world we build together"
            tarot={{ numeral: "", name: "The Arcana", slotId: "arcana", hint: "tarot card · the arcana", image: "/assets/the-arcana.jpg" }}
            wide
            divider="moon"
          >
            <p>This is our seventh midsummer together.</p>
            <p>
              What began as a small gathering of friends has become a tradition: a weekend shaped by friendship,
              music, food, games, swimming, dancing, performances, late nights, collective imagination, and the
              strange magic that happens when everyone adds something of their own.
            </p>
            <p>
              This year, that world becomes Bangers&apos; Arcana: a midsummer experience of fate, friendship, symbols,
              stories, and the space between dream and ritual.
            </p>
            <p>
              It is not something you attend from the outside. It is something we make together, moment by moment,
              until the ordinary world softens and another world begins to take shape.
            </p>
            <p>
              Welcome to the seventh gathering.<br/>
              Welcome to the Arcana.
            </p>
          </CardSection>

          <div className="location-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/arcana-location.png" alt="Red Swedish cabins by the archipelago at twilight" />
          </div>

          <CardSection
            numeral="I"
            title="The Realm"
            subtitle="Vibäck, by water and sky"
            reverse
          >
            <p>
              Our home for the weekend is <strong>Vibäck 10</strong>, a former seaside guesthouse from 1938,
              tucked into Marsviken where the forest meets the water.
            </p>
            <p>
              For three days, we take over its cabins, shore, sauna, paths and gathering places.
            </p>
            <p>Arrive early on Friday. Leave late on Sunday.</p>
            <p>For one weekend, Vibäck becomes the realm of Bangers&apos; Arcana.</p>
          </CardSection>

          <CardSection
            numeral="II"
            title="The Offering"
            subtitle="How to take part"
          >
            <p>
              Bangers&apos; Arcana is not built by hosts alone. It comes alive through the offerings carried across the threshold.
            </p>
            <p>
              Bring a song, a game, a reading, a ritual, a performance, a hidden talent, a helping hand,
              or a small piece of magic only you could summon.
            </p>
            <p>
              Some offerings will be written into the weekend. Others will reveal themselves when the moment calls.
              In the form below, tell us what you might bring into the Arcana.
            </p>
          </CardSection>

          <CardSection
            numeral="III"
            title="The Masquerade"
            subtitle="Dress as the card you wish to draw"
            tarot={{ numeral: "III", name: "The Masquerade", slotId: "masquerade", hint: "tarot card · dress code", image: "/assets/the-masquerade.jpg" }}
            reverse
          >
            <p>
              This is a costumed gathering. Choose a card, archetype, symbol, omen, creature, character,
              or invented piece of the Arcana, and let it guide what you become.
            </p>
            <p>
              You might arrive as The Fool, The Star, The Moon, The Lovers, The Tower, The Hermit, a knight,
              a queen, a cup, a sword, a flower, a flame, a shadow, a sign, or something no deck has named before.
            </p>
            <p>
              Bring fabric, flowers, masks, symbols, props, movement, mystery.
              The world becomes richer when everyone adds to the illusion.
            </p>
            <p className="muted">
              Decorations are welcome too. If you have an object, banner, lantern, altar, garland, card, creature,
              or curious thing that belongs in the Arcana, bring it through the veil.
            </p>
          </CardSection>

          <CardSection
            numeral="IV"
            title="The Traveller"
            subtitle="The path that leads through the veil"
            tarot={{ numeral: "IV", name: "The Traveller", slotId: "traveller", hint: "tarot card · the journey", image: "/assets/the-traveller.jpg" }}
          >
            <p>
              From Stockholm, the road south unfolds for roughly an hour and a half. Trains run to Nyköping;
              from there, omens (and a short drive) carry you the final leg.
            </p>
            <ul className="bullets">
              <li><strong>Car</strong> — easiest. Parking by the cabin.</li>
              <li><strong>Train</strong> — to Nyköping C, then a 25 min taxi or pickup.</li>
              <li><strong>Carpool</strong> — share the journey; we&apos;ll match drivers and pilgrims as the date approaches.</li>
            </ul>
          </CardSection>

          <CardSection
            numeral="V"
            title="The Feast"
            subtitle="The midsummer table is set"
            tarot={{ numeral: "V", name: "The Feast", slotId: "feast", hint: "tarot card · food / feast", image: "/assets/the-feast.jpg" }}
            reverse
          >
            <p>
              Across the weekend, the Arcana will provide ingredients for shared meals, which we will prepare
              together in kitchen teams.
            </p>
            <p>
              The main feast is Friday&apos;s midsummer lunch. For this, everyone is invited to bring one dish to share:
              something traditional, beloved, strange, seasonal, or simply delicious.
            </p>
            <p>
              The shared menu will be built around vegetarian food, but if your personal prophecy requires meat,
              you are welcome to bring it yourself.
            </p>
            <p>
              There will also be a magical bar experience, with some drinks provided by the house. Please bring
              offerings for the bar: bottles, mixers, garnishes, strange spirits, soft drinks, or anything you
              would like to see appear in the cup.
            </p>
            <p className="muted">Mark your dietary needs in the form so the feast can welcome everyone.</p>
          </CardSection>

          <CardSection
            numeral="VI"
            title="The Coin"
            subtitle="How we keep the world turning"
          >
            <p>
              Bangers&apos; Arcana is built together, and the cost is shared between everyone who enters the realm.
            </p>
            <p>
              The coin covers Vibäck, shared meals, the bar experience, decorations, a circus tent, lights, sound,
              and the materials needed to bring the weekend to life.
            </p>
            <p>Choose your path of rest:</p>
            <ul className="bullets">
              <li><strong>1400 SEK — The Field of Dreams</strong><br/>A place beneath your own tent</li>
              <li><strong>1800 SEK — The Cabin Floor</strong><br/>A roof above, a sleeping mat below</li>
              <li><strong>2200 SEK — The Chosen Bed</strong><br/>A bed within the cabin walls</li>
            </ul>
            <p className="muted">Mark your preference in the form. Spaces beneath roofs are limited, so the cards may need to decide.</p>
          </CardSection>

          <CardSection
            title="The Satchel"
            subtitle="What to carry across the threshold"
          >
            <p>
              Bring your personal belongings, your best attitude, and whatever you need to sleep, swim,
              feast, dress up, and wander between worlds.
            </p>
            <div className="bring-grid">
              <div>
                <h4>Essentials</h4>
                <ul className="bullets">
                  <li>Bedding or sleeping bag</li>
                  <li>Tent, if you are camping</li>
                  <li>Homemade potluck dish for Friday&apos;s midsummer lunch</li>
                  <li>Swimsuit and towel</li>
                  <li>Sunscreen and mosquito spray</li>
                  <li>Warm layers for the night</li>
                  <li>Shoes for grass, gravel, and dancing</li>
                </ul>
              </div>
              <div>
                <h4>For the Arcana</h4>
                <ul className="bullets">
                  <li>Fabulous outfits</li>
                  <li>A white look for midsummer day</li>
                  <li>Decorations, blankets, props, symbols, or other fun things for the party</li>
                  <li>Drinks and contributions for the bar</li>
                  <li>Party supplies</li>
                  <li>An instrument, song, game, reading, ritual, or performance</li>
                  <li>Anything small and magical you feel called to bring</li>
                </ul>
              </div>
            </div>
          </CardSection>

          <section className="section form-section">
            <div className="parchment-edge" aria-hidden="true" />
            <Form />
          </section>

          <footer className="foot">
            <div className="foot-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/footer-banner.jpg" alt="Costumed figures dancing around a midsummer pole at twilight" />
            </div>
            <Divider variant="star"/>
            <p>Midsummerland · Bangers&apos; Arcana · 19 — 21 June 2026</p>
            <p className="muted">A dream drawn by fate · Vibäck 10, Nyköping</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

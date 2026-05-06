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
      <StarField density="medium" />
      <Header />

      <main className="main" style={{ marginTop: `${-2 - Math.min(scroll * 0.12, 140)}px` }}>
        <div className="main-inner">
          <Intro />

          <div className="location-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/arcana-location.png" alt="Red Swedish cabins by the archipelago at twilight" />
          </div>

          <CardSection
            numeral="I"
            title="The Cabin"
            subtitle="Where weary travellers lay their crowns"
            tarot={{ numeral: "I", name: "The Cabin", slotId: "cabin", hint: "tarot card · cabin / accommodation" }}
          >
            <p>
              We gather at <strong>Vibäck 10, 611 95 Nyköping</strong> — a red Swedish cabin nestled by the archipelago,
              held between island silhouettes and reflected sky.
            </p>
            <p>
              Beds are limited and gathered around the main house. Bring a tent, a hammock, or a sleeping bag if the
              veil calls you to rest beneath the open stars. Allocations will be drawn closer to the date.
            </p>
            <p className="muted">19 — 21 June 2026 · arrive Friday afternoon, depart Sunday before dusk.</p>
          </CardSection>

          <CardSection
            numeral="II"
            title="The Traveller"
            subtitle="The path that leads through the veil"
            tarot={{ numeral: "II", name: "The Traveller", slotId: "traveller", hint: "tarot card · the journey", image: "/assets/the-traveller.jpg" }}
            reverse
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
            numeral="III"
            title="The Performer"
            subtitle="Sing in symbols, dance into the dream"
            tarot={{ numeral: "III", name: "The Performer", slotId: "performer", hint: "tarot card · performance" }}
          >
            <p>
              Each guest carries their own arcana. The stage is open to those who feel the pull —
              music, ritual, spoken word, surprise. Tell us in the form below if you wish to offer a performance.
            </p>
            <p className="muted">A program of acts and ceremonies will be revealed nearer the solstice.</p>
          </CardSection>

          <CardSection
            numeral="IV"
            title="The Feast"
            subtitle="Bread, berries, and the long table at twilight"
            tarot={{ numeral: "IV", name: "The Feast", slotId: "feast", hint: "tarot card · food / feast", image: "/assets/the-feast.jpg" }}
            reverse
          >
            <p>
              We share meals together — a long midsummer table, herbs from the field, fish from the water,
              strawberries and cream as the sun refuses to set.
            </p>
            <p>
              Mark your dietary omens in the form so the kitchen oracles may prepare. Hands are welcome at the table,
              the fire, and the washing-up.
            </p>
          </CardSection>

          <CardSection
            numeral="V"
            title="The Masquerade"
            subtitle="Dress as the card you wish to draw"
            tarot={{ numeral: "V", name: "The Masquerade", slotId: "masquerade", hint: "tarot card · dress code", image: "/assets/the-masquerade.jpg" }}
          >
            <p>
              This is a costumed gathering. Choose a card — major or minor arcana, ancient or invented — and become it.
              The Sun, the Hermit, the Star, the Lovers, the Wheel; the Six of Cups, the Knight of Wands.
            </p>
            <p>
              Bring symbols, fabric, flowers, faces. The land becomes a living tarot when we dress as the deck.
            </p>
            <p className="muted">If your card needs a partner, conspire with another guest. If it needs a prop, the cabin
            keeps a small chest of wands, cups and crowns.</p>
          </CardSection>

          <CardSection
            numeral="VI"
            title="The Pilgrim&apos;s Bundle"
            subtitle="What to carry across the threshold"
          >
            <div className="bring-grid">
              <div>
                <h4>Essentials</h4>
                <ul className="bullets">
                  <li>An outfit for the occasion</li>
                  <li>Sleeping bag / pillow if camping</li>
                  <li>Towel & swimwear (the water calls)</li>
                  <li>Sturdy shoes for the fields</li>
                  <li>A reusable cup</li>
                </ul>
              </div>
              <div>
                <h4>Offerings</h4>
                <ul className="bullets">
                  <li>An instrument, if you play</li>
                  <li>A poem, a song, a story</li>
                  <li>A bottle to share</li>
                  <li>Flowers for the midsummer pole</li>
                  <li>A small token or symbol</li>
                </ul>
              </div>
            </div>
          </CardSection>

          <section className="section form-section">
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

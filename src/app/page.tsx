"use client";

import { useState, useEffect } from "react";
import StarField from "@/components/StarField";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import CardSection from "@/components/CardSection";
import Form from "@/components/Form";
import Divider from "@/components/Divider";
import InspirationCarousel from "@/components/InspirationCarousel";

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
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="5"
              seed="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <StarField density="medium" />
      <Header />

      <div
        className="scroll-arrow"
        aria-hidden="true"
        style={{ opacity: Math.max(0, 0.6 - scroll * 0.004) }}
      >
        <svg viewBox="0 0 60 80" className="scroll-arrow-svg">
          <path
            d="M30 2 L31.2 6.5 L36 8 L31.2 9.5 L30 14 L28.8 9.5 L24 8 L28.8 6.5 Z"
            fill="currentColor"
            opacity="0.8"
          />
          <line
            x1="30"
            y1="18"
            x2="30"
            y2="52"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <path d="M30 58 L34 50 L30 53 L26 50 Z" fill="currentColor" />
        </svg>
      </div>

      <main
        className="main"
        style={{ marginTop: `${-2 - Math.min(scroll * 0.12, 140)}px` }}
      >
        <div className="main-inner">
          <Intro />

          <CardSection
            title="The Arcana"
            subtitle="The world we build together"
            tarot={{
              numeral: "",
              name: "The Arcana",
              slotId: "arcana",
              hint: "tarot card · the arcana",
              image: "/assets/the-arcana.jpg",
            }}
            wide
            frameless
            divider="moon"
          >
            <p>
              This is our <strong>seventh midsummer</strong> together.
            </p>
            <p>
              What began as a small gathering of friends has become{" "}
              <strong>a tradition</strong>: a weekend shaped by friendship,
              music, food, games, swimming, dancing, performances, late nights,
              collective imagination, and the strange magic that happens when{" "}
              <strong>everyone adds something of their own</strong>.
            </p>
            <p>
              This year, that world becomes{" "}
              <span className="gold">Bangers&apos; Arcana</span>: a midsummer
              experience of fate, friendship, symbols, stories, and the space
              between dream and ritual.
            </p>
            <p className="callout">
              It is not something you attend from the outside. It is something
              we make together, moment by moment, until the ordinary world
              softens and another world begins to take shape.
            </p>
            <p>
              Welcome to the seventh gathering.
              <br />
              <strong>Welcome to the Arcana.</strong>
            </p>
          </CardSection>

          <div className="location-image">
            <picture>
              <source
                media="(max-width: 720px)"
                srcSet="/assets/arcana-location-mobile.jpg"
              />
              {}
              <img
                src="/assets/arcana-location.png"
                alt="Red Swedish cabins by the archipelago at twilight"
              />
            </picture>
          </div>

          <CardSection
            numeral="I"
            title="The Realm"
            subtitle="Vibäck, by water and sky"
            tarot={{ numeral: "I", name: "The Realm", slotId: "realm", hint: "tarot card · the realm", image: "/assets/the-realm.jpg" }}
            reverse
          >
            <p>
              Our home for the weekend is <strong>Vibäck 10</strong>, a former
              seaside guesthouse from <span className="gold">1938</span>, tucked
              into <strong>Marsviken</strong> where the forest meets the water.
            </p>
            <p>
              For <strong>three days</strong>, we take over its cabins, shore,
              sauna, paths and gathering places.
            </p>
            <p className="callout">
              Arrive early on Friday. Leave late on Sunday.
            </p>
            <p>
              For one weekend, Vibäck becomes the realm of{" "}
              <span className="gold">Bangers&apos; Arcana</span>.
            </p>
          </CardSection>

          <CardSection
            numeral="II"
            title="The Offering"
            subtitle="How to take part"
            tarot={{
              numeral: "II",
              name: "The Offering",
              slotId: "offering",
              hint: "tarot card · the offering",
              image: "/assets/the-offering.jpg",
            }}
          >
            <p>
              Bangers&apos; Arcana is not built by hosts alone. It comes alive
              through the{" "}
              <strong>offerings carried across the threshold</strong>.
            </p>
            <p className="callout">
              Bring a song, a game, a reading, a ritual, a performance, a hidden
              talent, a helping hand, or a small piece of magic only you could
              summon.
            </p>
            <p>
              Some offerings will be written into the weekend. Others will
              reveal themselves when the moment calls.
              <span className="gold"> In the form below</span>,{" "}
              <strong>tell us what you might bring</strong> into the Arcana.
            </p>
          </CardSection>

          <CardSection
            numeral="III"
            title="The Masquerade"
            subtitle="Dress as the card you wish to draw"
            tarot={{
              numeral: "III",
              name: "The Masquerade",
              slotId: "masquerade",
              hint: "tarot card · dress code",
              image: "/assets/the-masquerade.jpg",
            }}
            reverse
          >
            <p>
              This is a <strong>costumed gathering</strong>. Choose a card,
              archetype, symbol, omen, creature, character, or invented piece of
              the Arcana, and let it guide what you become.
            </p>
            <p>
              You might arrive as{" "}
              <span className="gold">
                The Fool, The Star, The Moon, The Lovers, The Tower, The Hermit
              </span>
              , a knight, a queen, a cup, a sword, a flower, a flame, a shadow,
              a sign, or something no deck has named before.
            </p>
            <p>
              <strong>Bring fabric, flowers, masks, symbols, props</strong>,
              movement, mystery. The world becomes richer when everyone adds to
              the illusion.
            </p>
            <p className="muted">
              Decorations are welcome too. If you have an object, banner,
              lantern, altar, garland, card, creature, or curious thing that
              belongs in the Arcana, bring it through the veil.
            </p>
          </CardSection>

          <InspirationCarousel images={[
            { src: "/assets/mood/18cfd6e1029db36f3342a84e535e1553.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/19e4efc54e6ae45ce1aa03af00bfbd6a.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/1b9e2f4a02a06d422a90e281466fc9ef.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/1e8bc9242e1f73bb1e9f004049ac3403.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/1f9f5f976c5154c0b417bc856864bbbb.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/2a9482546e492063c77b42072a5e75af.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/2c918861d28506cdc5fa96fe7c0d7df7.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/3079df01be0a050c2f48ac1a47e6d2c5.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/34b50565c3192f8261f5e4041bb75db2.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/50a1bcc59663d8eebc2a0abe72e6a190.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/59155c2c68c755e62b24ed1b88156471.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/683f1bb346dbf353f67f6f5a2e7e07c3.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/6efe459c80e3178ad953412067e812ef.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/70443e37a1a052ee90d1a7514e74c4b5.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/740ad4406454ed1f8dec6e1f5184dd37.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/74c6d0d097a438cf133810873a07ebcd.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/84672406ea49b21aa47a2730008f19ec.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/8a3f3097187fa4269af650860328e96f.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/8de7c92712d2bf92e6717ff233aa4f7e.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/b147684d65cf2e6274a6f8c8edc4cdeb.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/b7afd91e4640c6dc9482dad58e3cbbcd.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/b8efda7ea8c998a393241dcf3649a34d.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/d631289972ad6dc2d217083af2f02de7.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/d96a2e28333ec1196ae2396c1b1d0855.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/edc05e2e2a526c948891ba6042cfdbfb.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/f05cceee7622634c87362cf8817a6ff5.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/f190825935e0ea210367f58d0155b86d.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/f7d39582b705bdb3078166c8814c2bcb.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/fc4cbcc76cda1e1baddbdb1f85d0a0fd.jpg", alt: "Outfit inspiration" },
            { src: "/assets/mood/fc50c761123ebd692a4464ce58218994.jpg", alt: "Outfit inspiration" },
          ]} />

          <CardSection
            numeral="IV"
            title="The Traveller"
            subtitle="The path that leads through the veil"
            tarot={{
              numeral: "IV",
              name: "The Traveller",
              slotId: "traveller",
              hint: "tarot card · the journey",
              image: "/assets/the-traveller.jpg",
            }}
          >
            <p>
              From Stockholm, the road south unfolds for roughly{" "}
              <strong>an hour and a half</strong>. Trains run to{" "}
              <span className="gold">Nyköping</span>; from there, omens (and a
              short drive) carry you the final leg.
            </p>
            <ul className="bullets">
              <li>
                <strong>Car</strong> — easiest. Parking by the cabin.
              </li>
              <li>
                <strong>Train</strong> — to Nyköping C, then a{" "}
                <span className="gold">25 min</span> taxi or pickup.
              </li>
              <li>
                <strong>Carpool</strong> — share the journey; we&apos;ll match
                drivers and pilgrims as the date approaches.
              </li>
            </ul>
          </CardSection>

          <CardSection
            numeral="V"
            title="The Feast"
            subtitle="The midsummer table is set"
            tarot={{
              numeral: "V",
              name: "The Feast",
              slotId: "feast",
              hint: "tarot card · food / feast",
              image: "/assets/the-feast.jpg",
            }}
            reverse
          >
            <p>
              Across the weekend, the Arcana will provide ingredients for{" "}
              <strong>shared meals</strong>, which we will prepare together in{" "}
              <strong>kitchen teams</strong>.
            </p>
            <p className="callout">
              The main feast is Friday&apos;s midsummer lunch. Everyone is
              invited to bring one dish to share.
            </p>
            <p>
              Something traditional, beloved, strange, seasonal, or simply
              delicious. The shared menu will be built around{" "}
              <strong>vegetarian food</strong>, but if your personal prophecy
              requires meat, you are welcome to bring it yourself.
            </p>
            <p>
              There will also be a <strong>magical bar experience</strong>, with
              some drinks provided by the house. Please{" "}
              <span className="gold">bring offerings for the bar</span>:
              bottles, mixers, garnishes, strange spirits, soft drinks, or
              anything you would like to see appear in the cup.
            </p>
            <p className="muted">
              Mark your dietary needs in the form so the feast can welcome
              everyone.
            </p>
          </CardSection>

          <CardSection
            numeral="VI"
            title="The Coin"
            subtitle="How we keep the world turning"
            tarot={{
              numeral: "VI",
              name: "The Coin",
              slotId: "coin",
              hint: "tarot card · the coin",
              image: "/assets/the-coin.jpg",
            }}
          >
            <p>
              Bangers&apos; Arcana is built together, and the cost is{" "}
              <strong>shared between everyone</strong> who enters the realm.
            </p>
            <p>
              The coin covers Vibäck, shared meals,{" "}
              <strong>the bar experience</strong>, decorations, a circus tent,
              lights, sound, and the materials needed to bring the weekend to
              life.
            </p>
            <p className="callout">Choose your path of rest:</p>
            <ul className="bullets">
              <li>
                <strong>
                  <span className="gold">1400 SEK</span> — The Field of Dreams
                </strong>
                <br />A place beneath your own tent
              </li>
              <li>
                <strong>
                  <span className="gold">1800 SEK</span> — The Cabin Floor
                </strong>
                <br />A roof above, a sleeping mat below
              </li>
              <li>
                <strong>
                  <span className="gold">2200 SEK</span> — The Chosen Bed
                </strong>
                <br />A bed within the cabin walls
              </li>
            </ul>
            <p className="muted">
              Mark your preference in the form. Spaces beneath roofs are
              limited, so the cards may need to decide.
            </p>
          </CardSection>

          <CardSection
            title="The Satchel"
            subtitle="What to carry across the threshold"
          >
            <p>
              Bring your personal belongings, your best attitude, and whatever
              you need to{" "}
              <strong>
                sleep, swim, feast, dress up, and wander between worlds
              </strong>
              .
            </p>
            <div className="bring-grid">
              <div>
                <h4>Essentials</h4>
                <ul className="bullets">
                  <li>Bedding or sleeping bag</li>
                  <li>Tent, if you are camping</li>
                  <li>
                    Homemade potluck dish for Friday&apos;s midsummer lunch
                  </li>
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
                  <li>
                    Decorations, blankets, props, symbols, or other fun things
                    for the party
                  </li>
                  <li>Drinks and contributions for the bar</li>
                  <li>Party supplies</li>
                  <li>
                    An instrument, song, game, reading, ritual, or performance
                  </li>
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
              <img
                src="/assets/footer-banner.jpg"
                alt="Costumed figures dancing around a midsummer pole at twilight"
              />
              <div className="foot-text">
                <Divider variant="star" />
                <p>Midsummerland · Bangers&apos; Arcana · 19 — 21 June 2026</p>
                <p className="muted">A dream drawn by fate · Vibäck 10, Nyköping</p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import StarField from "@/components/StarField";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import SectionNav from "@/components/SectionNav";
import CardSection from "@/components/CardSection";
import Divider from "@/components/Divider";
import InspirationCarousel from "@/components/InspirationCarousel";

const RSVP_URL = "https://forms.gle/rsygitJ4sSk2fLrV6";

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
      <SectionNav rsvpUrl={RSVP_URL} />

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
            id="the-arcana"
            title="The Arcana"

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
            <p>This is our <span className="gold">seventh</span> midsummer together.</p>
            <p>
              What began as a small gathering of friends has become a tradition: a weekend shaped by friendship, music, food, games, swimming, dancing, performances, late nights, collective imagination, and the strange magic that happens when everyone adds something of their own.
            </p>
            <p>
              This year, that world becomes <span className="gold">The Arcana</span>: a midsummer of fate, friendship, symbols, stories, and the space between dream and ritual.
            </p>
            <p>
              Our home is <a className="inline-link gold" href="https://viback10.se/" target="_blank" rel="noopener noreferrer">Vibäck 10</a>, a former seaside guesthouse from 1938, tucked into Marsviken where the forest meets the water. For three days we take over its cabins, shore, sauna, paths, and gathering places. Arrive early on Friday and leave late on Sunday.
            </p>
            <p>
              It is not something you attend from the outside. It is something we make together, moment by moment, until the ordinary world softens and another world begins to take shape.
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
            id="the-offering"
            numeral="I"
            title="The Offering"

            tarot={{
              numeral: "II",
              name: "The Offering",
              slotId: "offering",
              hint: "tarot card · the offering",
              image: "/assets/the-offering.jpg",
            }}
          >
            <p>
              The Arcana is not built by hosts alone. It comes alive through the{" "}
              <strong>offerings carried across the threshold</strong>.
            </p>
            <p className="callout">
              Bring a song, a game, a reading, a ritual, a performance, a hidden
              talent, a helping hand, or a small piece of magic only you could
              summon.
            </p>
            <p>
              Some offerings will be written into the weekend. Others will reveal themselves when the moment calls. When you{" "}
              <a className="inline-link" href={RSVP_URL} target="_blank" rel="noopener noreferrer">
                RSVP
              </a>
              , tell us what you might bring into the Arcana.
            </p>
          </CardSection>

          <CardSection
            id="the-masquerade"
            numeral="II"
            title="The Masquerade"

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
              Bring fabric, flowers, masks, symbols, props, movement, mystery. The world becomes richer when everyone adds to the illusion.
            </p>
            <p className="muted">
              Decorations are welcome too. If you have an object, banner,
              lantern, altar, garland, card, creature, or curious thing that
              belongs in the Arcana, bring it through the veil.
            </p>
          </CardSection>

          <InspirationCarousel
            images={[
              {
                src: "/assets/mood/18cfd6e1029db36f3342a84e535e1553.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/19e4efc54e6ae45ce1aa03af00bfbd6a.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/1b9e2f4a02a06d422a90e281466fc9ef.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/1e8bc9242e1f73bb1e9f004049ac3403.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/1f9f5f976c5154c0b417bc856864bbbb.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/2a9482546e492063c77b42072a5e75af.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/2c918861d28506cdc5fa96fe7c0d7df7.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/3079df01be0a050c2f48ac1a47e6d2c5.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/34b50565c3192f8261f5e4041bb75db2.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/50a1bcc59663d8eebc2a0abe72e6a190.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/59155c2c68c755e62b24ed1b88156471.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/683f1bb346dbf353f67f6f5a2e7e07c3.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/6efe459c80e3178ad953412067e812ef.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/70443e37a1a052ee90d1a7514e74c4b5.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/740ad4406454ed1f8dec6e1f5184dd37.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/74c6d0d097a438cf133810873a07ebcd.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/84672406ea49b21aa47a2730008f19ec.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/8a3f3097187fa4269af650860328e96f.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/8de7c92712d2bf92e6717ff233aa4f7e.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/b147684d65cf2e6274a6f8c8edc4cdeb.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/b7afd91e4640c6dc9482dad58e3cbbcd.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/b8efda7ea8c998a393241dcf3649a34d.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/d631289972ad6dc2d217083af2f02de7.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/d96a2e28333ec1196ae2396c1b1d0855.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/edc05e2e2a526c948891ba6042cfdbfb.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/f05cceee7622634c87362cf8817a6ff5.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/f190825935e0ea210367f58d0155b86d.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/f7d39582b705bdb3078166c8814c2bcb.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/fc4cbcc76cda1e1baddbdb1f85d0a0fd.jpg",
                alt: "Outfit inspiration",
              },
              {
                src: "/assets/mood/fc50c761123ebd692a4464ce58218994.jpg",
                alt: "Outfit inspiration",
              },
            ]}
          />

          <CardSection
            id="the-traveller"
            numeral="III"
            title="The Traveller"

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
              <span className="gold">Nyköping</span>; from there, omens (and a short drive) carry you the final leg.{" "}
              <a className="inline-link" href="https://www.google.com/maps/dir/T-Centralen,+111+20+Stockholm/Vib%C3%A4ck10+AB,+Vib%C3%A4ck+1,+611+95+Nyk%C3%B6ping" target="_blank" rel="noopener noreferrer">View driving directions</a>.
            </p>
            <ul className="bullets">
              <li>
                <strong>Car.</strong> Easiest, with parking by the cabin.
              </li>
              <li>
                <strong>Train.</strong> To Nyköping C, then a{" "}
                <span className="gold">25 min</span> taxi or pickup.
              </li>
              <li>
                <strong>Carpool.</strong> Closer to the date we&apos;ll open a shared chat where drivers and travellers can find each other. More details to follow.
              </li>
            </ul>
          </CardSection>

          <CardSection
            id="the-feast"
            numeral="IV"
            title="The Feast"

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
              Across the weekend, the Arcana provides the ingredients and recipes for shared meals. Food teams take turns in the kitchen, cooking them together.
            </p>
            <p className="callout">
              The main feast is Friday&apos;s midsummer lunch. Everyone is invited to bring one dish to share.
            </p>
            <p>
              Something traditional, beloved, strange, seasonal, or simply delicious. The shared menu will be built around <strong>vegetarian food</strong>, but if your personal prophecy requires meat, you are welcome to bring it yourself.
            </p>
            <p>
              There will also be a magical bar experience, with some drinks provided by the house. Please bring offerings for the bar: bottles, mixers, garnishes, strange spirits, soft drinks, or anything you would like to see appear in the cup.
            </p>
            <p>
              Mark your dietary needs in the{" "}
              <a className="inline-link" href={RSVP_URL} target="_blank" rel="noopener noreferrer">RSVP</a>{" "}
              so the feast can welcome everyone.
            </p>
          </CardSection>

          <CardSection
            id="the-coin"
            numeral="V"
            title="The Coin"

            tarot={{
              numeral: "VI",
              name: "The Coin",
              slotId: "coin",
              hint: "tarot card · the coin",
              image: "/assets/the-coin.jpg",
            }}
          >
            <p>
              The Arcana is built together. The contribution is <span className="gold">1400 SEK</span> per person for the event itself, which covers <a className="inline-link" href="https://viback10.se/" target="_blank" rel="noopener noreferrer">Vibäck</a>, shared meals, the bar, decorations, the circus tent, lights, sound, and the materials that bring the weekend to life. A roof or a bed adds a small surcharge on top.
            </p>
            <ul className="bullets">
              <li>
                <strong>Tent · <span className="gold">Free</span></strong>
                <br />A place beneath your own tent.
              </li>
              <li>
                <strong>Floor · <span className="gold">400 SEK</span></strong>
                <br />A roof above, a sleeping mat below.
              </li>
              <li>
                <strong>Bed · <span className="gold">800 SEK</span></strong>
                <br />A bed within the cabin walls.
              </li>
            </ul>
            <p>
              <a className="inline-link" href="https://viback10.se/" target="_blank" rel="noopener noreferrer">Vibäck</a> holds eight cabins, with room for about <span className="gold">40 people in beds</span> and <span className="gold">15 on the floor</span>. All cabins but one have a toilet and kitchen, which others may pass through to use. A separate service house holds two more toilets and showers. Beyond the cabins, the realm opens into forest and shore with plenty of room for tents and trees for hammocks. Camping is the easiest way in and the most generous in space.
            </p>
            <p>
              Indicate your preferred sleeping option in the{" "}
              <a className="inline-link" href={RSVP_URL} target="_blank" rel="noopener noreferrer">RSVP</a>. Spaces beneath roofs are limited, so the cards may need to decide who rests where.
            </p>
            <p>
              We&apos;ll send payment instructions once the realm takes shape, with the base contribution and any surcharge settled separately. Please include the <strong>full name(s)</strong> of who you are paying for. Payment will be due by <span className="gold">1 June 2026</span>.
            </p>
          </CardSection>

          <CardSection
            id="the-satchel"
            title="The Satchel"

          >
            <p>
              Bring your personal belongings, your best attitude, and whatever you need to sleep, swim, feast, dress up, and wander between worlds.
            </p>
            <div className="bring-grid">
              <div>
                <h4>Essentials</h4>
                <ul className="bullets">
                  <li>
                    <strong>If sleeping in a bed:</strong> linens, duvet cover, pillow cover
                  </li>
                  <li>
                    <strong>If sleeping on the cabin floor:</strong> a mattress and sleeping bag
                  </li>
                  <li>
                    <strong>If camping:</strong> tent, mattress, sleeping bag
                  </li>
                  <li>A homemade dish to share at Friday&apos;s midsummer lunch</li>
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

          <section className="section closing-cta">
            <Divider variant="star" />
            <p className="closing-cta-lead">The deck awaits your answer.</p>
            <a
              className="cta-link"
              href={RSVP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              RSVP to the Arcana
              <svg viewBox="0 0 24 12" aria-hidden="true" className="cta-link-flair">
                <line x1="0" y1="6" x2="14" y2="6" stroke="currentColor" strokeWidth="0.8"/>
                <path d="M14 6 L20 2 L20 10 Z" fill="currentColor"/>
              </svg>
            </a>
          </section>

          <footer className="foot">
            <div className="foot-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/footer-banner.jpg"
                alt="Costumed figures dancing around a midsummer pole at twilight"
              />
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

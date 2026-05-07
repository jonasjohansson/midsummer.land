"use client";

import { useState } from "react";
import CardBorder from "./CardBorder";

const TEAMS = [
  "Drinks",
  "Food",
  "Decoration",
  "Music & Performance",
  "SLAP",
  "Games",
];

const TEAM_DESCRIPTIONS: Record<string, string> = {
  "Drinks": "Be a designated bartender, prepare cocktails or punch bowls, or keep refreshments flowing.",
  "Food": "Help prepare and cook breakfast, lunch or dinner, and help with the Friday midsummer lunch.",
  "Decoration": "Help dress the realm and bring the world of the Arcana into being.",
  "Music & Performance": "Help curate and co-create musical and performative happenings.",
  "SLAP": "Sound, Light And Power: rig sound equipment, manage cables, and keep the current flowing.",
  "Games": "Coordinate water games, playful rituals, and collective moments of chaos and delight.",
};

const REST_OPTIONS = [
  "The Field of Dreams — camping beneath your own tent, 1400 SEK",
  "The Cabin Floor — a roof above, a sleeping mat below, 1800 SEK",
  "The Chosen Bed — a bed within the cabin walls, 2200 SEK",
];

const TRAVEL_OPTIONS = [
  "I can offer seats",
  "I need a lift",
  "I am taking the train",
  "I will arrange my own passage",
  "Not sure yet",
];

const PHOTO_OPTIONS = [
  "Yes, document me freely",
  "Please ask before posting",
  "Please avoid public posts of me",
];

const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

interface FormData {
  name: string;
  referrer: string;
  email: string;
  attending: string;
  rest: string;
  arrival: string;
  travel: string;
  van: string;
  team: string[];
  teamMotivation: string;
  performing: string;
  potluck: string;
  allergies: string;
  bar: string;
  paid: string;
  invite: string;
  inviteOnly: string;
  emergency: string;
  photo: string;
  message: string;
}

const INITIAL: FormData = {
  name: "",
  referrer: "",
  email: "",
  attending: "",
  rest: "",
  arrival: "",
  travel: "",
  van: "",
  team: [],
  teamMotivation: "",
  performing: "",
  potluck: "",
  allergies: "",
  bar: "",
  paid: "",
  invite: "",
  inviteOnly: "",
  emergency: "",
  photo: "",
  message: "",
};

export default function Form() {
  const [data, setData] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const set = <K extends keyof FormData>(key: K, val: FormData[K]) =>
    setData((d) => ({ ...d, [key]: val }));

  const toggleTeam = (t: string) =>
    set("team", data.team.includes(t) ? data.team.filter((x) => x !== t) : [...data.team, t]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!data.name || !data.email || !data.attending) {
      setError("Please fill in all required fields.");
      return;
    }

    if (SCRIPT_URL) {
      setSubmitting(true);
      try {
        await fetch(SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            team: data.team.join(", "),
            timestamp: new Date().toISOString(),
          }),
        });
      } catch {
        setError("Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <CardBorder numeral="∞" title="The cards are read" subtitle="Your answer has been received by the deck">
        <div className="form-done">
          <p>Thank you. Your fate is recorded among the others.</p>
          <p className="muted">We shall send word as the solstice draws near.</p>
        </div>
      </CardBorder>
    );
  }

  return (
    <CardBorder numeral="VIII" title="The Summons" subtitle="Answer the questions to seal your fate">
      <form className="form-single" onSubmit={submit}>

        <div className="ff">
          <label className="ff-label">What name shall we inscribe? *</label>
          <div className="ff-help">Full name, so your fate is not mistaken for another&apos;s.</div>
          <input className="ff-input" type="text" placeholder="Your name" value={data.name} onChange={(e) => set("name", e.target.value)} required />
        </div>

        <div className="ff">
          <label className="ff-label">Who sent you through the veil?</label>
          <div className="ff-help">Tell us who referred or told you about Bangers&apos; Arcana. Only mandatory if the organisers might not recognise your name.</div>
          <input className="ff-input" type="text" placeholder="Their full name" value={data.referrer} onChange={(e) => set("referrer", e.target.value)} />
        </div>

        <div className="ff">
          <label className="ff-label">Your email *</label>
          <div className="ff-help">Where shall the oracles send word?</div>
          <input className="ff-input" type="email" placeholder="Email address" value={data.email} onChange={(e) => set("email", e.target.value)} required />
        </div>

        <div className="ff">
          <label className="ff-label">Will you cross the threshold? *</label>
          <div className="ff-help">19 — 21 June 2026 · Vibäck, Nyköping</div>
          <div className="ff-options">
            {["Yes — I will cross the threshold", "No — fate has other plans"].map((opt) => (
              <label key={opt} className={`ff-opt ${data.attending === opt ? "selected" : ""}`}>
                <input type="radio" name="attending" value={opt} checked={data.attending === opt} onChange={() => set("attending", opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="ff">
          <label className="ff-label">Which path of rest do you choose? *</label>
          <div className="ff-help">Spaces beneath roofs are limited, so the cards may need to decide.</div>
          <div className="ff-options">
            {REST_OPTIONS.map((opt) => (
              <label key={opt} className={`ff-opt ${data.rest === opt ? "selected" : ""}`}>
                <input type="radio" name="rest" value={opt} checked={data.rest === opt} onChange={() => set("rest", opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="ff">
          <label className="ff-label">When do you expect to arrive and depart?</label>
          <div className="ff-help">Arrive early if you can. Leave late if the spell allows.</div>
          <textarea className="ff-input ff-area" placeholder="Your answer" value={data.arrival} onChange={(e) => set("arrival", e.target.value)} rows={2} />
        </div>

        <div className="ff">
          <label className="ff-label">How will you travel to the realm?</label>
          <div className="ff-help">Choose what best describes your path.</div>
          <div className="ff-options">
            {TRAVEL_OPTIONS.map((opt) => (
              <label key={opt} className={`ff-opt ${data.travel === opt ? "selected" : ""}`}>
                <input type="radio" name="travel" value={opt} checked={data.travel === opt} onChange={() => set("travel", opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="ff">
          <label className="ff-label">Do you have access to a van we could use? *</label>
          <div className="ff-options">
            {["Yes", "Yes, and I can drive it", "No"].map((opt) => (
              <label key={opt} className={`ff-opt ${data.van === opt ? "selected" : ""}`}>
                <input type="radio" name="van" value={opt} checked={data.van === opt} onChange={() => set("van", opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="ff">
          <label className="ff-label">Which team calls to you? *</label>
          <div className="ff-help">Everyone is part of a team, and everyone helps bring the world to life. Select at least 2.</div>
          <div className="ff-options">
            {TEAMS.map((t) => (
              <label key={t} className={`ff-opt ff-opt-team ${data.team.includes(t) ? "selected" : ""}`}>
                <input type="checkbox" checked={data.team.includes(t)} onChange={() => toggleTeam(t)} />
                <span>
                  <strong>{t}</strong> — <span className="ff-team-desc">{TEAM_DESCRIPTIONS[t]}</span>
                </span>
              </label>
            ))}
          </div>
          <div className="ff-help" style={{ marginTop: "12px" }}>All hands are part of the closing ritual. Everyone helps with dishes, tidying, bins, teardown, and leaving the realm as we found it.</div>
        </div>

        <div className="ff">
          <label className="ff-label">Team motivation *</label>
          <div className="ff-help">Tell us why this team calls to you. For instance, if you have experience as a chef and chose Food, let us know.</div>
          <textarea className="ff-input ff-area" placeholder="Your answer" value={data.teamMotivation} onChange={(e) => set("teamMotivation", e.target.value)} rows={3} />
        </div>

        <div className="ff">
          <label className="ff-label">Will you offer a performance, reading, ritual or host an activity?</label>
          <div className="ff-options">
            {["Yes — I'll share details separately", "Maybe — something is forming", "I'll watch and witness"].map((opt) => (
              <label key={opt} className={`ff-opt ${data.performing === opt ? "selected" : ""}`}>
                <input type="radio" name="performing" value={opt} checked={data.performing === opt} onChange={() => set("performing", opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="ff">
          <label className="ff-label">What will you bring to Friday&apos;s midsummer table?</label>
          <div className="ff-help">Everyone is invited to bring one homemade dish to share. Tell us what you are thinking: something traditional, beloved, strange, seasonal, or simply delicious.</div>
          <textarea className="ff-input ff-area" placeholder="Your answer" value={data.potluck} onChange={(e) => set("potluck", e.target.value)} rows={2} />
        </div>

        <div className="ff">
          <label className="ff-label">Dietary omens & allergies *</label>
          <div className="ff-help">We prepare collective meals. Please share any allergies, restrictions or needs so the kitchen oracles may prepare.</div>
          <textarea className="ff-input ff-area" placeholder="Your answer" value={data.allergies} onChange={(e) => set("allergies", e.target.value)} rows={3} />
        </div>

        <div className="ff">
          <label className="ff-label">What offering might you bring to the bar?</label>
          <div className="ff-help">Bottles, mixers, garnishes, soft drinks, strange spirits, ice, or anything else you would like to see appear in the cup.</div>
          <textarea className="ff-input ff-area" placeholder="Your answer" value={data.bar} onChange={(e) => set("bar", e.target.value)} rows={2} />
        </div>

        <div className="ff">
          <label className="ff-label">Have you sent your coin? *</label>
          <div className="ff-options">
            {["Yes", "No, but I will"].map((opt) => (
              <label key={opt} className={`ff-opt ${data.paid === opt ? "selected" : ""}`}>
                <input type="radio" name="paid" value={opt} checked={data.paid === opt} onChange={() => set("paid", opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="ff">
          <label className="ff-label">Who would you like us to invite?</label>
          <div className="ff-help">This is an invite-only event. Write their full name and email address, and please check the spelling carefully.</div>
          <textarea className="ff-input ff-area" placeholder="Your answer" value={data.invite} onChange={(e) => set("invite", e.target.value)} rows={3} />
        </div>

        <div className="ff">
          <label className="ff-label">Do you understand that this is an invite-only event? *</label>
          <div className="ff-options">
            <label className={`ff-opt ${data.inviteOnly === "Yes, I will not send the signup link to anyone." ? "selected" : ""}`}>
              <input type="radio" name="inviteOnly" value="Yes, I will not send the signup link to anyone." checked={data.inviteOnly === "Yes, I will not send the signup link to anyone."} onChange={() => set("inviteOnly", "Yes, I will not send the signup link to anyone.")} />
              <span>Yes, I will not send the signup link to anyone.</span>
            </label>
          </div>
        </div>

        <div className="ff">
          <label className="ff-label">Emergency contact</label>
          <div className="ff-help">Name and phone number, just in case the cards get dramatic.</div>
          <input className="ff-input" type="text" placeholder="Your answer" value={data.emergency} onChange={(e) => set("emergency", e.target.value)} />
        </div>

        <div className="ff">
          <label className="ff-label">Photo and video consent</label>
          <div className="ff-help">The Arcana may be documented. What feels right for you?</div>
          <div className="ff-options">
            {PHOTO_OPTIONS.map((opt) => (
              <label key={opt} className={`ff-opt ${data.photo === opt ? "selected" : ""}`}>
                <input type="radio" name="photo" value={opt} checked={data.photo === opt} onChange={() => set("photo", opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="ff">
          <label className="ff-label">A final whisper for the oracles?</label>
          <div className="ff-help">Anything else you would like us to know.</div>
          <textarea className="ff-input ff-area" placeholder="Your answer" value={data.message} onChange={(e) => set("message", e.target.value)} rows={3} />
        </div>

        {error && <p className="form-error">{error}</p>}
        <button className="form-submit" type="submit" disabled={submitting}>
          {submitting ? "Casting the spell…" : "Seal my fate"}
        </button>
      </form>
    </CardBorder>
  );
}

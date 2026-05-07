"use client";

import { useState } from "react";
import CardBorder from "./CardBorder";

const TEAMS = [
  "Drinks",
  "Food",
  "Strike",
  "Moop & Cleaning",
  "Decoration",
  "Music & Performance",
  "SLAP",
  "Games",
];

const TEAM_DESCRIPTIONS: Record<string, string> = {
  "Food": "Help prepare and cook for Breakfast, Lunch or Dinner — as well as the Friday potluck.",
  "Drinks": "Be a designated bartender, prepare cocktails or punch bowls, or keep refreshments flowing.",
  "Decoration": "Join the decoration team and help dress the space according to the theme.",
  "Music & Performance": "Help curate and co-create larger musical and performative happenings.",
  "SLAP": "Sound, Light And Power — rig sound equipment, manage cables, and keep the power flowing.",
  "Games": "Coordinate and organise water games, fun play activities, and collective playful moments.",
  "Moop & Cleaning": "Keep the space tidy — emptying trash, doing dishes, and making sure everything stays fabolous.",
  "Strike": "Sunday teardown crew — carrying, cleaning, and making sure we leave the place as we found it.",
};

const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

interface FormData {
  name: string;
  referrer: string;
  email: string;
  attending: string;
  team: string[];
  teamMotivation: string;
  van: string;
  allergies: string;
  performing: string;
  paid: string;
  inviteOnly: string;
  doubleCheck: string;
}

const INITIAL: FormData = {
  name: "",
  referrer: "",
  email: "",
  attending: "",
  team: [],
  teamMotivation: "",
  van: "",
  allergies: "",
  performing: "",
  paid: "",
  inviteOnly: "",
  doubleCheck: "",
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
    <CardBorder numeral="VII" title="The Summons" subtitle="Answer the questions to seal your fate">
      <form className="form-single" onSubmit={submit}>

        <div className="ff">
          <label className="ff-label">What name shall we inscribe? *</label>
          <div className="ff-help">Unless you&apos;re Madonna, please include your full name.</div>
          <input className="ff-input" type="text" placeholder="Your name" value={data.name} onChange={(e) => set("name", e.target.value)} required />
        </div>

        <div className="ff">
          <label className="ff-label">Who sent you through the veil?</label>
          <div className="ff-help">Tell us who referred or told you about Bangers&apos; Arcana. Only mandatory if the organisers might not recognise your name.</div>
          <input className="ff-input" type="text" placeholder="Their full name" value={data.referrer} onChange={(e) => set("referrer", e.target.value)} />
        </div>

        <div className="ff">
          <label className="ff-label">Your email *</label>
          <input className="ff-input" type="email" placeholder="E-post" value={data.email} onChange={(e) => set("email", e.target.value)} required />
        </div>

        <div className="ff">
          <label className="ff-label">Will you cross the threshold? *</label>
          <div className="ff-help">19 — 21 June 2026 · Vibäck, Nyköping</div>
          <div className="ff-options">
            {["Yes", "Maybe", "No"].map((opt) => (
              <label key={opt} className={`ff-opt ${data.attending === opt ? "selected" : ""}`}>
                <input type="radio" name="attending" value={opt} checked={data.attending === opt} onChange={() => set("attending", opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="ff">
          <label className="ff-label">Which team calls to you? *</label>
          <div className="ff-help">Everyone is part of a team, and everyone helps out. Select at least 2.</div>
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
        </div>

        <div className="ff">
          <label className="ff-label">Team Motivation *</label>
          <div className="ff-help">Tell us about your selection above. For instance, if you have experience as a chef and suggested Food, let us know.</div>
          <textarea className="ff-input ff-area" placeholder="Your answer" value={data.teamMotivation} onChange={(e) => set("teamMotivation", e.target.value)} rows={3} />
        </div>

        <div className="ff">
          <label className="ff-label">Do you have access to a van we could use? *</label>
          <div className="ff-options">
            {["Yes", "Yes, and I can drive it!", "No"].map((opt) => (
              <label key={opt} className={`ff-opt ${data.van === opt ? "selected" : ""}`}>
                <input type="radio" name="van" value={opt} checked={data.van === opt} onChange={() => set("van", opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="ff">
          <label className="ff-label">Dietary omens & allergies *</label>
          <div className="ff-help">We prepare collective meals — please share any allergies or restrictions so the kitchen oracles may prepare.</div>
          <textarea className="ff-input ff-area" placeholder="Your answer" value={data.allergies} onChange={(e) => set("allergies", e.target.value)} rows={3} />
        </div>

        <div className="ff">
          <label className="ff-label">Will you offer a performance or host an activity?</label>
          <div className="ff-options">
            {["Yes — I'll share details separately", "I'll watch and witness"].map((opt) => (
              <label key={opt} className={`ff-opt ${data.performing === opt ? "selected" : ""}`}>
                <input type="radio" name="performing" value={opt} checked={data.performing === opt} onChange={() => set("performing", opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="ff">
          <label className="ff-label">Have you paid your ticket? *</label>
          <div className="ff-help">
            Swish <strong>[price TBD]</strong> to <strong>072-161 50 63 (Jonas Johansson)</strong> and include the name(s) you are paying for.
            If you do not have Swish, get someone to pay for you and make sure they include your name.
            Please refrain from using Swish cards. If you do not have Swish AND it&apos;s complicated getting someone to help you, bank transfer to:
            <br/><br/>
            Falkenbergs Sparbank<br/>
            Clearing: <strong>8060-6</strong><br/>
            Account: <strong>114 710 287-3</strong><br/>
            IBAN: <strong>SE7580000806061147102873</strong><br/>
            BIC: <strong>SWEDSESS/SWEDSESSXXX</strong>
            <br/><br/>
            No refunds for cancellations after 1st of June.
          </div>
          <div className="ff-options">
            {["Yes", "No, but I will!"].map((opt) => (
              <label key={opt} className={`ff-opt ${data.paid === opt ? "selected" : ""}`}>
                <input type="radio" name="paid" value={opt} checked={data.paid === opt} onChange={() => set("paid", opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
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
          <label className="ff-label">Did you double-check email addresses of those you wish to have invited? *</label>
          <div className="ff-help">If you give us the wrong email your friends won&apos;t receive the invite. Be a good friend.</div>
          <div className="ff-options">
            {["Yes", "I like turtles"].map((opt) => (
              <label key={opt} className={`ff-opt ${data.doubleCheck === opt ? "selected" : ""}`}>
                <input type="radio" name="doubleCheck" value={opt} checked={data.doubleCheck === opt} onChange={() => set("doubleCheck", opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {error && <p className="form-error">{error}</p>}
        <button className="form-submit" type="submit" disabled={submitting}>
          {submitting ? "Casting the spell…" : "Seal my fate"}
        </button>
      </form>
    </CardBorder>
  );
}

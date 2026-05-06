"use client";

import { useState } from "react";
import CardBorder from "./CardBorder";

const FORM_QUESTIONS = [
  { id: "name", label: "What name shall we inscribe?", type: "text", placeholder: "Your name" },
  { id: "attending", label: "Will you cross the threshold?", type: "radio", options: ["Yes, I will step through", "I am still divining", "I cannot, this time"] },
  { id: "performing", label: "Will you offer a performance?", type: "radio", options: ["Yes — music", "Yes — ritual / spoken", "Yes — surprise", "I'll watch and witness"] },
  { id: "helping", label: "Where shall you lend your hands?", type: "checkbox", options: ["The Feast (food)", "The Stage (performance)", "The Cabin (setup)", "The Veil (decor)", "The Closing (cleanup)"] },
  { id: "diet", label: "Any dietary omens?", type: "textarea", placeholder: "Allergies, preferences, sacred restrictions…" },
  { id: "message", label: "A whisper for the oracles?", type: "textarea", placeholder: "Optional. Anything you'd like us to know." },
] as const;

type Question = (typeof FORM_QUESTIONS)[number];

function FormField({ q, value, onChange }: { q: Question; value: string | string[] | undefined; onChange: (v: string | string[]) => void }) {
  return (
    <div className="ff">
      <label className="ff-label">{q.label}</label>
      {"help" in q && (q as { help?: string }).help && <div className="ff-help">{(q as { help?: string }).help}</div>}
      {q.type === "text" && (
        <input className="ff-input" type="text" placeholder={q.placeholder} value={(value as string) || ""} onChange={(e) => onChange(e.target.value)} />
      )}
      {q.type === "textarea" && (
        <textarea className="ff-input ff-area" placeholder={q.placeholder} value={(value as string) || ""} onChange={(e) => onChange(e.target.value)} rows={3} />
      )}
      {q.type === "radio" && "options" in q && (
        <div className="ff-options">
          {q.options.map((opt) => (
            <label key={opt} className={`ff-opt ${value === opt ? "selected" : ""}`}>
              <input type="radio" name={q.id} value={opt} checked={value === opt} onChange={() => onChange(opt)} />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      )}
      {q.type === "checkbox" && "options" in q && (
        <div className="ff-options">
          {q.options.map((opt) => {
            const arr = Array.isArray(value) ? value : [];
            const on = arr.includes(opt);
            return (
              <label key={opt} className={`ff-opt ${on ? "selected" : ""}`}>
                <input
                  type="checkbox"
                  checked={on}
                  onChange={() => onChange(on ? arr.filter((x) => x !== opt) : [...arr, opt])}
                />
                <span>{opt}</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Form() {
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [submitted, setSubmitted] = useState(false);

  const setAns = (id: string, v: string | string[]) => setAnswers((a) => ({ ...a, [id]: v }));

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
      <form className="form-single" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        {FORM_QUESTIONS.map((qq) => (
          <FormField key={qq.id} q={qq} value={answers[qq.id]} onChange={(v) => setAns(qq.id, v)} />
        ))}
        <button className="form-submit" type="submit">Seal my fate</button>
      </form>
    </CardBorder>
  );
}

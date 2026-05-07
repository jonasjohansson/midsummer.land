@AGENTS.md

# Midsummer 2026 Website — Bangers' Arcana

Next.js app (16.2.5, App Router, TypeScript). Tarot-themed invitation site for a midsummer party (19–21 June 2026, Vibäck, Nyköping).

## Stack
- Next.js with App Router, TypeScript
- Tailwind CSS imported but styling is almost entirely custom CSS in `globals.css`
- Fonts: Cormorant Garamond, Cinzel, EB Garamond (via next/font/google)
- Form submits to Google Apps Script → Google Sheets (URL in `.env.local`, gitignored)

## Architecture
- `page.tsx` — single-page layout, scroll-driven effects
- `globals.css` — all custom styling, CSS variables for theming (--bg, --gold, --cream, --ink, etc.)
- Components: Header (responsive hero with `<picture>`), StarField, Intro, CardSection/CardBorder (reusable card layout), TarotCard (3D hover with idle rotation), Form (RSVP with ~20 fields), Divider (star/line/moon variants)
- Assets in `public/assets/` — hero images, tarot card images, location photo, footer banner

## Key patterns
- CardSection wraps CardBorder and optionally includes a TarotCard in a grid layout
- The form section uses parchment scroll styling with SVG displacement filter on edges (filter defined in page.tsx, applied via `.parchment-edge` overlay)
- Scroll arrow opacity driven by scroll position in page.tsx
- TarotCard has smooth enter/leave transitions with timeouts to prevent snap-back
- `.section-wide` uses negative margins to break out of the content column

## Env
- `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` in `.env.local` — Google Apps Script endpoint for form submissions

## Known issues / pending work
- Google Apps Script needs to match current form fields (21 columns: Timestamp, Name, Referrer, Email, Attending, Rest, Arrival, Travel, Van, Team, Team Motivation, Performing, Potluck, Allergies, Bar, Paid, Invite, Invite Only, Emergency, Photo, Message)
- Parchment bottom scroll roll has a minor visual issue (straight edge cutting through the rolled-up part)
- PBR shading on tarot cards was discussed but not implemented

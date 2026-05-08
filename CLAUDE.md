# Midsummerland 2026: The Arcana

Static invitation site for a midsummer party (19 to 21 June 2026, Vibäck 10, Nyköping). Vanilla HTML/CSS/JS — no build step, no framework.

## Files
- `index.html` — the page; all content lives here
- `style.css` — all styles (CSS variables, responsive at 1100px and 720px)
- `script.js` — interactions: starfield, scroll parallax, sticky section nav reveal, audio toggle, mood carousel
- `assets/` — hero, footer, tarot card, location, and `mood/` images
- `audio/arcana-theme.mp3` — theme song (loops)
- `CNAME` — custom domain for GitHub Pages
- `.github/workflows/deploy.yml` — uploads repo root to GitHub Pages on push to `main`

## Deploy
Pushes to `main` deploy to https://midsummer.land/ via GitHub Actions. No build, just upload.

## Local preview
Any static server works. Examples:
- `python3 -m http.server 3000`
- `npx serve -l 3000`

Then open http://localhost:3000/.

## Conventions
- No em or en dashes in copy (use commas, periods, colons, or middle dots).
- UK English.
- Body paragraphs run together with a 1.5em text-indent on consecutive `<p>`s. Callouts and lists keep their own margins.

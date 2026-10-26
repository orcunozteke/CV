# Orçun Özteke · CV / Portfolio site

A single-page, fully static CV site. No build step, no framework, no dependencies
to install. It runs anywhere that serves static files and deploys on **GitHub Pages**
as-is. Live at https://orcunozteke.github.io/CV/

```
.
├── index.html                 ← the whole site (HTML + CSS + JS inline)
├── .nojekyll                  ← tells GitHub Pages to serve /assets verbatim
├── assets/
│   ├── orcun-portrait.jpg      ← hero photo (also used as the share-preview image)
│   ├── favicon.svg             ← OÖ monogram
│   └── OrcunOzteke_CV.pdf      ← the downloadable CV (linked from the buttons)
└── print/
    ├── cv-print.html           ← source of the PDF (A4, two pages, light theme)
    └── make-pdf.js             ← renders cv-print.html → assets/OrcunOzteke_CV.pdf
```

## Editing

- **Content** lives in `index.html` (site) and `print/cv-print.html` (PDF). Keep the two in sync.
- **Share preview**: Open Graph / Twitter tags and a JSON-LD `Person` block are in the `<head>`.
  They point at the canonical URL `https://orcunozteke.github.io/CV/`.
- **Analytics**: a commented-out, cookie-free GoatCounter snippet sits just before `</body>`.
  Create a free account, replace `YOURCODE`, and uncomment.
- **Photo**: the hero image is embedded as a base64 data URI inside the hero `<img>` so the page
  renders even when opened on its own. A copy of the crop is kept at `assets/orcun-portrait.jpg`.

## Regenerating the PDF

```bash
npm i -D playwright && npx playwright install chromium   # once
node print/make-pdf.js
```

## Deploy

GitHub Pages serves the `main` branch from the repo root (Settings → Pages). A push to `main`
is live within about a minute.

## Notes

- Everything is relative-pathed, so it works under any sub-path GitHub Pages assigns.
- Respects `prefers-reduced-motion`. Loads three Google Fonts (Fraunces, Hanken Grotesk,
  JetBrains Mono); self-host them if the site ever needs to run fully offline.

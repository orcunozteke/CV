# Orçun Özteke · CV / Portfolio site

A single-page, fully static CV site. No build step, no framework, no dependencies
to install. It runs anywhere that serves static files, and it is built to deploy on
**GitHub Pages** as-is.

```
.
├── index.html                 ← the whole site (HTML + CSS + JS inline)
├── .nojekyll                  ← tells GitHub Pages to serve /assets verbatim
└── assets/
    ├── orcun-portrait.jpg      ← hero photo (web-optimised)
    ├── favicon.svg             ← OÖ monogram
    └── OrcunOzteke_CV.pdf      ← the downloadable CV (linked from the buttons)
```

## Deploy to GitHub Pages

### Option A · a dedicated project repo (recommended)
1. Create a new repo, e.g. `cv`.
2. Add these files at the **repo root** (`index.html`, `.nojekyll`, and the `assets/` folder).
3. Commit and push to `main`:
   ```bash
   git init
   git add .
   git commit -m "CV site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/cv.git
   git push -u origin main
   ```
4. In the repo: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**,
   Branch = `main`, folder = `/ (root)`, then **Save**.
5. Live in ~1 minute at: `https://<your-username>.github.io/cv/`

### Option B · your user site
If you push to a repo named `<your-username>.github.io`, the site is served at the root:
`https://<your-username>.github.io/`

## Two things to personalise before sharing
1. **LinkedIn URL.** In `index.html`, find the line marked
   `<!-- TODO: replace href with your LinkedIn profile URL -->` and swap the
   `https://www.linkedin.com/` placeholder for your profile URL.
2. **GitHub handle.** The footer/contact links to `github.com/Vitruvius-Saelta`.
   Confirm or change it.

## Swapping the CV or photo later
- Replace `assets/OrcunOzteke_CV.pdf` (keep the filename, or update the three links to it).
- The hero photo is embedded directly in `index.html` as a base64 data URI, so it always
  renders even when the file is opened on its own. To change it: take a 4:5 portrait crop,
  base64-encode it, and replace the long `data:image/jpeg;base64,...` string inside the hero
  `<img>` tag. A copy of the current crop is kept at `assets/orcun-portrait.jpg` for reference.

## Notes
- Everything is relative-pathed, so it works under any sub-path GitHub Pages assigns.
- Respects `prefers-reduced-motion`. Loads three Google Fonts (Fraunces, Hanken Grotesk,
  JetBrains Mono); if you ever need it fully offline, self-host those.

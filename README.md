# Yaswini Hariegowrirajan — Portfolio

A dark, animated developer portfolio built with **React + Vite + Tailwind CSS v4 + Framer Motion**.
Design concept: an "operations console" — nodding to the role-based dashboards, live tracking,
and REST APIs you actually built in GasHub.

## Before you deploy — edit these

Open `src/data/content.js` and fill in:
- `profile.linkedin` — your LinkedIn URL
- `profile.github` — your GitHub URL
- `profile.phone` — your full phone number (currently masked)
- `project.links.repo` / `project.links.demo` — GasHub repo and live demo links (if any)

## Run locally

```bash
npm install
npm run dev
```
Opens at http://localhost:5173

## Build for production

```bash
npm run build
```
Output goes to `dist/`.

## Deploy to Vercel (recommended — easiest)

1. Push this folder to a GitHub repo.
2. Go to vercel.com → "Add New Project" → import the repo.
3. Vercel auto-detects Vite. Click Deploy. Done — you get a live URL instantly,
   and it redeploys automatically on every push.

## Deploy to GitHub Pages

```bash
npm install -D gh-pages
```
Add to `package.json`:
```json
"homepage": "https://<your-username>.github.io/<repo-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
Then in `vite.config.js`, add `base: "/<repo-name>/"` inside `defineConfig({...})`.

```bash
npm run deploy
```

## Structure

```
src/
  data/content.js      ← all your CV data lives here — edit this file, not the components
  components/
    Navbar.jsx          terminal-tab navigation
    Hero.jsx            animated hero: typed role + mock API terminal + route-ping SVG
    About.jsx           profile summary + technical highlights
    Skills.jsx           skills, soft skills, languages
    Projects.jsx        GasHub case study
    Education.jsx       HND IT record + GPA chart + certifications
    Contact.jsx         contact panel
    Footer.jsx
```

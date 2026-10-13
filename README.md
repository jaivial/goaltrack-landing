# GoalTrack Landing

Marketing landing page for [GoalTrack](https://goaltrack.menustudioai.com) — a habit tracker PWA where every day is one square.

- Svelte 5 + Vite, fully static, deployed to GitHub Pages
- 5 languages (en / es / de / fr / pt) via hash routing, no reload
- Screenshots served from Bunny CDN (not stored in this repo)

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build in dist/
```

Deploys automatically to https://jaivial.github.io/goaltrack-landing/ on push to `main`.

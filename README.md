# Niraj Kumar Dangi — Portfolio

A responsive, static portfolio site with a warm cream-and-peach clay design, dark theme support, animated scroll reveals, and a full-text search across projects and skills.

🌐 **Live**: [nirajkrdangi.netlify.app](https://nirajkrdangi.netlify.app/)

## Tech Stack

- **HTML5** — semantic structure with inline SVG icon sprite
- **CSS3** — custom properties, clay/neumorphic design tokens, full responsive breakpoints
- **Vanilla JS** — search, theme toggle, drawer navigation, scroll progress, IntersectionObserver
- **GSAP 3.15** — title reveal animation and scroll-triggered section reveals (self-hosted)
- **Self-hosted fonts** — DM Sans + Sora variable WOFF2

## Run Locally

Serve the root directory with any static server:

```bash
# Python
python -m http.server 4173

# Node (npx)
npx -y serve . -p 4173
```

Then open [http://localhost:4173](http://localhost:4173).

## Project Structure

```
├── index.html          # Main page
├── styles.css          # All styling + responsive breakpoints
├── app.js              # Search, theme, nav, animations
├── 404.html            # Custom error page
├── robots.txt          # SEO crawl rules
├── sitemap.xml         # Sitemap for search engines
├── vendor/
│   └── gsap.min.js     # Self-hosted GSAP 3.15.0
└── public/
    ├── fonts/          # DM Sans & Sora (WOFF2) + licenses
    ├── illustrations/  # Hero & about artwork
    ├── projects/       # Project screenshots & concepts
    ├── resume/         # Downloadable resume PDF
    └── tech-icons/     # Technology brand SVGs
```

## Deployment

This is a static site — deploy to any static host:

- **Netlify**: Connect repo → auto-deploys on push
- **Vercel**: Import project → zero-config deploy
- **GitHub Pages**: Push to `main` → enable in Settings

No build step required.

## License

© 2026 Niraj Kumar Dangi. All rights reserved.

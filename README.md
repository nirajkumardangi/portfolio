# Niraj Kumar Dangi — Portfolio

A responsive, static portfolio site with a warm cream-and-peach clay design, dark theme support, animated scroll reveals, and a full-text search across projects and skills.

🌐 **Live**: [nirajkrdangi.netlify.app](https://nirajkrdangi.netlify.app/)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3.4 + Custom CSS Design Tokens & Claymorphic System
- **Animation**: GSAP (hero title stagger & scroll-triggered reveal animations)
- **Icons & Graphics**: Inline SVG icon sprites & brand icons
- **Fonts**: Self-hosted variable DM Sans & Sora (WOFF2)

## Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) (or the port displayed in your terminal).

## Project Structure

```
├── app/
│   ├── globals.css         # Tailwind base/components/utilities + clay styling tokens
│   ├── layout.js           # Root layout with SEO metadata & theme hydration script
│   ├── not-found.js        # 404 page matching design system
│   └── page.js             # Main page assembling all modular components
├── components/
│   ├── About.jsx           # About me panel with portrait illustration & sparkles
│   ├── Achievements.jsx    # GitHub highlights & badges
│   ├── Blog.jsx            # Notes & blog coming-soon section
│   ├── Certifications.jsx  # Credential cards with verify links
│   ├── Contact.jsx         # Contact panel, paper airplane SVG, social links
│   ├── Education.jsx       # Academic background & final year project
│   ├── Experience.jsx      # Internship experience timeline
│   ├── Footer.jsx          # Copyright & back-to-top button
│   ├── Hero.jsx            # Hero card with GSAP title stagger animation
│   ├── IconSprite.jsx      # SVG symbol definitions
│   ├── PortfolioContext.jsx# React context for theme, live search, and drawer state
│   ├── Projects.jsx        # Featured projects with live search filter
│   ├── ScrollProgress.jsx  # Reading progress bar at top of viewport
│   ├── ScrollReveal.jsx    # GSAP scroll observer for section reveals
│   ├── Sidebar.jsx         # Navigation sidebar, avatar, and resume download
│   ├── Skills.jsx          # Tech stack chips with filter & expand/collapse
│   ├── Stats.jsx           # Stat cards at a glance
│   └── Topbar.jsx          # Header with search, theme toggle, and GitHub activity popover
├── public/                 # Static assets (fonts, illustrations, projects, tech-icons, resume)
├── tailwind.config.js      # Tailwind CSS configuration with design system tokens
├── postcss.config.js       # PostCSS configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and npm scripts
```

## Deployment

Deploy easily to Vercel, Netlify, or any Node.js hosting platform:
- **Vercel**: Import repository → framework automatically detected as Next.js → click Deploy.
- **Netlify**: Connect repository → build command `npm run build` → publish directory `.next`.

## License

© 2026 Niraj Kumar Dangi. All rights reserved.

# HIRETIVO WEBSITE — FULL REBUILD PROMPT
### Inspired by antimatterai.com | GSD Workflow | OpenCode Ready

---

## MASTER CONTEXT (Feed this to every session)

You are rebuilding the **Hiretivo** marketing website from scratch. Hiretivo is a skills-based remote job portal whose core differentiator is a **skill-overlap matching engine** — jobs are surfaced to candidates only when their skills match job requirements. Think of it as the smart layer between talent and opportunity.

The design reference is **antimatterai.com** — replicate its layout, animation philosophy, section structure, and visual language exactly. Replace all Antimatter content with Hiretivo-specific content.

**Tech Stack:**
- Next.js 14 App Router
- TypeScript (strict mode)
- TailwindCSS
- Framer Motion (for all animations)
- shadcn/ui (for utility components only)
- No barrel imports
- Path aliases for cross-folder imports
- Shared components at `src/components/shared/`

---

## DESIGN SYSTEM (Hardcode this across all phases)

### Color Palette
```css
--bg-primary: #000000          /* pure black background */
--bg-secondary: #0a0a0a        /* card/section bg */
--bg-tertiary: #111111         /* hover states */
--text-primary: #ffffff        /* headlines */
--text-secondary: #a0a0a0      /* body / subtext */
--text-muted: #555555          /* labels, captions */
--accent: #ffffff              /* CTA buttons */
--accent-glow: rgba(255,255,255,0.08)  /* glow effects */
--border: rgba(255,255,255,0.08)       /* card borders */
--gradient-hero: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 60%)
```

### Typography
```css
--font-display: 'Editorial New' or 'Playfair Display' — for big headings
--font-body: 'DM Sans' or 'Geist' — for body and UI text
--font-mono: 'JetBrains Mono' — for labels, counters, tags
```

### Animation Rules (Framer Motion)
- **Page load:** staggered fade-up on all hero elements, delay 0.1s between each
- **Scroll reveals:** `whileInView` with `{ opacity: 0, y: 40 }` → `{ opacity: 1, y: 0 }`, viewport `{ once: true, margin: "-100px" }`
- **Hover on cards:** subtle `y: -4` translate + border glow (`box-shadow: 0 0 0 1px rgba(255,255,255,0.15)`)
- **Counter animation:** number roll-up using Framer Motion's `useMotionValue` + `useTransform` when in viewport
- **CTA button:** subtle scale `1.02` on hover + background shimmer effect
- **Nav:** glass blur on scroll (`backdrop-filter: blur(12px)`)
- **Cursor:** custom cursor dot that follows mouse with spring physics

---

## SECTION MAP (Exact replica of antimatterai.com structure)

```
1. Navbar
2. Hero Section
3. Stats Bar
4. Services Section (accordion cards)
5. Case Studies Section (horizontal scroll or grid)
6. Trusted By / Logos Section
7. CTA Banner
8. Footer
```

---

# PHASE 1 — PROJECT SETUP + DESIGN SYSTEM

## Prompt for OpenCode:

```
Set up the Hiretivo marketing website project with Next.js 14 App Router, TypeScript strict mode, TailwindCSS, and Framer Motion.

TASKS:
1. Initialize Next.js 14 project with App Router, TypeScript strict, TailwindCSS
2. Install dependencies:
   - framer-motion
   - @radix-ui/react-navigation-menu (for nav dropdown)
   - clsx
   - tailwind-merge
3. Configure tailwind.config.ts with custom colors:
   - background: { primary: '#000000', secondary: '#0a0a0a', tertiary: '#111111' }
   - text: { primary: '#ffffff', secondary: '#a0a0a0', muted: '#555555' }
   - border: { subtle: 'rgba(255,255,255,0.08)' }
4. Add Google Fonts to layout.tsx:
   - Display: 'Playfair Display' (weights: 400, 700, 900)
   - Body: 'DM Sans' (weights: 300, 400, 500)
   - Mono: 'JetBrains Mono' (weight: 400)
5. Create CSS variables in globals.css matching the palette above
6. Create src/components/shared/ folder
7. Create src/constants/ folder with enums.ts (empty for now)
8. Set up path aliases in tsconfig.json: @/* → src/*
9. Create base layout with black background, text-white, font-body applied globally
10. Add a custom cursor component at src/components/shared/CustomCursor.tsx — a 12px white dot + 40px hollow circle, both following mouse with Framer Motion spring (stiffness: 300, damping: 28). The dot follows instantly, the ring follows with lag.

VERIFY: npm run dev loads a black page with custom cursor working.
```

---

# PHASE 2 — NAVBAR

## Prompt for OpenCode:

```
Build the Navbar component for Hiretivo at src/components/shared/Navbar.tsx — exact replica of antimatterai.com navbar behavior.

VISUAL SPEC:
- Full width, position: fixed, top: 0, z-index: 50
- Default state: transparent background
- On scroll (>50px): backdrop-filter blur(12px) + border-bottom: 1px solid rgba(255,255,255,0.08) + background: rgba(0,0,0,0.8)
- Use Framer Motion `useScroll` to detect scroll and animate background transition
- Left: Hiretivo logo (text-based: "Hiretivo" in Playfair Display, white, 20px)
- Center: Navigation links — Work | Company | Services (dropdown) | For Employers (dropdown)
- Right: "Post a Job" CTA button — white bg, black text, rounded-full, px-5 py-2, hover: scale(1.02)

SERVICES DROPDOWN (opens on hover, animated slide-down):
- Product Design → /design (User Research, UX Flows, UI Systems, Dev Handoff)
- AI Matching Engine → /matching (Skill-Overlap Algorithm, Match Score, Ranked Feed, Bias Filtering)
- Employer Tools → /employers (Job Post Management, ATS Integration, Analytics, Screening)
- Candidate Tools → /candidates (Profile Builder, Skill Tags, Job Feed, Applications)

FOR EMPLOYERS DROPDOWN:
- Starter Plan → /pricing#starter
- Growth Plan → /pricing#growth  
- Enterprise → /pricing#enterprise

ANIMATION:
- Dropdown: opacity 0→1, y: -8→0, over 0.2s ease-out
- Nav links: hover underline grows from left (scaleX 0→1, transform-origin: left)
- CTA button: hover shimmer effect — pseudo-element white gradient sweeps left to right

IMPLEMENTATION NOTES:
- Use Radix NavigationMenu for accessibility
- Mobile: hamburger menu, drawer from right (Framer Motion x: 100%→0)
- No barrel imports
- Export default from file directly
```

---

# PHASE 3 — HERO SECTION

## Prompt for OpenCode:

```
Build the Hero Section for Hiretivo at src/components/home/HeroSection.tsx — exact replica of antimatterai.com hero, adapted for Hiretivo.

VISUAL SPEC:
- Full viewport height (100vh), black background
- Background: radial gradient from top-center — rgba(255,255,255,0.10) at 0% fading to transparent at 55%. This simulates the "light rays" effect from the reference site. Use a CSS radial-gradient on a div positioned absolute behind all content.
- Additionally: render 8–12 thin diagonal lines radiating from top-center using SVG, opacity 0.04, as decorative light rays
- Center-aligned content, vertically centered

CONTENT (replace Antimatter content with Hiretivo):
- Eyebrow label: "HIRETIVO" — font-mono, text-muted, letter-spacing: 0.3em, font-size: 11px, uppercase
- H1: "Find Jobs That Actually Match Your Skills" — Playfair Display, 72px desktop / 40px mobile, font-weight 900, white, line-height 1.05
- Subtext: "Hiretivo's skill-overlap engine hides irrelevant jobs and surfaces only roles where your skills genuinely match — so you spend time applying, not filtering." — DM Sans, 18px, text-secondary, max-width 560px, centered
- CTA row: two buttons side by side
  - Primary: "Find Matching Jobs" — white bg, black text, rounded-full, px-8 py-3.5, font-weight 500
  - Secondary: "Post a Job" — transparent, white border (1px), white text, rounded-full, px-8 py-3.5
- Small trust text below CTAs: "Free to join · 2,400+ skill-matched jobs · Hiring globally"

ANIMATIONS (Framer Motion, staggered):
- All elements start: { opacity: 0, y: 30 }
- Eyebrow label: delay 0.1s, duration 0.6s
- H1: delay 0.25s, duration 0.7s
- Subtext: delay 0.4s, duration 0.6s
- CTA row: delay 0.55s, duration 0.6s
- Trust text: delay 0.7s, duration 0.5s
- Background glow: animate from opacity 0 → 1 over 1.2s on mount
- Primary CTA: hover → scale(1.03), box-shadow: 0 0 30px rgba(255,255,255,0.15)
- Secondary CTA: hover → background rgba(255,255,255,0.05)
```

---

# PHASE 4 — STATS BAR

## Prompt for OpenCode:

```
Build the Stats Bar section at src/components/home/StatsBar.tsx — exact replica of antimatterai.com's rolling number counters section.

VISUAL SPEC:
- Dark section, background: #0a0a0a, border-top + border-bottom: 1px solid rgba(255,255,255,0.08)
- Three stats displayed in a row, separated by vertical dividers
- Font: JetBrains Mono for numbers, DM Sans for labels
- Number font-size: 48px desktop, 36px mobile — white
- Label font-size: 13px — text-muted, uppercase, letter-spacing 0.15em

STATS CONTENT (replace Antimatter numbers):
1. "2,400 +" → "Jobs Listed" 
2. "94 %" → "Match Accuracy"
3. "24/7" → "Platform Available"

NUMBER ROLL ANIMATION (exact replica of antimatterai.com ticker):
- For "2,400": animate digits individually. Each digit scrolls through 0–9 vertically (translateY) before landing on the correct digit. Use a slot-machine style animation.
- Implementation: create a <AnimatedCounter> component that:
  - Takes `value: number`, `duration: number`, `suffix?: string`
  - Uses Framer Motion `useInView` to trigger when visible
  - Uses `useMotionValue` starting at 0, `animate` to target value over `duration` seconds with `ease: [0.25, 0.46, 0.45, 0.94]`
  - Uses `useTransform` to round and display current value
  - Renders formatted number (comma-separated) with suffix
- For "94%": same component, value 94, suffix "%", duration 1.8s
- For "24/7": render as static text (no animation needed), just fade-in

LAYOUT:
- On desktop: flex row, items-center, justify-center, gap between dividers
- On mobile: grid 1 column, stacked
- Each stat: flex col, gap-2, items-start (or centered)
```

---

# PHASE 5 — SERVICES SECTION

## Prompt for OpenCode:

```
Build the Services Section at src/components/home/ServicesSection.tsx — exact replica of antimatterai.com's service cards with hover reveal behavior.

VISUAL SPEC:
- Section heading: "Our Services" — split into "Our" (text-muted) + "Services" (white), Playfair Display, 52px
- Subheading: "Everything you need to find, match, and hire top talent — powered by skill intelligence."
- 6 service cards in a 2-column grid (desktop) / 1-column (mobile)
- Each card: black bg, border: 1px solid rgba(255,255,255,0.08), rounded-2xl, p-8, cursor pointer

CARD STRUCTURE (each has two states — default and hover):
Default state:
  - Number label: "01" / "02" etc. — JetBrains Mono, 12px, text-muted
  - Title (default): shown once — Playfair Display, 28px, white
  - (No description visible)

Hover state (Framer Motion `whileHover`):
  - Border color: rgba(255,255,255,0.2)
  - Background: rgba(255,255,255,0.03)
  - y: -4px
  - Title fades out and second title fades in (or stays — but description slides up from bottom)
  - Description text slides up: { opacity: 0, y: 20 } → { opacity: 1, y: 0 }
  - "Services" sublist appears: each item is a pill tag (border, rounded-full, text-xs)
  - "→" arrow appears top-right on hover

HIRETIVO SERVICES (replace Antimatter services):
01 - Skill-Overlap Matching
     "Our proprietary engine compares your skill profile against job requirements and ranks matches by overlap score — zero noise, only fits."
     Tags: Skill Graph · Match Score · Ranked Feed · Bias-Free

02 - Smart Job Feed  
     "A personalized job feed that only shows roles where your skills actually qualify you. No more spray-and-pray applications."
     Tags: Personalized Feed · Relevance Filter · Real-time Updates · Saved Searches

03 - Employer Job Posting
     "Post roles with precise skill requirements. Our system automatically routes them to the most qualified candidates."
     Tags: Skill Requirements · ATS Integration · Candidate Ranking · Analytics

04 - Candidate Profile Builder
     "Build a rich skill profile with verified skills, experience, and preferences. Your profile does the matching work for you."
     Tags: Skill Tags · Experience Map · Preference Settings · Profile Score

05 - ATS Integrations
     "Connect with Greenhouse, Lever, Workable, and Ashby. Sync job postings and applicants without leaving your existing workflow."
     Tags: Greenhouse · Lever · Workable · Ashby

06 - Remote-First Infrastructure
     "Every feature built for async, global, timezone-aware remote hiring — from application to offer."
     Tags: Remote-First · Async Tools · Global Reach · Timezone Aware

SCROLL ANIMATION:
- Section heading: fade-up on scroll, `whileInView`
- Cards: staggered fade-up — each card delays by index * 0.1s
```

---

# PHASE 6 — CASE STUDIES / JOBS SHOWCASE SECTION

## Prompt for OpenCode:

```
Build the "Featured Matches" showcase section at src/components/home/ShowcaseSection.tsx — adapted from antimatterai.com's case studies section.

CONCEPT: Instead of client case studies, show "Featured Job Matches" — sample job cards that illustrate Hiretivo's matching in action.

VISUAL SPEC:
- Section heading: "Featured" + "Matches" — same editorial split as antimatterai.com
- Subheading: "Real jobs. Real skill matches. See how Hiretivo surfaces the right roles."
- Left column: numbered list of 6 job entries (text-based, like antimatterai.com's case study list)
- Right area: large image/card that changes based on which job is hovered/clicked
- Background: pure black

JOB ENTRIES (numbered list, left side):
01 - Senior Frontend Engineer @ Vercel — Remote
     Tags: React · TypeScript · Next.js
02 - ML Engineer @ HuggingFace — Remote
     Tags: Python · PyTorch · LLM Fine-tuning
03 - Product Designer @ Linear — Remote  
     Tags: Figma · Design Systems · User Research
04 - Backend Engineer @ PlanetScale — Remote
     Tags: Go · MySQL · Distributed Systems
05 - DevOps Engineer @ Fly.io — Remote
     Tags: Docker · Kubernetes · Terraform
06 - AI Product Manager @ Notion — Remote
     Tags: AI/ML · Roadmapping · GTM

MATCH CARD (right side — changes on hover):
- Large card showing:
  - Company logo placeholder (colored gradient circle)
  - Job title + company
  - Match score: "94% skill match" — in a green/white badge
  - Matching skills highlighted: show skill pills, matched ones in white, unmatched in muted
  - "Apply Now →" CTA

ANIMATION:
- List items: fade-in stagger on scroll
- Hover on list item → right card crossfades to selected job (AnimatePresence)
- Active list item: white left border indicator animates in (scaleY 0→1)
- Match card: slides in from right on first load

IMAGE AREA:
- Since we have no real images, use a stylized card with gradient background per job
- Each job has a unique gradient: e.g., Vercel=black/white, HuggingFace=yellow/black, etc.
```

---

# PHASE 7 — TRUSTED BY / LOGOS SECTION

## Prompt for OpenCode:

```
Build the "Trusted By" section at src/components/home/TrustedBySection.tsx — exact replica of antimatterai.com's logo ticker section.

VISUAL SPEC:
- Section label: "TRUSTED BY INDUSTRY LEADERS" — JetBrains Mono, 11px, text-muted, letter-spacing 0.3em, centered
- Subheading: "Powering Remote Hiring for Companies Worldwide" — Playfair Display, 36px, white, centered
- Below: infinite horizontal logo ticker — logos scroll left continuously

HIRETIVO CONTEXT — Use company name text pills instead of logos (since we have no logo assets):
Companies: Vercel · Linear · Notion · Figma · Loom · Raycast · Retool · Supabase · PlanetScale · Fly.io · Resend · Stripe

TICKER IMPLEMENTATION:
- Two identical rows of company name pills side by side (duplicate for seamless loop)
- CSS animation: `@keyframes ticker { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }` 
- Duration: 30s linear infinite
- On hover: animation-play-state: paused
- Each pill: border: 1px solid rgba(255,255,255,0.1), rounded-full, px-5 py-2, text-secondary, text-sm, DM Sans
- Pill hover: border-color rgba(255,255,255,0.3), text-white

BACKGROUND:
- Light curve / glow effect: position a radial gradient (white, very low opacity ~0.05) at center of this section
- Left and right edge: fade-out mask using CSS mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent)

SECTION TRANSITIONS:
- Fade up on scroll enter
```

---

# PHASE 8 — CTA BANNER + FOOTER

## Prompt for OpenCode:

```
Build the CTA Banner and Footer at src/components/home/CTABanner.tsx and src/components/shared/Footer.tsx.

--- CTA BANNER ---

VISUAL SPEC (exact replica of antimatterai.com CTA section):
- Full-width section, black bg, large centered text
- Headline: "We match bold talent with powerful opportunities." — Playfair Display, 56px desktop / 36px mobile, white, line-height 1.1
- Below headline: two links side by side
  - "Find Matching Jobs →" 
  - "Post a Job →"
- Contact email: jobs@hiretivo.com — text-muted, font-mono, 13px

ANIMATION:
- Headline: split by word, each word fades up with stagger delay 0.05s per word (use `.split(' ')` and map to `<motion.span>`)
- On scroll enter: viewport trigger with `once: true`

--- FOOTER ---

VISUAL SPEC:
- Background: #000000, border-top: 1px solid rgba(255,255,255,0.08)
- Layout: 5 columns
  - Col 1: Hiretivo logo + tagline "Skill-matched remote jobs." + email + LinkedIn link + "Based in India · Hiring Globally"
  - Col 2: "For Candidates" — Find Jobs, Build Profile, Skill Tags, Saved Jobs, Applications
  - Col 3: "For Employers" — Post a Job, Pricing, ATS Integration, Analytics, Enterprise
  - Col 4: "Company" — About, Blog, Careers, Press, Contact
  - Col 5: "Resources" — How Matching Works, Skill Guide, Remote Work Tips, Salary Data

LIVE CLOCK:
- Below logo: show live time in user's timezone — "HH:MM:SS" — JetBrains Mono, 13px, text-muted
- Updates every second via setInterval in useEffect
- Label: "Your Local Time"

BOTTOM BAR:
- "Hiretivo © 2026. All rights reserved." — text-muted, 12px
- Right: "Privacy Policy · Terms of Service"

ANIMATION:
- Footer columns: stagger fade-up on scroll (delay 0.1s per column)
```

---

# PHASE 9 — PAGE ASSEMBLY + POLISH

## Prompt for OpenCode:

```
Assemble all sections into the home page at src/app/page.tsx and apply final polish passes.

TASKS:

1. ASSEMBLY
Import and render all sections in order:
- CustomCursor (global, in layout.tsx)
- Navbar (in layout.tsx)
- HeroSection
- StatsBar  
- ServicesSection
- ShowcaseSection
- TrustedBySection
- CTABanner
- Footer

2. SMOOTH SCROLL
Add `scroll-behavior: smooth` to html element in globals.css

3. PAGE TRANSITIONS
Wrap page content in a Framer Motion div:
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.4 }}
>
```

4. SCROLL PROGRESS INDICATOR
Add a thin white progress bar at top of page (fixed, z-50, height 2px) that fills as user scrolls. Use Framer Motion `useScroll` + `useSpring` + `scaleX`.

5. PERFORMANCE
- Add `loading="lazy"` to any images
- Wrap heavy animation components in dynamic import with `ssr: false` if needed
- Add `will-change: transform` to animated elements

6. RESPONSIVE BREAKPOINTS
Audit every section:
- Hero: text scales down (72px → 40px → 32px)
- Services grid: 2-col → 1-col at md
- Stats: 3-col → 1-col at sm
- Footer: 5-col → 2-col → 1-col
- Navbar: desktop links → hamburger at lg

7. SEO
Add metadata in layout.tsx:
- title: "Hiretivo — Skill-Matched Remote Jobs"
- description: "Find remote jobs that match your actual skills. Hiretivo's skill-overlap engine surfaces only roles where your profile genuinely qualifies."
- OG tags, Twitter card

8. FINAL ANIMATION AUDIT
Walk through every section and verify:
- [ ] Navbar blur on scroll ✓
- [ ] Hero stagger on load ✓
- [ ] Stats counter roll-up ✓
- [ ] Service card hover reveal ✓
- [ ] Showcase crossfade ✓
- [ ] Logo ticker infinite scroll ✓
- [ ] CTA word-by-word fade ✓
- [ ] Footer column stagger ✓
- [ ] Custom cursor follows mouse ✓
- [ ] Scroll progress bar ✓
```

---

# PHASE 10 — GSD CONTEXT MANAGEMENT

## How to use this with OpenCode (GSD workflow):

```
SESSION STARTUP RITUAL — paste this at the start of every new OpenCode session:

"CONTEXT RELOAD: We are building the Hiretivo marketing website — a Next.js 14 App Router project styled after antimatterai.com. 
Tech: TypeScript strict, TailwindCSS, Framer Motion. 
Design: pure black (#000000) bg, white text, Playfair Display for headings, DM Sans for body, JetBrains Mono for labels/mono.
Conventions: no barrel imports, no `any` types, enums from src/constants/enums.ts, shared components at src/components/shared/, path aliases @/* → src/*.
Current phase: [PASTE CURRENT PHASE PROMPT BELOW]"
```

### Phase order:
1. Setup + Design System
2. Navbar
3. Hero Section
4. Stats Bar  
5. Services Section
6. Showcase Section
7. Trusted By / Ticker
8. CTA Banner + Footer
9. Page Assembly + Polish
10. Deploy

### One phase per session. Complete → commit → start next session fresh.

---

## CONTENT SUBSTITUTION MAP

| Antimatter Content | Hiretivo Content |
|---|---|
| "Building Digital Solutions That Matter" | "Find Jobs That Actually Match Your Skills" |
| "We empower organizations with AI..." | "Hiretivo's skill-overlap engine hides irrelevant jobs..." |
| "Projects Delivered" stat | "Jobs Listed" stat |
| "Client Satisfaction" stat | "Match Accuracy" stat |
| Product Design / Dev / GTM services | Matching Engine / Smart Feed / Employer Tools |
| Case studies (Clinix, Synergies4...) | Featured job matches showcase |
| "atom@antimatterai.com" | "jobs@hiretivo.com" |
| "Based in Atlanta, GA" | "Based in India · Hiring Globally" |
| Antimatter AI © 2026 | Hiretivo © 2026 |

---

*Generated for Nitin / Hiretivo — GSD workflow, OpenCode sessions*
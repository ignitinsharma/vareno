# Design Checkup — Vareno

**Target**: Vareno dark wolf-themed landing page  
**Register**: Brand (marketing landing page)  
**Composition**: Decide — the page pitches proof and drives toward one dominant action (WhatsApp quote)  
**Date**: 2026-07-18

---

## Overall Score: 30/60

---

## Vital Signs

| Vital | Status | Score | Evidence |
|---|---|---|---|
| Intentionality | Healthy | 10/10 | Custom CSS variable system, geometric wolf SVG silhouette, breathing/pulse/glow animations, glassmorphism navbar, card-surface utility with hover transitions, custom cursor with spring physics. Dark palette (`#0a0a0f` → `#1a1a24`) is consistent across all sections. |
| Readability | Watch | 5/10 | Body text has strong contrast (~14:1). But purple accent `#5E0ED7` on dark `#0a0a0f` achieves only ~2:1 ratio — all CTA links, section labels, and brand mark text fail WCAG AA. Stat labels render at 7px with 0.06em tracking on mobile — below minimum readable size. Service tag text at 10px with low contrast adds strain. |
| Usability | Critical | 0/10 | Form has error/success/sending states, and core task flow works. But focus indicators are effectively invisible — `focus-visible` only changes text color to purple with no outline, ring, or visual boundary. The custom cursor hides native cursors site-wide. No skip-to-content link for keyboard users. |
| Responsiveness | Watch | 5/10 | clamp() typography, breakpoint-aware layouts, and grid adaptation are well executed. But contact form inputs use `text-sm` (14px) which triggers iOS Safari auto-zoom on focus at narrow widths. No `env(safe-area-inset-*)` handling for notched devices. No RTL support. |
| Speed | Healthy | 10/10 | Next.js static generation. Inline SVG for wolf mark. Canvas particle system capped at 100 particles with resize-aware throttling. Framer Motion animates only transform/opacity. No external images. `cta-glow` text-shadow animation applies to one element only. Fast load path. |
| Accessibility | Critical | 0/10 | Purple accent (`#5E0ED7` on `#0a0a0f`) fails WCAG AA at ~2:1. No visible focus rings on any interactive element — `outline` is browser-default but the custom cursor CSS hides native cursor, and no replacement focus indicator exists. Form inputs use `placeholder` as the only label — no `<label>` elements. Touch targets (hamburger, close, social icons) are 36px (below 44px minimum). `prefers-reduced-motion` only suppresses cursor magnetism — wolf-breathe, moon-pulse, cta-glow, and scroll reveals all run regardless. No `aria-live` region for form submission feedback. No `role="alert"` on error messages. |

---

## Critical Issues

### 1. Focus disappears everywhere
**Why it matters**: Keyboard users cannot see where they are on the page. The custom cursor CSS (`cursor: none !important`) removes the native cursor, and the only visual feedback on `:focus-visible` is a color change to purple — which is already the accent color used by many elements. There is no outline, ring, or bounding box.

**File**: `globals.css` (cursor hide rules), all components (missing focus-visible rings)  
**Fix**: `/design interaction` — add visible focus rings and restore focus outline

### 2. Purple accent contrast failure
**Why it matters**: The accent color (`#5E0ED7`) is used for every CTA link, section label (`text-label`), service category name, hover state, brand mark text, and the `cursor-magnetic:hover` effect. On `#0a0a0f` background, the contrast ratio is approximately 2:1 — well below the 4.5:1 minimum for WCAG AA normal text. Users with low vision cannot reliably read these elements.

**Location**: Every component using `text-[#5E0ED7]` or `text-accent`  
**Fix**: `/design recolor` — brighten accent for dark backgrounds, or use a lighter tint

### 3. Form has no accessible labels
**Why it matters**: The contact form (`contact/page.tsx`) uses `placeholder` attributes as the only label for all four fields. Screen readers may not announce placeholder text reliably, and placeholder text disappears on focus, leaving users with no context. There are no `<label>` elements.

**File**: `src/app/contact/page.tsx`  
**Fix**: Add visible `<label>` elements to all form fields

### 4. Animations ignore reduced-motion preference
**Why it matters**: `wolf-breathe`, `moon-pulse`, `cta-glow`, and all `whileInView` scroll reveal animations run regardless of `prefers-reduced-motion`. The CSS media query only targets `.cursor-magnetic` transforms. Users with vestibular disorders get no relief.

**Location**: `globals.css` (animations), all section components (whileInView)  
**Fix**: Wrap animations in `prefers-reduced-motion: reduce` media query

---

## Watch Items

### 1. iOS Safari input zoom trigger
Contact form `<input>` elements use `text-sm` at mobile widths — 14px, which triggers iOS Safari's automatic viewport zoom on focus. This breaks the page layout for every form interaction.

**File**: `src/app/contact/page.tsx`  
**Fix**: Increase form input font-size to at least `1rem` (16px) on screens under 640px

### 2. Touch targets below minimum
The hamburger menu button, close button, and social icon links are 36px × 36px. WCAG recommends 44×44px minimum. On mobile, the nav bar close button and hamburger are particularly difficult to tap accurately.

### 3. Stat labels are too small on mobile
Hero stat labels render at 7px with 0.06em letter-spacing — essentially illegible on mobile screens. The information hierarchy is preserved (number is large) but the context labels need legibility.

### 4. No skip-to-content link
Keyboard users must tab through the entire navbar on every page load. No bypass mechanism exists.

---

## What's Working Well

- **Coherent dark palette**: The four-tier dark surface system (`#0a0a0f` → `#1a1a24`) creates clear depth without shadows
- **Animation personality**: The wolf breathing, moon pulse, and CTA glow are distinctive and on-brand — not generic
- **Performance**: No external images, canvas particle cap, static generation — fast load path
- **Custom cursor polish**: Spring physics, magnetic text, and multi-mode detection are well-executed when the custom cursor is active
- **State coverage**: Contact form has idle, sending, success, and error states
- **Composition**: Decide pattern is clear — the page drives toward WhatsApp conversion, and proof (stats, testimonials, platform coverage) supports the pitch

---

## Prescriptions by Priority

1. **Fix focus visibility** — `/design interaction` to add visible focus rings and accessible focus management
2. **Fix accent contrast** — `/design recolor` to adjust purple accent for WCAG AA on dark backgrounds
3. **Add form labels** — Direct `<label>` elements on contact form fields
4. **Respect reduced motion** — Wrap all animations in `prefers-reduced-motion: reduce`
5. **Fix iOS input zoom** — 16px minimum font-size on contact form inputs at narrow widths
6. **Size touch targets** — 44px minimum on interactive controls
7. **Add skip-to-content** — Invisible skip link at the top of the page

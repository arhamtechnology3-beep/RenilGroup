# Changelog & Project Modifications (`changes.md`)

All updates, enhancements, architectural changes, and asset optimizations for the **Renil Groups** corporate platform are documented in this file.

---

## Change History

### [2026-09-08] — Favicon / Brand Icon Update
- Replaced default Next.js favicon with Renil crest on charcoal (`app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`).
- Added public `favicon-32.png` + `apple-touch-icon.png`; wired icons in root layout metadata.

### [2026-09-08] — Nav Cleanup: No Duplicate / No Dead Submenus
- Removed top-level **Founder** and **Our Story** (still under About dropdown).
- Removed Projects submenu items that were not real pages (filters stay on `/projects`).
- Aligned footer `siteConfig.navigation` with the same top-level set.

### [2026-09-08] — Desktop Mega Menu + Full Submenus
- Added `content/navigation.ts` with full nav tree (About, Businesses verticals, Projects, Contact, Ventures portal).
- Desktop: Businesses opens a mega panel (all 4 verticals + Ventures portal + CTA); About / Projects / Contact use dropdown submenus.
- Mobile drawer: expandable accordion showing every submenu (including Ventures portal under Businesses).

### [2026-09-08] — Founder Overlap + CEO Hover (Live Fix)
- Name plate moved **below** the portrait (no absolute overlay on the photo).
- CEO Message rebuilt as `CeoMessageCard` with clear hover: lift, gold border beam, letter-spacing, expanding rule.
- Requires rebuild/`next start` restart — previous production build was stale.

### [2026-09-08] — Founder Name Plate Overlap Fix
- Moved the left portrait name card lower (`-bottom-8`) with extra bottom padding so “Swapnil Shinde” no longer overlaps the photo.

### [2026-09-08] — Founder CEO Message Hover
- Added hover treatment on the Founder page CEO Message quote: soft lift, gold border emphasis, decorative mark, and expanding underline.

### [2026-09-08] — Final CTA: Hide 09 Off Homepage
- `FinalCta` keeps the “09” watermark + eyebrow only on the homepage (`showIndex`); other pages show “We Grow Together” without the section number.

### [2026-09-08] — Outline Button Contrast Fix
- Fixed invisible outline CTA text on light pages (e.g. Founder “Contact Office”): `outline` now uses charcoal text for ivory surfaces.
- Added `outlineInverse` for dark heroes / Final CTA so light-on-dark secondary buttons stay readable.

### [2026-09-08] — Page Breadcrumbs
- Added shared `Breadcrumbs` component (`components/layout/breadcrumbs.tsx`) with light/dark variants and BreadcrumbList JSON-LD.
- Wired breadcrumbs into all non-home pages (About, Businesses + verticals, Founder, Story, Projects, Contact, Submit Your Business, Privacy, Terms).

### [2026-09-08] — Footer Social Icons
- Added full social row in the footer (LinkedIn, Instagram, Facebook, X, YouTube, WhatsApp).
- Expanded `siteConfig.social` with platform URLs (edit in `content/site.ts`); WhatsApp uses the configured group number.

### [2026-09-08] — Email Validation Live + Stricter Rules
- Contact page restored with live field validation; email validates **as you type** on Contact page, Contact popup, and Business form.
- Stricter email rule: requires `name@domain.tld` with an alphabetic TLD (rejects values like `eaddasd@12121`).

### [2026-09-08] — Live Email Validation on All Forms
- Strengthened shared `validateEmail` (format, spaces, TLD) in `lib/form-validation.ts`.
- Contact popup, Contact page, and Business submission now validate email on blur/change (before submit), with field-level errors.

### [2026-09-08] — Footer Credit: Arham Technology
- Added “Design & develop by [Arham Technology](https://www.arhamtechnology.com)” in the site footer (opens in a new tab).

### [2026-09-08] — Why Renil Atmosphere Background
- Added brand atrium photo wash + ivory/champagne gradients, linen grain, gold hairlines, and marble floor fade behind the three pillars (`why-renil.tsx`).

### [2026-09-08] — Ecosystem Marquee Links
- Each marquee chip/word is now a link: verticals → business pages, partnerships → submit/businesses, principles → Why Renil / About / Founder / Story.

### [2026-09-08] — Homepage Ecosystem Marquee
- Added Magic UI / 21st.dev dual-row marquee (`components/sections/ecosystem-marquee.tsx`) between About and Businesses: vertical chips (Ventures, Developments, Hospitality, Logistics) + reverse values ticker with edge fades.

### [2026-09-08] — Floaters: Left Contact + Scroll Gate
- Moved **Contact Us** sticky strip to the **left** edge; removed reserved right gutter (overlap OK).
- Both Contact Us + WhatsApp stay hidden until the homepage **“One vision / Multiple avenues for growth”** heading (`#floater-gate`); always on for other pages.

### [2026-09-08] — Sitewide Responsive Pass
- Fixed tablet nav: mobile menu now uses `lg:hidden` (was `md:hidden`) so hamburger works 768–1023px; menu z-index raised above floaters.
- Contact rail clearance via `--contact-rail` on main/footer; hero full-bleed breakout; WhatsApp safe-area + offset from Contact strip.
- Contact modal: `dvh` + safe-area padding; phone fields full-width; header meta wraps on small screens.
- Header CTA only at `lg+`; hero dock clears WhatsApp; expanding cards shorter on mobile with collapsed titles; footer links wrap; about/founder overhangs reserved; businesses CTAs full-width on mobile; partnership stage pills stack on small screens.

### [2026-09-08] — Mobile Country Code + Validation on Forms
- Added shared `PhoneInput` (`components/ui/phone-input.tsx`) with country-code select (default 🇮🇳 +91) and digit-only mobile entry.
- Validation helpers in `lib/phone.ts` (length + country mobile rules, e.g. India 10 digits starting 6–9).
- Wired into Contact popup, Contact page, and Business submission form — mobile required with live error checks.

### [2026-09-08] — Split WhatsApp + Contact Us Floaters
- Separated into two site-wide floaters: bottom-right **WhatsApp** chat (`+91 72081 94497`) and right-edge sticky **Contact Us** strip that opens a popup contact form modal.
- Added `components/layout/contact-sticky.tsx`; simplified `whatsapp-floater.tsx`.

### [2026-09-08] — Sticky Vertical Contact Us (WhatsApp)
- Right-edge vertically sticky **Contact Us** strip (mid-viewport) opens a WhatsApp chat panel for **+91 72081 94497**; mounted site-wide in root layout.

### [2026-09-08] — WhatsApp Floater Chat
- Added site-wide floating WhatsApp chat box (`components/layout/whatsapp-floater.tsx`) wired to **+91 72081 94497** (`wa.me/917208194497`), mounted in root layout.
- Stored number in `siteConfig.contact` (`whatsapp` / `whatsappDisplay` / `phone`).

### [2026-09-08] — Why Renil Icon Centering
- Centered medallions with `inset-x-0 flex justify-center` (removed translateZ left-shift) and centered checkmark lists as `w-fit` blocks under each title.

### [2026-09-08] — Why Renil Pillar Icons Fix
- Replaced Lucide medallion icons with reference-matched line SVGs: compass needle (no outer ring), org-chart hierarchy, hourglass — centered in the black/gold discs.

### [2026-09-08] — Why Renil Pillars: Marble Reference Match
- Rebuilt pillars to match the provided marble+gold reference: floating black/gold icon medallions, flared capital, cylindrical marble shaft with gold bands, wider light-marble plinth (Pillar / Foundation stone + gold index), floor contact shadow, retained 3D tilt.

### [2026-09-08] — Why Renil: Architectural Pillar Design
- Redesigned the three Why Renil cards as **classical columns**: gold capital cornice + icon crown, fluted shaft for content, dark plinth base with pillar index, ground shadow.
- Kept 3D tilt via `TiltCard variant="pillar"`.

### [2026-09-08] — Why Renil Cards: 3D Tilt
- Added pointer-driven 3D tilt cards (`components/ui/tilt-card.tsx`) with spring physics, layered depth shadow, and champagne glare spotlight.
- Wired into `why-renil.tsx` pillar cards (05).

### [2026-09-08] — Story Border Beam Visibility Fix
- Replaced faint npm light-theme beam with the proven **padding-ring + dual gold BorderBeam** (brand `#a98345` / `#d8c7ad` / `#8e6d3e`) so the traveling border is clearly visible on Our Story cards.
- Widened the beam arc in `border-beam.tsx` for stronger edge light.

### [2026-09-08] — Story Cards: 21st.dev Border Beam
- Installed `border-beam` (larsen66 / Jakub Antalik) and wrapped Our Story milestone cards with traveling border glow (`size="md"`, warm `sunset` + `theme="light"`) per https://21st.dev/@larsen66/components/border-beam.
- Local Magic UI spin beam in `components/ui/border-beam.tsx` remains for the Founder arch portrait only.

### [2026-09-08] — Section Numbering Placement Fix
- Large section numerals now sit **beside the title** (About `01` motif: upper-right of the header block) on every homepage section — no longer centered behind centered headings.

### [2026-09-08] — Homepage Section Numbering Motif
- Extracted reusable `SectionIndex` / `SectionHeader` (`components/ui/section-index.tsx`) from the About dual-“01” treatment (watermark + caption numeral).
- Applied across homepage sections 02–09: Businesses, Founder, Story, Why Renil, Partnership Fit, Testimonials, Portfolio, Final CTA.

### [2026-09-08] — About Intro Editorial Revamp
- Redesigned `01 / About` in `intro.tsx` for a more elegant Renil presentation: linen atmosphere, gold construction lines, immersive image (no card stack), oversized watermark numeral, pull-quote philosophy, typographic sector rail (replacing pills), and staggered Framer Motion reveals. Principles Feature Steps retained below a refined divider.

### [2026-09-08] — Founder Pillar Cache Bust
- Browser/Next were still serving the old AI portrait; switched asset to `pillar-founder-vision-v3.png`, cleared `.next/cache`, rebuilt and restarted so the cleaned user photo loads.

### [2026-09-08] — Founder Pillar: User Photo minus Gemini Watermark
- Replaced Founder-led vision asset with the provided Gemini-edited founder portrait.
- Removed white Gemini sparkle watermark(s) from the desk area via inpainting; saved as `public/images/pillar-founder-vision.png`.

### [2026-09-08] — Founder Pillar: Use Real Photo
- AI restyles kept looking like a different person; **Founder-led vision** now uses the authentic `public/images/founder.jpeg` so the face matches exactly.

### [2026-09-08] — Founder Pillar Image: Real Face Lock
- Regenerated `pillar-founder-vision.png` from `public/images/founder.jpeg` so the founder’s face stays intact; only wardrobe/setting restyled (charcoal suit, marble atrium).

### [2026-09-08] — About Pointers → Feature Steps (21st.dev)
- Replaced numbered pillar list in `intro.tsx` with Serenity UI / 21st.dev **Feature Steps** pattern (`components/ui/feature-steps.tsx`).
- Auto-advancing steps with gold progress rail, checkmarks, pause-on-hover, and cinematic image transitions (Framer Motion).
- Generated pillar imagery in `public/images/`:
  - `pillar-founder-vision.png`
  - `pillar-long-term-value.png`
  - `pillar-cross-business.png`
  - `pillar-ground-up.png`

### [2026-09-08] — Founder Border Beam Fix
- Rebuilt beam as a **padding-ring + spinning conic gradient** (Magic UI technique) so the light stays visible around the arch photo instead of being masked behind the image.
- Fixed rotate keyframes to preserve `translate(-50%, -50%)` centering.

### [2026-09-08] — Founder Section: Border Beam + Right-Side Hover
- **Left photo**: Magic UI / 21st.dev–style dual `BorderBeam` on the arch portrait (`components/ui/border-beam.tsx`, `ArchFrame beam`), plus hover lift/scale.
- **Right content**: Quote underline grow, principle cards lift/glow/gold accent bar, About link arrow motion (`founder-feature.tsx`).

### [2026-09-08] — Explore Vertical CTA Attract Animation
- Soft gold pulse glow, sheen sweep, and bouncing arrow on the expanding-card **Explore Vertical** button (`cta-attract` in `globals.css` + pill styling in `expanding-cards.tsx`).
- Respects `prefers-reduced-motion`; animations pause on hover/focus.

### [2026-09-08] — Expanding Cards: Hover Expand, Mobile Tap Expand (No Accidental Redirect)
- **Issue**: Card shell clicks/taps conflicted with navigation; invisible inactive CTAs could still receive pointer events.
- **Fix** (`components/ui/expanding-cards.tsx`):
  - Hover / focus / card tap → **expand only**
  - Navigation only via active **Explore Vertical** `Link` (`stopPropagation`)
  - Inactive panel content uses `pointer-events-none`
  - Mobile: first tap expands; no redirect from the card body

### [2026-09-08] — Business Verticals: Unique Expanding-Card Imagery
- **Objective**: Replace reused placeholders on homepage `02 / OUR BUSINESSES` accordion with content-matched images per vertical.
- **Assets** (`public/images/`):
  - `vertical-ventures.png` — boardroom / strategic capital
  - `vertical-developments.png` — luxury development facade at golden hour
  - `vertical-hospitality.png` — premium dining lounge
  - `vertical-logistics.png` — modern logistics hub at dusk
- **Wiring**: Updated `imgSrc` in `components/sections/business-bento.tsx`.

### [2026-09-08] — Homepage Partnership Fit Calculator
- **Objective**: Add an interactive calculator so founders/operators can assess readiness before submitting to Renil.
- **Logic**: Scores against Ventures evaluation pillars — market clarity, team & execution, traction, ecosystem alignment — plus stage weighting and indicative capital/partnership band.
- **UI**: 21st.dev-style interactive calculator (pill toggles, live result card, checklist) in Renil cream/charcoal/gold.
  - `components/sections/partnership-calculator.tsx`
  - Range styles `.renil-range` in `app/globals.css`
- **Homepage**: Inserted after Why Renil (`06 / PARTNERSHIP FIT`); Testimonials → `07`, Portfolio → `08`.
- **Disclaimer**: Indicative only; no score guarantees investment/partnership (aligned with site policy).

### [2026-09-08] — Homepage Testimonials (Trust Marquee)
- **Objective**: Add a trust-building testimonials section with 36 Indian partner voices grounded in Renil’s site themes and verticals.
- **UI/UX**: Dual-row infinite marquee (Magic UI / 21st.dev testimonials-with-marquee pattern).
  - `components/ui/marquee.tsx` + marquee keyframes in `app/globals.css`
  - `components/sections/testimonials.tsx` — pause-on-hover, edge fades, vertical tags
  - `content/testimonials.ts` — 36 quotes (Ventures / Developments / Hospitality / Logistics / Partnership)
- **Homepage**: Inserted after Why Renil, before Portfolio; renumbered Portfolio → `07`, Final CTA section bg → ivory; Portfolio → warm white.
- **Copy note**: Quotes reflect ecosystem messaging (vision + execution, founder-led accountability, long-term value). Footer notes representative partner perspectives.
- **Fix**: Marquee motion moved to explicit `.animate-marquee` CSS (Tailwind `@theme` keyframes were not applying), so rows scroll continuously.

### [2026-09-08] — Interactive Hover CTA + Homepage Section Backgrounds
- **CTA**: Sitewide CTAs now use [Interactive Hover Button](https://21st.dev/@dillionverma/components/interactive-hover-button) (Magic UI / Dillion Verma).
  - Added `components/ui/interactive-hover-button.tsx`
  - `components/ui/shimmer-button.tsx` proxies to it (existing imports unchanged)
  - Variants: `primary` / `secondary` / `outline` / `dark` in Renil cream–charcoal–gold
- **Homepage section backgrounds** (alternating):
  1. Hero — video / dark
  2. Intro — ivory `#f8f5ee`
  3. Businesses — warm white `#fffdf9`
  4. Founder — dark `#201e1a`
  5. Story — ivory
  6. Why Renil — warm white
  7. Portfolio — ivory
  8. Final CTA — warm white (dark panel inside)
- **Typography tokens** in `app/globals.css`: `.heading-display`, `.heading-1–4`, `.section-eyebrow`, `.section-body`, `.section-bg-*`

### [2026-09-08] — Unified Typography Classes Across Pages
- **Objective**: Apply shared `heading-1`, `heading-2`, `heading-3`, and `section-eyebrow` classes from `globals.css` across all route pages and related UI components.
- **Updated files**:
  - `app/about/page.tsx`, `app/story/page.tsx`, `app/founder/page.tsx`
  - `app/contact/page.tsx`, `app/projects/page.tsx`, `app/submit-your-business/page.tsx`
  - `app/privacy/page.tsx`, `app/terms/page.tsx`, `app/not-found.tsx`
  - `app/businesses/page.tsx`, `app/businesses/ventures/page.tsx`, `app/businesses/developments/page.tsx`, `app/businesses/hospitality/page.tsx`, `app/businesses/logistics/page.tsx`
  - `components/forms/business-submission-form.tsx`, `components/ui/expanding-cards.tsx`
- **Notes**: Homepage section components (`components/sections/`) were already migrated; decorative number spans and small UI labels (text-base/text-lg h3) left unchanged.

### [2026-09-08] — About Intro: Redesign + New Atrium Image
- **Objective**: Refresh homepage About section layout and replace the left-hand logo-wall photo with a purpose-generated atrium visual.
- **Design** (`components/sections/intro.tsx`):
  - Soft radial atmosphere on warm white ground; sticky left visual on desktop.
  - Tall rounded image frame (replacing arch+floating card combo) with in-frame philosophy overlay and “Since inception” badge.
  - Sector chips (Ventures / Developments / Hospitality / Logistics).
  - Checklist replaced with numbered editorial pillars `01–04`.
- **Asset**: `public/images/about-intro-atrium.png` — luminous arched atrium, cream/champagne palette, no logo text.

### [2026-09-08] — Portfolio: Unique Card Imagery by Title & Content
- **Objective**: Replace reused placeholder photos on portfolio cards with purpose-generated imagery matching each project title and description.
- **New assets** (`public/images/`):
  - `portfolio-corporate-suite.png` — Renil Corporate Suite & Lounge (arch brand wall / HQ)
  - `portfolio-executive-lounge.png` — Executive Collaborative Lounge (banquette / cove light)
  - `portfolio-ventures-growth.png` — Strategic Enterprise Growth Co. (boardroom / capital)
  - `portfolio-hospitality-destination.png` — Curated Hospitality Destination (fine dining lounge)
  - `portfolio-logistics-hub.png` — Regional Logistics Network Hub (distribution corridor at dusk)
- **Wiring**: Updated `image` paths in `content/projects.ts` (powers homepage portfolio grid + `/projects`).

### [2026-09-08] — Our Story: 21st.dev How It Works Process Layout
- **Objective**: Rebuild the homepage Our Story section using the [How It Works](https://21st.dev/@ravikatiyar162/components/how-it-works) process pattern, adapted to Renil branding, with full device responsiveness.
- **Layout** (`components/sections/story-timeline.tsx`):
  - Numbered horizontal connector rail above cards (desktop / `lg+`).
  - Four process cards with icon tile, tagline, title, body copy, and bullet points.
  - Soft gold radial atmosphere; card hover lift + gold border emphasis.
  - Closing italic quote + archive CTA retained.
- **Responsive behavior**:
  - **Mobile**: single-column stack with vertical gold rail and step badges.
  - **Tablet (`md`)**: 2×2 card grid.
  - **Desktop (`lg`)**: 4-column process flow with connector nodes `1–4`.
- **Note**: Upstream registry source required auth; implementation reconstructed from the live preview visual and Renil milestone content.

### [2026-09-07] — Phase 2: Logo Transparency & Cache Invalidation
- **Objective**: Fix logo background artifacting across dark hero video, navigation header, and footer sections.
- **Asset Processing**:
  - Extracted alpha transparency from `public/logo/renil-crest.png` and `public/logo/renil-wordmark.png`, eliminating the solid cream/white backgrounds (`#FFFEF6` / `#FFFFFF`).
  - Implemented anti-aliased edge de-matting and color recovery targeting signature luxury gold (`#C9AA84`) to avoid faint white fringes when displayed over dark backdrops.
  - Supersampled crest asset to high-DPI 432×412 resolution for sharp rendering on Apple Retina and 4K displays.
  - Preserved original source files in `public/logo/backup/`.
- **Cache Invalidation & Component Updates**:
  - Published versioned assets `public/logo/renil-crest-v2.png` and `public/logo/renil-wordmark-v2.png` to instantly bypass browser disk caches.
  - Updated references across components:
    - `components/layout/site-header.tsx`
    - `components/ui/scroll-locked-video-hero.tsx` (eyebrow badge)
    - `components/layout/site-footer.tsx`
    - `components/sections/final-cta.tsx`
    - `components/layout/mobile-menu.tsx`
    - `app/not-found.tsx`
    - `app/layout.tsx` (favicon / apple-touch-icon metadata)
    - `components/ui/json-ld.tsx` (Organization schema logo)
- **Deployment & Server**:
  - Cleaned Next.js stale image cache.
  - Re-compiled production bundle (`npm run build`) and restarted live server (`npm run start`) on port 3000.

---

### [2026-09-07] — Phase 1: Full Corporate Platform Implementation
- **Specification**: Executed according to `Renil_Groups_Antigravity_Website_Spec.md` and presentation deck.
- **Design System & Styling**:
  - Palette: Deep charcoal `#161513`, warm off-white `#F8F5EE`, champagne gold `#A98345` / `#B99A68` / `#D8C7AD`.
  - Typography: Serif headers (Cinzel / Playfair Display / Cormorant Garamond feel via serif stacks) with modern sans body.
  - Global styles in `app/globals.css` with micro-animations, glassmorphism, and custom utilities.
- **Core Architecture & Routes**:
  - `/` (Home): Scroll-locked video hero with executive floating dock, strategic pillars, live stats, portfolio highlights, founder quote, and final CTA.
  - `/about`: Group overview, corporate values, governance, and organizational vision.
  - `/businesses`: Group vertical ecosystem:
    - `/businesses/developments`: Real estate, land acquisition, and luxury infra.
    - `/businesses/hospitality`: Bespoke dining, stays, and guest services.
    - `/businesses/logistics`: Fleet management and enterprise supply chain operations.
    - `/businesses/ventures`: Early-stage venture incubation and strategic capital.
  - `/founder`: Dedicated biography, leadership philosophy, and message from Swapnil Shinde.
  - `/projects`: Milestone portfolio and strategic real-world developments.
  - `/story`: Group evolution narrative and milestones.
  - `/submit-your-business`: Interactive multi-step partnership & evaluation inquiry form with client-side validation.
  - `/contact`: Official corporate communication channels and headquarters information.
  - `/privacy` & `/terms`: Legal compliance and privacy documentation.
  - `/not-found.tsx`: Custom branded 404 error experience.
- **SEO & Performance**:
  - Automated dynamic `sitemap.ts` and `robots.ts`.
  - Rich JSON-LD Organization schema markup.
  - Metadata OpenGraph and Twitter card configurations in `app/layout.tsx`.

---

## Guidelines for Future Updates
Whenever new changes are implemented:
1. Append an entry under `Change History` with the date, summary, modified files, and user intent.
2. Note any dependency additions, build scripts, or asset transformations.

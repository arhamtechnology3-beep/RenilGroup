# Renil Groups — Antigravity Website Build Prompt
## Premium Corporate Website | 21st.dev-Inspired UI/UX | SEO-First | Responsive

---

## 1. Role and Objective

You are an expert product designer, creative developer, UX strategist, SEO architect and frontend engineer.

Build a premium corporate website for **Renil Groups** using the supplied PowerPoint, photographs and video as the primary source material.

The website must feel like a high-end business group platform for entrepreneurs, investors, developers, hospitality partners and logistics opportunities.

Brand line:

> **RENIL GROUPS — WE GROW TOGETHER**

Primary positioning:

> **Building businesses. Creating value.**

The website must be:

- Elegant and premium
- Modern and visually distinctive
- Responsive on mobile, tablet, laptop and large desktop
- SEO-friendly from the architecture level
- Fast and Core Web Vitals-conscious
- Accessible
- CMS/content-ready
- Easy to maintain
- Built with reusable components
- Suitable for future projects, properties, investments and partnerships

Use the supplied PPT as the source of truth. Do not invent unverified business facts.

---

## 2. Mandatory Reference: 21st.dev

Use **21st.dev** as the UI inspiration and component reference for each section.

Reference:
https://21st.dev/

21st.dev is a registry of React components, marketing blocks, animated heroes, cards, navigation patterns, galleries, backgrounds, gradients, footers and shadcn-compatible UI. Use its visual quality and interaction patterns as inspiration, but do not blindly copy an entire template.

### Important Design Rule

The website must not look like a collection of unrelated copied components.

Every selected component must be adapted into one unified Renil Groups design system:

- Warm ivory background
- Champagne-gold accents
- Charcoal typography
- Architectural arch shapes
- Editorial spacing
- Premium photography
- Restrained motion
- Strong visual hierarchy
- Consistent border radius
- Consistent hover behavior
- Consistent button language

Use 21st.dev-style components where appropriate for:

- Animated hero
- Navigation
- Text reveal
- Magnetic or shimmer buttons
- Bento grids
- Business cards
- Number ticker
- Timeline
- Image gallery
- Portfolio filters
- Testimonial/quote block
- CTA section
- Footer
- Scroll-based transitions
- Background gradients and subtle effects

Do not use flashy neon, gaming, cyberpunk, excessive glassmorphism or overly colorful SaaS styling.

---

## 3. Source Content and Assets

### Primary Source

Use the supplied file:

`Renil_Groups_WEBSITE PPT.pptx`

The PPT defines the content and structure for:

- Home
- About Renil Groups
- Our Story
- Leadership
- Our Businesses
- Renil Ventures
- What Renil Ventures Looks For
- Investment/partnership process
- Submit Your Business
- Renil Developments
- Renil Hospitality
- Renil Logistics
- Projects & Portfolio
- Why Renil
- Contact
- Website implementation requirements

The deck specifically says that marked image areas must be replaced with real photos, logos and verified project details. It also identifies official addresses, phone/email, domain, founder photograph, project photographs and verified company descriptions as content to add later.

### Available Visual Assets

Use the supplied assets:

- Renil Groups office/brand-wall photograph
- Founder photograph
- Office lounge photograph
- Brand-wall/hero reference image
- Generated visual asset
- `from_above_vide_in_last_grow.mp4`

### Asset Rules

- Use the real Renil logo.
- Do not redraw or distort the logo.
- Do not change the founder’s face or identity.
- Do not fabricate project photographs.
- Do not fabricate company registrations, awards, revenue, investment amounts, locations or achievements.
- Do not show placeholder text in the final public-facing design unless clearly marked as an editable content placeholder.
- Add a central asset/content configuration file so images can be replaced easily.
- Use optimized image formats such as WebP/AVIF where possible.
- Add meaningful alt text.

---

## 4. Recommended Technology

Use a modern production-grade stack:

- Next.js with App Router
- React
- TypeScript
- Tailwind CSS
- CSS variables/design tokens
- shadcn/ui primitives where useful
- Motion/Framer Motion for UI transitions
- GSAP + ScrollTrigger only for advanced scroll storytelling
- Lucide icons
- next/image
- next/font
- Zod validation
- Server actions or secure API routes for forms
- MDX or structured TypeScript/JSON content
- Vercel/CDN-ready deployment

### Rendering Strategy

Use server-rendered/static content for SEO-critical pages.

Use client components only for:

- Mobile navigation
- Animated interactions
- Portfolio filters
- Forms
- Carousels
- Video controls
- Scroll-driven experiences

Do not make the whole website client-only.

---

## 5. Suggested Project Structure

```text
app/
  layout.tsx
  page.tsx
  about/page.tsx
  story/page.tsx
  founder/page.tsx
  businesses/page.tsx
  businesses/ventures/page.tsx
  businesses/developments/page.tsx
  businesses/hospitality/page.tsx
  businesses/logistics/page.tsx
  projects/page.tsx
  contact/page.tsx
  submit-your-business/page.tsx
  privacy/page.tsx
  terms/page.tsx
  sitemap.ts
  robots.ts

components/
  layout/
    site-header.tsx
    site-footer.tsx
    mobile-menu.tsx
  sections/
    hero.tsx
    section-heading.tsx
    business-grid.tsx
    founder-feature.tsx
    story-timeline.tsx
    why-renil.tsx
    portfolio-preview.tsx
    final-cta.tsx
  ui/
    premium-button.tsx
    reveal.tsx
    magnetic-button.tsx
    number-ticker.tsx
    image-reveal.tsx
    arch-frame.tsx
    page-transition.tsx
    responsive-video.tsx
    accessible-dialog.tsx
  forms/
    business-submission-form.tsx

content/
  site.ts
  businesses.ts
  projects.ts
  founder.ts
  seo.ts

public/
  images/
  video/
  logo/

lib/
  seo.ts
  validation.ts
  utils.ts
```

---

## 6. Brand System

### Color Direction

Use a warm luxury palette inspired by the supplied office photographs.

```css
:root {
  --ivory: #f7f3ec;
  --warm-white: #fffdf9;
  --sand: #d8c7ad;
  --champagne: #b99a68;
  --gold: #a98345;
  --deep-gold: #8e6d3e;
  --charcoal: #22201d;
  --muted: #746d63;
  --soft-muted: #9b9184;
  --border: rgba(92, 75, 51, 0.18);
  --dark-section: #28251f;
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  --container: 1280px;
}
```

Tune colors against the actual logo and photographs.

### Typography

Use a refined serif and modern sans-serif pairing:

- Display: Cormorant Garamond, DM Serif Display or similar
- Body/UI: Inter, Manrope, Geist or similar
- Use self-hosted/optimized fonts through `next/font`
- Use fluid typography with `clamp()`
- Keep paragraph line length around 55–75 characters
- Use uppercase labels sparingly

### Shape Language

Use:

- Architectural arches
- Rounded rectangles
- Thin gold rules
- Soft shadows
- Large whitespace
- Editorial grids
- Asymmetric but balanced layouts
- Subtle grain only if performance allows

---

## 7. Global Layout and Navigation

### Header

Create a premium sticky header:

- Transparent over the hero
- Transitions into a warm ivory background after scrolling
- Backdrop blur only when useful
- Logo on the left
- Desktop navigation centered or right-aligned
- CTA: `Present Your Business`
- Mobile hamburger menu
- Active page indicator
- Accessible focus states
- Escape closes the menu
- Lock body scroll while mobile menu is open

Navigation:

- Home
- About
- Businesses
- Projects
- Founder
- Contact

Optional Ventures sub-navigation:

- Overview
- What We Look For
- Process
- Submit Your Business

### Footer

Include:

- Logo
- `We Grow Together`
- Short company description
- Main navigation
- Four business verticals
- Contact categories
- Verified social links only
- Privacy Policy
- Terms / Disclaimer
- Copyright

---

## 8. Animation Direction

Use the interaction quality of 21st.dev, but keep the brand restrained and premium.

### Global Motion Rules

- Use smooth easing
- Use short staggered reveals
- Use opacity + transform rather than layout-jumping animations
- Avoid excessive parallax
- Avoid animation on every element
- Avoid infinite distracting motion
- Respect `prefers-reduced-motion`
- Keep animation functional and editorial
- Maintain content visibility if JavaScript is disabled

### Recommended Motion Patterns

- Hero text reveal
- Image mask reveal
- Scroll-triggered section entrance
- Subtle card hover elevation
- Gold line expansion
- Number ticker for section markers
- Horizontal timeline progress
- Image zoom on hover
- Magnetic CTA only on desktop
- Smooth anchor scrolling
- Page transition fade
- Portfolio filter crossfade
- Video fade-in after poster load

---

## 9. Homepage Specification

### Section A — Hero

Eyebrow:

`RENIL GROUPS`

Headline:

> Building businesses. Creating value.

Supporting copy:

> A corporate home for the Renil Groups ecosystem and the people who want to build with it.

Additional copy:

> A growing business group with an entrepreneurial mindset — bringing together investment opportunities, development, hospitality and logistics under one vision.

Buttons:

- `Present Your Business`
- `Explore Our Businesses`

### Hero Visual

Use the supplied brand-wall image and/or video.

Preferred design:

- 90–100vh desktop hero
- 75–90vh mobile hero
- Full-bleed visual with warm overlay
- Architectural arch frame inspired by the office wall
- Editorial headline positioned with generous whitespace
- Logo/brand mark subtly integrated
- Scroll indicator at bottom

### Hero Motion

- Poster image loads first
- Video fades in only after ready
- Muted, autoplay, loop, playsInline
- Provide a pause/control option
- Do not block page rendering
- Use reduced-motion fallback
- Keep text readable over video
- Add a static image fallback for mobile/slow networks

---

### Section B — Introduction

Label:

`01 / ABOUT RENIL GROUPS`

Heading:

> One vision. Multiple avenues for growth.

Copy:

Renil Groups is built around the belief that opportunity becomes valuable when vision is matched with execution.

Layout:

- Two-column editorial section
- Image on one side
- Text on the other
- Arch-shaped image mask
- Thin gold divider
- CTA: `Discover Renil Groups`

---

### Section C — Four Business Verticals

Heading:

> Four verticals. One group vision.

Create four interactive cards:

1. Renil Ventures
2. Renil Developments
3. Renil Hospitality
4. Renil Logistics

Each card must include:

- Index number
- Name
- Short description
- Abstract visual or real image
- Arrow
- Hover reveal
- Link to detail page

Use a premium bento or editorial grid inspired by 21st.dev cards and grids.

Do not make all cards identical in size; use a balanced composition.

---

### Section D — Founder Feature

Use the supplied founder photograph.

Heading:

> Growth is not only about what we build for ourselves. It is also about the opportunities we create for others.

Display:

- Swapnil Shinde
- Founder / Chief Executive Officer
- Founder-led vision
- Entrepreneurial thinking
- Long-term approach to growth

CTA:

`Meet the Founder`

Design:

- Large portrait
- Quote typography
- Subtle gold frame
- Image reveal animation
- No artificial face alteration

---

### Section E — Our Story

Heading:

> From starting small to building an ecosystem.

Timeline:

1. The Beginning
2. The Build
3. The Expansion
4. The Next Chapter

Desktop:

- Horizontal editorial timeline
- Scroll progress line
- Sticky title or visual
- One milestone active at a time

Mobile:

- Vertical timeline
- Stacked cards
- Simple reveal animations

Closing copy:

> The goal is not simply to grow bigger — it is to build better, create value and keep moving forward.

---

### Section F — Why Renil

Heading:

> More than capital. A platform for growth.

Three pillars:

#### Entrepreneurial Mindset

- Built from experience and continuous learning
- Focused on practical opportunities
- Comfortable with building from the ground up

#### Multi-Business Perspective

- Exposure across multiple verticals
- Ability to understand opportunities from different angles
- Potential for cross-business collaboration

#### Long-Term Thinking

- Focus on sustainable value
- Relationships beyond a single transaction
- Execution and growth after the decision

Use a premium 3-column layout with scroll reveal and subtle line animations.

---

### Section G — Portfolio Preview

Heading:

> Show the work. Let the work build trust.

Filters:

- All
- Developments
- Ventures
- Hospitality
- Logistics

Build a visual gallery with:

- Masonry or editorial grid
- Image hover reveal
- Project category
- Project title
- Status
- Location only when verified
- Detail page link

If project information is unavailable, use clearly controlled placeholders in the content file. Never invent project details.

---

### Section H — Final CTA

Heading:

> Let’s build together.

Copy:

> Whether you have a business opportunity, a project, a partnership proposal or a question about Renil Groups — we would like to hear from you.

Buttons:

- `Present Your Business`
- `Contact Renil Groups`

Use:

- Dark charcoal or warm-gold CTA panel
- Arch motif
- Soft background glow
- Large editorial type
- Minimal animated line or grain

---

## 10. About Page

Heading:

> One vision. Multiple avenues for growth.

Sections:

- Who We Are
- What We Believe
- How We Grow
- Vision

Content must remain faithful to the PPT.

Include:

- Founder-led introduction
- Diversified business group explanation
- Opportunity + execution philosophy
- Relationship and long-term value focus
- Image storytelling

SEO:

Title:
`About Renil Groups | Entrepreneurial Business Ecosystem`

Description:
`Learn about Renil Groups, a founder-led business group focused on ventures, developments, hospitality and logistics.`

---

## 11. Our Story Page

Create a premium timeline page using the four source milestones:

- The Beginning
- The Build
- The Expansion
- The Next Chapter

Use scroll-linked progress, editorial numbering and image transitions.

Do not add unsupported dates or historical claims.

---

## 12. Founder Page

Heading:

`Swapnil Shinde`

Role:

`Founder / Chief Executive Officer`

Use the supplied portrait.

Include:

- Founder-led vision
- Entrepreneurial thinking
- Long-term approach to growth
- CEO message
- Leadership principles
- Link to business verticals
- Contact CTA

Do not add unsupported awards, credentials, years of experience, revenue figures or achievements.

---

## 13. Our Businesses Page

Create a central overview page for:

- Renil Ventures
- Renil Developments
- Renil Hospitality
- Renil Logistics

Each vertical needs:

- Name
- Short description
- Focus areas
- Image/visual
- Detail page link
- CTA

Use a reusable business-detail template.

---

## 14. Renil Ventures Page

This is a high-priority conversion page.

Hero:

> Have a vision? Let’s build it together.

Supporting line:

> The investment and strategic partnership arm of Renil Groups.

Explain that Renil Ventures is open to hearing from entrepreneurs, business owners and project leaders with strong opportunities worth exploring.

Potential pathways:

- Investment
- Strategic partnership
- Business collaboration
- Other suitable forms of support

Always include:

> Subject to evaluation and internal assessment.

### What We Look For

#### Business Potential

- Clear problem and meaningful solution
- Defined customer or market opportunity
- Practical and understandable business model
- Potential to scale or expand

#### People & Execution

- Committed founders or management
- Ability to execute the plan
- Strong understanding of the business
- Openness to partnership and accountability

#### Opportunity Fit

- Alignment with Renil’s strategic interests
- Potential for sustainable value creation
- Commercially sensible opportunity
- Room for meaningful collaboration

Disclaimer:

> No single factor guarantees investment. Every opportunity is evaluated on its own merits.

### Process

1. Submit
2. Review
3. Discuss
4. Evaluate
5. Decide
6. Build

Use a 21st.dev-inspired process/timeline component with elegant transitions.

---

## 15. Submit Your Business Page

Heading:

> Your next chapter could start here.

Create a professional, trustworthy form.

Fields:

- Founder / Contact Name
- Business / Project Name
- Industry / Category
- Business Stage
- What Are You Building?
- Investment / Partnership Requirement
- Current Traction or Revenue, if applicable
- Why Should Renil Consider This Opportunity?
- Pitch Deck Upload

### Form Requirements

- Server-side validation
- Zod schema
- Required/optional states
- Accessible labels
- Helpful error messages
- File type and size validation
- Spam protection
- Rate limiting
- Secure upload handling
- Success state
- Failure state
- Privacy/disclaimer consent
- No exposure of private submissions in frontend code

Disclaimer:

> Submission does not guarantee investment or partnership.

Do not connect to a real email/CRM until credentials and destination are supplied. Create a clean integration layer.

---

## 16. Renil Developments Page

Heading:

> Creating spaces. Building value.

Content:

Renil Developments Pvt. Ltd. represents the group’s development and construction-focused vertical.

Create a featured project template with:

- Project name
- Location
- Type
- Renil’s role
- Highlights
- Gallery
- Status

Only display verified project information.

If no verified project data is supplied, create an editable “Featured Project” content object rather than inventing details.

---

## 17. Renil Hospitality Page

Heading:

> Creating experiences with long-term value.

Content themes:

- Experience
- Service
- Consistency
- Customer relationships
- Thoughtful concepts
- Strong operations
- Commercial discipline

Allow future expansion for:

- Properties
- Experiences
- Projects
- Partnerships
- Portfolio stories

---

## 18. Renil Logistics Page

Heading:

> Keeping business moving.

Content themes:

- Connecting businesses, people and operational networks
- Supporting movement of goods and business activity
- Building logistics opportunities with a long-term outlook

Create three visual pillars:

- Connect
- Move
- Grow

Do not claim specific fleet size, locations, clients or capabilities without verification.

---

## 19. Projects and Portfolio Page

Heading:

> Show the work. Let the work build trust.

Create a scalable portfolio system.

Categories:

- Developments
- Ventures
- Hospitality
- Logistics

Each project object should support:

```ts
{
  slug: string;
  title: string;
  category: "developments" | "ventures" | "hospitality" | "logistics";
  status?: string;
  location?: string;
  description?: string;
  role?: string;
  highlights?: string[];
  images: string[];
  featured?: boolean;
  verified: boolean;
}
```

Only show location, status, role and highlights when verified.

---

## 20. Contact Page

Heading:

> Let’s build together.

Contact categories:

- General Enquiries
- Investment Opportunities
- Project Enquiries

The PPT says official address, phone and email must be added later. Build the page so these values come from a single configuration file.

Do not invent contact information.

Include:

- Contact cards
- Inquiry routing
- Contact form
- Map only when official address is verified
- Business hours only when supplied
- Privacy and disclaimer links

---

## 21. SEO Requirements

Implement technical SEO from day one.

### Metadata

Every page must have:

- Unique title
- Unique meta description
- Canonical URL
- Open Graph metadata
- Twitter/X card metadata
- Correct robots directives
- Page-specific keywords naturally integrated
- Social share image

### Structured Data

Use JSON-LD where appropriate:

- Organization
- WebSite
- BreadcrumbList
- Person for founder page
- ContactPage
- CollectionPage for portfolio
- ItemList for businesses

Do not add false data to structured schema.

### Technical SEO

- Semantic HTML
- One clear H1 per page
- Correct H2/H3 hierarchy
- Descriptive URLs
- XML sitemap
- robots.txt
- Canonical URLs
- 404 page
- 301 redirect strategy
- Internal linking
- Breadcrumbs
- Descriptive image alt text
- Lazy-load below-the-fold images
- Preload only critical hero assets
- Avoid layout shift
- Use optimized fonts
- Avoid unnecessary JavaScript
- Ensure crawlable content is present in server-rendered HTML

### Suggested Page Titles

- `Renil Groups | Building Businesses. Creating Value.`
- `About Renil Groups | Entrepreneurial Business Ecosystem`
- `Our Businesses | Renil Groups`
- `Renil Ventures | Investment & Strategic Partnerships`
- `Renil Developments | Creating Spaces. Building Value.`
- `Renil Hospitality | Creating Experiences with Long-Term Value`
- `Renil Logistics | Keeping Business Moving`
- `Projects & Portfolio | Renil Groups`
- `Swapnil Shinde | Founder of Renil Groups`
- `Contact Renil Groups | Let’s Build Together`
- `Submit Your Business | Renil Ventures`

---

## 22. Performance Requirements

Target excellent Core Web Vitals:

- Fast first contentful paint
- Minimal cumulative layout shift
- Responsive interaction
- Optimized hero media
- Responsive image sizes
- Lazy loading
- Video poster fallback
- No huge JavaScript bundle
- No unnecessary animation libraries on every page
- Use dynamic imports for heavy interactive sections
- Compress and resize images
- Use CDN caching
- Avoid autoplay video on poor connections where appropriate

---

## 23. Accessibility Requirements

- WCAG-conscious implementation
- Keyboard navigable
- Visible focus rings
- Semantic buttons and links
- Proper form labels
- Accessible mobile menu
- ARIA only when needed
- Sufficient contrast
- Reduced-motion support
- Captions or text alternative for meaningful video
- Decorative images marked appropriately
- No interaction dependent only on hover

---

## 24. Responsive Behavior

### Mobile

- Single-column layouts where necessary
- Comfortable touch targets
- No horizontal overflow
- Mobile-first typography
- Simplified timeline
- Collapsible navigation
- Optimized hero image/video
- Portfolio grid becomes one or two columns
- Forms become full width
- Avoid excessive fixed-height sections

### Tablet

- Two-column editorial layouts
- Balanced spacing
- Adaptive navigation
- Portfolio grid with flexible columns

### Desktop

- Large editorial type
- Asymmetric grids
- Sticky storytelling sections
- Full-width imagery
- Advanced but restrained motion
- Maximum content width around 1280px

### Large Screens

- Preserve readable line lengths
- Do not stretch content excessively
- Use generous whitespace
- Keep hero content anchored to a clear grid

---

## 25. Content Management

Create centralized content objects for:

- Site settings
- Navigation
- Footer
- Business verticals
- Founder
- Story milestones
- Portfolio projects
- Contact details
- SEO metadata

Use `verified: boolean` or an equivalent content state for data that still needs confirmation.

The site should be easy to update without editing multiple components.

---

## 26. Quality Checklist

Before completing the build, verify:

### Design

- [ ] Premium Renil visual identity
- [ ] Consistent ivory/champagne/charcoal palette
- [ ] Real logo used
- [ ] Real founder photo used
- [ ] No generic template appearance
- [ ] 21st.dev-inspired interactions adapted consistently
- [ ] Good whitespace and hierarchy

### Functionality

- [ ] All navigation links work
- [ ] Mobile menu works
- [ ] All CTAs work
- [ ] Forms validate correctly
- [ ] File upload is secure
- [ ] Portfolio filters work
- [ ] Video fallback works
- [ ] 404 page exists
- [ ] Privacy and terms pages exist

### SEO

- [ ] Unique metadata for every page
- [ ] Sitemap generated
- [ ] Robots file generated
- [ ] Canonical URLs
- [ ] JSON-LD
- [ ] Semantic headings
- [ ] Alt text
- [ ] Internal linking
- [ ] Crawlable server-rendered content

### Performance

- [ ] Optimized images
- [ ] Optimized fonts
- [ ] No layout shift
- [ ] Reduced JavaScript
- [ ] Mobile performance tested
- [ ] Reduced-motion support

### Content Integrity

- [ ] No invented contact details
- [ ] No invented project details
- [ ] No unsupported claims
- [ ] All “add later” fields centralized
- [ ] Investment disclaimer visible
- [ ] Submission disclaimer visible

---

## 27. Final Creative Direction

The final result should feel like:

> A premium founder-led business ecosystem with the visual confidence of a luxury real-estate brand, the clarity of a modern investment platform and the warmth of a relationship-driven corporate group.

It should communicate:

- Trust
- Opportunity
- Execution
- Partnership
- Long-term value
- Growth

Use 21st.dev as a source of high-quality interaction patterns and component inspiration, but make the final website unmistakably **Renil Groups**.

Build the website as a complete, polished, production-ready experience—not as a basic landing page.

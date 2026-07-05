# Shahin Scrap — Marketing Website Plan

## Context

Shahin Scrap is a metal, material, and vehicle scrapping firm founded in **1985** and headquartered in **Ambikapur, Surguja district, Chhattisgarh**. The firm is well-known regionally across Surguja and neighbouring districts through four decades of on-ground operations. It is now expanding beyond local dealings into **formal contractual work with major industrial firms, mining companies (private + public-sector coal, bauxite), road/construction contractors, and government-owned mining PSUs** — sectors where a credible online presence directly gates whether a firm is even considered for procurement conversations.

Today Shahin Scrap has **zero web footprint**, which is a direct opportunity loss when procurement or tender committees search for a vendor. The purpose of this site is therefore **credibility + visibility + lead capture** — not e-commerce, not consumer traffic. Every page funnels the visitor to **WhatsApp chat or a direct phone call** with the firm.

Design guardrails:

- Signal legitimacy, scale, and a 40-year regional track record to procurement teams
- Communicate the exact scope of materials & vehicles handled
- Give a friction-free way to open a contract discussion (WhatsApp + call)
- Read as professional and government-tender-ready (serious, industrial), not flashy

## Decisions Locked

| Item             | Choice                                                                        |
| ---------------- | ----------------------------------------------------------------------------- |
| Framework        | **Astro + Tailwind CSS** (static output, best SEO, near-zero JS)              |
| Language         | English first; Hindi to be added later via Astro's built-in i18n              |
| Structure        | **Multi-page** (7 routes) — each page targets different B2B keywords          |
| Brand name       | **Shahin Scrap**                                                              |
| Founded          | **1985** (40 years)                                                           |
| Motto            | **Trusted Since 1985**                                                        |
| Head office      | Mahamaya Road, Ambikapur, Surguja, Chhattisgarh — 497001                      |
| Phone / WhatsApp | **+91 86021 23226** (same number for both)                                    |
| Operating hours  | **Daily, 8:00 AM – 10:00 PM**                                                 |
| Primary CTA      | **WhatsApp deep-link** (`wa.me/918602123226`) + **click-to-call** phone       |
| Enquiry form     | **Removed** — no form; WhatsApp + call replace it                             |
| Logo             | `/public/logo.png` (bronze crane + scrap, provided)                           |
| Palette          | Bronze/copper metallics on off-white canvas, amber for CTAs (per brand guide) |
| Fonts            | Oswald (logo) · Archivo (headings) · Inter (body) · IBM Plex Mono (numerals)  |
| Certifications   | **Mentioned in prose on About**, not shown as badges/document list            |
| Animations       | Modest fade/slide-on-scroll + **parallax hero + parallax section dividers**   |
| Client logos     | Infinite left→right marquee, **pauses on hover** — SECL, MKG, Adani           |
| Workflow visuals | **Custom SVG flowcharts** in brand colors (sharp, tiny, translatable text)    |
| Imagery          | **Free stock photos** (Unsplash / Pexels / Pixabay) sourced per section       |

## Sitemap & Content Plan

### zc1. `/` — Home

Single-scroll landing that establishes credibility fast and funnels to WhatsApp/call.

- **Hero**: Full-viewport with parallax bronze gradient over a scrap-yard hero photo (aerial or wide shot). Headline: *"Trusted Since 1985. Built for India's Mines & Industry."* Sub: one-line positioning about contractual scrap solutions from Surguja. Small ribbon badge: `Trusted Since 1985`. Two CTAs: `Chat on WhatsApp` (amber, primary) + `Call Now` (outline). Both use `tel:+918602123226` / `wa.me/918602123226`.
- **Trust strip**: Mono-font proof-points — `Since 1985 · 40 Years`, `Ambikapur • Surguja`, `20 Tonnes CO₂ Avoided`, `Contracts with PSUs & Industrials`.
- **What We Handle** (2-col preview grid): Metals & Materials · Vehicle Scrap. Each card links to its full page. Each card has a supporting stock photo.
- **How We Work** (3-step SVG flow, parallax reveal): Survey → Contract → Lift & Process. Establishes professional, contract-driven workflow (distinct from informal "kabadi" trade).
- **Companies We've Worked With**: infinite left→right **logo marquee** (pauses on hover) — currently SECL, MKG, Adani; loop them to fill the strip until more logos arrive.
- **Environmental impact strip**: single-row band — `20 Tonnes CO₂ Avoided` · `Formal Documentation on Every Contract` · `MSTC & Compliance-Ready`. Aligned tonally with SECL's *"Greening the Future"* framing.
- **Featured Case Study** (1 highlighted card): Teaser for the strongest project → link to `/case-studies`.
- **Closing CTA band**: Dark slate bg with amber `Chat on WhatsApp` and outline `Call Now`.

### 2. `/services` — Metals, Materials & Contractual Scrap

The core business of buying/processing material scrap **and** running fixed-rate contracts with industrial/construction firms.

- Intro paragraph: contract-based scrap procurement at industrial scale from a Surguja-based operator.
- **Materials grid** (icon + stock photo + name + short description per card):
  - Iron & Steel · Copper · Brass · Aluminium · Plastic · Tyres · Mixed Industrial Scrap
- **Contractual Pricing Model** (new sub-section) — explains fixed-rate contracts with industrial/construction/road-building firms: rates locked for the contract duration, periodic lifting at the agreed rate, settlement at cycle-end. This is a distinct commercial offering that the firm actively wants highlighted.
- **Two SVG workflow diagrams** (bronze/copper palette, mono numerals):
  1. **Spot Purchase Flow**: Enquiry → Site Survey → Weight & Grade → Quote → Lift → Payment.
  2. **Contract Flow**: Enquiry → Site Survey → Rate Negotiation → **Contract (rate fixed for term)** → Scheduled Lifting → Cycle Settlement.
- **Who this is for**: mining sites, industrial plants, road/construction contractors, demolition projects, government auctions (MSTC portal).
- CTA: `Chat on WhatsApp` + `Call Now`.

### 3. `/vehicle-scrap` — Vehicle & Heavy Equipment Scrap

Distinct high-value vertical — separate page for SEO on mining vehicle scrap.

- Intro: end-of-life mining and heavy-equipment scrapping under formal contracts.
- **Scope note (important)**: Shahin Scrap services **mining vehicle contracts across regions**, but **commercial highway/road vehicle scrap is handled only within Surguja and adjacent districts**. This is called out clearly to set expectations for out-of-region enquiries.
- **Vehicle categories** (icon + stock photo grid):
  - Mining vehicles (pan-region): Dozers, Poclain (excavators), Dumpers, Loaders
  - Construction equipment (pan-region)
  - Commercial trucks & trailers (**Surguja only**)
- **SVG workflow**: On-site Assessment → Valuation → Contract → Cutting/Lifting → **Documentation for Regulatory Disposal**.
- Short note on why formal partners matter (vs informal scrappers) — GST invoicing, disposal certificates, chain-of-custody.
- CTA: `Chat on WhatsApp` + `Call Now`.

### 4. `/case-studies`

Rename of "Projects". User-preferred framing. Content is **creative placeholder** — real details drop in when client provides them.

- **Index page**: card grid — each card = 1 project (stock hero image, sector chip, scope one-liner, tonnage/scale figure). Scroll-reveal on cards.
- **Detail template** (`/case-studies/[slug]`): banner image, situation → scope → execution → outcome, with mono-figure callouts (tonnage, duration, equipment lifted). Client names anonymised where required.
- **Starter set (3 case studies)** covering the firm's core verticals:
  1. **Metal Scrap — Industrial Plant Iron & Steel Procurement** (client type: private steel-adjacent industrial unit)
  2. **Vehicle Scrap — End-of-life Mining Equipment Decommission** (client type: PSU coal-mining subsidiary)
  3. **General / Civil Scrap — Road Construction Site Clearance Contract** (client type: highway contractor)

### 5. `/companies` — Companies We've Worked With

Expanded page complementing the home marquee.

- **Logo grid**: real logos in place — `SECL`, `Maa Kudargarhi Group`, `Adani`. Loop/repeat until more arrive.
- **Sectors served** (text listing): Public-sector coal & mining · Private mining conglomerates · Road & highway contractors · Industrial plants · Government auctions (MSTC) · **Civil / General**.
- Short paragraph on repeat engagements & long-term contract capability.

### 6. `/about` — About Us + Our Vision + Regional Context

Three clear sections on one page.

- **About**: 40-year story arc — origin in Ambikapur (1985), growth from a locally-known scrap dealership to a contractual B2B operator serving mining and industrial firms across Surguja and beyond. Family heritage + modern professional operations.
- **Our Vision**: forward-looking — becoming the preferred scrap partner for large-scale mining, road-infrastructure, and industrial decommissioning across Chhattisgarh and central India, with responsible recycling and full documentation.
- **The Surguja Advantage** (regional R&D content):
  - Surguja sits at the intersection of Chhattisgarh's coal belt (SECL operations in Bishrampur/Baikunthpur nearby), bauxite reserves in Mainpat, and expanding NH-43 / rural road infrastructure — all high-scrap-generation activities.
  - Shahin Scrap operates within the formal ecosystem: MSTC-portal auctions, CG State Pollution Control Board compliance, GST-registered invoicing, MSME/Udyam registration.
  - Being locally headquartered means faster site response, lower logistics cost, and long-standing relationships with regional transport & processing networks.
- **Compliance line** (prose): *"Shahin Scrap operates with all statutory registrations — GST, State Pollution Control Board clearances, MSME/Udyam — required to bid for private contracts and government tenders. Documentation is shared directly with associates during onboarding."*
- **Leadership** (optional): 1–2 names/photos of principals to humanise.

### 7. `/contact`

The conversion page. No form — WhatsApp and phone are the only channels.

- **Primary CTA block** (dominant, full-width):
  - Large `Chat on WhatsApp` button → `wa.me/918602123226?text=Hello%20Shahin%20Scrap%2C%20I%27d%20like%20to%20discuss...`
  - Large `Call Now` button → `tel:+918602123226`
- **Address block**: `Mahamaya Road, Ambikapur, Surguja, Chhattisgarh — 497001` with Google Maps embed centred on the address.
- **Operating hours**: `Daily, 8:00 AM – 10:00 PM`.
- No form component built.

## Stock Imagery Strategy

All photography sourced from **Unsplash / Pexels / Pixabay** (free / CC0). Assets downloaded and self-hosted in `/public/images/<section>/` — no hotlinking. Every image gets a WebP conversion + descriptive alt-text. Target file size < 200 KB per image after optimisation.

**Per-section image slots + suggested search terms** (English keywords for the stock sites):

| Slot                              | Suggested search terms                                                       |
| --------------------------------- | ---------------------------------------------------------------------------- |
| Home hero background              | `scrap yard aerial`, `industrial recycling`, `steel scrap yard`              |
| Home — Metals & Materials card    | `metal scrap pile`, `copper wire scrap`, `iron scrap heap`                   |
| Home — Vehicle Scrap card         | `dump truck scrapyard`, `mining excavator dismantled`, `heavy machinery`     |
| Services — Iron & Steel           | `steel scrap`, `rebar scrap`, `iron pile`                                    |
| Services — Copper                 | `copper wire`, `copper coil scrap`                                           |
| Services — Brass                  | `brass scrap`, `brass fittings`                                              |
| Services — Aluminium              | `aluminium scrap`, `aluminium ingot`                                         |
| Services — Plastic                | `plastic recycling`, `plastic scrap bales`                                   |
| Services — Tyres                  | `used tyres stack`, `tyre recycling`                                         |
| Services — Mixed Industrial       | `industrial scrap yard`, `mixed metal scrap`                                 |
| Vehicle — Mining vehicles         | `mining dozer`, `poclain excavator`, `mining dump truck`                     |
| Vehicle — Construction equipment  | `construction machinery yard`, `loader scrap`                                |
| Vehicle — Commercial trucks       | `truck scrapyard india`, `end of life truck`                                 |
| Case study 1 — Metal / industrial | `industrial steel plant`, `metal scrap crane`                                |
| Case study 2 — Mining vehicle     | `mining vehicle decommission`, `heavy equipment cutting`                     |
| Case study 3 — Road / civil       | `road construction site cleanup`, `highway construction scrap`               |
| Environmental strip background    | `recycling green industry`, `sustainability industrial`                      |
| Footer / About placeholder        | `industrial workers india`, `manufacturing team`                             |

Where a section has multiple candidate photos, pick the one that best matches the bronze/warm palette so the imagery feels cohesive with the brand. Prefer wide, uncluttered shots for backgrounds; tight, texture-rich shots for cards.

## Global Layout Components

- **Header**: fixed, `--canvas` bg with bronze bottom-border. Logo (left) + nav (right). Mobile hamburger. Right-most: amber `WhatsApp` button + phone icon `tel:` link.
- **Footer**: `--slate-industrial` bg with `--gold-pale` text. Columns: quick links · materials handled · Ambikapur address · WhatsApp + phone. Bronze logo mark. Hindi language-toggle placeholder for future.
- **Floating WhatsApp bubble**: bottom-right on all pages, all breakpoints. Small pulse animation. Persistent.
- **Reusable components**:
  - `SectionHeading` (Archivo, bronze underline accent)
  - `StatBlock` (IBM Plex Mono numerals, small caption)
  - `MaterialCard` (icon + stock photo + label + short blurb)
  - `CaseStudyCard`
  - `ClientMarquee` (infinite CSS marquee, `animation-play-state: paused` on `:hover`)
  - `WorkflowSVG` (three variants: `spot`, `contract`, `vehicle`)
  - `WhatsAppButton` / `CallButton` (share a config for phone number)
  - `CTABand` (dark slate bg + amber WhatsApp + outline Call)
  - `FloatingWhatsApp`

## Animation & Interaction

- **Parallax**: hero background + subtle parallax on section dividers (bronze texture strips). CSS `translate3d` on scroll — no JS library needed.
- **Scroll-reveal**: fade + slide-up on cards and stat blocks. Use `IntersectionObserver` in a small Astro island; respect `prefers-reduced-motion`.
- **Client marquee**: pure CSS `@keyframes` translate loop; `:hover { animation-play-state: paused; }`.
- **Button micro-interactions**: amber CTA gets subtle scale-up on hover, floating WhatsApp bubble has a slow pulse.

## Content & Copy Tone

- **Voice**: measured, industrial, factual. No marketing fluff or emoji. Present tense, active voice.
- **Numbers matter more than adjectives** — every claim ideally backed by a figure (years, tonnes, sites, vehicles).
- **English copy first**; sentences short and translatable so Hindi drop-in later is clean.
- Placeholder copy written directly in components; client revises line-by-line before launch.

## Project Structure (Astro)

```
shahin_scrap/
├── public/
│   ├── logo.png                    (existing)
│   ├── clients/
│   │   ├── secl.png                (existing: SECL logo.png)
│   │   ├── mkg.webp                (existing: mkg_logo-new.webp)
│   │   └── adani.webp              (existing: adani_ent-footer.webp)
│   └── images/
│       ├── hero/                   (home hero background)
│       ├── materials/              (services page — per-material photos)
│       ├── vehicles/               (vehicle-scrap page)
│       ├── case-studies/           (per-case-study hero + inline)
│       └── strips/                 (environmental strip, dividers)
├── src/
│   ├── layouts/BaseLayout.astro    (header, footer, brand CSS vars, font imports, FloatingWhatsApp)
│   ├── components/                 (SectionHeading, StatBlock, MaterialCard, ClientMarquee, WorkflowSVG, WhatsAppButton, etc.)
│   ├── pages/
│   │   ├── index.astro
│   │   ├── services.astro
│   │   ├── vehicle-scrap.astro
│   │   ├── case-studies/index.astro
│   │   ├── case-studies/[slug].astro
│   │   ├── companies.astro
│   │   ├── about.astro
│   │   └── contact.astro
│   ├── content/case-studies/       (Astro content collection — MD/MDX files)
│   ├── config/site.ts              (phone, WhatsApp, address, hours — single source of truth)
│   └── styles/global.css           (Tailwind + brand CSS variables from guide)
├── astro.config.mjs
├── tailwind.config.mjs             (extend theme with brand tokens)
└── package.json
```

Brand CSS variables from the provided brand guide go verbatim into `src/styles/global.css`; Tailwind's `theme.extend.colors` mirrors them so classes like `bg-copper-aged text-canvas` work. Contact details live in `src/config/site.ts` so every WhatsApp / tel link stays in sync.

## Verification

- `npm run dev` → walk every route, confirm nav + CTAs, resize to mobile.
- Tap every `WhatsApp` and `Call` button on a real phone — confirm they open WhatsApp / dialer with `+91 86021 23226` and pre-filled text.
- Lighthouse on `/` and `/services` — target Performance ≥ 95, SEO 100, Accessibility ≥ 95.
- Verify client marquee runs, pauses on hover, restarts smoothly.
- Verify parallax + scroll-reveal degrade cleanly under `prefers-reduced-motion`.
- Verify Google Maps embed loads the Mahamaya Road address.
- Cross-browser sanity check (Chrome + Safari, mobile Safari).
- Confirm brand palette + fonts render exactly per the brand guide (Oswald logo, Archivo H1, Inter body, mono numerals in stat blocks).

## Open Items (need from client)

- **Real case-study content + photos** to replace the three creative placeholders.
- **Additional client logos** beyond SECL / MKG / Adani (when available).
- **Optional leadership names/photos** for About page.

## Deferred to Later Phases

- Hindi translations (Astro i18n scaffold + translated copy after English is signed off).
- Real photography for yard/vehicles/operations (stock in the meantime).
- Video hero (15s muted yard loop) — drop in when footage available.
- CMS integration if content updates become frequent (Sanity/TinaCMS — only if needed).
- Google Analytics / Search Console setup post-launch.
- Downloadable Company Profile PDF (add later if requested).
- B2B FAQ page (add later if procurement queries repeat).

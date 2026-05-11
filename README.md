# Blue3 Investimentos — Design System

## About the Brand

**Blue3 Investimentos** is a premier Brazilian investment advisory firm (assessoria de investimentos), founded in 2009 by Wagner Vieira and Leone Cabral in Franca, São Paulo. It is a partner firm of **XP Investimentos** and one of the largest and most awarded investment advisory operations in Brazil.

- **+45,000 clients** — +R$50B under custody — **94.5 NPS**
- **16 offices** across SP, MG, RJ, GO, DF, PR, SC
- Products range from digital/starter investors to ultra-high-net-worth private clients

### Sources
- Website: https://www.blue3investimentos.com.br/
- Sobre nós: https://www.blue3investimentos.com.br/sobre
- No Figma link or codebase was provided. Design system was reverse-engineered from the live website.

---

## Products / Surfaces

1. **Blue3 Website** — Marketing site (Webflow). Hero videos, service tiers, team, press.
2. **Investment Tiers**: Digital · Exclusive · Signature · Unique · Private
3. **Blue3 Ecosystem**: Blue3 Asset, Blue3 Capital, Blue3 Empresas, Blue3 Private, Blue3 Research, Troon Capital, Oby Capital, It's Money, etc.

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Language**: Brazilian Portuguese throughout
- **Tone**: Warm yet authoritative. Aspirational but grounded. Like a trusted advisor, not a bank.
- **POV**: Speaks directly to the client — "você", "seu", "sua jornada". Very personal.
- **Casing**: Sentence case throughout. No ALL CAPS for headings.
- **Copy style**: Short punchy headlines, longer explanatory body. Tagline pattern: "*X. Y.*" — e.g. *"Sua jornada tem um plano. Seu plano tem a Blue3."*
- **Emoji**: Never used. Zero emoji in any context.
- **Numbers**: Large stats formatted with `+` prefix and line-break between number and unit — e.g. `+45 mil Clientes`
- **Metaphors**: Journey (jornada), path, seed/growth — investment phases named Acumular / Preservar / Rentabilizar
- **CTAs**: Imperative + direct: "Abra sua conta", "Monte seu plano", "Fale conosco", "Assistir"
- **Disclaimers**: Long CVM-mandated legal text in footer, small/muted

---

## VISUAL FOUNDATIONS

### Colors
- **Primary background (dark)**: Deep navy `#0D1C3A` — used for hero, footer, dark sections
- **Primary blue accent**: Electric/medium blue `#1B6FEF` — CTAs, links, highlights
- **Light blue tint**: `#E8F0FE` — subtle backgrounds
- **White**: `#FFFFFF` — text on dark, cards
- **Off-white / Light gray**: `#F5F6F8` — light section backgrounds
- **Dark text**: `#0D1C3A` (same as primary dark) — headings on light bg
- **Medium gray**: `#6B7280` — body/secondary text
- **Border/separator**: `#E2E6EC`
- **Gold/Amber**: `#C9A84C` — subtle use for premium tiers (Unique, Private) — inferred

### Typography
- **Display/Heading font**: likely a premium geometric sans-serif. Closest Google Fonts match: **"Plus Jakarta Sans"** (substituted — original may be Neue Montreal or GT Walsheim)
- **Body font**: **"DM Sans"** — clean, readable, modern
- **Monospace**: Not significantly used
- **Scale**: Very large headlines (48–80px), medium body (16–18px), small labels (12–13px)
- **Weight**: 700 for display, 500/600 for sub-headings, 400 for body

### Spacing & Layout
- **Max content width**: ~1200px, centered
- **Section padding**: 80–120px vertical
- **Grid**: 12-column, generous gutters (24–32px)
- **Card corner radius**: 12–16px (subtle, not pill-shaped)
- **Button radius**: 6–8px (slightly rounded but not pill)

### Backgrounds
- **Hero sections**: Full-bleed dark navy with looping background video
- **Mid sections**: Alternating white / light gray (#F5F6F8)
- **Footer**: Dark navy (matches hero)
- **Cards**: White with subtle box-shadow; on dark BG: slightly lighter navy with border

### Animation & Motion
- Smooth fade-in on scroll (subtle, 300–500ms)
- Video autoplay loops (muted) for hero backgrounds
- No bouncy/spring animations — understated, professional
- Hover on nav links: subtle underline or color shift
- CTA button hover: slight darken

### Hover & Interaction States
- **Buttons**: Background darkens ~10% on hover; subtle shadow lifts on press
- **Nav links**: Color brightens to blue accent on hover
- **Cards**: Subtle shadow elevation increase, slight translateY(-2px) lift

### Shadows
- Cards: `0 2px 12px rgba(13,28,58,0.08)` — soft, large radius
- Modal/overlay: `0 8px 40px rgba(13,28,58,0.18)`
- No harsh/inset shadows

### Borders
- `1px solid #E2E6EC` on light backgrounds
- `1px solid rgba(255,255,255,0.1)` on dark backgrounds

### Imagery
- **Style**: Real photography — professional, human-focused (clients, advisors, offices)
- **Color vibe**: Warm, natural tones. Slightly desaturated/editorial.
- **Full-bleed images** for office locations section
- **Video**: looping background hero videos are central to the brand

### Corner Radii
- Buttons: 6px
- Cards: 12–16px
- Badges/pills: 999px (fully rounded)

### Iconography
- See ICONOGRAPHY section below

---

## ICONOGRAPHY

- **No custom icon font** found; icons are minimal in use
- Simple decorative SVG elements (lines, dots, arrows) in section dividers
- **No emoji** used anywhere
- External press logos (InfoMoney, Forbes, etc.) used as SVG images
- Icons are primarily functional (navigation arrows, form checkmarks)
- Closest CDN match for any needed icons: **Lucide Icons** (https://unpkg.com/lucide@latest)

---

## Files

```
README.md                   — This file
SKILL.md                    — Skill definition for Claude Code
colors_and_type.css         — CSS custom properties: colors, type scale, spacing
assets/
  logo-blue3.svg            — Primary Blue3 logo (placeholder)
  logo-blue3-white.svg      — White variant for dark backgrounds
preview/
  colors-brand.html         — Brand color swatches
  colors-semantic.html      — Semantic color tokens
  type-display.html         — Display/heading type specimens
  type-body.html            — Body and label type specimens
  spacing-tokens.html       — Spacing scale tokens
  shadows-radii.html        — Shadows and border radii
  buttons.html              — Button states
  forms.html                — Form inputs
  cards.html                — Card components
  badges-tiers.html         — Investment tier badges
  nav.html                  — Navigation header
  hero.html                 — Hero section component
  footer.html               — Footer component
ui_kits/website/
  index.html                — Full website UI kit (interactive prototype)
  Header.jsx                — Navigation header component
  Hero.jsx                  — Hero section
  TierSection.jsx           — Investment tiers section
  StatsSection.jsx          — Stats/numbers section
  Footer.jsx                — Footer component
```

# Design System — Kedai APA

## Design Direction

Kedai APA uses a **warm editorial food-business aesthetic**: approachable, modern, clear, and conversion-oriented.

The design should feel like a polished local brand rather than a generic restaurant template.

## Design Principles

### Clarity before decoration

Information hierarchy comes first. Visitors should understand the offering, menu, catering, and ordering path without hunting for information.

### Warmth with restraint

Use warm surfaces, strong food imagery, confident typography, and subtle accents. Avoid excessive visual effects that compete with food and business information.

### Motion with purpose

Use animation for:

- entrance/reveal hierarchy,
- navigation feedback,
- hover/tap feedback,
- modal transitions,
- cart/order confirmation.

Avoid animation that delays access to essential information.

### Mobile-first conversion

The primary action should remain easy to reach on small screens. Ordering interactions should require minimal steps.

## Visual System

The existing implementation is the source of truth for exact tokens. When changing visual tokens, update the implementation and this document together.

### Colour roles

```text
Primary surface  → warm cream / light neutral
Primary ink      → deep green / dark neutral
Accent           → warm gold / food-inspired highlight
Muted text       → readable secondary neutral
Action           → high-contrast CTA
```

Use colour by **role**, not by individual component. New colours should have a clear semantic reason.

## Typography

Typography should establish a clear editorial hierarchy:

```text
Display / Hero
      ↓
Section heading
      ↓
Card / product title
      ↓
Body copy
      ↓
Supporting metadata
```

Avoid introducing multiple unrelated font families without a design reason.

## Spacing

Prefer consistent spacing scales over arbitrary one-off values. Sections should have generous breathing room while cards and controls remain compact enough for mobile use.

## Components

Reusable components should own their presentation and interaction behaviour where practical.

Examples in the current project include:

- Navbar
- Hero
- QuickInfo
- MenuSection
- ProductCard
- CateringSection
- AboutSection
- GallerySection
- TestimonialsSection
- LocationSection
- FinalCTA
- OrderModal

## Responsive Behaviour

### Mobile

- Prioritise menu discovery and ordering.
- Keep tap targets comfortable.
- Avoid horizontal overflow.
- Use mobile-specific CTA treatment when necessary.

### Tablet

- Increase content density gradually.
- Preserve readable line lengths.
- Adapt card grids without simply scaling desktop layouts down.

### Desktop

- Use wider editorial compositions.
- Maintain a clear reading path.
- Avoid filling every available pixel.

## Accessibility

Every new UI feature should consider:

- keyboard access,
- visible focus states,
- semantic HTML,
- meaningful accessible names,
- sufficient contrast,
- reduced-motion preferences,
- useful image alt text.

## Content & Imagery

Food imagery is a major trust and conversion element. Production imagery should represent the actual business wherever possible.

Do not use generated/sample food images as evidence of real menu items without verification.

## Do / Don't

| Do | Don't |
|---|---|
| Reuse existing components | Duplicate similar components |
| Use motion to communicate state | Animate every element |
| Keep CTAs obvious | Hide the ordering path |
| Preserve mobile usability | Design desktop-only layouts |
| Verify business claims | Invent reviews, prices, or credentials |
| Keep content data-driven | Scatter business data through JSX |

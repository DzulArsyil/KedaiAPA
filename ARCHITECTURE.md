# Architecture — Kedai APA

## Overview

Kedai APA is a Vite-powered React application written in TypeScript. The UI is organised around reusable components and a central business-content model.

```text
Browser
  │
  ▼
React Application
  │
  ├── Pages / sections
  ├── Reusable components
  ├── Shared state / context
  └── Business data
          │
          ▼
   Ordering interaction
          │
          ▼
       WhatsApp
```

## Repository Structure

```text
KedaiAPA/
├── public/              # Public/static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── context/         # Shared application state
│   ├── data/            # Business and menu content
│   ├── lib/             # Supporting application utilities
│   ├── App.tsx          # Application shell
│   ├── pages.tsx        # Page-level experiences
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.js
```

## Architectural Principles

### 1. Components over duplication

Prefer reusable components for repeated UI patterns. New features should reuse existing primitives before introducing near-duplicate components.

### 2. Content is separate from presentation

Business content belongs in the data layer whenever practical. The current business model is centred on `src/data/business.ts`.

### 3. Keep conversion close to intent

Menu discovery, product selection, catering information, and location should each expose an appropriate next action rather than forcing every visitor through one generic flow.

### 4. Progressive enhancement

Core information should remain understandable without relying on animation. Motion should improve hierarchy and feedback, not become a requirement for understanding content.

### 5. Responsive by default

Design and implementation should consider small screens first, then enhance the layout for larger viewports.

## Data Integrity Model

The content layer intentionally distinguishes:

- **Verified** business information.
- **Placeholder** information that requires confirmation.
- **Sample** menu/content used for demonstration.

Do not convert placeholders or sample data into factual claims without verification.

## State & Interaction

When modifying ordering behaviour:

1. Inspect the existing context/state implementation.
2. Reuse the current product model.
3. Keep cart/order logic separate from purely presentational components.
4. Preserve the WhatsApp handoff as the final external conversion step unless the product requirements change.

## External Integrations

The project may interact with external services for:

- WhatsApp ordering.
- Google Maps/location.
- Social/contact destinations.
- Supabase-backed functionality where configured.

External URLs should be treated as configuration/content, not hard-coded across many components.

## Change Guidelines

Before changing architecture:

- Read `PRD.md`.
- Inspect existing components and data models.
- Prefer the smallest change that solves the requirement.
- Avoid adding dependencies for functionality already available in the stack.
- Run type checking and a production build before considering a change complete.

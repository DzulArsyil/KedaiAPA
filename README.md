# Kedai APA — Digital Presence & Ordering Experience

> **Makan enak, pesan gampang.**
>
> A modern, responsive web experience for **Kedai APA**, a local food & catering business in Karawang. The project focuses on turning a simple business website into a practical digital touchpoint: customers can discover the menu, understand catering services, find the location, and start an order through WhatsApp.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## Overview

**Kedai APA** is a portfolio project built around a real-world business scenario rather than a generic landing page.

The main challenge is straightforward:

> **How can a local food business present its products professionally while making the path from discovery to ordering as short as possible?**

The solution is a content-driven website with a strong visual identity, clear information hierarchy, responsive interactions, and a WhatsApp-first ordering flow.

### Business goals

- Make the business easier to discover and understand online.
- Present food, packages, and catering services in a more convincing way.
- Reduce friction between **seeing a product** and **starting an order**.
- Provide a clear location and local context for customers.
- Keep business content easy to update without rewriting UI components.

---

## Key Features

### 🍽️ Menu Discovery
- Categorised menu browsing.
- Responsive product cards.
- Product descriptions, pricing, badges, and spice indicators.
- Clear distinction between sample content and verified business information.

### 💬 WhatsApp-first Ordering
- Order CTAs are integrated throughout the experience.
- Customers can request the complete menu or start a general order.
- A dedicated order modal helps turn browsing intent into an actionable conversation.

### 🎉 Catering Experience
- Dedicated catering section for **nasi kotak, buffet/prasmanan, and snack box**.
- Simple three-step explanation of the catering process.
- CTA designed around consultation rather than forcing customers through a complicated checkout.

### 📍 Local Business Information
- Karawang-focused location information.
- Landmark-based directions.
- Google Maps integration.
- Business services and contact information are separated from presentation components.

### 🖼️ Editorial Gallery
- Food, atmosphere, and business storytelling sections.
- Placeholder states for photography that has not yet been verified or supplied.
- Image alt text is included as part of the content model.

### 📱 Responsive & Accessible UI
- Mobile-first responsive layouts.
- Mobile-specific ordering bar.
- Keyboard skip link for easier navigation.
- Semantic sections and accessible interactive states.
- Animation is used to support hierarchy rather than distract from the content.

---

## Design Direction

The visual direction combines **modern editorial design** with a warm local-food personality.

### Design principles

- **Clarity before decoration** — users should understand what the business offers quickly.
- **Conversion without pressure** — CTAs appear naturally at moments of intent.
- **Local identity** — Karawang, the landmark, and the business context remain visible.
- **Trust through transparency** — unverified business information is not presented as fact.
- **Content-driven UI** — business owners should be able to update content without changing the component structure.

The interface uses a warm cream foundation, deep pine/ink tones, gold accents, rounded surfaces, editorial typography, subtle motion, and generous spacing to create a premium but approachable food-business experience.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI architecture |
| **TypeScript** | Type-safe application development |
| **Vite** | Development server and production build tooling |
| **Tailwind CSS 4** | Utility-first responsive styling |
| **Framer Motion** | UI reveal and interaction animation |
| **React Router** | Client-side routing foundation |
| **Lucide React** | Consistent interface icons |
| **dnd-kit** | Drag-and-drop interaction foundation |
| **Recharts** | Data visualisation capability |
| **Supabase JS** | Backend/data integration capability |
| **date-fns** | Date utilities |
| **canvas-confetti** | Lightweight celebration interaction |

The dependency stack is defined in [`package.json`](./package.json).

---

## Architecture

The project uses a **component-based React architecture** with a central business-content layer.

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── QuickInfo.tsx
│   ├── MenuSection.tsx
│   ├── ProductCard.tsx
│   ├── CateringSection.tsx
│   ├── AboutSection.tsx
│   ├── GallerySection.tsx
│   ├── TestimonialsSection.tsx
│   ├── LocationSection.tsx
│   ├── FinalCTA.tsx
│   ├── OrderModal.tsx
│   └── ...
├── data/
│   └── business.ts
├── App.tsx
└── ...
```

### Content-driven approach

A key implementation decision is keeping business information inside `src/data/business.ts` instead of scattering it across UI components.

This makes the project easier to maintain because the business owner/developer can update:

- business information,
- contact details,
- location,
- services,
- menu categories,
- products,
- catering content,
- gallery content,
- testimonials,

without having to redesign the component structure.

This is particularly useful for small businesses where menu and contact information can change frequently.

---

## Data Integrity

This project intentionally avoids inventing business claims.

The content model distinguishes between:

- **Verified information** — information supported by the available business/location data.
- **Placeholder information** — information that still needs to be supplied or verified.
- **Sample menu content** — demonstration content used to show how the ordering experience works.

For example, the current menu data explicitly marks sample products with `sample: true`. Unverified contact details and opening hours are represented as placeholders rather than being presented as real facts.

This approach keeps the interface visually complete while protecting the credibility of the business.

---

## User Flow

```text
Landing Page
     │
     ├── Discover the business
     │
     ├── Browse menu
     │       │
     │       └── Choose / ask about a product
     │                    │
     │                    ▼
     │              WhatsApp Order
     │
     ├── Explore Catering
     │       │
     │       └── Discuss event requirements
     │                    │
     │                    ▼
     │              WhatsApp Consultation
     │
     └── Check Location
             │
             └── Google Maps
```

The core conversion principle is simple:

**Discover → Build confidence → Take action → Continue the conversation on WhatsApp.**

---

## Getting Started

### Requirements

- Node.js 18+ recommended
- npm

### Installation

```bash
git clone https://github.com/DzulArsyil/KedaiAPA.git
cd KedaiAPA
npm install
```

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Type checking

```bash
npm run typecheck
```

---

## Customising Business Content

Most business-specific content can be found in:

```text
src/data/business.ts
```

Before deploying for a real business, replace all remaining placeholders such as:

```text
[WHATSAPP NUMBER]
[EMAIL]
[INSTAGRAM ACCOUNT]
[FACEBOOK PAGE]
[JAM OPERASIONAL]
[FOTO CATERING]
[FOTO DAPUR]
[FOTO PELANGGAN]
```

Sample menu items and generated imagery should also be replaced with the business's real menu, prices, and photography before production use.

---

## Project Highlights

This project demonstrates more than frontend implementation. It brings together:

- **UI/UX design thinking** — information hierarchy, user flow, responsive behaviour, and conversion points.
- **Frontend engineering** — reusable React components, TypeScript types, state management, and responsive styling.
- **Business thinking** — the website is structured around real customer actions instead of simply displaying information.
- **Content architecture** — business data is separated from presentation.
- **Accessibility awareness** — semantic structure, keyboard navigation support, alt text, and accessible interaction states.
- **Trust-oriented content strategy** — unverified information is clearly marked instead of being fabricated.

That combination makes Kedai APA suitable as a case study for **UI/UX Designer, Front-end Developer, or Product Designer** portfolios.

---

## Roadmap

Potential next improvements for a production-ready version:

- [ ] Replace all sample menu content with verified menu data.
- [ ] Add real business photography.
- [ ] Add verified WhatsApp, social media, email, and opening hours.
- [ ] Connect menu/content management to a backend or CMS.
- [ ] Add SEO metadata and structured local-business data.
- [ ] Add analytics for menu views and WhatsApp CTA clicks.
- [ ] Add richer ordering details such as quantity and notes before opening WhatsApp.
- [ ] Add automated deployment and CI checks.
- [ ] Add performance monitoring and image optimisation.

---

## Portfolio Case Study

### Problem

Local food businesses often rely heavily on social media and chat applications. While those channels are useful, customers can struggle to quickly understand the menu, services, location, and ordering process in one place.

### Approach

Design the website as a **digital storefront**, not just an online brochure. Every major section answers a practical customer question:

> What is this place?
>
> What can I order?
>
> Can they handle catering?
>
> Where are they?
>
> How do I order?

### Outcome

The resulting experience combines a strong visual presentation with a short conversion path, giving the business a professional web presence while keeping the actual ordering process familiar: **WhatsApp**.

---

## Author

**M. Dzul’Arsyil Aziz**  
UI/UX Designer · Front-end Developer

- GitHub: [@DzulArsyil](https://github.com/DzulArsyil)
- Instagram: [@designwithdzul](https://www.instagram.com/designwithdzul/)
- LinkedIn: [M. Dzul’Arsyil Aziz](https://www.linkedin.com/in/mdzularsyilaziz/)

---

## License

No license has been specified for this repository yet. If this project is intended for public reuse, add an appropriate `LICENSE` file and update this section.

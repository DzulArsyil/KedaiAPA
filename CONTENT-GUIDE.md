# Content Guide — Kedai APA

This document defines how business content should be maintained so the website stays useful, credible, and easy to update.

## Source of Truth

Business and menu content is maintained in:

```text
src/data/business.ts
```

Prefer changing the data model rather than editing repeated copy directly inside UI components.

## Content Status

### Verified

Information supported by the available business/location information can be presented as factual.

### Placeholder

Use an explicit placeholder when information still needs confirmation, for example:

```text
[WHATSAPP NUMBER]
[EMAIL]
[JAM OPERASIONAL]
[INSTAGRAM ACCOUNT]
```

Do not turn placeholders into assumptions.

### Sample

Products with `sample: true` are demonstration content. They are useful for evaluating the UI but are not automatically the real menu.

Before production launch, verify:

- product name,
- description,
- price,
- category,
- availability,
- imagery.

## Writing Principles

- Use concise Indonesian copy for customer-facing content.
- Prefer specific benefits over generic marketing claims.
- Keep CTAs action-oriented.
- Avoid unsupported superlatives such as “terbaik”, “nomor satu”, or “paling murah”.
- Keep factual business information consistent across pages.
- Do not fabricate testimonials, awards, customer counts, years in business, or service coverage.

## WhatsApp Copy

Ordering messages should provide enough context for the business to understand the customer's intent while remaining easy to edit.

Recommended information:

```text
Halo Kedai APA, saya ingin memesan:
- Produk:
- Jumlah:
- Catatan:
```

For catering, include:

```text
Halo Kedai APA, saya ingin konsultasi catering:
- Tanggal acara:
- Jenis acara:
- Perkiraan jumlah porsi:
- Kebutuhan khusus:
```

## Image Content

Every production image should have meaningful alt text when it communicates content.

Avoid alt text that simply repeats a filename.

Replace temporary/generated imagery with authentic business photography when available and approved.

## Updating Business Information

When a business detail changes:

1. Update `src/data/business.ts`.
2. Search the repository for the old value.
3. Check that no duplicate hard-coded value remains.
4. Run the application locally.
5. Run type checking and production build.
6. Review the affected customer journey.

## Content QA Checklist

- [ ] No placeholder is presented as verified information.
- [ ] Sample products are clearly controlled by the data model.
- [ ] Prices match the approved menu before production.
- [ ] Contact links are correct.
- [ ] Location information is correct.
- [ ] Opening hours are verified before publishing.
- [ ] Images represent the business or are clearly treated as placeholders.
- [ ] CTA copy matches the actual ordering process.

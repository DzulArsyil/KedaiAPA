# Product Requirements Document — Kedai APA

## 1. Product

**Kedai APA** is a responsive digital storefront for a local food and catering business in Karawang. The experience connects discovery, menu exploration, catering information, location, and WhatsApp ordering in one place.

## 2. Problem

Customers need a fast way to answer four questions:

1. What does Kedai APA offer?
2. What can I order?
3. Can I order catering?
4. How do I contact or find the business?

The website should reduce the distance between **discovering a product** and **starting an order**.

## 3. Goals

- Present the business professionally on the web.
- Make menu discovery fast on mobile and desktop.
- Explain catering services without creating a complicated checkout.
- Keep the primary conversion path familiar through WhatsApp.
- Separate business content from UI implementation so content can be maintained safely.
- Avoid presenting unverified business information as fact.

## 4. Non-Goals

- Full e-commerce payment processing.
- A custom delivery platform.
- A customer account system.
- Inventing business history, reviews, prices, hours, or contact details.

## 5. Target Users

- Local customers looking for food or drinks.
- Customers comparing menu options before ordering.
- Individuals or organisations looking for catering.
- Mobile-first users who prefer ordering through WhatsApp.

## 6. Core User Journeys

### Individual Order

`Home → Menu → Search/Filter → Product → Order → WhatsApp`

### Catering

`Home → Catering → Requirements → WhatsApp Consultation`

### Location

`Home → Location → Google Maps`

## 7. Functional Requirements

- Navigation between the main website sections/pages.
- Menu categories and product cards.
- Product search/filter interaction.
- Product details and order interaction.
- Cart/order state where applicable.
- WhatsApp CTA with prepared ordering context.
- Catering information and consultation CTA.
- Location and map CTA.
- Responsive navigation and mobile ordering UI.
- Accessible interactive states and semantic content.

## 8. Content Requirements

Business-specific content is maintained in `src/data/business.ts`.

Content marked as placeholder must be verified before production. Products marked `sample: true` are demonstration content and must not be represented as the real menu without confirmation.

## 9. Success Criteria

- A visitor can understand the business and primary offering quickly.
- A visitor can reach the menu without unnecessary steps.
- A visitor can start an order without creating an account.
- Catering customers can understand the service and start a consultation.
- The experience remains usable across mobile, tablet, and desktop.
- No unverified business claim is presented as verified information.

## 10. Future Opportunities

- Content/CMS management.
- Verified business photography.
- Analytics for menu and WhatsApp conversion events.
- Performance and Core Web Vitals monitoring.
- Richer order details before WhatsApp handoff.
- LocalBusiness structured data after business details are verified.

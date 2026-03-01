# Changelog – A-Z Construction & Services

## v2.0.0 – Full Rebuild (2026-02-27)
### Added
- Complete bilingual system (EN/ES) with localStorage persistence
- Mega-menu dropdown: all services A to Z, active vs coming soon
- Custom brand design system (CSS variables, Oswald + Source Sans 3)
- JSON-LD LocalBusiness schema with full service catalog
- hreflang tags for bilingual SEO
- Hero section with trust bar (licensed, 24/7, areas)
- 3-tab contact form system (Residential / Commercial / Affiliate)
- Service dropdown selector in Residential form
- Emergency 24/7 WhatsApp card in contact sidebar
- Mobile hamburger menu
- Intersection Observer for active nav highlighting
- Smooth scroll with sticky header offset

### Changed
- Header: black background with orange accent border
- All colors aligned to logo palette (#E8821A, #1A1A1A, #FACC15)
- Logo displayed with orange border ring for emphasis
- Copy rewritten for SEO: keywords, location, conversion intent
- Footer: 4-column grid with services and contact

### Removed
- All B12/Astro source annotations
- b12.io tracking scripts
- astro-island components (replaced with static HTML)
- External B12 canonical URL

## v1.1.0 – Standards Compliance (2026-02-27)
### Added
- meta robots, og:url, og:image
- styles_ltr.css link
- JSON-LD LocalBusiness schema
- Skip to main content
- aria-label on nav and sections
- autocomplete on all form inputs
- loading="lazy" on below-fold images
### Fixed
- async="true" → async
- deprecated frameborder/scrolling on iframes
- charset removed from script tags
- CSS folder path case sensitivity

## v1.0.0 – Initial Migration (2026-02-27)
- Migrated from B12 live site to static HTML
- Updated all asset paths to new folder structure
- Removed B12 branding and tracking
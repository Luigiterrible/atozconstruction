# SEO Checklist – A-Z Construction & Services
**Última actualización:** Febrero 2026

---

## ✅ Technical SEO
- [x] `<html lang="en/es">` – updates dynamically with language toggle
- [x] `<meta charset="UTF-8">`
- [x] `<meta name="viewport">`
- [x] `<title>` – keyword-optimized, unique per page
- [x] `<meta name="description">` – unique per page, under 160 chars
- [x] `<meta name="keywords">` – unique per page with local keywords
- [x] `<meta name="robots" content="index, follow">`
- [x] `<meta name="author" content="A-Z Construction & Services">`
- [x] `<meta name="geo.region" content="US-NY, US-NJ, US-PA">`
- [x] `<meta name="geo.placename" content="New York, New Jersey, Philadelphia">`
- [x] `<link rel="canonical">` – absolute URL per page (tudominio.com placeholder)
- [x] `hreflang` – EN, ES, x-default on all 6 pages
- [x] Skip link for accessibility

## ✅ Open Graph & Social
- [x] `og:type`
- [x] `og:url` – absolute URL per page
- [x] `og:title` – unique per page
- [x] `og:description` – unique per page
- [x] `og:image` – logo (replace with 1200×630px photo when available)
- [x] `og:locale` – en_US
- [x] `og:locale:alternate` – es_US
- [x] `og:site_name` – A-Z Construction & Services
- [x] Twitter Card `summary_large_image`
- [x] `twitter:title` – unique per page
- [x] `twitter:description` – unique per page
- [x] `twitter:image`

## ✅ Structured Data (JSON-LD)
- [x] Schema en los 6 archivos HTML
- [x] Homepage: `@type HomeAndConstructionBusiness` – completo
- [x] Residential: `@type HomeAndConstructionBusiness` + `hasOfferCatalog` con 13 servicios
- [x] Commercial: `@type GeneralContractor` + `hasOfferCatalog` con 9 servicios
- [x] Affiliates: `@type WebPage` + `about Organization`
- [x] About: `@type AboutPage` + `mainEntity HomeAndConstructionBusiness`
- [x] Contact: `@type ContactPage` + `contactPoint` (customer service + emergency 24/7)
- [x] `name`, `alternateName`, `description`, `url`, `logo`
- [x] `telephone`, `email`, `priceRange`
- [x] `areaServed` – NY, NJ, Philadelphia
- [x] `hasOfferCatalog` con todos los servicios activos
- [x] `openingHoursSpecification` – Mon-Fri, Sat, Sun/Emergency
- [x] `availableLanguage` – English, Spanish
- [x] `foundingDate`, `currenciesAccepted`, `paymentAccepted`

## ✅ On-Page SEO
- [x] H1 único por página con keyword primario
- [x] Jerarquía H2–H3 mantenida en todas las páginas
- [x] Nombres de servicios como headings en las cards
- [x] Alt text descriptivo en todas las imágenes
- [x] `loading="lazy"` en imágenes below-the-fold
- [x] Atributos `width` y `height` en imágenes (CLS prevention)
- [x] Breadcrumb navigation en todas las páginas internas

## ✅ Accessibility (WCAG 2.1 AA)
- [x] Skip to main content link
- [x] `aria-label` en todos los elementos de navegación
- [x] `aria-label` en todas las secciones
- [x] `role` attributes (banner, main, contentinfo, navigation)
- [x] `aria-expanded` en dropdown y mobile menu
- [x] `aria-haspopup` en el mega-menu trigger
- [x] `aria-pressed` en los botones del language switcher
- [x] `autocomplete` en todos los inputs de formulario
- [x] Semantic HTML5 (header, nav, main, section, aside, footer)
- [x] Todos los SVG icons tienen `aria-hidden="true"`
- [x] Form labels vinculados a inputs via `for`/`id`
- [x] Formularios con `required` y `type` correctos

## ✅ Performance
- [x] Google Fonts con `preconnect`
- [x] `loading="lazy"` en imágenes below-the-fold
- [x] CSS variables para theming consistente
- [x] Sin inline event handlers (usa JS event listeners)
- [x] CSS y JS embebidos – sin requests externos adicionales

## ✅ Bilingüismo EN/ES
- [x] Toggle EN/ES en el header de todas las páginas
- [x] `localStorage` para persistencia del idioma
- [x] Auto-detección del idioma del navegador
- [x] 100% del contenido traducido via `data-en` / `data-es`
- [x] `hreflang` configurado en todas las páginas

---

## ⏳ Pendiente – Requiere dominio real

- [ ] Replace All `https://www.tudominio.com` → dominio definitivo (6 archivos)
- [ ] Replace All `+15551234567` → teléfono real (6 archivos)
- [ ] Replace All `info@atozconstruction.com` → email real si cambia
- [ ] Canonical URLs → absolutas con dominio real
- [ ] Validar schemas en https://search.google.com/test/rich-results
- [ ] Crear y subir `sitemap.xml`
- [ ] Crear y subir `robots.txt`
- [ ] Registrar sitio en Google Search Console
- [ ] Enviar sitemap.xml a Google Search Console

## 📋 Fase 2 – Recomendaciones Futuras

- [ ] Google Analytics 4 + Google Tag Manager
- [ ] Google Business Profile (NY, NJ, Philadelphia)
- [ ] Review Schema (aggregate rating) cuando haya reseñas
- [ ] FAQ Schema para preguntas frecuentes
- [ ] Comprimir imágenes y convertir a formato WebP
- [ ] Imagen Open Graph 1200×630px (foto de trabajo real)
- [ ] Twitter handle real (reemplazar `@atozconstruction`)
- [ ] Landing pages por servicio y ciudad para SEO local
  - Ejemplo: `/plumbing-brooklyn-ny`, `/kitchen-remodeling-newark-nj`
- [ ] Sección de testimonios + Review Schema
- [ ] Galería de proyectos antes/después
- [ ] Integrar backend para formularios (Formspree, EmailJS, etc.)
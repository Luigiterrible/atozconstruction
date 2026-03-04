(function () {
  var headerHost = document.getElementById("global-header");
  var footerHost = document.getElementById("global-footer");

  if (headerHost) {
    headerHost.innerHTML =
      '<header id="site-header" role="banner">' +
      '  <div class="header-inner">' +
      '    <a href="./index.html" class="logo-wrap" aria-label="A-Z Construction - Home">' +
      '      <img src="./assets/images/icon.png" alt="A-Z Construction &amp; Services Logo" width="56" height="56">' +
      '      <div class="logo-text-wrap">' +
      '        <span class="logo-name"><span>A-Z</span> Construction &amp; Services</span>' +
      '        <span class="logo-tagline" data-en="Pro-Handyman Xpress &middot; General Contractor" data-es="Pro-Handyman Xpress &middot; Contratista General">Pro-Handyman Xpress &middot; General Contractor</span>' +
      "      </div>" +
      "    </a>" +
      '    <nav id="main-nav" aria-label="Main navigation">' +
      '      <a href="./index.html" class="nav-link" data-en="Home" data-es="Inicio">Home</a>' +
      '      <a href="./services.html" class="nav-link" data-en="Services" data-es="Servicios">Services</a>' +
      '      <a href="./Residential.html" class="nav-link" data-en="Residential" data-es="Residencial">Residential</a>' +
      '      <a href="./commercial.html" class="nav-link" data-en="Commercial" data-es="Comercial">Commercial</a>' +
      '      <a href="./about.html" class="nav-link" data-en="About Us" data-es="Nosotros">About Us</a>' +
      '      <a href="./contact.html" class="nav-link" data-en="Contact" data-es="Contacto">Contact</a>' +
      '      <a href="./affiliates.html" class="nav-link" data-en="Affiliates" data-es="Afiliados">Affiliates</a>' +
      "    </nav>" +
      '    <div class="header-right">' +
      '      <a id="header-cta-link" href="./contact.html" class="btn-header-cta" data-en="Free Estimate" data-es="Presupuesto Gratis">Free Estimate</a>' +
      '      <button id="mobile-menu-btn" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
      '      <div class="lang-switcher" role="group" aria-label="Language">' +
      '        <button type="button" class="lang-btn active" id="btn-en" aria-pressed="true">EN</button>' +
      '        <button type="button" class="lang-btn" id="btn-es" aria-pressed="false">ES</button>' +
      "      </div>" +
      "    </div>" +
      "  </div>" +
      '  <nav id="mobile-nav">' +
      '    <a href="./index.html" class="mobile-nav-link" data-en="Home" data-es="Inicio">Home</a>' +
      '    <a href="./services.html" class="mobile-nav-link" data-en="Services" data-es="Servicios">Services</a>' +
      '    <a href="./Residential.html" class="mobile-nav-link" data-en="Residential" data-es="Residencial">Residential</a>' +
      '    <a href="./commercial.html" class="mobile-nav-link" data-en="Commercial" data-es="Comercial">Commercial</a>' +
      '    <a href="./about.html" class="mobile-nav-link" data-en="About Us" data-es="Nosotros">About Us</a>' +
      '    <a href="./contact.html" class="mobile-nav-link" data-en="Contact" data-es="Contacto">Contact</a>' +
      '    <a href="./affiliates.html" class="mobile-nav-link" data-en="Affiliates" data-es="Afiliados">Affiliates</a>' +
      '    <a id="mobile-cta-link" href="./contact.html" class="mobile-nav-link" style="font-weight:700;" data-en="Free Estimate" data-es="Presupuesto Gratis">Free Estimate</a>' +
      "  </nav>" +
      "</header>";
  }

  if (footerHost) {
    footerHost.innerHTML =
      '<footer id="site-footer" role="contentinfo">' +
      '  <div class="footer-inner">' +
      '    <div class="footer-grid">' +
      '      <div class="footer-logo">' +
      '        <a href="./index.html"><img src="./assets/images/icon.png" alt="A-Z Construction" loading="lazy" width="60" height="60"></a>' +
      '        <p class="footer-desc" data-en="Licensed General Contractor<br>All Work Guaranteed<br>Serving NY, NJ &amp; Philadelphia." data-es="Contratista General Licenciado<br>Todos los Trabajos Garantizados<br>NY, NJ y Filadelfia.">Licensed General Contractor<br>All Work Guaranteed<br>Serving NY, NJ &amp; Philadelphia.</p>' +
      '        <a href="tel:+18565000237" style="color:var(--orange);font-weight:700;font-size:1rem;text-decoration:none;">+1 (856) 500-0237</a>' +
      "      </div>" +
      "      <div>" +
      '        <h4 class="footer-col-title" data-en="Quick Links" data-es="Accesos R&aacute;pidos">Quick Links</h4>' +
      '        <ul class="footer-links">' +
      '          <li><a href="./index.html" data-en="Home" data-es="Inicio">Home</a></li>' +
      '          <li><a href="./services.html" data-en="Services" data-es="Servicios">Services</a></li>' +
      '          <li><a href="./Residential.html" data-en="Residential" data-es="Residencial">Residential</a></li>' +
      '          <li><a href="./commercial.html" data-en="Commercial" data-es="Comercial">Commercial</a></li>' +
      '          <li><a href="./about.html" data-en="About Us" data-es="Nosotros">About Us</a></li>' +
      '          <li><a href="./contact.html" data-en="Contact" data-es="Contacto">Contact</a></li>' +
      "        </ul>" +
      "      </div>" +
      "      <div>" +
      '        <h4 class="footer-col-title" data-en="Top Services" data-es="Servicios Destacados">Top Services</h4>' +
      '        <ul class="footer-links">' +
      '          <li><a href="./Residential.html">Kitchen Remodeling</a></li>' +
      '          <li><a href="./Residential.html">Bathroom Remodeling</a></li>' +
      '          <li><a href="./Residential.html">HVAC Repair</a></li>' +
      '          <li><a href="./Residential.html">Plumbing Repair</a></li>' +
      '          <li><a href="./Residential.html">Electrical Repair</a></li>' +
      '          <li><a href="./commercial.html">Commercial Build-Outs</a></li>' +
      "        </ul>" +
      "      </div>" +
      "      <div>" +
      '        <h4 class="footer-col-title" data-en="Contact Us" data-es="Cont&aacute;ctanos">Contact Us</h4>' +
      '        <div class="footer-contact-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="tel:+18565000237">+1 (856) 500-0237</a></div>' +
      '        <div class="footer-contact-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg><a href="mailto:info@atozgeneralcontractor.com">info@atozgeneralcontractor.com</a></div>' +
      '        <div class="footer-contact-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg><span>NY &middot; NJ &middot; Philadelphia</span></div>' +
      "      </div>" +
      "    </div>" +
      '    <div class="footer-bottom">' +
      '      <p class="footer-copyright">&copy; 2026 A-Z Construction &amp; Services. All rights reserved.</p>' +
      '      <nav class="footer-social-links" aria-label="Social media">' +
      '        <a href="./contact.html" aria-label="Facebook (pending)" title="Facebook (pending)"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.25.2 2.25.2v2.46H15.2c-1.25 0-1.64.78-1.64 1.58V12h2.79l-.45 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg></a>' +
      '        <a href="./contact.html" aria-label="Instagram (pending)" title="Instagram (pending)"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 1.9A3.9 3.9 0 0 0 3.9 7.8v8.4a3.9 3.9 0 0 0 3.9 3.9h8.4a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9H7.8zm8.95 1.43a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2z"/></svg></a>' +
      '        <a href="./contact.html" aria-label="LinkedIn (pending)" title="LinkedIn (pending)"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3zM20.44 13.55c0-3.45-1.84-5.05-4.3-5.05-1.98 0-2.87 1.09-3.37 1.86V8.5H9.39V20h3.38v-6.07c0-1.6.3-3.14 2.28-3.14 1.95 0 1.98 1.82 1.98 3.24V20h3.41v-6.45z"/></svg></a>' +
      '        <a href="./contact.html" aria-label="Google Business Profile (pending)" title="Google Business Profile (pending)"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.35 11.1H12v2.92h5.38c-.23 1.5-1.75 4.4-5.38 4.4-3.24 0-5.87-2.68-5.87-5.98s2.63-5.98 5.87-5.98c1.84 0 3.08.78 3.79 1.46l2.58-2.5C16.74 3.86 14.63 3 12 3 7.03 3 3 7.03 3 12s4.03 9 9 9c5.2 0 8.65-3.65 8.65-8.8 0-.59-.06-1.03-.14-1.1z"/></svg></a>' +
      "      </nav>" +
      '      <nav class="footer-legal-links"><a href="./privacy-policy.html">Privacy Policy</a><a href="./terms-of-service.html">Terms of Service</a><a href="./sitemap.xml">Sitemap</a></nav>' +
      '      <span class="footer-badge-corner" aria-label="Company badge"><img src="./assets/images/revemetrics-badge.png" alt="by Revemetrics" loading="lazy" onerror="this.closest(\'.footer-badge-corner\').style.display=\'none\';"></span>' +
      "    </div>" +
      "  </div>" +
      "</footer>";
  }

  function applyLangToGlobal(lang) {
    document.querySelectorAll("#site-header [data-en], #site-footer [data-en], #cookie-banner [data-en]").forEach(function (el) {
      var t = el.dataset[lang];
      if (!t) return;
      if (t.indexOf("<") !== -1 || t.indexOf("&") !== -1) el.innerHTML = t;
      else el.textContent = t;
    });

    var btnEn = document.getElementById("btn-en");
    var btnEs = document.getElementById("btn-es");
    if (btnEn && btnEs) {
      btnEn.classList.toggle("active", lang === "en");
      btnEs.classList.toggle("active", lang === "es");
      btnEn.setAttribute("aria-pressed", String(lang === "en"));
      btnEs.setAttribute("aria-pressed", String(lang === "es"));
    }
  }

  function setActiveNav() {
    var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll("#site-header #main-nav .nav-link, #site-header #mobile-nav .mobile-nav-link").forEach(function (el) {
      var href = (el.getAttribute("href") || "").replace("./", "").toLowerCase();
      if (href && href === page) {
        el.classList.add("active");
        if (page === "affiliates.html" && href === "affiliates.html") {
          el.classList.add("affiliates-active");
        }
      }
    });
    return page;
  }

  function updateHeaderCta(page) {
    var isAffiliatesPage = page === "affiliates.html";
    [document.getElementById("header-cta-link"), document.getElementById("mobile-cta-link")].forEach(function (cta) {
      if (!cta) return;

      if (isAffiliatesPage) {
        cta.setAttribute("href", "./affiliates.html#apply-form");
        cta.dataset.en = "Apply";
        cta.dataset.es = "Aplicar";
        cta.classList.add("affiliates-cta");
      } else {
        cta.setAttribute("href", "./contact.html");
        cta.dataset.en = "Free Estimate";
        cta.dataset.es = "Presupuesto Gratis";
        cta.classList.remove("affiliates-cta");
      }
    });
  }

  function wireGlobalLangButtons() {
    var btnEn = document.getElementById("btn-en");
    var btnEs = document.getElementById("btn-es");
    if (!btnEn || !btnEs) return;

    function applyLang(lang, evt) {
      if (evt) evt.preventDefault();
      if (typeof window.setLang === "function") window.setLang(lang);
      else {
        localStorage.setItem("azc-lang", lang);
        applyLangToGlobal(lang);
      }
    }

    btnEn.addEventListener("click", function (evt) { applyLang("en", evt); });
    btnEs.addEventListener("click", function (evt) { applyLang("es", evt); });

    // Some Android browsers are unreliable with click on sticky header controls.
    btnEn.addEventListener("touchend", function (evt) { applyLang("en", evt); }, { passive: false });
    btnEs.addEventListener("touchend", function (evt) { applyLang("es", evt); }, { passive: false });
  }

  function wireMobileMenu() {
    var mBtn = document.getElementById("mobile-menu-btn");
    var mNav = document.getElementById("mobile-nav");
    if (!mBtn || !mNav) return;

    mBtn.addEventListener("click", function () {
      var isOpen = mNav.classList.toggle("open");
      mBtn.setAttribute("aria-expanded", String(isOpen));
    });

    mNav.querySelectorAll(".mobile-nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        mNav.classList.remove("open");
        mBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  var COOKIE_CONSENT_KEY = "azc_cookie_consent_v1";

  function activateDeferredScripts(consent) {
    if (consent !== "accepted") return;
    document.querySelectorAll('script[type="text/plain"][data-cookie-category]').forEach(function (oldScript) {
      var category = (oldScript.getAttribute("data-cookie-category") || "").toLowerCase();
      if (category !== "analytics" && category !== "marketing") return;
      if (oldScript.dataset.cookieActivated === "1") return;
      var s = document.createElement("script");
      Array.from(oldScript.attributes).forEach(function (attr) {
        if (attr.name === "type" || attr.name === "data-cookie-category") return;
        s.setAttribute(attr.name, attr.value);
      });
      s.text = oldScript.text || oldScript.textContent || "";
      oldScript.dataset.cookieActivated = "1";
      oldScript.parentNode.insertBefore(s, oldScript.nextSibling);
    });
  }

  function setCookieConsent(consent) {
    try { localStorage.setItem(COOKIE_CONSENT_KEY, consent); } catch (_) {}
    document.documentElement.setAttribute("data-cookie-consent", consent);
    window.azCookieConsent = consent;
    activateDeferredScripts(consent);
    window.dispatchEvent(new CustomEvent("azc:cookie-consent", { detail: { consent: consent } }));
  }

  function getCookieConsent() {
    try { return localStorage.getItem(COOKIE_CONSENT_KEY); } catch (_) { return null; }
  }

  function closeCookieBanner() {
    var banner = document.getElementById("cookie-banner");
    if (!banner) return;
    banner.classList.remove("open");
    setTimeout(function () {
      if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
    }, 180);
  }

  function ensureCookieBanner() {
    if (document.getElementById("cookie-banner")) return;
    var banner = document.createElement("section");
    banner.id = "cookie-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-live", "polite");
    banner.setAttribute("aria-label", "Cookie preferences");
    banner.innerHTML =
      '<div class="cookie-inner">' +
      '  <p class="cookie-title" data-en="Cookie Preferences" data-es="Preferencias de Cookies">Cookie Preferences</p>' +
      '  <p class="cookie-text" data-en="We use essential cookies to run this site and optional cookies to improve performance." data-es="Usamos cookies esenciales para operar este sitio y cookies opcionales para mejorar el rendimiento.">We use essential cookies to run this site and optional cookies to improve performance.</p>' +
      '  <p class="cookie-links">' +
      '    <a href="./privacy-policy.html" data-en="Privacy Policy" data-es="Pol&iacute;tica de Privacidad">Privacy Policy</a>' +
      '    <span aria-hidden="true">&middot;</span>' +
      '    <a href="./terms-of-service.html" data-en="Terms of Service" data-es="T&eacute;rminos de Servicio">Terms of Service</a>' +
      "  </p>" +
      '  <div class="cookie-actions">' +
      '    <button type="button" id="cookie-reject" class="cookie-btn secondary" data-en="Reject Optional" data-es="Rechazar Opcionales">Reject Optional</button>' +
      '    <button type="button" id="cookie-accept" class="cookie-btn primary" data-en="Accept All" data-es="Aceptar Todo">Accept All</button>' +
      "  </div>" +
      "</div>";
    document.body.appendChild(banner);

    var acceptBtn = document.getElementById("cookie-accept");
    var rejectBtn = document.getElementById("cookie-reject");
    if (acceptBtn) acceptBtn.addEventListener("click", function () { setCookieConsent("accepted"); closeCookieBanner(); });
    if (rejectBtn) rejectBtn.addEventListener("click", function () { setCookieConsent("rejected"); closeCookieBanner(); });

    applyLangToGlobal(localStorage.getItem("azc-lang") || ((navigator.language || "").indexOf("es") === 0 ? "es" : "en"));
    requestAnimationFrame(function () { banner.classList.add("open"); });
  }

  var currentPage = setActiveNav();
  updateHeaderCta(currentPage);
  wireGlobalLangButtons();
  wireMobileMenu();
  applyLangToGlobal(localStorage.getItem("azc-lang") || ((navigator.language || "").indexOf("es") === 0 ? "es" : "en"));
  var consent = getCookieConsent();
  if (!consent) ensureCookieBanner();
  else setCookieConsent(consent);
})();


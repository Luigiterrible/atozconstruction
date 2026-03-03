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
      '        <button class="lang-btn active" id="btn-en" aria-pressed="true">EN</button>' +
      '        <button class="lang-btn" id="btn-es" aria-pressed="false">ES</button>' +
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
      '        <a href="tel:+15551234567" style="color:var(--orange);font-weight:700;font-size:1rem;text-decoration:none;">+1 (555) 123-4567</a>' +
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
      '        <div class="footer-contact-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="tel:+15551234567">+1 (555) 123-4567</a></div>' +
      '        <div class="footer-contact-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg><a href="mailto:info@atozconstruction.com">info@atozconstruction.com</a></div>' +
      '        <div class="footer-contact-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg><span>NY &middot; NJ &middot; Philadelphia</span></div>' +
      "      </div>" +
      "    </div>" +
      '    <div class="footer-bottom">' +
      '      <p class="footer-copyright">&copy; 2026 A-Z Construction &amp; Services. All rights reserved.</p>' +
      '      <nav class="footer-legal-links"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Sitemap</a></nav>' +
      "    </div>" +
      "  </div>" +
      "</footer>";
  }

  function applyLangToGlobal(lang) {
    document.querySelectorAll("#site-header [data-en], #site-footer [data-en]").forEach(function (el) {
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

    btnEn.addEventListener("click", function () {
      if (typeof window.setLang === "function") window.setLang("en");
      else {
        localStorage.setItem("azc-lang", "en");
        applyLangToGlobal("en");
      }
    });

    btnEs.addEventListener("click", function () {
      if (typeof window.setLang === "function") window.setLang("es");
      else {
        localStorage.setItem("azc-lang", "es");
        applyLangToGlobal("es");
      }
    });
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

  var currentPage = setActiveNav();
  updateHeaderCta(currentPage);
  wireGlobalLangButtons();
  wireMobileMenu();
  applyLangToGlobal(localStorage.getItem("azc-lang") || ((navigator.language || "").indexOf("es") === 0 ? "es" : "en"));
})();

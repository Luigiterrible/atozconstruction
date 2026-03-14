(function () {
  var SITE_RESET_VERSION = "20260314-reset-1";
  var SITE_RESET_MARKER = "azc-site-reset-version";
  var headerHost = document.getElementById("global-header");
  var footerHost = document.getElementById("global-footer");

  function runOneTimeSiteReset() {
    var alreadyReset = null;
    try {
      alreadyReset = localStorage.getItem(SITE_RESET_MARKER);
    } catch (_) {}
    if (alreadyReset === SITE_RESET_VERSION) return;

    try {
      ["azc-lang","lang","language","site-lang","azc_cookie_consent_v1"].forEach(function (key) {
        localStorage.removeItem(key);
      });
      localStorage.setItem(SITE_RESET_MARKER, SITE_RESET_VERSION);
    } catch (_) {}

    try {
      ["azc_popup_timer","azc_popup_exit","azc_converted","azc_popup_exit_armed"].forEach(function (key) {
        sessionStorage.removeItem(key);
      });
    } catch (_) {}
  }

  runOneTimeSiteReset();
  if (headerHost) {
    headerHost.innerHTML =
      '<header id="site-header" role="banner">' +
      '  <div class="header-inner">' +
      '    <a href="./" class="logo-wrap" aria-label="A to Z Construction - Home">' +
      '      <img src="./assets/images/icon.png" alt="A to Z Construction &amp; Services Logo" width="56" height="56">' +
      '      <div class="logo-text-wrap">' +
      '        <span class="logo-name"><span>A to Z</span> Construction &amp; Services</span>' +
      '        <span class="logo-tagline" data-en="Pro Handyman Xpress &middot; General Contractor" data-es="Pro Handyman Xpress &middot; Contratista General">Pro Handyman Xpress &middot; General Contractor</span>' +
      "      </div>" +
      "    </a>" +
      '    <nav id="main-nav" aria-label="Main navigation">' +
      '      <a href="./" class="nav-link" data-en="Home" data-es="Inicio">Home</a>' +
      '      <a href="./services.html" class="nav-link" data-en="Services" data-es="Servicios">Services</a>' +
      '      <a href="./residential.html" class="nav-link" data-en="Residential" data-es="Residencial">Residential</a>' +
      '      <a href="./commercial.html" class="nav-link" data-en="Commercial" data-es="Comercial">Commercial</a>' +
      '      <a href="./about.html" class="nav-link" data-en="About Us" data-es="Nosotros">About Us</a>' +
      '      <a href="./resources.html" class="nav-link" data-en="Resources" data-es="Recursos">Resources</a>' +
      '      <a href="./contact.html" class="nav-link" data-en="Contact" data-es="Contacto">Contact</a>' +
      '      <a href="./affiliates.html" class="nav-link affiliates-link" data-en="Affiliates" data-es="Afiliados">Affiliates</a>' +
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
      '    <a href="./" class="mobile-nav-link" data-en="Home" data-es="Inicio">Home</a>' +
      '    <a href="./services.html" class="mobile-nav-link" data-en="Services" data-es="Servicios">Services</a>' +
      '    <a href="./residential.html" class="mobile-nav-link" data-en="Residential" data-es="Residencial">Residential</a>' +
      '    <a href="./commercial.html" class="mobile-nav-link" data-en="Commercial" data-es="Comercial">Commercial</a>' +
      '    <a href="./about.html" class="mobile-nav-link" data-en="About Us" data-es="Nosotros">About Us</a>' +
      '    <a href="./resources.html" class="mobile-nav-link" data-en="Resources" data-es="Recursos">Resources</a>' +
      '    <a href="./contact.html" class="mobile-nav-link" data-en="Contact" data-es="Contacto">Contact</a>' +
      '    <a href="./affiliates.html" class="mobile-nav-link affiliates-link" data-en="Affiliates" data-es="Afiliados">Affiliates</a>' +
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
      '        <a href="./"><img src="./assets/images/icon.png" alt="A to Z Construction" loading="lazy" width="60" height="60"></a>' +
      '        <p class="footer-desc" data-en="Licensed General Contractor<br>All Work Guaranteed<br>Serving NY, NJ &amp; Philadelphia." data-es="Contratista General Licenciado<br>Todos los Trabajos Garantizados<br>Atendemos NY, NJ y Filadelfia.">Licensed General Contractor<br>All Work Guaranteed<br>Serving NY, NJ &amp; Philadelphia.</p>' +
      '        <a href="tel:+18564043637" style="color:var(--orange);font-weight:700;font-size:1rem;text-decoration:none;">+1 (856) 404-3637</a>' +
      "      </div>" +
      "      <div>" +
      '        <h4 class="footer-col-title" data-en="Quick Links" data-es="Accesos R&aacute;pidos">Quick Links</h4>' +
      '        <ul class="footer-links">' +
      '          <li><a href="./" data-en="Home" data-es="Inicio">Home</a></li>' +
      '          <li><a href="./services.html" data-en="Services" data-es="Servicios">Services</a></li>' +
      '          <li><a href="./residential.html" data-en="Residential" data-es="Residencial">Residential</a></li>' +
      '          <li><a href="./commercial.html" data-en="Commercial" data-es="Comercial">Commercial</a></li>' +
      '          <li><a href="./about.html" data-en="About Us" data-es="Nosotros">About Us</a></li>' +
      '          <li><a href="./resources.html" data-en="Resources" data-es="Recursos">Resources</a></li>' +
      '          <li><a href="./contact.html" data-en="Contact" data-es="Contacto">Contact</a></li>' +
      "        </ul>" +
      "      </div>" +
      "      <div>" +
      '        <h4 class="footer-col-title" data-en="Top Services" data-es="Servicios Destacados">Top Services</h4>' +
      '        <ul class="footer-links">' +
      '          <li><a href="./residential.html" data-en="Kitchen Remodeling" data-es="Remodelaci&oacute;n de Cocina">Kitchen Remodeling</a></li>' +
      '          <li><a href="./residential.html" data-en="Bathroom Remodeling" data-es="Remodelaci&oacute;n de Ba&ntilde;o">Bathroom Remodeling</a></li>' +
      '          <li><a href="./residential.html" data-en="HVAC Repair" data-es="Reparaci&oacute;n de HVAC">HVAC Repair</a></li>' +
      '          <li><a href="./residential.html" data-en="Plumbing Repair" data-es="Reparaci&oacute;n de Plomer&iacute;a">Plumbing Repair</a></li>' +
      '          <li><a href="./residential.html" data-en="Electrical Repair" data-es="Reparaci&oacute;n El&eacute;ctrica">Electrical Repair</a></li>' +
      '          <li><a href="./commercial.html" data-en="Commercial Build Outs" data-es="Construcciones Comerciales Interiores">Commercial Build Outs</a></li>' +
      "        </ul>" +
      "      </div>" +
      "      <div>" +
      '        <h4 class="footer-col-title" data-en="Contact Us" data-es="Cont&aacute;ctanos">Contact Us</h4>' +
      '        <div class="footer-contact-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="tel:+18564043637">+1 (856) 404-3637</a></div>' +
      '        <div class="footer-contact-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg><a href="mailto:info@atozgeneralcontractor.com">info@atozgeneralcontractor.com</a></div>' +
      '        <div class="footer-contact-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg><span>PO BOX 998, Williamstown, NJ 08094</span></div>' +
      '        <div class="footer-contact-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg><span>NY &middot; NJ &middot; Philadelphia</span></div>' +
      "      </div>" +
      "    </div>" +
      '    <div class="footer-bottom">' +
      '      <p class="footer-copyright">&copy; 2026 A to Z Construction &amp; Services. All rights reserved.</p>' +
      '      <nav class="footer-social-links" aria-label="Social media">' +
      '        <a href="./contact.html" aria-label="Facebook (pending)" title="Facebook (pending)"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.25.2 2.25.2v2.46H15.2c-1.25 0-1.64.78-1.64 1.58V12h2.79l-.45 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg></a>' +
      '        <a href="./contact.html" aria-label="Instagram (pending)" title="Instagram (pending)"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 1.9A3.9 3.9 0 0 0 3.9 7.8v8.4a3.9 3.9 0 0 0 3.9 3.9h8.4a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9H7.8zm8.95 1.43a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2z"/></svg></a>' +
      '        <a href="./contact.html" aria-label="LinkedIn (pending)" title="LinkedIn (pending)"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3zM20.44 13.55c0-3.45-1.84-5.05-4.3-5.05-1.98 0-2.87 1.09-3.37 1.86V8.5H9.39V20h3.38v-6.07c0-1.6.3-3.14 2.28-3.14 1.95 0 1.98 1.82 1.98 3.24V20h3.41v-6.45z"/></svg></a>' +
      '        <a href="./contact.html" aria-label="Google Business Profile (pending)" title="Google Business Profile (pending)"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.35 11.1H12v2.92h5.38c-.23 1.5-1.75 4.4-5.38 4.4-3.24 0-5.87-2.68-5.87-5.98s2.63-5.98 5.87-5.98c1.84 0 3.08.78 3.79 1.46l2.58-2.5C16.74 3.86 14.63 3 12 3 7.03 3 3 7.03 3 12s4.03 9 9 9c5.2 0 8.65-3.65 8.65-8.8 0-.59-.06-1.03-.14-1.1z"/></svg></a>' +
      "      </nav>" +
      '      <nav class="footer-legal-links"><a href="./privacy-policy.html">Privacy Policy</a><a href="./terms-of-service.html">Terms of Service</a><a href="./accessibility-statement.html">Accessibility</a><a href="./sitemap.xml">Sitemap</a></nav>' +
      '      <a class="footer-badge-corner" href="./contact.html" aria-label="Revemetrics">' +
      '        <img src="./assets/images/revemetrics-badge.png" alt="Revemetrics" loading="lazy" width="431" height="109" onerror="this.closest(\'.footer-badge-corner\').style.display=\'none\';">' +
      '      </a>' +
      "    </div>" +
      "  </div>" +
      "</footer>";
  }

  function ensureGlobalPopups() {
    if (!document.body) return;
    if (!document.getElementById("popup-timer")) {
      document.body.insertAdjacentHTML(
        "beforeend",
        '<div id="popup-timer" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:9000;align-items:center;justify-content:center;padding:1rem;" aria-modal="true" role="dialog" aria-labelledby="popup-timer-title">' +
          '<div style="background:white;border-radius:16px;max-width:400px;width:100%;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.4);position:relative;animation:popupIn .3s ease;">' +
            '<div style="background:var(--orange);padding:1.4rem 1.5rem 1.2rem;position:relative;">' +
              '<button onclick="closePopup(\'timer\')" aria-label="Close" style="position:absolute;top:.8rem;right:.8rem;background:rgba(0,0,0,.15);border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:.95rem;display:flex;align-items:center;justify-content:center;">&#10005;</button>' +
              '<p style="font-family:\'Oswald\',sans-serif;font-size:.68rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.85);margin-bottom:.35rem;" data-en="Free, no obligation" data-es="Gratis, Sin Compromiso">Free, no obligation</p>' +
              '<h3 id="popup-timer-title" style="font-family:\'Oswald\',sans-serif;font-size:1.6rem;font-weight:700;color:white;line-height:1.1;margin-bottom:.35rem;" data-en="Ready to get started?" data-es="&iquest;Listo para Comenzar?">Ready to get started?</h3>' +
              '<p style="font-size:.88rem;color:rgba(255,255,255,.88);line-height:1.45;" data-en="Get your free estimate today, with a fast response and no pressure." data-es="Obt&eacute;n tu presupuesto gratis hoy, con Respuesta R&aacute;pida y sin presi&oacute;n.">Get your free estimate today, with a fast response and no pressure.</p>' +
            '</div>' +
            '<div style="padding:1.4rem;">' +
              '<p style="font-size:.85rem;color:var(--gray-dark);margin-bottom:1rem;text-align:center;font-weight:600;" data-en="How would you like to reach us?" data-es="&iquest;C&oacute;mo Prefieres Contactarnos?">How would you like to reach us?</p>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-bottom:1rem;">' +
                '<a href="https://wa.me/18564043637?text=Hello!%20I%20would%20like%20a%20free%20estimate." target="_blank" rel="noopener noreferrer" onclick="closePopup(\'timer\')" style="display:flex;flex-direction:column;align-items:center;gap:.45rem;padding:1rem .75rem;background:#25D366;color:white;border-radius:10px;text-decoration:none;text-align:center;">' +
                  '<svg class="wa-icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M13.601 2.326A7.85 7.85 0 0 0 8.034.001C3.636.001.057 3.582.056 7.98c0 1.4.366 2.77 1.062 3.98L0 16l4.158-1.09a7.93 7.93 0 0 0 3.873 1.01h.003c4.397 0 7.978-3.582 7.979-7.98a7.94 7.94 0 0 0-2.412-5.614zm-5.567 12.258h-.003a6.57 6.57 0 0 1-3.347-.916l-.24-.142-2.468.648.659-2.407-.156-.247a6.56 6.56 0 0 1-1.01-3.513c.002-3.627 2.955-6.58 6.586-6.58 1.756 0 3.407.684 4.648 1.926a6.56 6.56 0 0 1 1.923 4.655c-.001 3.627-2.955 6.576-6.59 6.576z"/><path d="M11.609 9.292c-.198-.099-1.17-.578-1.352-.644-.182-.066-.315-.099-.446.1-.132.198-.512.644-.628.776-.116.132-.231.149-.429.05-.197-.1-.833-.307-1.588-.98-.588-.524-.985-1.17-1.1-1.367-.116-.198-.012-.305.087-.404.09-.09.198-.231.297-.347.099-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.446-1.075-.611-1.473-.161-.387-.325-.334-.446-.34a1.8 1.8 0 0 0-.38-.036c-.132 0-.347.05-.528.248-.182.198-.694.677-.694 1.65s.71 1.914.809 2.046c.099.132 1.398 2.133 3.387 2.992.473.204.84.325 1.127.416.474.151.904.13 1.245.08.38-.057 1.17-.478 1.336-.94.165-.462.165-.859.116-.94-.05-.083-.182-.132-.38-.231z"/></svg>' +
                  '<span style="font-family:\'Oswald\',sans-serif;font-size:.82rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;" data-en="WhatsApp" data-es="WhatsApp">WhatsApp</span>' +
                  '<span style="font-size:.7rem;opacity:.9;" data-en="Fast response" data-es="Respuesta R&aacute;pida">Fast response</span>' +
                '</a>' +
                '<a href="tel:+18564043637" onclick="closePopup(\'timer\')" style="display:flex;flex-direction:column;align-items:center;gap:.45rem;padding:1rem .75rem;background:var(--black);color:white;border-radius:10px;text-decoration:none;text-align:center;">' +
                  '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
                  '<span style="font-family:\'Oswald\',sans-serif;font-size:.82rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;" data-en="Call us" data-es="Ll&aacute;manos">Call us</span>' +
                  '<span style="font-size:.7rem;opacity:.75;" data-en="Mon to Sat, 7am to 8pm" data-es="Lun a S&aacute;b, de 7:00 a. m. a 8:00 p. m.">Mon to Sat, 7am to 8pm</span>' +
                '</a>' +
              '</div>' +
              '<p style="font-size:.73rem;color:var(--gray-mid);text-align:center;" data-en="No obligation, free estimates always." data-es="Sin Compromiso, Presupuestos Siempre Gratis.">No obligation, free estimates always.</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div id="popup-exit" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:9001;align-items:center;justify-content:center;padding:1rem;" aria-modal="true" role="dialog" aria-labelledby="popup-exit-title">' +
          '<div style="background:white;border-radius:16px;max-width:420px;width:100%;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.5);position:relative;animation:popupIn .3s ease;">' +
            '<div style="background:var(--black);padding:1.4rem 1.5rem 1.2rem;position:relative;">' +
              '<button onclick="closePopup(\'exit\')" aria-label="Close" style="position:absolute;top:.8rem;right:.8rem;background:rgba(255,255,255,.1);border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:.95rem;display:flex;align-items:center;justify-content:center;">&#10005;</button>' +
              '<p style="font-family:\'Oswald\',sans-serif;font-size:.68rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--orange);margin-bottom:.35rem;" data-en="Wait, before you go!" data-es="&iexcl;Espera, Antes de Irte!">Wait, before you go!</p>' +
              '<h3 id="popup-exit-title" style="font-family:\'Oswald\',sans-serif;font-size:1.6rem;font-weight:700;color:white;line-height:1.1;margin-bottom:.35rem;"><span data-en="Don&rsquo;t Leave Without Your" data-es="No Te Vayas Sin Tu">Don&rsquo;t Leave Without Your</span><br><span style="color:var(--orange);" data-en="Free Estimate!" data-es="&iexcl;Presupuesto Gratis!">Free Estimate!</span></h3>' +
              '<p style="font-size:.88rem;color:rgba(255,255,255,.78);line-height:1.45;" data-en="We&rsquo;re licensed, insured, and ready to help. Contact us now, it takes less than a minute." data-es="Estamos licenciados, asegurados y listos para ayudarte. Cont&aacute;ctanos ahora, toma menos de un minuto.">We&rsquo;re licensed, insured, and ready to help. Contact us now, it takes less than a minute.</p>' +
            '</div>' +
            '<div style="padding:1.4rem;">' +
              '<div style="background:var(--orange-pale);border:1.5px solid rgba(232,130,26,.3);border-radius:8px;padding:.75rem 1rem;margin-bottom:1.1rem;display:flex;align-items:center;gap:.6rem;"><span style="font-size:1.3rem;" aria-hidden="true">&#9889;</span><p style="font-size:.82rem;color:var(--black);font-weight:600;line-height:1.4;" data-en="Free estimates &middot; Fast response &middot; No obligation" data-es="Presupuestos Gratis &middot; Respuesta R&aacute;pida &middot; Sin Compromiso">Free estimates &middot; Fast response &middot; No obligation</p></div>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-bottom:.9rem;">' +
                '<a href="https://wa.me/18564043637?text=Hello!%20I%20was%20about%20to%20leave%20but%20I%20need%20a%20free%20estimate." target="_blank" rel="noopener noreferrer" onclick="closePopup(\'exit\')" style="display:flex;flex-direction:column;align-items:center;gap:.45rem;padding:1rem .75rem;background:#25D366;color:white;border-radius:10px;text-decoration:none;text-align:center;">' +
                  '<svg class="wa-icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M13.601 2.326A7.85 7.85 0 0 0 8.034.001C3.636.001.057 3.582.056 7.98c0 1.4.366 2.77 1.062 3.98L0 16l4.158-1.09a7.93 7.93 0 0 0 3.873 1.01h.003c4.397 0 7.978-3.582 7.979-7.98a7.94 7.94 0 0 0-2.412-5.614zm-5.567 12.258h-.003a6.57 6.57 0 0 1-3.347-.916l-.24-.142-2.468.648.659-2.407-.156-.247a6.56 6.56 0 0 1-1.01-3.513c.002-3.627 2.955-6.58 6.586-6.58 1.756 0 3.407.684 4.648 1.926a6.56 6.56 0 0 1 1.923 4.655c-.001 3.627-2.955 6.576-6.59 6.576z"/><path d="M11.609 9.292c-.198-.099-1.17-.578-1.352-.644-.182-.066-.315-.099-.446.1-.132.198-.512.644-.628.776-.116.132-.231.149-.429.05-.197-.1-.833-.307-1.588-.98-.588-.524-.985-1.17-1.1-1.367-.116-.198-.012-.305.087-.404.09-.09.198-.231.297-.347.099-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.446-1.075-.611-1.473-.161-.387-.325-.334-.446-.34a1.8 1.8 0 0 0-.38-.036c-.132 0-.347.05-.528.248-.182.198-.694.677-.694 1.65s.71 1.914.809 2.046c.099.132 1.398 2.133 3.387 2.992.473.204.84.325 1.127.416.474.151.904.13 1.245.08.38-.057 1.17-.478 1.336-.94.165-.462.165-.859.116-.94-.05-.083-.182-.132-.38-.231z"/></svg>' +
                  '<span style="font-family:\'Oswald\',sans-serif;font-size:.82rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;" data-en="WhatsApp" data-es="WhatsApp">WhatsApp</span>' +
                  '<span style="font-size:.7rem;opacity:.9;" data-en="Quick reply" data-es="Respuesta R&aacute;pida">Quick reply</span>' +
                '</a>' +
                '<a href="tel:+18564043637" onclick="closePopup(\'exit\')" style="display:flex;flex-direction:column;align-items:center;gap:.45rem;padding:1rem .75rem;background:var(--black);color:white;border-radius:10px;text-decoration:none;text-align:center;">' +
                  '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
                  '<span style="font-family:\'Oswald\',sans-serif;font-size:.82rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;" data-en="Call us" data-es="Ll&aacute;manos">Call us</span>' +
                  '<span style="font-size:.7rem;opacity:.75;" data-en="Mon to Sat, 7am to 8pm" data-es="Lun a S&aacute;b, de 7:00 a. m. a 8:00 p. m.">Mon to Sat, 7am to 8pm</span>' +
                '</a>' +
              '</div>' +
              '<button onclick="closePopup(\'exit\')" style="width:100%;font-size:.78rem;color:var(--gray-mid);background:none;border:none;cursor:pointer;padding:.4rem;" data-en="No thanks, I will contact you later" data-es="No, gracias. Los contactar&eacute; m&aacute;s tarde">No thanks, I will contact you later</button>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }

    if (!document.getElementById("azc-popup-keyframes")) {
      var popupStyle = document.createElement("style");
      popupStyle.id = "azc-popup-keyframes";
      popupStyle.textContent = "@keyframes popupIn{from{opacity:0;transform:scale(.92) translateY(12px);}to{opacity:1;transform:scale(1) translateY(0);}}";
      document.head.appendChild(popupStyle);
    }
  }

  function ensurePopupScript() {
    if (document.querySelector('script[data-azc-popup-loader="1"]')) return;
    if (document.querySelector('script[src*="assets/js/popup.js"]')) return;
    var popupScript = document.createElement("script");
    popupScript.src = "./assets/js/popup.js?v=20260314d";
    popupScript.dataset.azcPopupLoader = "1";
    document.body.appendChild(popupScript);
  }

  function ensureGlobalTawk() {
    var TAWK_ENABLED = false;
    if (!TAWK_ENABLED) return;
    if (document.querySelector('script[data-azc-tawk-loader="1"]')) return;
    if (document.querySelector('script[src*="embed.tawk.to"]')) return;

    var placeholder = document.createElement("script");
    placeholder.type = "text/plain";
    placeholder.dataset.cookieCategory = "marketing";
    placeholder.dataset.azcTawkLoader = "1";
    placeholder.text =
      "var Tawk_API = Tawk_API || {}, Tawk_LoadStart;" +
      "(function(){" +
      "var loaded = false;" +
      "function loadTawk(){" +
      "if(loaded) return;" +
      "loaded = true;" +
      "Tawk_LoadStart = new Date();" +
      "var s1 = document.createElement('script'), s0 = document.getElementsByTagName('script')[0];" +
      "s1.async = true;" +
      "s1.src = 'https://embed.tawk.to/5f1b2c3d4e5f6a7b8c9d0e1f/default';" +
      "s1.charset = 'UTF-8';" +
      "s1.setAttribute('crossorigin', '*');" +
      "s0.parentNode.insertBefore(s1, s0);" +
      "}" +
      "if('requestIdleCallback' in window){" +
      "requestIdleCallback(loadTawk, { timeout: 4000 });" +
      "} else {" +
      "window.addEventListener('load', function(){ setTimeout(loadTawk, 1500); }, { once: true });" +
      "}" +
      "})();";

    document.body.appendChild(placeholder);
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
      var isResourcesCluster = href === "resources.html" && (page === "resources.html" || page.indexOf("resource-") === 0);
      if ((href && href === page) || isResourcesCluster) {
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
      '  <p class="cookie-text" data-en="We use essential cookies to run this site and optional cookies for analytics, chat, and performance improvements." data-es="Usamos cookies esenciales para operar este sitio y cookies opcionales para anal&iacute;tica, chat y mejoras de rendimiento.">We use essential cookies to run this site and optional cookies for analytics, chat, and performance improvements.</p>' +
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
  ensureGlobalPopups();
  ensurePopupScript();
  ensureGlobalTawk();
  var consent = getCookieConsent();
  if (!consent) ensureCookieBanner();
  else setCookieConsent(consent);
})();






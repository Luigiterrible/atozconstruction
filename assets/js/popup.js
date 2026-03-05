(function(){
  if(window.__azcPopupBooted) return;
  window.__azcPopupBooted = true;

  // Temporary global kill-switch requested by user.
  var POPUPS_ENABLED = false;
  if(!POPUPS_ENABLED){
    ['popup-timer','popup-exit'].forEach(function(id){
      var el = document.getElementById(id);
      if(!el) return;
      el.style.display = 'none';
      el.dataset.azcOpen = '0';
    });
    if(document.body) document.body.style.overflow = '';
    window.closePopup = function(){};
    return;
  }

  var TIMER_KEY      = 'azc_popup_timer';
  var EXIT_KEY       = 'azc_popup_exit';
  var CONVERTED_KEY  = 'azc_converted';
  var EXIT_ARMED_KEY = 'azc_popup_exit_armed';
  var START_TS       = Date.now();
  var EXIT_INTENT_ENABLED = false;
  var memoryShown = { timer: false, exit: false, converted: false };

  function safeGet(storage, key){
    try { return storage.getItem(key); } catch(_) { return null; }
  }

  function safeSet(storage, key, value){
    try { storage.setItem(key, value); } catch(_) {}
  }

  function normalizeLang(value){
    var lang = (value || '').toString().toLowerCase();
    return lang.indexOf('es') === 0 ? 'es' : 'en';
  }

  function getCurrentLang(){
    var lang = '';
    try {
      lang =
        localStorage.getItem('azc-lang') ||
        localStorage.getItem('lang') ||
        localStorage.getItem('language') ||
        localStorage.getItem('site-lang') ||
        '';
    } catch(_) {}
    if(!lang){
      var htmlLang = (document.documentElement && document.documentElement.lang) || '';
      if(htmlLang) lang = normalizeLang(htmlLang);
    }
    if(!lang){
      var browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      lang = normalizeLang(browserLang);
    }
    return normalizeLang(lang);
  }

  function applyLang(el){
    var lang = getCurrentLang();
    el.querySelectorAll('[data-en]').forEach(function(node){
      var t = node.dataset[lang];
      if(!t) return;
      if(t.indexOf('<') !== -1 || t.indexOf('&') !== -1){ node.innerHTML = t; } else { node.textContent = t; }
    });
  }

  function syncVisiblePopupsLanguage(includeHidden){
    ['popup-timer','popup-exit'].forEach(function(id){
      var el = document.getElementById(id);
      if(!el) return;
      if(!includeHidden && el.style.display === 'none') return;
      applyLang(el);
    });
  }

  function showPopup(id){
    // Hard guard: never allow exit popup when exit-intent is disabled (mobile/tablet).
    if(id === 'popup-exit' && !EXIT_INTENT_ENABLED) return;
    var el = document.getElementById(id);
    if(!el) return;
    if(el.dataset.azcOpen === '1') return;
    applyLang(el);
    applyPopupLayout(el);
    el.style.display = 'flex';
    el.dataset.azcOpen = '1';
    document.body.style.overflow = 'hidden';
  }

  function applyPopupLayout(popup){
    if(!popup) return;
    var card = popup.firstElementChild;
    if(!card) return;

    // Keep overlays centered regardless of page-level CSS conflicts.
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.right = '0';
    popup.style.bottom = '0';
    popup.style.left = '0';
    popup.style.inset = '0';
    popup.style.width = '100vw';
    popup.style.maxWidth = '100vw';
    popup.style.minHeight = '100dvh';
    popup.style.margin = '0';
    popup.style.display = 'grid';
    popup.style.placeItems = 'center';
    popup.style.boxSizing = 'border-box';

    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var mobile = vw <= 560;
    if(!mobile){
      popup.style.padding = '1rem';
      card.style.marginLeft = '';
      card.style.marginRight = '';
      card.style.width = '';
      return;
    }

    var sidePad = 12;
    var maxCard = vw <= 360 ? 310 : 340;
    var targetWidth = Math.max(260, Math.min(maxCard, vw - (sidePad * 2)));

    popup.style.paddingTop = '12px';
    popup.style.paddingRight = 'max(12px, env(safe-area-inset-right))';
    popup.style.paddingBottom = '12px';
    popup.style.paddingLeft = 'max(12px, env(safe-area-inset-left))';

    card.style.width = targetWidth + 'px';
    card.style.maxWidth = maxCard + 'px';
    card.style.minWidth = '0';
    card.style.marginLeft = 'auto';
    card.style.marginRight = 'auto';
    card.style.left = '0';
    card.style.right = '0';
  }

  function hasConverted(){
    return memoryShown.converted || !!safeGet(sessionStorage, CONVERTED_KEY);
  }

  function markShown(key){
    if(key === TIMER_KEY) memoryShown.timer = true;
    if(key === EXIT_KEY) memoryShown.exit = true;
    safeSet(sessionStorage, key, '1');
  }

  function canShowExit(){
    if(memoryShown.exit || safeGet(sessionStorage, EXIT_KEY)) return false;
    if(hasConverted()) return false;
    if(!memoryShown.timer && !safeGet(sessionStorage, TIMER_KEY)) return false;
    var timerEl = document.getElementById('popup-timer');
    if(timerEl && timerEl.dataset && timerEl.dataset.azcOpen === '1') return false;
    if(Date.now() - START_TS < 4000) return false;
    return true;
  }

  function showExitPopup(){
    if(!EXIT_INTENT_ENABLED) return;
    if(!canShowExit()) return;
    markShown(EXIT_KEY);
    showPopup('popup-exit');
  }

  function injectPopupResponsiveStyles(){
    if(document.getElementById('azc-popup-mobile-style')) return;
    var style = document.createElement('style');
    style.id = 'azc-popup-mobile-style';
    style.textContent =
      '@media (max-width: 560px){' +
      '  #popup-timer,#popup-exit{padding:.75rem max(.75rem,env(safe-area-inset-right)) .75rem max(.75rem,env(safe-area-inset-left)) !important;min-height:100dvh !important;align-items:center !important;justify-content:center !important;}' +
      '  #popup-timer .azc-popup-card,#popup-exit .azc-popup-card{width:min(100%,340px) !important;max-width:340px !important;border-radius:12px !important;margin-inline:auto !important;margin-left:auto !important;margin-right:auto !important;left:0 !important;right:0 !important;}' +
      '  #popup-timer .azc-popup-head,#popup-exit .azc-popup-head{padding:1rem 1rem .9rem !important;}' +
      '  #popup-timer .azc-popup-body,#popup-exit .azc-popup-body{padding:1rem !important;}' +
      '  #popup-timer .azc-popup-actions,#popup-exit .azc-popup-actions{grid-template-columns:1fr !important;gap:.55rem !important;}' +
      '}' +
      '@media (max-width: 360px){' +
      '  #popup-timer .azc-popup-card,#popup-exit .azc-popup-card{width:min(100%,310px) !important;max-width:310px !important;}' +
      '}';
    document.head.appendChild(style);
  }

  function wirePopupSizing(){
    ['popup-timer','popup-exit'].forEach(function(id){
      var popup = document.getElementById(id);
      if(!popup) return;
      var card = popup.firstElementChild;
      if(card) card.classList.add('azc-popup-card');

      var sections = card ? card.querySelectorAll(':scope > div') : [];
      if(sections[0]) sections[0].classList.add('azc-popup-head');
      if(sections[1]) sections[1].classList.add('azc-popup-body');

      var actionGrid = popup.querySelector('div[style*="grid-template-columns:1fr 1fr"]');
      if(actionGrid) actionGrid.classList.add('azc-popup-actions');
    });
  }

  window.closePopup = function(type){
    var id = type === 'timer' ? 'popup-timer' : 'popup-exit';
    var el = document.getElementById(id);
    if(el){
      el.style.display = 'none';
      el.dataset.azcOpen = '0';
    }
    var timerOpen = (document.getElementById('popup-timer') || {}).dataset && document.getElementById('popup-timer').dataset.azcOpen === '1';
    var exitOpen = (document.getElementById('popup-exit') || {}).dataset && document.getElementById('popup-exit').dataset.azcOpen === '1';
    if(!timerOpen && !exitOpen) document.body.style.overflow = '';
  };

  // Mark conversion on any WhatsApp or Call click anywhere on the page
  document.addEventListener('click', function(e){
    var link = e.target.closest('a');
    if(!link) return;
    var href = link.getAttribute('href') || '';
    if(href.indexOf('wa.me') !== -1 || href.indexOf('tel:') === 0){
      memoryShown.converted = true;
      safeSet(sessionStorage, CONVERTED_KEY, '1');
    }
  });

  // Close on overlay click
  ['popup-timer','popup-exit'].forEach(function(id){
    var el = document.getElementById(id);
    if(el) el.addEventListener('click', function(e){
      if(e.target === this) closePopup(id === 'popup-timer' ? 'timer' : 'exit');
    });
  });

  // Close on ESC
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      closePopup('timer');
      closePopup('exit');
    }
  });

  // TIMER POPUP - 20 seconds
  if(!memoryShown.timer && !safeGet(sessionStorage, TIMER_KEY)){
    setTimeout(function(){
      if(document.visibilityState === 'hidden') return;
      if(hasConverted()) return;
      markShown(TIMER_KEY);
      showPopup('popup-timer');
    }, 20000);
  }

  // Detect mobile context so mobile only uses the 20-second timer popup.
  var isTouchDevice = (function(){
    try {
      return (
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints || 0) > 0 ||
        (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)
      );
    } catch(_) {
      return false;
    }
  })();

  var isMobileViewport = (function(){
    try {
      if(window.matchMedia && window.matchMedia('(max-width: 768px)').matches) return true;
      var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      return vw <= 768;
    } catch(_) {
      return false;
    }
  })();

  var isLikelyMobileUA = /android|iphone|ipad|ipod|mobile|iemobile|opera mini/i.test((navigator.userAgent || '').toLowerCase());
  var viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  var isDesktopViewport = viewportWidth >= 1024;
  var shouldEnableExitIntent = isDesktopViewport && !isTouchDevice && !isMobileViewport && !isLikelyMobileUA;
  EXIT_INTENT_ENABLED = shouldEnableExitIntent;

  // Mobile hard-stop: fully disable exit popup state and visibility.
  if(!EXIT_INTENT_ENABLED){
    memoryShown.exit = true;
    safeSet(sessionStorage, EXIT_KEY, '1');
    safeSet(sessionStorage, EXIT_ARMED_KEY, '1');
    var forcedExitEl = document.getElementById('popup-exit');
    if(forcedExitEl){
      forcedExitEl.style.display = 'none';
      forcedExitEl.dataset.azcOpen = '0';
    }
  }

  // EXIT INTENT POPUP - desktop only
  if(shouldEnableExitIntent && !safeGet(sessionStorage, EXIT_KEY)){
    document.addEventListener('mouseleave', function handler(e){
      if(e.clientY <= 0){
        document.removeEventListener('mouseleave', handler);
        showExitPopup();
      }
    });
  }

  // EXIT INTENT POPUP - back button support (desktop only)
  if(shouldEnableExitIntent){
    if(!safeGet(sessionStorage, EXIT_ARMED_KEY)){
      safeSet(sessionStorage, EXIT_ARMED_KEY, '1');
      try { history.pushState({ azcExitTrap: true }, '', location.href); } catch(_) {}
    }
    window.addEventListener('popstate', function(){
      if(!canShowExit()) return;
      showExitPopup();
      try { history.pushState({ azcExitTrap: true }, '', location.href); } catch(_) {}
    });
  }

  window.addEventListener('resize', function(){
    applyPopupLayout(document.getElementById('popup-timer'));
    applyPopupLayout(document.getElementById('popup-exit'));
  });

  // Keep popup language in sync when user changes site language on mobile/desktop.
  if(typeof window.setLang === 'function' && !window.setLang.__azcPopupWrapped){
    var originalSetLang = window.setLang;
    var wrappedSetLang = function(lang){
      var result = originalSetLang.apply(this, arguments);
      syncVisiblePopupsLanguage();
      return result;
    };
    wrappedSetLang.__azcPopupWrapped = true;
    window.setLang = wrappedSetLang;
  }

  window.addEventListener('storage', function(e){
    if(!e || !e.key) return;
    if(['azc-lang','lang','language','site-lang'].indexOf(e.key) === -1) return;
    syncVisiblePopupsLanguage(true);
  });

  // QA helper: append ?popupTest=1 to URL to retest both popups without reopening tab.
  try{
    var params = new URLSearchParams(location.search);
    if(params.get('popupTest') === '1'){
      sessionStorage.removeItem(TIMER_KEY);
      sessionStorage.removeItem(EXIT_KEY);
      sessionStorage.removeItem(CONVERTED_KEY);
      sessionStorage.removeItem(EXIT_ARMED_KEY);
    }
  }catch(_){}

  injectPopupResponsiveStyles();
  wirePopupSizing();
  syncVisiblePopupsLanguage(true);
})();

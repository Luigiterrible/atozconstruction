(function(){
  var TIMER_KEY      = 'azc_popup_timer';
  var EXIT_KEY       = 'azc_popup_exit';
  var CONVERTED_KEY  = 'azc_converted';
  var EXIT_ARMED_KEY = 'azc_popup_exit_armed';
  var START_TS       = Date.now();

  function getCurrentLang(){
    var lang = '';
    try { lang = localStorage.getItem('azc-lang') || ''; } catch(_) {}
    if(!lang){
      var htmlLang = (document.documentElement && document.documentElement.lang) || '';
      if(htmlLang) lang = htmlLang.toLowerCase().indexOf('es') === 0 ? 'es' : 'en';
    }
    if(!lang){
      var browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      lang = browserLang.indexOf('es') === 0 ? 'es' : 'en';
    }
    return lang === 'es' ? 'es' : 'en';
  }

  function applyLang(el){
    var lang = getCurrentLang();
    el.querySelectorAll('[data-en]').forEach(function(node){
      var t = node.dataset[lang];
      if(!t) return;
      if(t.indexOf('<') !== -1 || t.indexOf('&') !== -1){ node.innerHTML = t; } else { node.textContent = t; }
    });
  }

  function syncVisiblePopupsLanguage(){
    ['popup-timer','popup-exit'].forEach(function(id){
      var el = document.getElementById(id);
      if(!el) return;
      if(el.style.display === 'none') return;
      applyLang(el);
    });
  }

  function showPopup(id){
    var el = document.getElementById(id);
    if(!el) return;
    applyLang(el);
    applyPopupLayout(el);
    el.style.display = 'flex';
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
    return !!sessionStorage.getItem(CONVERTED_KEY);
  }

  function markShown(key){
    sessionStorage.setItem(key, '1');
  }

  function canShowExit(){
    if(sessionStorage.getItem(EXIT_KEY)) return false;
    if(hasConverted()) return false;
    if(Date.now() - START_TS < 4000) return false;
    return true;
  }

  function showExitPopup(){
    if(!canShowExit()) return;
    markShown(EXIT_KEY);
    closePopup('timer');
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
    if(el){ el.style.display = 'none'; document.body.style.overflow = ''; }
  };

  // Mark conversion on any WhatsApp or Call click anywhere on the page
  document.addEventListener('click', function(e){
    var link = e.target.closest('a');
    if(!link) return;
    var href = link.getAttribute('href') || '';
    if(href.indexOf('wa.me') !== -1 || href.indexOf('tel:') === 0){
      sessionStorage.setItem(CONVERTED_KEY, '1');
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
  if(!sessionStorage.getItem(TIMER_KEY)){
    setTimeout(function(){
      if(document.visibilityState === 'hidden') return;
      markShown(TIMER_KEY);
      showPopup('popup-timer');
    }, 20000);
  }

  // EXIT INTENT POPUP - desktop pointer exit
  if(!sessionStorage.getItem(EXIT_KEY)){
    document.addEventListener('mouseleave', function handler(e){
      if(e.clientY <= 0){
        document.removeEventListener('mouseleave', handler);
        showExitPopup();
      }
    });
  }

  // EXIT INTENT POPUP - mobile/back button support (disabled on mobile/touch devices)
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

  if(!isTouchDevice){
    if(!sessionStorage.getItem(EXIT_ARMED_KEY)){
      sessionStorage.setItem(EXIT_ARMED_KEY, '1');
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
})();

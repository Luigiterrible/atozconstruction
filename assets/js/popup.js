(function(){
  var TIMER_KEY      = 'azc_popup_timer';
  var EXIT_KEY       = 'azc_popup_exit';
  var CONVERTED_KEY  = 'azc_converted';
  var EXIT_ARMED_KEY = 'azc_popup_exit_armed';
  var START_TS       = Date.now();

  function applyLang(el){
    var lang = localStorage.getItem('azc-lang') || 'en';
    el.querySelectorAll('[data-en]').forEach(function(node){
      var t = node.dataset[lang];
      if(!t) return;
      if(t.indexOf('<') !== -1 || t.indexOf('&') !== -1){ node.innerHTML = t; } else { node.textContent = t; }
    });
  }

  function showPopup(id){
    var el = document.getElementById(id);
    if(!el) return;
    applyLang(el);
    el.style.display = 'flex';
    document.body.style.overflow = 'hidden';
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
      '  #popup-timer,#popup-exit{padding:.75rem !important;min-height:100dvh !important;align-items:center !important;justify-content:center !important;}' +
      '  #popup-timer .azc-popup-card,#popup-exit .azc-popup-card{max-width:340px !important;border-radius:12px !important;}' +
      '  #popup-timer .azc-popup-head,#popup-exit .azc-popup-head{padding:1rem 1rem .9rem !important;}' +
      '  #popup-timer .azc-popup-body,#popup-exit .azc-popup-body{padding:1rem !important;}' +
      '  #popup-timer .azc-popup-actions,#popup-exit .azc-popup-actions{grid-template-columns:1fr !important;gap:.55rem !important;}' +
      '}' +
      '@media (max-width: 360px){' +
      '  #popup-timer .azc-popup-card,#popup-exit .azc-popup-card{max-width:310px !important;}' +
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

  // EXIT INTENT POPUP - mobile/back button support
  if(!sessionStorage.getItem(EXIT_ARMED_KEY)){
    sessionStorage.setItem(EXIT_ARMED_KEY, '1');
    try { history.pushState({ azcExitTrap: true }, '', location.href); } catch(_) {}
  }
  window.addEventListener('popstate', function(){
    if(!canShowExit()) return;
    showExitPopup();
    try { history.pushState({ azcExitTrap: true }, '', location.href); } catch(_) {}
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
})();

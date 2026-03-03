(function(){
  var TIMER_KEY     = 'azc_popup_timer';
  var EXIT_KEY      = 'azc_popup_exit';
  var CONVERTED_KEY = 'azc_converted';

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

  // TIMER POPUP — 20 seconds
  if(!sessionStorage.getItem(TIMER_KEY)){
    setTimeout(function(){
      sessionStorage.setItem(TIMER_KEY, '1');
      showPopup('popup-timer');
    }, 20000);
  }

  // EXIT INTENT POPUP — only if user has NOT converted
  if(!sessionStorage.getItem(EXIT_KEY)){
    document.addEventListener('mouseleave', function handler(e){
      if(e.clientY <= 0){
        document.removeEventListener('mouseleave', handler);
        sessionStorage.setItem(EXIT_KEY, '1');
        if(!sessionStorage.getItem(CONVERTED_KEY)){
          closePopup('timer');
          showPopup('popup-exit');
        }
      }
    });
  }
})();
// --- Sticky transform: convertir top-buttons + nav-wrapper en encabezado al scrollear ---
(function () {
  const triggerOffset = 120; // px: altura desde donde se activa la transformación (ajusta)
  let lastKnownScrollY = 0;
  let ticking = false;

  function onScroll() {
    lastKnownScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll(lastKnownScrollY);
        ticking = false;
      });
      ticking = true;
    }
  }

  function handleScroll(scrollY) {
    // cuando scrollee más allá del trigger -> añadir clase .scrolled
    if (scrollY > triggerOffset) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  }

  document.addEventListener('scroll', onScroll, { passive: true });
  // correr al inicio para estado correcto si se abre la página con scroll
  handleScroll(window.scrollY);
})();

// ===== BANNER POPUP =====
(function () {
  function openBannerPopup() {
    const overlay = document.getElementById('bannerPopupOverlay');
    if (overlay) {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // bloquea scroll mientras está abierto
    }
  }

  // Mostrar el popup apenas el HTML esté listo (no espera imágenes)
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(openBannerPopup, 300);
  });
})();

function closeBannerPopupDirect() {
  const overlay = document.getElementById('bannerPopupOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Cierra solo si se hace click en el overlay (fuera del box)
function closeBannerPopup(event) {
  if (event.target === document.getElementById('bannerPopupOverlay')) {
    closeBannerPopupDirect();
  }
}

// ===== LIGHTBOX ESPECIAL DE LA SEMANA =====
function openEspecialLightbox() {
  const overlay = document.getElementById('especialLightboxOverlay');
  if (overlay) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeEspecialLightboxDirect() {
  const overlay = document.getElementById('especialLightboxOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Cierra si se toca el fondo oscuro (fuera de la imagen)
function closeEspecialLightbox(event) {
  if (event.target === document.getElementById('especialLightboxOverlay')) {
    closeEspecialLightboxDirect();
  }
}

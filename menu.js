// --- Sticky transform: convertir top-buttons + nav-wrapper en encabezado al scrollear ---
(function() {
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

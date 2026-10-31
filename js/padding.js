const nav = document.querySelector('nav');
const banner = document.querySelector('.banner-image');
if (nav && banner) {
  let rAFToken = null;
  const syncGap = () => {
    if (rAFToken) return;
    rAFToken = requestAnimationFrame(() => {
      const rect = nav.getBoundingClientRect();
      const margin = rect.height + 'px';
      if (banner.style.marginTop !== margin) {
        banner.style.setProperty('margin-top', margin, 'important');
      }
      rAFToken = null;
    });
  };
  window.addEventListener('resize', syncGap, { passive: true });
  window.addEventListener('scroll', syncGap, { passive: true });
  document.addEventListener('DOMContentLoaded', syncGap);
  syncGap();
}
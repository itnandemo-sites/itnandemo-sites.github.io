document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.scroll-to-top');
  if (btn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        btn.classList.remove('hide');
      } else {
        btn.classList.add('hide');
      }
    });
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
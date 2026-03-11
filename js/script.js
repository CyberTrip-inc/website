/* ============================================
   CyberTrip — Script
   Header scroll, Scroll reveal, Mobile nav
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initScrollReveal();
  initHamburger();
});

/* --- Header background on scroll --- */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  function update() {
    if (window.scrollY > 60) {
      header.classList.add('header--scrolled');
      header.classList.remove('header--hero');
    } else {
      header.classList.remove('header--scrolled');
      header.classList.add('header--hero');
    }
  }

  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* --- Scroll Reveal (Intersection Observer) --- */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.fade-up, .fade-in, .philosophy-item, .vm-item, .closing-text'
  );

  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  });

  targets.forEach(el => observer.observe(el));
}

/* --- Mobile Hamburger --- */
function initHamburger() {
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-main');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  // Close on nav link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

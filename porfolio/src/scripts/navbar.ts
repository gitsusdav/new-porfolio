const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle?.addEventListener('click', () => {
  const isHidden = mobileMenu?.classList.contains('mobile-menu-hidden');

  if (isHidden) {
    mobileMenu?.classList.remove('mobile-menu-hidden');
    mobileMenu?.classList.add('mobile-menu-show');
  } else {
    mobileMenu?.classList.remove('mobile-menu-show');
    mobileMenu?.classList.add('mobile-menu-hidden');
  }
});

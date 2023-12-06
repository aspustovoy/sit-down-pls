import vars from '../_vars';

if (vars.$burger) {
  vars.$burger.addEventListener('click', () => {
    vars.$burger.classList.toggle('burger--active');
    vars.$nav.classList.toggle('nav--visible');
    vars.$bodyEl.classList.toggle('stop-scroll');
  });

  vars.$nav.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__link')) {
      vars.$burger.classList.remove('burger--active');
      vars.$nav.classList.remove('nav--visible');
      vars.$bodyEl.classList.remove('stop-scroll');
    }
  });
}

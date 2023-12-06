const btns = document.querySelectorAll('.filters__btn');
const dropdown = document.querySelectorAll('.dropdown-content');

if (btns) {
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');
      btn.parentElement.classList.toggle('filters__item--focus');
      btn.classList.toggle('filters__btn--focus');
      document.querySelector(`[data-target="${path}"]`).classList.toggle('dropdown-content--visible');
    });
  });
}

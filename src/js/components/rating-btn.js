const btn = document.querySelector('.rating__button');
const articles = document.querySelectorAll('.rating__item');

if (btn) {

  const articlesVisible = () => {
    for (let article of articles) {
      article.classList.add('rating__item--visible');
    }
  }

  btn.onclick = articlesVisible;
}

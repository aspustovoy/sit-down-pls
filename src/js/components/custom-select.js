import Choices from '../vendor/choices'

const elements = document.querySelectorAll('.select');
elements.forEach(element => {
  const choices = new Choices(element, {
    allowHTML: true,
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    // labelId: 'select list',
  });
});

const list = document.querySelectorAll('.choices').forEach(e => { e.setAttribute("aria-label", "select list") });
const item = document.querySelectorAll('.choices__item').forEach(e => { e.setAttribute("aria-label", "select item") });
const selectable = document.querySelectorAll('.choices__item--selectable').forEach(e => { e.setAttribute("role", "option") });



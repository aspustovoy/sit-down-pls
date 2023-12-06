import tippy from '../vendor/tippy-bundle.umd'

const popup1 = document.getElementById('popup1');

if (popup1) {
  tippy('#marker1', {
    // trigger: 'click',
    maxWidth: 157,
    content: popup1.innerHTML,
    allowHTML: true,
    animation: 'scale-extreme',
  });
}

const accordion = document.querySelectorAll('.accordion__item');

accordion.forEach(item => item.addEventListener('click', () => toggleAccrotdion(item)));

function toggleAccrotdion(item) {
  let itemContent = item.querySelector('.accordion__content');
  let itemTitle = item.querySelector('.accordion__title')
  itemContent.classList.toggle('accordion__active')
  itemTitle.classList.toggle('accordion__title-active')
}

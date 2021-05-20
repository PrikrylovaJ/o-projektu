const btnElm = document.querySelector('#navigation-button');
const navElm = document.querySelector('nav');

btnElm.addEventListener('click', () => {
  navElm.classList.toggle('navigation-closed');
})

const aElements = document.querySelectorAll('a');

const navigace = () => {
  const navElm = document.querySelector('nav');
  navElm.classList.toggle('navigation-closed');
}

for (let i = 0; i < aElements.length; i++) {
  const aElm = aElements[i];
  aElm.addEventListener('click', navigace);
}

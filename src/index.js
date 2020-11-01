import './index.html';
import './style.css';

console.log('funguju!');

//zprovozneni navigace//
const nav = document.querySelector('nav');
const navMenu = document.querySelectorAll('nav a');

document.querySelector('#nav-btn').addEventListener('click', () => {
  nav.classList.toggle('nav-closed');
});

navMenu.forEach((navMenu) => {
  navMenu.addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
  });
});

//4.objednávaní//
const orderBtn = document.querySelector('.order-btn');
const drinkElm = document.querySelector('.drink__cup');
let ordered = false;

orderBtn.addEventListener('click', () => {
  drinkElm.classList.toggle('drink__cup--selected');
  if (ordered === false) {
    orderBtn.textContent = 'Zrušit';
  } else {
    orderBtn.textContent = 'Objednat';
  }
  ordered = !ordered;
});

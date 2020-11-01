import './index.html';
import './style.css';

console.log('funguju!');

const btnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');
const menuElm = document.querySelectorAll('nav a');

const navMenu = () => {
  navElm.classList.toggle('nav-closed');
};

menuElm.forEach(() => navMenu);
btnElm.addEventListener('click', navMenu);


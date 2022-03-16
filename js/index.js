const menuButton = document.querySelector('.toggle-btn');
const toggleMenu = document.querySelector('.toggle-nav');
const mainContainer = document.querySelector('.main-container');
const closeMenu = document.querySelector('.close-menu');

menuButton.addEventListener('click', () => {
  toggleMenu.classList.toggle('show');
  mainContainer.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
  toggleMenu.classList.remove('show');
  mainContainer.classList.remove('show');
});
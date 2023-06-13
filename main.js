const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');


toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
 
});
const navbarToggle = document.querySelector('.navbar__toggleBtn');
const contentbox2 = document.querySelector('.contentbox2');

navbarToggle.addEventListener('click', function () {
  contentbox2.classList.toggle('open');
});

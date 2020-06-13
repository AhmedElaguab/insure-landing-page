const headerBars = document.querySelector('.header__bars-btn')
const phoneNavbar = document.querySelector('.navbar-sc-phone')
headerBars.addEventListener('click', function (e) {
  phoneNavbar.classList.toggle('navbar-sc-phone--open')
})

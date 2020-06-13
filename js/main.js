const headerBars = document.querySelector('.header__bars-btn')
const headerBarsImg = headerBars.querySelector('img')
const phoneNavbar = document.querySelector('.navbar-sc-phone')
headerBars.addEventListener('click', function (e) {
  phoneNavbar.classList.toggle('navbar-sc-phone--open')
  if (phoneNavbar.classList.contains('navbar-sc-phone--open')) {
    headerBarsImg.src = './images/icon-close.svg'
  } else {
    headerBarsImg.src = './images/icon-hamburger.svg'
  }
})

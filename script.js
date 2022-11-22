// NAVBAR
const navbar = document.querySelector('nav')
const toggleNavbar = document.querySelector('nav .toggle-navbar')
const navMenu = document.querySelector('nav .nav__menu')
const navMenuLink = document.querySelectorAll('nav .nav__menu li a')

navMenuLink.forEach(item=> {
	item.addEventListener('click', function () {
		navMenu.classList.remove('active')
	})
})

toggleNavbar.addEventListener('click', function () {
	navMenu.classList.toggle('active')

	if(navMenu.classList.contains('active')) {
		navbar.classList.add('active')
	} else {
		if(window.scrollY <= 20) {
			navbar.classList.remove('active')
		}
	}
})

window.addEventListener('scroll', function () {
	if(this.scrollY > 20) {
		navbar.classList.add('active')
	} else {
		if(!navMenu.classList.contains('active')) {
			navbar.classList.remove('active')
		}
	}
})

document.addEventListener('click', function (e) {
	if(!e.target.matches('nav, nav *')) {
		navMenu.classList.remove('active')
		if(window.scrollY <= 20) {
			navbar.classList.remove('active')
		}
	}
})








// SWIPER JS
let swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 32,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    }
  }
});

let swiperChef = new Swiper('.swiper-chefs', {
  slidesPerView: 1,
  spaceBetween: 32,
  breakpoints: {
  	768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 32,
    }
  }
});
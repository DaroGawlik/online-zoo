const burgerIconHeader = document.querySelector('.burder_icon_nav')
const navUlHeader = document.querySelector('.header_nav')
const fimgaLinkHeader = document.querySelector('.figma_link')
const bodyShadow = document.querySelector('.body_shadow')
const navPopUpHeader = document.querySelector('.nav_popup')
const navPopupCross = document.querySelector('.nav_popup_cross')

/// HEADER FUNCTION

const showPopUpHeader = () => {
	;[navPopUpHeader, bodyShadow].forEach(el => {
		el.style.visibility = 'visible'
	})
	navUlHeader.classList.replace('header_nav', 'header_nav_responsive')
	fimgaLinkHeader.classList.replace('figma_link', 'figma_link_responsive')
}

const closePopUpHeader = () => {
	;[navPopUpHeader, bodyShadow].forEach(el => {
		el.style.visibility = 'hidden'
	})
	navUlHeader.classList.replace('header_nav_responsive', 'header_nav')
	fimgaLinkHeader.classList.replace('figma_link_responsive', 'figma_link')
}

burgerIconHeader.addEventListener('click', showPopUpHeader)
bodyShadow.addEventListener('click', closePopUpHeader)
navPopupCross.addEventListener('click', closePopUpHeader)

// CAROUSEL PETS FUNCTION

const buttonsPets = document.querySelectorAll('[data-carousel-button]')
const gap = 16

buttonsPets.forEach(button => {
	button.addEventListener('click', () => {
		const slides = Array.from(document.querySelectorAll('.animal_card'))
		function shuffle(array) {
			let currentIndex = array.length
			let randomIndex

			while (currentIndex != 0) {
				randomIndex = Math.floor(Math.random() * currentIndex)
				currentIndex--
				;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
			}
			return array
		}
		shuffle(slides)
		const sldesAfterFunction = document.getElementsByClassName('animals_wrapper')
		sldesAfterFunction[0].replaceChildren(...slides)
	})
})

// const carousel = document.querySelector('.carousel')
// const prev = document.querySelector('.btn_arrow_right')
// const next = document.querySelector('.btn_arrow_left')

// next.addEventListener('click', e => {
// 	carousel.scrollBy(width + gap, 0)
// 	if (carousel.scrollWidth !== 0) {
// 		prev.style.display = 'flex'
// 	}
// 	if (carousel.scrollWidth - width - gap <= carousel.scrollLeft + width) {
// 		next.style.display = 'none'
// 	}
// })

// let width = carousel.offsetWidth
// window.addEventListener('resize', e => (width = carousel.offsetWidth))

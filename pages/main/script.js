const burgerIconHeader = document.querySelector('.burder_icon_nav')
const navUlHeader = document.querySelector('.header_nav')
const fimgaLinkHeader = document.querySelector('.figma_link')
const bodyShadow = document.querySelector('.body_shadow')
const navPopUpHeader = document.querySelector('.nav_popup')
const navPopupCross = document.querySelector('.nav_popup_cross')

const RIGHT_DIRECTION = 'next'
const LEFT_DIRECTION = 'prev'

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
const carousel = document.querySelector('.carousel')

let width = carousel.offsetWidth
window.addEventListener('resize', e => (width = carousel.offsetWidth))

const changeOrder = direction => {
	;(function createNewCards() {
		for (let i = 0; i < 6; i++) {
			const newAnimalCard = document.createElement('div')
			carousel.appendChild(newAnimalCard)
			newAnimalCard.classList.add('animal_card')
		}
	})()

	let slides = Array.from(document.querySelectorAll('.animal_card'))
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

	const sldesAfterFunction = document.getElementsByClassName('carousel')
	const parent = document.getElementById('carousel_container')
	const firstImage = parent.children[0]
	slides.forEach(item => {
		if (direction === RIGHT_DIRECTION) sldesAfterFunction[0].append(item)
	})

	if (direction === LEFT_DIRECTION) {
		const nowydiv = document.createElement('div')
		nowydiv.classList.add('leftdiv')
		for (let i = 0; i < 6; i++) {
			const nowydiv = document.createElement('div')
			nowydiv.classList.add('animal_card')
			parent.insertBefore(nowydiv, firstImage)
			console.log(firstImage)
		}
	}

	// document.querySelectorAll('.animal_card').forEach(card => {
	// 	console.log('hej')
	// 	card.remove()
	// })
}

document.querySelector('[data-carousel-button="next"]').addEventListener('click', e => {
	console.log('klikam w prawo')
	changeOrder(RIGHT_DIRECTION)
	carousel.scrollBy(1000, 0)
})
document.querySelector('[data-carousel-button="priev"]').addEventListener('click', e => {
	console.log('klikam w lewo')
	changeOrder(LEFT_DIRECTION)
	carousel.scrollBy(-1000, 0)
})



for (let item of data) {
	output += `
	<div class="user_card fade" id="${index}">
		<div class="user_info">
			<img class="user_icon" src="${item.img}" alt="user_icon">
			<div class="user_text">
				<h4>${item.name}</h4>
				<p>${item.location}&ensp;•&ensp;${item.date}</p>
			</div>
		</div>
		<div class="user_feedback">
			<p>${item.description}</p>
		</div>
	</div>`;
	index++;
}
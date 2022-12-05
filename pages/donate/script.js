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

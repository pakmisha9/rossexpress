// import Swiper, { Navigation, Pagination } from "swiper"
// Swiper.use([Navigation, Pagination])
const inView = require("in-view")
// import Swiper, { Navigation, Pagination, Thumbs, Controller, Autoplay } from "swiper"
// Swiper.use([Navigation, Pagination, Thumbs, Controller, Autoplay])
import AOS from "aos"

const APP = {
	initHamburger() {
		const $hamburger = document.querySelector(".hamburger")
		const $mobileNav = document.querySelector(".mobile-nav")
		$hamburger.addEventListener("click", e => {
			e.preventDefault()
			document.querySelector("html").classList.toggle("no-scroll")
			$hamburger.classList.toggle("is-active")
			$mobileNav.classList.toggle("active")
		})
	},
	initLinks() {
		Array.from(document.querySelectorAll(".link")).forEach(function (item) {
			item.addEventListener("click", function (e) {
				e.preventDefault()
				document.querySelector("html").classList.remove("no-scroll")
				document.querySelector(".mobile-nav").classList.remove("active")
				document.querySelector(".hamburger").classList.remove("is-active")
				Array.from(document.querySelectorAll(".link.active")).forEach(function (link) {
					link.classList.remove("active")
				})
				item.classList.add("active")
			})
		})
	},

	initSwiper() {
		Array.from(document.querySelectorAll(".swiper")).forEach(swiper => {
			const deafultOptions = {
				spaceBetween: 10,
				// navigation: {
				//   nextEl: ".swiper-button-next",
				//   prevEl: ".swiper-button-prev",
				// },
				autoplay: {
					autoplay: true,
					delay: 5000,
					stopOnLastSlide: false,
					disableOnInteraction: false
				}
			}
			const customOptions = JSON.parse(swiper.dataset.options)
			const options = Object.assign(deafultOptions, customOptions)
			new Swiper(swiper, options)
		})
	}
}

document.addEventListener("DOMContentLoaded", () => {
	APP.initHamburger()
	// APP.initLinks();
	APP.initSwiper()
	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
		initClassName: "aos-init", // class applied after initialization
		animatedClassName: "aos-animate", // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 500, // values from 0 to 3000, with step 50ms
		duration: 400, // values from 0 to 3000, with step 50ms
		easing: "ease", // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
	})
})

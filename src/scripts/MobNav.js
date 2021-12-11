import eventbus from 'gia/eventbus';
import Component from 'gia/Component'
import gsap from "gsap"

class MobNav extends Component {

	constructor(element) {
		super(element)

		this.ref = {
			navLink: null,
			ToggleTextContact: null,
			ToggleTextInfo: null,
			// MobExpander: null
		}

		this.eventStateHandler = this.triggerStateChange.bind(this)

		this.angle = 0
		this.setInterval

		this.body = document.querySelector('body')

		this.burgerSlices = document.querySelectorAll('.mob-toggle span')
		this.burger = document.querySelector('.mob-toggle')

		this.links = this.ref.navLink.querySelectorAll('a')

		this.titleText = document.querySelectorAll('.c-Header__contact .animates, .c-Header__contact-email')

		this.mobExpander = document.querySelector('.expander-mob')

		this.logoRotate = document.querySelector('#logoRotate')

	}

	mount() {


		this.ref.navLink.addEventListener('click', () => {

			this.burgerSlices.forEach( slice => {
				slice.classList.remove('is-cooking')
			})
			this.burger.classList.remove('is-cooking')

			this.element.classList.toggle('is-active')

		})

		this.ref.navLink.addEventListener('click', this.eventStateHandler)

		// window.addEventListener('resize', () => {
		// 	if(window.innerWidth >= 768) {
		// 		this.setState({
		// 			isExpanded: false
		// 		})
		// 	}
		// })

	}


	triggerStateChange() {
		this.setState({
			isExpanded: !this.state.isExpanded
		})
	}


	stateChange(stateChanges) {

		if ('isExpanded' in stateChanges) {

			if (this.state.isExpanded) {
				eventbus.emit("mobPanelActive")
				this.swapTextUp()
				this.openMobileOverlay()
				this.openContactInfoMob()

				setTimeout(() => {
					this.overlayTextWhite()
				}, 1000)

				this.setInterval = setInterval(this.rotateLogo.bind(this), 1000)

			} else {
				this.swapTextDown()
				this.closeMobileOverlay()
				this.closeContactInfoMob()
				eventbus.emit("mobPanelActive")

				this.resetLogo()

				setTimeout(() => {
					this.removeOverlayTextWhite()
				}, 1600)
			}
		}
	}

	rotateLogo() {
		this.angle += 10
		this.logoRotate.style.transform = `rotateZ(${this.angle}deg)`
	}

	resetLogo() {
		this.angle = 0
		this.logoRotate.style.transform = `rotateZ(${this.angle}deg)`
		clearInterval(this.setInterval)
	}

	swapTextUp() {
		const tl = gsap.timeline()
		 .set(this.links, {
			delay: 0.7,
			y: '-100%',
		 })
		 return tl
	}

	swapTextDown() {
		const tl = gsap.timeline()
		 .set(this.links, {
			delay: 0.7,
			y: '0%',
		 })
		 return tl
	}


	openMobileOverlay() {

		const tl = gsap.timeline({
			defaults: { 
				ease: "circ.inOut",
				duration: 1.4,
			},
		})
		.to(this.mobExpander, {
			delay: 0.5,
			scale: 1,
		})

		return tl
	}
	

	closeMobileOverlay() {

		const tl = gsap.timeline({
			defaults: { 
				ease: "circ.inOut",
				duration: 1,
			},
		})

		.to(this.mobExpander, {
			delay: 1.6,
			scale: 0
		})
		return tl
	}

	openContactInfoMob() {

		const tl = gsap.timeline({
            defaults: { 
               ease: "circ.inOut",
               duration: 1.6,
            },
         })
		.to(this.titleText, {
			delay: 0.7,
			y: '0%',
			stagger: 0.3
		})
		return tl

	}


	closeContactInfoMob() {

		const tl = gsap.timeline({
            defaults: { 
               ease: "circ.inOut",
               duration: 1.6,
            },
         })
		.to(this.titleText, {
			y: '110%',
			stagger: 0.3
		})
		return tl

	}


	overlayTextWhite() {
		if (this.body.classList.contains('themeThree') || this.body.classList.contains('themeTwo')) {
			this.body.classList.add('is-white')
		}
	}

	removeOverlayTextWhite() {
		this.body.classList.remove('is-white')
	}




}

export default MobNav

import Component from 'gia/Component'
import gsap from "gsap"

class Header extends Component {

	constructor(element) {
		super(element)

		this.ref = {
			animateElement: [],
			inner: null,
			HeaderLogo: null,
			Toggle: null,
			Expander: null,
			logoRotate: null,
			emailLink: null,
			ToggleTextContact: null,
			ToggleTextInfo: null
		}

		this.angle = 0
		this.setInterval
		this.eventStateHandler = this.triggerStateChange.bind(this)

		this.splitWords = [this.ref.ToggleTextContact, this.ref.ToggleTextInfo]

		this.body = document.querySelector('body')

	}

	mount() {


		this.animateHeader()
		this.animateLogo()


		this.splitWords.forEach(word => {
			this.splitText(word)
		})

		this.ref.Toggle.addEventListener('click', this.eventStateHandler.bind(this))

	}


	splitText(content) {
		const word = content.innerText.split('')

		content.innerHTML = ''

		word.forEach(letter => {
			content.innerHTML += `<span>${letter}</span>`
		})

	}

	animateTextUp() {

		const letters = document.querySelectorAll('.toggle-text span')

		const tl = gsap.timeline({
            defaults: { 
               ease: "circ.inOut",
               duration: 1,
            },
         })
		 .to(letters, {
			delay: 0.2,
			stagger: 0.05,
			y: '-100%',
		 })
		 return tl
	}

	animateTextDown() {

		const letters = document.querySelectorAll('.toggle-text span')

		const tl = gsap.timeline({
            defaults: { 
               ease: "circ.inOut",
               duration: 0.8,
			   reversed: true
            },
         })
		 .to(letters, {
			delay: 0.2,
			stagger: 0.05,
			y: '0%',
		 })
		 return tl
	}


	triggerStateChange() {
		this.setState({
			isExpanded: !this.state.isExpanded
		})
	}

	stateChange(stateChanges) {

		if ('isExpanded' in stateChanges) {

			if (this.state.isExpanded) {
				this.openContactInfo()
				this.openOverlay()
				this.animateTextUp()
				this.rotateLogo()

				setTimeout(() => {
					this.checkColourTheme()
				}, 1000)

				this.setInterval = setInterval(this.rotateLogo.bind(this), 1000)
			} else {
				this.closeContactInfo()
				this.closeOverlay()
				this.animateTextDown()
				this.resetLogo()

				setTimeout(() => {
					this.removeCheckColourTheme()
				}, 1200)
			}
		}
	}

	checkColourTheme() {

		if (this.body.classList.contains('themeTwo') || this.body.classList.contains('themeThree')) {
			this.body.classList.add('is-white')
		}
	}

	removeCheckColourTheme() {
		this.body.classList.remove('is-white')
	}

	openOverlay() {
		const tl = gsap.timeline({
            defaults: { 
               ease: "circ.inOut",
               duration: 1.4,
            },
         })
		 .to(this.ref.Expander, {
			scale: 1,
		 })
		 return tl
	}

	rotateLogo() {
		this.angle += 10
		this.ref.logoRotate.style.transform = `rotateZ(${this.angle}deg)`
	}

	resetLogo() {
		this.angle = 0
		this.ref.logoRotate.style.transform = `rotateZ(${this.angle}deg)`
		clearInterval(this.setInterval)
	}

	closeOverlay() {
		const tl = gsap.timeline({
            defaults: { 
               ease: "power3.inOut",
               duration: 1.4,
            },
         })
		 .to(this.ref.Expander, {
			delay: 1.4,
			scale: 0,
		 })
		 return tl
	}

	animateHeader() {
		const tl = gsap.timeline({
            defaults: { 
               ease: "circ.inOut",
               duration: 1.6,
            },
         })
		 .to(this.ref.inner, {
			delay: 1.4,
			 y: 0
		 })
		 return tl
	}

	animateLogo() {
		const tl = gsap.timeline({
            defaults: { 
               ease: "circ.inOut",
               duration: 1.6,
            },
         })
		 .to(this.ref.HeaderLogo, {
			delay: 3.8,
			y: 0
		 })
		 return tl
	}


	openContactInfo() {

		const tl = gsap.timeline({
            defaults: { 
               ease: "circ.inOut",
               duration: 1.6,
            },
         })
		tl
		.to(this.ref.animateElement, {
			delay: 0.5,
			y: 0,
			stagger: 0.3
		})

	}

	closeContactInfo() {

		const tl = gsap.timeline({
            defaults: { 
               ease: "circ.inOut",
               duration: 1.6,
            },
         })
		tl
		.to(this.ref.animateElement, {
			y: '110%',
			stagger: 0.3
		})

	}


}

export default Header

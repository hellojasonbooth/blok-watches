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
			emailLink: null
		}

		this.eventStateHandler = this.triggerStateChange.bind(this)

	}

	mount() {

		this.animateHeader()
		this.animateLogo()

		this.ref.Toggle.addEventListener('click', this.eventStateHandler.bind(this))

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
				this.ref.logoRotate.classList.add('ticking')
			} else {
				this.closeContactInfo()
				this.closeOverlay()
				this.ref.logoRotate.classList.remove('ticking')
			}
		}
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

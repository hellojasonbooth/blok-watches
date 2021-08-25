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

		this.burgerSlices = document.querySelectorAll('.mob-toggle span')
		this.burger = document.querySelector('.mob-toggle')

		this.links = this.ref.navLink.querySelectorAll('a')

		this.titleText = document.querySelectorAll('.c-Header__contact .animates')

		this.mobExpander = document.querySelector('.expander-mob')

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

		// this.ref.ToggleTextContact.addEventListener('click', this.openMobileOverlay)
		// this.ref.ToggleTextInfo.addEventListener('click', this.closeMobileOverlay)

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
			} else {
				this.swapTextDown()
				this.closeMobileOverlay()
				this.closeContactInfoMob()
				eventbus.emit("mobPanelActive")
			}
		}
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

		// const mobExpander = document.querySelector('.expander-mob')

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

		// const mobExpander = document.querySelector('.expander-mob')

		const tl = gsap.timeline({
			defaults: { 
				ease: "circ.inOut",
				duration: 1.4,
			},
		})

		.to(this.mobExpander, {
			delay: 1,
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




}

export default MobNav

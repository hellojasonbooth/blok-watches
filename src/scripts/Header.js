import Component from 'gia/Component'
import gsap from "gsap"

class Header extends Component {

	constructor(element) {
		super(element)

		this.ref = {
			HeaderLogo: null
		}

	}

	mount() {

		this.animateHeader()
		this.animateLogo()

	}

	animateHeader() {
		const tl = gsap.timeline({
            defaults: { 
               ease: "circ.inOut",
               duration: 1.6,
            },
         })
		 .to(this.element, {
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


}

export default Header

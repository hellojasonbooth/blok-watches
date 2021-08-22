import Component from 'gia/Component'
import gsap from "gsap"

class Footer extends Component {

	constructor(element) {
		super(element)

		this.ref = {

		}

	}

	mount() {

		this.animateFooter()

	}

	animateFooter() {
		const tl = gsap.timeline({
            defaults: { 
               ease: "circ.inOut",
               duration: 1.6,
            },
         })
		 .to(this.element, {
			delay: 5,
			y: 0
		 })
		 return tl
	}


}

export default Footer

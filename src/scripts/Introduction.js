import Component from 'gia/Component'
import gsap from "gsap"

class Introduction extends Component {

	constructor(element) {
		super(element)

		this.ref = {
			animateElement: []
		}

	}

	mount() {

		setTimeout(() => {
			this.animateIntroduction()
		}, 3800)

	}

	animateIntroduction() {

		const tl = gsap.timeline({
            defaults: { 
               ease: "circ.inOut",
               duration: 1.6,
            },
         })
		tl
		.to(this.ref.animateElement, {
			y: 0,
			stagger: 0.3
		})

	}


}

export default Introduction

import Component from 'gia/Component'
import gsap from "gsap"

class LogoLoader extends Component {

	constructor(element) {
		super(element)

		this.ref = {
			logoAnimation: null,
			logoStatic: null
		}

		this.jsonPath = 'https://raw.githubusercontent.com/hellojasonbooth/blok-watches/main/src/scripts/data.json?token=AKDZQ25WG2FX6AYYVNQ2DWDBFH736'


		this.lottieAnimation

		this.frags = this.ref.logoStatic.querySelectorAll('.char')
	}

	mount() {

		this.lottieAnimation = lottie.loadAnimation({
			container: this.ref.logoAnimation,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: this.jsonPath
		})
		  


		this.lottieAnimation.addEventListener('DOMLoaded', this.animateLogoStateOne.bind(this))

		setTimeout(() => {
			this.animateLogoStateTwo()

			const masterTl = gsap.timeline()
				masterTl.add(this.animateLogoStateThree())
		}, 3000)


	}

	animateLogoStateOne() {
		this.lottieAnimation.play()
	}

	animateLogoStateTwo() {

		const tl = gsap.timeline()
        .set(this.ref.logoStatic, {
            opacity: 1
        })
		.set(this.ref.logoAnimation, {
            opacity: 0
        })

        return tl
	}

	animateLogoStateThree() {
		const tl = gsap.timeline({
            defaults: { 
            	ease: "circ.inOut",
            	duration: 1.2,
            },
         })
		.to(this.frags, {
			y: "130%",
			stagger: 0.1
		})
		return tl
	}

}

export default LogoLoader

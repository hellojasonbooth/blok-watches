import Component from 'gia/Component'
import gsap from "gsap"

class LogoLoader extends Component {

	constructor(element) {
		super(element)

		this.ref = {
			logoAnimation: null,
			logoStatic: null
		}

		this.jsonPath = 'https://raw.githubusercontent.com/hellojasonbooth/blok-watches/main/dist/data/data.json?token=AKDZQ2ZD2NIBRLALDF2WNSTBG6VY6'


		this.lottieAnimation

		this.body = document.querySelector('body')

		this.blueImgs = document.querySelector('.graphik-blue')
		this.whiteImgs = document.querySelector('.graphik-white')
		this.brownImgs = document.querySelector('.graphik-brown')

		this.blueFrags = this.ref.logoStatic.querySelectorAll('.graphik-blue div')
		this.whiteFrags = this.ref.logoStatic.querySelectorAll('.graphik-white div')
		this.brownFrags = this.ref.logoStatic.querySelectorAll('.graphik-brown div')
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

		this.checkForTheme()

	}


	checkForTheme() {
		setTimeout(() => {

			if (this.body.classList.contains('themeOne') || this.body.classList.contains('themeFour')) {
				this.blueImgs.remove()
				this.brownImgs.remove()
				this.triggerWhite()
			} else if(this.body.classList.contains('themeTwo')) {
				this.brownImgs.remove()
				this.whiteImgs.remove()
				this.triggerBlue()
			} else if (this.body.classList.contains('themeThree')) {
				this.blueImgs.remove()
				this.whiteImgs.remove()
				this.triggerBrown()
			}

		}, 10)
	}



	triggerBlue() {
		const masterTl = gsap.timeline()
		masterTl.add(this.animateLogoStateTwo(), "+=2.8")
				.add(this.blueStateThree())
	}

	triggerWhite() {
		const masterTl = gsap.timeline()
		masterTl.add(this.animateLogoStateTwo(), "+=2.8")
				.add(this.whiteStateThree())
	}

	triggerBrown() {
		const masterTl = gsap.timeline()
		masterTl.add(this.animateLogoStateTwo(), "+=2.8")
				.add(this.brownStateThree())
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

	blueStateThree() {
		const tl = gsap.timeline({
            defaults: { 
            	ease: "circ.inOut",
            	duration: 1.4,
            },
         })
		.to(this.blueFrags, {
			y: "-100vh",
			stagger: 0.1
		})
		.set(this.element, {
			display: "none"
		}) 
		return tl
	}

	whiteStateThree() {
		const tl = gsap.timeline({
            defaults: { 
            	ease: "circ.inOut",
            	duration: 1.4,
            },
         })
		.to(this.whiteFrags, {
			y: "-100vh",
			stagger: 0.1
		})
		.set(this.element, {
			display: "none"
		}) 
		return tl
	}

	brownStateThree() {
		const tl = gsap.timeline({
            defaults: { 
            	ease: "circ.inOut",
            	duration: 1.4,
            },
         })
		.to(this.brownFrags, {
			y: "-100vh",
			stagger: 0.1
		})
		.set(this.element, {
			display: "none"
		}) 
		return tl
	}

}

export default LogoLoader

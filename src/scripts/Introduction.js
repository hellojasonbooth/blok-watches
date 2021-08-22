import Component from 'gia/Component'
import gsap from "gsap"

class Introduction extends Component {

	constructor(element) {
		super(element)

		this.ref = {
			animateElement: [],
			introTitle: null,
			intro: null
		}

		this.timeOutCounter
		//this.resizeListener = this.resize.bind(this)

		//this.masks

	}

	mount() {

		setTimeout(() => {
			this.animateIntroduction()
		}, 3800)

		// setTimeout(() => {
		// 	//this.ref.intro.style.opacity = '1'
		// 	//this.splitLines(this.ref.introTitle, '<span class="mask"><span class="mask-inner">', '</span></span>')

		// 	//this.masks = document.querySelectorAll('.mask-inner')
		// }, 50)
		// add a buffer and allow content to load on the page

		// setTimeout(() => {
		// 	window.addEventListener('resize', this.resizeListener)
		// }, 2800)


	}

	// resize() {

	// 	clearTimeout(this.timeOutCounter)

	// 	this.timeOutCounter = setTimeout(() => {
	// 		// reset the title and remove the mask if window is resized
	// 		// this.splitLines(this.ref.introTitle, '', '')
	// 		if(window.innerWidth < 600) {
	// 			this.splitLines(this.ref.introTitle, '', '')
	// 			window.removeEventListener('resize', this.resizeListener)
	// 		}
	// 		//this.splitLines(this.ref.introTitle, '', '')
	// 		// remove listener from being used again
	// 	}, 500)
		
	// }

	// splitLines(container, opentag, closingtag) {
	// 	let spans = container.children
	// 	let top = 0
	// 	let tmp = ''
		
	// 	container.innerHTML = container.textContent.replace(/\S+/g, '<span>$&</span>')
	// 	  // do the loop
	// 	for (let i = 0; i < spans.length; i++) {
	// 		let rect = spans[i].getBoundingClientRect().top
	// 	  	if (top < rect) {
	// 			tmp += closingtag + opentag
	// 		}
	// 		top = rect
	// 		tmp += spans[i].textContent + ' '
	// 	}

	// 	container.innerHTML = tmp += closingtag
	// }




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

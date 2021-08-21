import Component from 'gia/Component'

class LogoLoader extends Component {

	constructor(element) {
		super(element)

		this.ref = {
			logo: null
		}

	}

	mount() {

		const animation = {
			container: this.ref.logo,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: 'js/data.json'
		  }

		  const anim = bodymovin.loadAnimation(animation)

		  anim.play()



		//this.element.addEventListener("mousemove", this.moveImages.bind(this))

	}

}

export default LogoLoader

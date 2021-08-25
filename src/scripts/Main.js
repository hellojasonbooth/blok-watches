import eventbus from 'gia/eventbus';
import Component from 'gia/Component'

class Main extends Component {

	constructor(element) {
		super(element)

		this.ref = {

		}

	}

	mount() {


		eventbus.on('mobPanelActive', this.triggerStateChange.bind(this))

	}


	triggerStateChange() {
		this.setState({
			isExpanded: !this.state.isExpanded
		})
	}

	stateChange(stateChanges) {

		if ('isExpanded' in stateChanges) {

			if (this.state.isExpanded) {
				this.activeMain() 
			} else {
				this.deactiveMain()
			}

		}

	}



	activeMain() {
		this.element.classList.add('is-active')
	}

	deactiveMain() {
		this.element.classList.remove('is-active')
	}



}

export default Main

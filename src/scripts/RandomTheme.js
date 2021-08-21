const RandomTheme = {

	init() {
		this.randTheme()
	},

	randTheme() {
		const body = document.querySelector('body')
		const rndmClass = ['themeOne', 'themeTwo', 'themeThree', 'themeFour']
		const randNum = Math.round(Math.random() * (rndmClass.length - 1))
		body.classList.add(`${rndmClass[randNum]}`)
	}

}

export default RandomTheme

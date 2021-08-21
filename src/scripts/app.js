import loadComponents from 'gia/loadComponents';

import RandomTheme from './RandomTheme'
import LogoLoader from './LogoLoader'
import Introduction from './Introduction'

const components = {
    // "BaseTheme": BaseTheme,
    "LogoLoader": LogoLoader,
    "Introduction": Introduction
}

document.addEventListener('DOMContentLoaded', () => {
	RandomTheme.init()
})

loadComponents(components);

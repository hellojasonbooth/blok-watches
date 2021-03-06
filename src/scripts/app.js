import loadComponents from 'gia/loadComponents';

import BaseTheme from './BaseTheme'
import Main from './Main'
import MobNav from './MobNav'
import RandomTheme from './RandomTheme'
import LogoLoader from './LogoLoader'
import Introduction from './Introduction'
import Header from './Header'
import Footer from './Footer'

const components = {
    "BaseTheme": BaseTheme,
    "Main": Main,
    "MobNav": MobNav,
    "LogoLoader": LogoLoader,
    "Introduction": Introduction,
    "Header": Header,
    "Footer": Footer
}

document.addEventListener('DOMContentLoaded', () => {
	RandomTheme.init()
})

loadComponents(components);

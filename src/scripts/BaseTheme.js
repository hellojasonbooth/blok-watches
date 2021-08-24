import Component from 'gia/Component';
import getComponentFromElement from 'gia/getComponentFromElement';

// Wrapper for global Javascript dependencies
// Enable/disable on per bage basis with options on body tag
class BaseTheme extends Component {

	constructor(element) {
		super(element);


		this.options = {};

		this.mediaQuery = require('../../node_modules/include-media-export/dist/include-media-1.0.2.min.js');

		global.base = getComponentFromElement(document.body);
	}	



	mount() {
		const self = this;

		// self.initScrollHandler();
		// self.initResizeHandler();

	}

	// initScrollHandler() {
		
		
	// 	var lastScrollPosition = 0,
	// 	tick = false;  // Track whether call is currently in process
		
		
	// 	window.addEventListener('scroll', function(e) {
			
	// 		lastScrollPosition = window.scrollY;
	// 		if (!tick) {
	// 			setTimeout(function () {

	// 				global.scrollEvents.forEach(function(f) {
	// 					f();
	// 				});

	// 				tick = false;
	// 			}, 160)
	// 		}
	// 		tick = true;
	// 	});  
	// }	


	// initResizeHandler() {
		
	// 	var w = document.querySelector("#width"),
	// 	h = document.querySelector("#height"),
    // c = document.querySelector("#calls"),
    // forLastExec,
    // delay = 100, // delay between calls
    // throttled = false, // are we currently throttled?
	// 	calls = 0;
				
			
	// 	// window.resize event listener
	// 	window.addEventListener('resize', function() {
	// 		// only run if we're not throttled
	// 		if (!throttled) {
	// 			// actual callback action
	// 			global.resizeEvents.forEach(function(f) {
	// 				f();
	// 			});
	// 			// we're throttled!
	// 			throttled = true;
	// 			// set a timeout to un-throttle
	// 			setTimeout(function() {
	// 				throttled = false;
	// 			}, delay); 
	// 		} 
	// 		clearTimeout(forLastExec);
			
	// 		// this is messy!
	// 		forLastExec = setTimeout(
	// 			global.resizeEvents.forEach(function (f) {
	// 				f();
	// 			}), delay);
	// 	});	
		
	// }		

	/* CSS loader for components
	uses global outputComponentCSS array that is
	defined in PHP - header.php & updated in SixBase.insert_component_css()
	*/
	// loadComponentCSS(componentName, component) {

	// 	const componentCSSFilename = 'c-' + componentName;
		
	// 	// if the compnent CSS isn't already loaded
	// 	if (!outputComponentCSS.includes(componentCSSFilename)) {
			
	// 		// update the global array of loaded CSS
	// 		outputComponentCSS.push(componentCSSFilename);

	// 		// Create new link Element
	// 		let link = document.createElement('link');
  
	// 		// set the attributes for link element 
	// 		link.rel = 'stylesheet'; 
	// 		link.type = 'text/css';
	// 		link.href = six.template_directory + '/dist/' + componentCSSFilename + '.css'; 

			
	// 		// Output the CSS link before the component HTML
	// 		component.prepend(link); 
	// 	}
	// }	
	
}

// Export ES6 module
export default BaseTheme;
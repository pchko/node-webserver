const hbs = require('hbs');

//helpers
hbs.registerHelper('getYear', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('capitalizer', (text) => {
	let words = text.split(' ');

	//console.log(words);

	words.forEach( (element, index) => {
		words[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
	});

	return words.join(' ');
});

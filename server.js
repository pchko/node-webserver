const express = require('express');
const app = express();
const hbs = require('hbs');
const helpers = require('./hbs/helpers');

//PARA HEROKU
const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public') );

//Express HBS
hbs.registerPartials( __dirname + '/views/partials' );
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
	
	res.render('home', {
		nombre: "rogelio",
	});
	
});

app.get('/about', (req, res) => {
	
	res.render('about', {
		img: "assets/img/logo.png",
	});
	
});

 
app.listen(port, () => {
	console.log(`Listen in port ${port}`);
});
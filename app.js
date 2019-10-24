//DECLARATION
var express = require('express');
var ejs = require('ejs');
var login = require('./controllers/login');
var home = require('./controllers/home');
var app = express();


//CONFIGURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use('/login', login);
app.use('/home', home);


//ROUTER
app.get('/', function(request, response){
	response.send('index page!');
});




//SERVER STARTUP
app.listen(3000, function(){
	console.log('server started at 3000...');
});
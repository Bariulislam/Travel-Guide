//DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var expSession = require('express-session');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var login = require('./controllers/login');
var registration = require('./controllers/registration');
var home = require('./controllers/home');
var user = require('./controllers/user');
var logout = require('./controllers/logout');
var homepage = require('./controllers/homepage');
//var assign_courses = require('./controllers/assign_courses');
////var student_view = require('./controllers/view_student');
//var admin_notice = require('./controllers/admin_notice');
var app = express();


//CONFIGURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}));
app.use(expSession({secret:'my top secret value', saveUninitialized:true, resave: false}));
app.use(cookieParser());
app.use(express.static(__dirname+'/public'));
app.use('/login', login);
app.use('/registration', registration);
app.use('/home', home);
 app.use('/user', user);
app.use('/logout', logout);
app.use('/homepage', homepage);
//app.use('/assigncourses', assign_courses);
//app.use('/viewstudent', student_view);
//app.use('/adminnotice', admin_notice);



//ROUTER
app.get('/', function(request, response){
	response.send('index page!');
});


//SERVER STARTUP
app.listen(3000, function(){
	console.log('server started at 3000...');
});
var express  	= require('express');
var bodyParse  	= require('body-parser');
var exSession  	= require('express-session');
var app 		= express();
var authentication = require('./controllers/authentication');
var admin = require('./controllers/admin');

app.set('view engine', 'ejs');

app.use(bodyParse.urlencoded({extended:false}));
app.use(exSession({secret:"my top secret value", saveUninitialized:true, resave:false}));
app.use(authentication);
app.use(admin);

app.get('/', function(req, res){
    res.render('authentication/login');
})

app.listen(3000, function(){
    console.log('server started at localhost:3000');
})
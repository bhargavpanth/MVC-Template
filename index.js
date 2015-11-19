var express = require('express');
var app = express();

app.set('view engine','ejs')

// default.ejs is the default view -- which is within /views/partials/
// to change it, you can re-write the default or create your own
app.get('/', function(req, res){
  res.render('default', { 
  	title : 'HOME',
  	classname : 'home',
  	users : ['A','B','C'] //Passing data
  	 });
});

app.get('/about', function(req, res){
	res.render('default', {
		title : 'ABOUT US',
		classname : 'about'
		// users : ['D','E','F']
	});
});

app.get('*', function(req, res){
	res.render('404', {
		title : '404 not found',
		classname: '404'
	});
});

app.listen(3000, function(){
	console.log('Serving in port 3000');
});
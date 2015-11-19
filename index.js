var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine','ejs')

app.get('/', routes.index);

app.get('/about', routes.about);

app.get('*', function(req, res){
	res.render('404', {
		title : '404 not found',
		classname: '404'
	});
});

app.listen(3000, function(){
	console.log('Serving in port 3000');
});
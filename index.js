var express = require('express');
var app = express();
var routes = require('./routes');

//Database - MongoDB
//var MongoClient = require('mongodb').MongoClient;

app.set('view engine','ejs')

app.get('/', routes.index);

app.get('/start', routes.start);

app.get('*', function(req, res){
	res.render('404', {
		title : '404 not found',
		classname: '404'
	});
});

app.listen(3000, function(){
	console.log('Serving in port 3000');
});
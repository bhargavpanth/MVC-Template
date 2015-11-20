// default.ejs is the default view -- which is within /views/partials/
// to change it, you can re-write the default or create your own
exports.index = function(req, res){
  res.render('default', { 
  	title : 'HOME',
  	classname : 'home',
  	paragraph: 'Go to /start to get started with the MCQ'
  	 });
}

exports.start = function(req, res){
	res.render('default', {
		title : 'START',
		classname : 'start',
		question : 'What is 1 + 1 ?',
		option: ['1','2','3','4']
	});
}
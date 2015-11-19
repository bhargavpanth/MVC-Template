// default.ejs is the default view -- which is within /views/partials/
// to change it, you can re-write the default or create your own
exports.index = function(req, res){
  res.render('default', { 
  	title : 'HOME',
  	classname : 'home',
  	users : ['A','B','C'] //Passing data
  	 });
}

exports.about = function(req, res){
	res.render('default', {
		title : 'ABOUT US',
		classname : 'about'
		// users : ['D','E','F']
	});
}
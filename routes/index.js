var brand = 'IS 217';

exports.index = function(req, res){
 	res.render('index', {title: 'Data Requests'});
 }
exports.home = function(req, res){
  res.render('index', { title: 'Home', id: 'home', brand: brand })
};

exports.about = function(req, res){
  res.render('about', { title: 'About', id: 'about', brand: brand })
};

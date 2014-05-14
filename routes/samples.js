//Get Samples 
var brand = 'IS 217';

var mongoose = require('mongoose')
 , Request = mongoose.model('Request');


 exports.list = function(req, res){
 	Request.find({}, function(err, requests){
 		res.render('requests', {
 			title: 'Collection Samples',
 		});
 	});
 }

 exports.jsonlist = function(req, res) {
  Request.find({}, function(err, doc) {
    res.send(doc);
    	title: 'Collections'  
  });
}


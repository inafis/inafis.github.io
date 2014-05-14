var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var csv = require('csv');
var fs = require('fs');

var records = [];

var routes = require('./routes');
var users = require('./routes/user');

var app = express();

//Load the Database with the Google User Requests
/*
csv(records)
   .from.stream(fs.createReadStream(__dirname + '/google-user-data-requests.csv'), {
   columns: true
})
   .on('record', function (row, index) {
   records.push(row);

   //console.log(row);
})
   .on('end', function (count) {
   var MongoClient = require('mongodb').MongoClient;
   // Connect to the db
   MongoClient.connect("mongodb://localhost:27017/myGoogleDataDb", function (err, db) {
      var collection = db.collection('GoogleData')
      collection.insert(records, function (err, doc) {
         console.log(doc);
      });
   });
   console.log('Number of lines: ' + count);
}); */

//Mongoose Connection
mongoose.connect('mongodb://localhost:27017/myGoogleDataDb');
require('./models/gDataRequest');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);


var requests = require('./routes/requests');
var chart = require('./routes/chart');

app.get('/', routes.index);
app.get('/users', users.list);
app.get('/api/requests', requests.jsonlist);
app.get('/chart09', chart.charts09)
app.get('/chart10', chart.charts10)
app.get('/chart11', chart.charts11)
app.get('/chart12', chart.charts12)
app.get('/chart13', chart.charts13)
app.get('/about', routes.about);
//app.get('/requests', requests.list);
//app.post('/requests', requests.sendData);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

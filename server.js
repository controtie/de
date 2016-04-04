var express = require('express');
//var routes  = require('./routes');
var http    = require('http');
var path    = require('path');
var parser = require('body-parser');

var app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

app.set('port', process.env.PORT || 3000);
//   app.set('views', __dirname + '/views');
//   app.set('view engine', 'jade');
//   app.use(express.favicon());
//   app.use(express.logger('dev'));
//   app.use(express.bodyParser());
//   app.use(express.methodOverride());
//   app.use(app.router);

// app.configure('development', function(){
//   app.use(express.errorHandler());
// });
app.get('/', function (req, res) {
  res.redirect('index.html');
});

app.use(express.static(path.join(__dirname, 'src')));

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
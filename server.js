var express = require('express');
var http    = require('http');
var path    = require('path');
var parser = require('body-parser');
var mongoose = require('mongoose');

//Mongoose controller models.
var userCtrl = require('./server/userCtrl.js');
var threadCtrl = require('./server/threadCtrl.js');

var app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost/thotwell');

app.set('port', process.env.PORT || 3000);
app.get('/', function (req, res) {
  res.redirect('index.html');
});

app.get('/users', userCtrl.getUsers);

app.get('/openThreads', threadCtrl.getOpenThreads);
app.get('/closedThreads', threadCtrl.getClosedThreads);
//change these to POST later
app.post('/addThread', threadCtrl.addThread);
app.post('/moveThread', threadCtrl.moveThread);

app.use(express.static(path.join(__dirname, 'client')));

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
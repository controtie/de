var express = require('express');
var http    = require('http');
var path    = require('path');
var parser = require('body-parser');
var mongoose = require('mongoose');
var bitcoin = require('bitcoinjs-lib');

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
app.get('/genAddress', function (req, res) {
  var keyPair = bitcoin.ECPair.makeRandom();
  var keys = {
    priv_key: keyPair.toWIF(),
    pub_key: keyPair.getAddress(),
  };
  console.log(keys);
  res.send(JSON.stringify(keys));
});
app.post('/addThread', threadCtrl.addThread);
app.post('/moveThread', threadCtrl.moveThread);
app.post('/addComment', threadCtrl.addComment);

app.use(express.static(path.join(__dirname, 'client')));

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});



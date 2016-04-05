//This file should handle actions with database Thread collection.
var Q    = require('q');
var AllThreads = require('./threadModel.js');
var Thread = AllThreads.Thread;
var CThread = AllThreads.CThread;

// Promisify 'Open' Mongoose methods
var findOneThread = Q.nbind(Thread.findOne, Thread);
var findOThreads = Q.nbind(Thread.find, Thread);
var createOThread = Q.nbind(Thread.create, Thread);
var removeOThread = Q.nbind(Thread.findOneAndRemove, Thread);

// Promisify 'Closed' Mongoose methods
var findOneCThread = Q.nbind(CThread.findOne, CThread);
var findCThreads = Q.nbind(CThread.find, CThread);
var createCThread = Q.nbind(CThread.create, CThread);

exports.getOpenThread = function(req, res, next) {
  //pass in search parameters later on.
  findOneThread({})
    .then(function (thread) {
      res.send(thread);
    })
    .fail(function (err) {
      console.log('error!', err);
    });
};
exports.getOpenThreads = function(req, res, next) {
  //return all threads from a collection
  findOThreads({})
    .then(function (thread) {
      res.send(thread);
    })
    .fail(function (err) {
      console.log('error!', err);
    });
};
exports.getClosedThreads = function(req, res, next) {
  //return all threads from a collection
  findCThreads({})
    .then(function (thread) {
      res.send(thread);
    })
    .fail(function (err) {
      console.log('error!', err);
    });
};

exports.addThread = function (req, res, next) {
  console.log('receiving request to create thread');
  createOThread({
    username: req.body.username,
    subject: req.body.subject,
    body: req.body.body,
    bounty: req.body.bounty,
    comments: []
  }).then(function () {
    console.log(req.body);
    res.send('addThread received')
  });
}
    //pub_key: req.body.pub_key,
    //priv_key: req.body.priv_key,

//move thread from threads to cthreads
exports.moveThread = function (req, res, next) {
  createCThread({
    username: req.body.username,
    pub_key: req.body.pub_key,
    priv_key: req.body.priv_key,
    subject: req.body.subject,
    body: req.body,
    bounty: req.body.bounty,
    comments: req.body.comments
  }).then(function() {
    console.log(req.body._id);
  });
  removeOThread({_id: req.body._id})
    .then(function() {
    res.send('move thread received');  
  });
}




// var testObject = {
//   username: 'ayyy',
//   pub_key: 'au24232ueou',
//   priv_key: 'p214328pg4th43',
//   subject: 'how to douglas?',
//   body: 'plis teach me how to douglas',
//   bounty: 0.0015,
//   comments: {
//     username: 'lmaooo',
//     text: 'nonononono'
//   }
// }
//   CThread.create(testObject, function(err, res) {
//     console.log('created!');
//   });

  // Thread.create(testObject, function(err, res) {
  //   if (err) {
  //     console.log('error!!!!', err);
  //   } 
  //   console.log('Thread created!');
  // });

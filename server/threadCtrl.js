//This file should handle actions with database Thread collection.
var Q    = require('q');
var Thread = require('./threadModel.js');

// Promisify a few mongoose methods with the `q` promise library
var findOneThread = Q.nbind(Thread.findOne, Thread);
var findThreads = Q.nbind(Thread.find, Thread);
var createThread = Q.nbind(Thread.create, Thread);

exports.getOneThread = function(req, res, next) {
  //pass in search parameters later on.
  findOneThread({})
    .then(function (thread) {
      res.send(thread);
    })
    .fail(function (err) {
      console.log('error!', err);
    });
};
exports.getThreads = function(req, res, next) {
  //return all threads from a collection
  findThreads({})
    .then(function (thread) {
      res.send(thread);
    })
    .fail(function (err) {
      console.log('error!', err);
    });
};

  // Thread.create(testObject, function(err, res) {
  //   if (err) {
  //     console.log('error!!!!', err);
  //   } 
  //   console.log('Thread created!');
  // });

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